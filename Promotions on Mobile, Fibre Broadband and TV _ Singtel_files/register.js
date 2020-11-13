(function (window, document, require, RactiveFramework) {
    'use strict';

    var metadata = window._uxf_metadata;

    metadata.forEach(function(componentMetadata) {
        //var adaptor = new RactiveAdaptor(componentMetadata),
        var Component = RactiveFramework.components[componentMetadata.id] || RactiveFramework;

        RactiveFramework.components[componentMetadata.id] = Component.extend({
            //adapt: [adaptor],
            metadata: componentMetadata,
            oninit: function() {
                var self = this;
                self._super();
                //self.metadata.library.unshift('underscore');
                require(self.metadata.library, function(library) { 
                    self.hub = library.hub;
                    var uxfTopics = self.metadata.topics;
                    var prop, keypath;
                    for (prop in uxfTopics) {
                        if (uxfTopics.hasOwnProperty(prop)) {                            
                            //Set the event handler for uxf data change.
                            var uxfTopicName = uxfTopics[prop].uxfName;

                            //Case 1.
                            //Listen to UXF data change event and then set the data to Ractive widget.
                            self.hub.subscribe(uxfTopicName, {
                                context : {
                                    ractiveProp : prop,
                                    ractiveWidget : self
                                },
                                handler : function (event) {
                                    //set the changed data on ractive widget
                                    var context = this;
                                    var eventAction = event.action;
                                    if(self.uxfDataChangeOn) {
                                        //Check if already uxf data change is in progress.
                                        //In that case dont do changes in ractive data
                                        return;
                                    }
                                    self.ractiveDataChangeOn = true;
                                    if(eventAction === '$change' || eventAction === '$subscribe') {
                                        //Data in the UXF VM is changed.
                                        //So set this data in ractive Widget
                                        var changedAttributes = eventAction === '$change' ? event.changedAttributes : event.data;
                                        for(var changedUxfProp in changedAttributes) {
                                            if(changedAttributes.hasOwnProperty(changedUxfProp)) {
                                                var keypath = context.ractiveProp + '.' + changedUxfProp;
                                                var data = changedAttributes[changedUxfProp];
                                                self.set(keypath, data);
                                            }
                                        }
                                    } else {
                                        //UXF has triggered some action.
                                        //So call ractive event in this case.
                                        //TODO Need to check if we want to follow this approach.
                                        console.log('UXF action is triggered');
                                        console.log(eventAction);
                                    }
                                    self.ractiveDataChangeOn = false;
                                }
                            });
                            

                            var ractiveKeypath = prop + '.*';
                            var uxfContext = {
                                uxfTopicName : uxfTopicName,
                                ractiveKeypath : prop
                            }

                            //Case 2.
                            //Listen to the ractive data change event and publish the data to UXF.
                            if (!self.hub.isTopicReadOnly(uxfTopicName)) {
                                //Publish data to topic only if topic is not readonly.
                                self.observe(ractiveKeypath, function (newVal, oldVal, keyPath) {
                                    //If ractive data is changed then set the data on UXF if it is not in sync
                                    var context = this;
                                    if(self.ractiveDataChangeOn) {
                                        return;
                                    }
                                    self.uxfDataChangeOn = true;
                                    //set the data on uxf topic.
                                    //create the clone of data everytime so that data will be updated in MCSS.
                                    var data = JSON.parse(JSON.stringify(self.get(context.ractiveKeypath)));
                                    //Mark the uxfDataChangeDone.
                                    self.hub.publish(context.uxfTopicName, data);
                                    self.uxfDataChangeOn = false;
                                }.bind(uxfContext));
                            }

                            //Case 3.
                            //Ractive widget fires the event. Call UXF actions from ractive widget.
                            if (!self.hub.isTopicReadOnly(uxfTopicName)) {
                                self.on(ractiveKeypath, function (event) {
                                    var context = this;
                                    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
                                    // console.log(event);
                                    // console.log(context);
                                    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
                                    var uxfActionName = event.name.substr(context.ractiveKeypath.length + 1);
                                    var uxfActionData = event.data || {};
                                    self.hub.publish(context.uxfTopicName, uxfActionData, uxfActionName);
                                }.bind(uxfContext));

                                //Check if there are any default events that we should publish at initilize.
                                var callActions = uxfTopics[prop].callActions;
                                if (callActions) {
                                    for (var action in callActions) {
                                        if (callActions.hasOwnProperty(action)) {
                                            var actionData = callActions[action];
                                            self.hub.publish(uxfContext.uxfTopicName, actionData, action);
                                        }
                                    }
                                }

                                
                            }
                        }
                    }
                });
                // this.set('behaviouralParams', this.ractiveData.behaviouralParams);
                // this.set('content', this.ractiveData.content);
                //this.set(this.ractiveData);
            },


            onrender: function () {
                this._super();
                //Removing this funtionality as we do not have this requriement in Singtel.
                // if (!this.template || this.template.length === 0) {
                //     PrivateUtil.createWidget.call(this, componentMetadata);
                // } else {
                //     PrivateUtil.loadWidgetViewModel.call(this, componentMetadata);
                // }

                var data;
                if (componentMetadata.topics) {
                    for (var prop in componentMetadata.topics) {
                        if (componentMetadata.topics.hasOwnProperty(prop)) {
                            data = this.get(prop);
                            if (!data) {
                                // set all data properties that are topics and no wrapper was created for them,
                                // so they will all get wrapped to work with uxf.
                                this.set(prop, {});
                            }
                        }
                    }
                }
            },

            onteardown: function () {
                this._super();
                this._uxf_widget && this._uxf_widget.destroy();
                this._uxf_widget_vm && this._uxf_widget_vm.destroy();
            }
        });
    });
})(window, document, require, RactiveFramework = window.RactiveFramework || Ractive);

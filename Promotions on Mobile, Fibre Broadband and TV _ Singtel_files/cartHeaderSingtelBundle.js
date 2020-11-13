define(['cartHeaderSingtelBundle'], function () { return {
name: 'cartHeaderSingtel',
templates: {
	cartHeaderSingtelStateOneView: {"v":3,"t":[{"t":7,"e":"div"}]}
},
widget: define('cartHeaderSingtel', [
	'lodash-compat',
	'BaseWidget',
	'ractive',
	'ConfigStrings'
], function (_, BaseWidget, Ractive, ConfigStrings) {

	var Widget = function (options) {
		var self = this;

		self.ractive = new BaseWidget(options);
		self.ractive.observe('cartHeaderTopic.cartItemsVmStatus', function (value) {
			switch (value) {
				case 'successful':
					Ractive.defaults.fire('headerCartItems', self.ractive.get('cartHeaderTopic.cartItems'));
					break;
											}
		});

		self.ractive.observe('gaTopicData.gtmViewStatus', function (value) {
			self.validateAndFireGTMStatus(value);
		});

		self.ractive.observe('dmpCommerceTopic.gtmViewStatus', function (value) {
			self.validateAndFireGTMStatus(value);
		});

	};

	Widget.prototype = {

		validateAndFireGTMStatus: function (value) {
			var self = this;
			if (value && value === 'dataObjectUpdated') {
				self.ractive.set('windowDataObject', window.dataObject);
				self.ractive.fire(value, {
					name: value
				});
			}
		}
	};

	return {

		initRactiveWidget: function (options) {
			return new Widget(options);
		}
	};

})
}});
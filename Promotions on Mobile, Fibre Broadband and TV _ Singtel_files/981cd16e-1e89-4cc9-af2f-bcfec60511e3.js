// Copyright 2006-2020 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "latest-WR110.js", "pcc": "981cd16e-1e89-4cc9-af2f-bcfec60511e3.js?DeploymentConfigName=Release_20201014&Version=1"};
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["kGJLyQGyiOWHFQhJsVBkmyVuahuLa","NVTVhZN","oBuNyFkLHsZhZN","oBuNyFNVDoLyLhJVT","XBHsayPJZhJVT","ZPuNaLshJVT","ZPuNaLsJHyLZhZFkGhXBHsayPJZhJVT","ZaLwBwAkLchZKADLiZPaLAHwAZVBaoLHZaAGhHTHgVuHDZhJVT"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
	WR: "wr-eu.contentsquare.net/ctn_v2/",
	ImageFlag: "wr-eu.contentsquare.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
	Method: "ImpactRecorder"
}
ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var r in T){var e=T[r];e.collect(t)&&e.errors.push({message:n,url:t,lineno:o})}return!!S&&S(n,t,o)}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function r(n){++n.sampled>n.repeats?g(n.name):e(n)}function e(n){var t=n.reporter()||{},o=n.errors.splice(0),r=n.level,e=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":r,errors:encodeURIComponent(JSON.stringify(o))};e&&r!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(e+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+I[o]+"="+t[o];return n}function a(n,o,r){var e=L.sendBeacon,i=function(n){n.errors=r.concat(n.errors)};if(t(e))e.call(L,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function f(n){T[n]&&(T[n].starting=!0)}function s(n,o,r){var e=window.ClickTaleMonitor;e&&(I.monitorState=40,I.isMonitoring=42,t(e.getPid)&&v(M,e.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(e.getState)&&e.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(e.isMonitoring)&&e.isMonitoring()}},o||5e3,r||1))}function m(){g(M)}function v(t,o,r,e,i,a,l){T[t]=T[t]||new p(t,o,r,e,i,a,l),y||(S=window.onerror,window.onerror=n,y=!0)}function g(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;y=!1}function p(n,t,o,e,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(e)},c.sampler=setInterval(function(){r(c)},a)}function h(n,t,o){var r=n&&n.name,e=T[r];if(e){var i=e[t];"function"==typeof i&&i.apply(this,o)}}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){f(n)}}}var y,S,T={},L=navigator,k="info",M="monitor",I={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(M,s,m),invoke:h}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2020 ClickTale Ltd., US Patent Pending
// PID: 1071
// WR destination: www56
// WR version: 17.0
// Recording ratio: 1

(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();



	ClickTaleSettings.Integration = ClickTaleSettings.Integration || {};
	ClickTaleSettings.Integration.ProjectType = 3;

window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	



// Start of user-defined pre WR code (PreLoad)
//PTC Code Version 10.1

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = function () {
    return "deflate";
};
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(function () {
    var Tr = ClickTaleSettings.Transport;
    Tr.Legacy = false;
    Tr.MaxConcurrentRequests = 1;
    Tr.BigBuffer = 120000;
})();
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone['__symbol__'] === 'function') {
    ClickTaleSettings.PTC.restoreZonedXHR = function (xhr) {
        if (xhr) {
            var prot = Object.getPrototypeOf(xhr);
            while (prot) {
                for (var propName in prot) {
                    var replacement;
                    if (replacement = prot[Zone['__symbol__'](propName)]) {
                        xhr[propName] = replacement;
                    }

                }
                prot = Object.getPrototypeOf(prot);
            }
        }

    }

    window.CEC = window.CEC || {};
    CEC.onInit = function () {
        CEC.onXhrCreated = function (xhr) {
            ClickTaleSettings.PTC.restoreZonedXHR(xhr);
        }
    }
    window.ClickTaleOnXHRCreated = function (xhr) {
        ClickTaleSettings.PTC.restoreZonedXHR(xhr);
    }
}
if (window.ClickTaleMonitor) {
    var settings = window.ClickTaleMonitor.Settings.get();
    settings.configure({
        identification: {
            cookie: {
                useBase64: true
            }
        }
    });
}
if (document.readyState === 'complete') {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;
ClickTaleSettings.PTC.Integrations = window.ClickTaleSettings.PTC.Integrations || [];
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;



ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.ED) {
        ClickTaleSettings.Compression.Async = false;
    }
    if (v.m) {
        ClickTaleSettings.PTC.IsMobile = true;
    }
    if (!(v.t == v.IE && v.v == 10)) {
        ClickTaleSettings.PTC.EnableChangeMonitor = true;
        ClickTaleSettings.PTC.ConfigChangeMonitor();
    }
    var fv = f(v);
    ClickTaleSettings.PTC.okToRunPCC = fv;
    return fv;
};

ClickTaleSettings.PTC.startsWith = function (strToTest, str) {
    return strToTest.lastIndexOf(str, 0) === 0;
};

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

;
(function () {
    var selectorForBoth = ".orderConfirmationSingtelWidget p > a[id],.paymentHistoryWidget a.paymentDetailsLink,[id*='CaseManagementWidget'] [class*='styles__InputRow'] input,.ctHidden,div.number-box,div.ux-summarytitle-row div.body-light,div.ux-summarydata-row div.left.row-data,div.subsection-header,div.select-account-wrapper p.body-copy-text,div.ux-singtel-address>div>div,div.customer-info>div.body,div.ux-loggedin-header h2.main-header,div.ux-account-header div.v-small-top.v-normal-bottom,li.service-accordion div.body-light-account,select#selectAccountDropdown option,div#changeMobileShareModal div.small-6.columns,div.dataSettingModal div.small-9.columns,div.ux-custom-select div.flex-item>div,div.ux-custom-option,p.v-small-top.body-light,div.section-header.v-medium-bottom,div.account div.body-light,span.select-value,div.v-large-bottom.collapse>div.medium-4.columns,div.postpaidNomination-modal div.small-6.text-right.columns,div.data-protection-content div.double-indentation,div.postpaidNominationThankYou-modal div.small-6.text-right.columns,div.personal-info-modal div.value,div.ux-address-form div.inline-form,div.select-vouchers-modal h2.product-title,div.address-line1,div.address-line2,div.address-line3,div.address-line4,select#selectAccountDropdown option,span.select-value,li.service-accordion div.body-light-account,div.change-bill-preference-modal div.section-details>div,div.subsection-title span.body-light,div.change-bill-preference-modal div.columns,div.panel-header h3.section-header,div.service-label div.body-light,div.tooltiptext div.columns,div.usage-details-details-modal div.event-sumary-section>div,div.ux-pay-bill h3~div,div.payBillsInfoWidget h2.section-header,div.payBillsInfoWidget h2.subsection-header~p,div.account-container li,div.account-container h4.section-header,div.activity div.status,div.service-box div,div.section-details div.body,div.flex-item>div.section-header>span,div.change-plan-summary-modal div.columns,div.phone-box>li,div.flex-item h2.main-header~div,div.column-control-mobile div.row.collapse div.medium-4.columns,div.ux-inbox-card.ok div.body-text,table.usage-details-table td.body-light,div.bookStoreAppointmentWidget div.section-header,div.activity-content a.details-link,div.activity-content div.panel.event *,div.phone-box label,div#changeOwnershipSTART div.columns,div.requestPaperBillDetailsModal div.columns,div.section-details div.body,div.flex-item>div.section-header>span,div.change-plan-summary-modal div.small-4,div#amountValidationModal div.ux-replace-text,div.column-control-mobile div.section-header~div,div.tooltiptext div.columns>div,#unbilledEventsModal .modal div.columns>div,.ux-change-bill-preference.v-normal-top .row.v-medium-top.flex-container.flex-container-start>.medium-offset-1.small-9.medium-7.show-for-medium-up.flex-item.columns>div,#thankYouModal .modal .row .small-6.text-right.columns,.select-account-wrapper div.section-header,.select-account-wrapper label> p,label[for='installation-contact-address'] div,#alertHistoryModal,#alertHistoryModal .row.collapse.v-normal-top .small-12.columns,#lostPhoneConfirmationModal .modal-content .row >.small-4.text-right.columns,.ux-account-header>.text-center>.columns>div,.subsection-title>.show-for-small-only,.show-for-small-only.text-center .section-header>div,h3.section-header.v-medium-bottom,h3[class*='ServiceListItem'],#confirmAddAddonModal .scrollable-content .text-right,[class *= 'styles__Content-sc'] *,[class *='scrollable-section'] *,.shopping-cart-panel .name>.body-light,.delivery-address-column>div, .selectCreditCardConfirmedModal .section-details .text-right div, .ux-existing-card-singtel .section-header, .removePaymeansConfirmationModal .ux-replace-text, .changeOwnershipWidget .text-right, #transfer_Ownership_Process .text-right, #transfer_Ownership_Confirm .text-right,div.ux-existing-card-singtel h3,div.removePaymeansConfirmationModal div.ux-replace-text";
    selectorForBoth += ",div[class*='delivery-address'] > div, div.name > div.category ~ div.body-light, div#roiInfoModal div.modal-content div.row>div.small-12:only-of-type";
    selectorForBoth += ',#___gatsby div[role="button"]';
    selectorForBoth += ',.main-header, .v-large-top>div:nth-child(2)>div:nth-child(2), #selectCreditCardConfirmedModal>div.modal.light-theme.selectCreditCardConfirmedModal>div>div.section-details>div:nth-child(3)>div.small-8.text-right.columns, #selectCreditCardConfirmedModal .v-small';
    selectorForBoth += ',.modal-content>div:nth-child(5)>div:nth-child(2)';
    selectorForBoth += ',div.row.bill-summary-sticky.v-medium-top > div div label, div.v-normal-bottom-mobile>div:nth-child(2), div.left.service-label>div.body-light';
    selectorForBoth += ',#gatsby-focus-wrapper>div>div>div:nth-child(3)>div>div>h4, #gatsby-focus-wrapper>div>div>div>div:nth-child(2)>div>div>span,[data-testid*="enquiry-card"] > p,[id*="CaseManagementWidget"] div[class*="styles__ColumnNoTopPaddingMargin"] p[class*="Typography__BodySecondary"]';
    selectorForBoth += ',div.tabs-content table>tbody>tr>td:nth-of-type(2):not(.subsection-header),div.tabs-content table>tbody>tr>td:nth-of-type(2):not(.subsection-header)>a,div.ux-pay-bill h3.section-header,.ux-rrp-personal-information .body, .ux-select-pickup-location .v-normal.columns, .ux-select-pickup-location .v-normal.columns *, .location-list label *, .mapStraction-Container *';
    selectorForBoth += ',#confirmModal div div.section-details.body-light > div > div > h3, #confirmModal div div.section-details.body-light div div div, .ux-replace-text p>b';
    selectorForBoth += ',#successModal > div.modal.light-theme.successModal > div > div:nth-child(3) > div:nth-child(1) > *';
    selectorForBoth += ",div[class*='SummaryItem'], div[class*='SummaryItem'] p, [class*='MessageWidgetContent'] b,[class*='StyledContentWrapper']";
    // /**
    //  *
    //  * @param {!string} value - attribute value || textContent
    //  * @param {!Node} node
    //  * @param {!string} rule - css selector
    //  * @param {!number} type - 0 - text, 1 - attribute
    //  * @returns {!string}
    //  */
    // function transform(value, node, rule, type) {
    //     var reg = /\w|[^\x00-\x7F]/g;
    //     return value.replace(reg, "-");
    // }

    ClickTaleSettings.DOM.PII = {
        Text: [selectorForBoth],
        Attributes: [{
            rule: selectorForBoth,
            attr: 'value'
        }] //,
        //Transform: transform
    };

    /**
     *
     * @param {!CSSStyleSheet} adoptedStyleSheets
     */
    function getSerializedNode(adoptedStyleSheets) {
        var textArray = [];
        adoptedStyleSheets.forEach(function (sheet) {
            var rules = /** @type{!CSSRuleList} */ (sheet.cssRules);
            for (var i = 0; i < rules.length; i++) {
                var rule = rules[i];
                if (rule && rule.cssText) {
                    textArray.push(rule.cssText);
                }
            }
        });
        if (textArray.length) {
            return {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-addoptedCSS": "true"
                },
                childNodes: [{
                    "nodeType": 3,
                    "textContent": textArray.join('\r\n')
                }]
            }
        }
        return null;
    }

    /**
     *
     * @param {!(DocumentOrShadowRoot|Element)} root
     */
    function addSerializedNode(root, serializeAPI) {
        var serializeNode, parentNode = root,
            adoptedStyleSheets;
        switch (root.nodeType) {
            case 11:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                }
                break;
            case 1:
                if (typeof root.getRootNode === 'function') {
                    root = root.getRootNode();
                    addSerializedNode(root, serializeAPI);
                }
                break;
            case 9:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                    parentNode = document.head || document.documentElement;
                }
                break;
        }
        if (serializeNode && parentNode) {
            serializeAPI.addChild(parentNode, null, serializeNode);
        }
    }

    ClickTaleSettings.DOM.Serializer = ClickTaleSettings.DOM.Serializer || {};

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = function (serializeAPI) {
        var allObservableRoots;
        if (
            'adoptedStyleSheets' in Document.prototype &&
            window.ClickTaleGlobal && ClickTaleGlobal.symbols &&
            ClickTaleGlobal.symbols.rootsManager &&
            typeof ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots === 'function' &&
            Array.isArray(allObservableRoots = /** @type{!Array.<DocumentOrShadowRoot|Element>} */ (ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots()))
        ) {
            allObservableRoots.forEach(function (root) {
                addSerializedNode(root, serializeAPI);
            });
        }

        var dataStyledComponents = document.querySelectorAll('[data-styled]');
        if (!!dataStyledComponents) {
            var cssRulesString = '';
            Array.prototype.forEach.call(dataStyledComponents, function (el, ind) {
                if (!!el && el.sheet && (el.sheet.rules || el.sheet.cssRules)) {
                    var cssRulesObj = !!el.sheet.rules ? el.sheet.rules : el.sheet.cssRules;
                    for (var i in cssRulesObj) {
                        if (cssRulesObj[i]['cssText']) {
                            cssRulesString += cssRulesObj[i]['cssText'] + ' ';
                        }
                    }
                }
            });
            serializeAPI.addChild(document.head, null, {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-styled": ""
                },
                childNodes: [{
                    "nodeType": 3,
                    "textContent": cssRulesString
                }]
            });
        }
    }


    var locationRules = [{
            selector: '.modal-content div.scrollable-section',
            Attributes: false,
            Text: true,
            location: {
                prop: 'pathname',
                search: /(singtel\.com\/personal\/promotions)/g
            }
        },
        { //SUP-1402
            selector: 'select[name]>option',
            Attributes: ['value'],
            Text: true,
            location: {
                prop: 'pathname',
                search: /personal\/my\-account\/manage\-accounts\/multi\-line\-nomination/g
            }
        },
        { //SUP-1402
            selector: 'div[id*=\"PromotionsWidget\"] div > p',
            Attributes: false,
            Text: true,
            location: {
                prop: 'pathname',
                search: /personal\/promotions/g
            }
        },
        { //SUP-1402
            selector: 'div.relocate-service-details',
            Attributes: false,
            Text: true,
            location: {
                prop: 'pathname',
                search: /personal\/my\-account\/manage\-accounts\/relocate-services/g
            }
        },

        {
            selector: '#MessageWidget0 > div > p > p:nth-child(2) > b, #BuyFlowWidget0 > div > div:nth-child(1) > div > div, #BuyFlowWidget0 > div > div:nth-child(3) > div > p, #BuyFlowWidget0 > div > div:nth-child(4) > div',
            Attributes: false,
            Text: true,
        }
    ];


    locationRules.forEach(function (rule) {
        if (rule.location) {
            var prop = rule.location.prop;
            var search = rule.location.search;
            if (search.test(location[prop])) {
                var Attributes = rule.Attributes;
                var selector = rule.selector;
                var Text = rule.Text;
                var PII = ClickTaleSettings.DOM.PII;
                if (Text) {
                    PII.Text.push(selector);
                }
                if (Array.isArray(Attributes)) {
                    Attributes.forEach(function (attr) {
                        PII.Attributes.push({
                            rule: selector,
                            attr: attr
                        });
                    });
                }
            }
        }
    });
})();



;
(function () {
    if (typeof window.ClickTalePIISelector === 'string' && ClickTalePIISelector != '') {
        try {
            var domNodes = document.querySelector(ClickTalePIISelector);
            var PII = ClickTaleSettings.DOM.PII;
            PII.Text.push(ClickTalePIISelector);
            PII.Attributes.push({
                rule: ClickTalePIISelector,
                attr: "value"
            });
        } catch (err) {
            if (typeof ClickTaleNote === 'function') {
                ClickTaleNote('Bad PII selector: ' + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
})();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    subscriberId: '233732',
    pid: '1071',
    storageUrl: 'https://s3.amazonaws.com/nv-p1-s3-assets-01/',
    prefixSpecialCharacters: false,
    getPrefixUrl: function () {
        return this.storageUrl + this.subscriberId + '/' + this.pid;
    },
    getFullURL: function (type, url) {
        var AMUrl = '';
        if (url) {
            switch (type) {
                case 'css':
                    AMUrl = this.getPrefixUrl() + '/CSS/' + url.replace(/:\/\//g, "/").replace(/%20/g, " ");
                    if (this.prefixSpecialCharacters && this.prefixSpecialCharacters.test(AMUrl)) {
                        AMUrl = AMUrl.replace(/\?/g, "%253F").replace(/\&/g, "%26").replace(/\=/g, "%3D");
                    } else {
                        AMUrl = AMUrl.replace(/\?.*/g, "");
                    }
                    break;
                case 'image':
                    AMUrl = this.getPrefixUrl() + '/IMAGE/' + url.replace(/:\/\//g, "/").replace(/%20/g, " ");
                    break;
            }

        }
        return !!AMUrl ? AMUrl : false;
    },
    init: function () {
        if (this.isActive && this.pid && this.subscriberId) {
            var transform = ClickTaleSettings.DOM.Transform = ClickTaleSettings.DOM.Transform || [];
            transform.push({
                rule: 'link[href][rel*="stylesheet"]',
                attr: "href",
                transform: function (value, node) {
                    if (value.indexOf('fonts.googleapis.com') == -1) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL('css', node.href);
                    }
                    return value;
                }
            });
            if (this.isNeedForImg) {
                transform.push({
                    rule: 'img[src]',
                    attr: "src",
                    transform: function (value, node) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL('img', node.src);
                    }
                });
            }
        }
    }
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = ['meta[content*=charset],meta[charset]'];

    ClickTaleSettings.ChangeMonitor = {
        Enable: ClickTaleSettings.PTC.EnableChangeMonitor,
        // Roots: [document.body],
        Exclude: {
            ChildNodes: [],
            Attributes: []
        }

    }

    var exclude = ClickTaleSettings.ChangeMonitor.Exclude;
    if (excludeBothArray.length > 0) {
        Array.prototype.push.apply(exclude.ChildNodes, excludeBothArray);
        Array.prototype.push.apply(exclude.Attributes, excludeBothArray);
    }

    function insertIntoBoth(selector) {
        exclude.ChildNodes.push(selector);
        exclude.Attributes.push(selector);
    }

    // if (document.location.pathname === '/') {
    //     insertIntoBoth("selector");
    // }

    if (typeof window.ClickTaleCMSelector === 'string' && window.ClickTaleCMSelector != '') {
        try {
            var domNodes = document.querySelector(ClickTaleCMSelector);
            insertIntoBoth(ClickTaleCMSelector);
        } catch (err) {
            if (typeof ClickTaleNote === 'function') {
                ClickTaleNote('Bad CM selector: ' + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
};

ClickTaleSettings.PTC.doOnlyWhen = function (toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 100;
    if (typeof times == "undefined") times = 10;
    if (--times < 0) {
        if (typeof failHandler === 'function') {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function () {
        ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};

//Start CAP Integrations
(function () {

    /*
     *Name: Qualtrics CAP Integration
     *Version: 1.10
     *Required Shared Components: Self Invoking function, readCookie, topDom
     */

    var topDom = (function () {
        var i = 0,
            domain = document.domain,
            p = domain.split("."),
            s = "_gd" + (new Date()).getTime();
        while (i < (p.length - 1) && document.cookie.indexOf(s + "=" + s) == -1) {
            domain = p.slice(-1 - (++i)).join(".");
            document.cookie = s + "=" + s + ";domain=" + domain + ";SameSite=None;Secure";
        }
        document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
        return domain;
    })();

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return "";
    };

    if (document.location.host.indexOf("qualtrics.com") > -1) {
        window.ClickTaleSettings.PTC.RecordSurvey = false;
        var dls = document.location.search;
        if (dls.indexOf("CT_UID=") > -1) {
            var getCookieValues = decodeURIComponent(dls.substr(dls.indexOf("CT_UID=") + 7).split("&")[0]);
            if (getCookieValues && getCookieValues != "null") {
                var splitCookieValues = getCookieValues.split("|");
                var ct_uid = splitCookieValues[0];
                var _cs_id = splitCookieValues[1];
                var _cs_s = readCookie("_cs_s") || splitCookieValues[2];
                var _cs_c = splitCookieValues[3];
                var _cs_optout = splitCookieValues[4];

                if (ct_uid && _cs_id && _cs_s && _cs_c) {
                    if (_cs_optout) {
                        document.cookie = "_cs_optout=" + _cs_optout + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                    } else {
                        document.cookie = "_cs_optout=;domain=" + topDom + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure";
                        document.cookie = "_cs_optout=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure";
                        document.cookie = "_cs_optout=;domain=." + document.location.host + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure";
                    }

                    var ctCookieName = window.ClickTaleUIDCookieName || "WRUID";
                    document.cookie = ctCookieName + "=" + ct_uid + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                    document.cookie = "_cs_id=" + _cs_id + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                    document.cookie = "_cs_s=" + _cs_s + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                    document.cookie = "_cs_c=" + _cs_c + ";domain=" + topDom + ";path=/;SameSite=None;Secure";

                    window.ClickTaleSettings.PTC.RecordSurvey = true;
                }
            }
        }
    } else {

        function receiveMessage(e) {
            try {
                var data = e.data;
                var parsedData = JSON.parse(data);

                if (parsedData.contentsquare_integration) {
                    var new_pv_number = parsedData.contentsquare_integration;
                    document.cookie = "_cs_s=" + new_pv_number + ";domain=" + topDom + ";path=/";
                }
            } catch (err) {}
        }

        window.addEventListener("message", receiveMessage, false);
    }
    //Qualtrics Integration End

})();
//End CAP Integrations

function ClickTaleOnRecording() {

    // don't delete this code workarount forSUP-1586 last msg issue
    // there is problem with the last msg in this site
    //www.singtel.com
    window['onbeforeunload'] = function () {
        if (typeof window['ClickTaleStop'] == "function") {
            if (typeof window['ClickTaleNote'] == "function") {
                window['ClickTaleNote']("stop beforeunload");
            }
            window['ClickTaleStop']();
        }
    };

    (function () {
        function init() {
            var uxaGet = _uxa.push(["getSessionData"]);
            if (uxaGet && uxaGet.projectId) {
                var pid = uxaGet.projectId;
                var uu = uxaGet.userId;
                var sn = uxaGet.sessionNumber;
                var pvid = uxaGet.pageNumber;
                if (pid && uu && sn && pvid) {
                    var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid;
                    window.ClicktaleReplayLink = function () {
                        return intLink;
                    }
                    if (window.CS_CONF) {
                        CS_CONF.replaylink = intLink;
                    }
                }
            }
        }

        function callback(context) {
            if (!disableCallback) {
                disableCallback = true;
                init(context);
            }
        }
        var disableCallback = false;
        window._uxa = window._uxa || [];
        _uxa.push(['afterPageView', callback]);
    })();


    //Start CAP Integrations
    if (!window.ClickTaleSettings.PTC.IntegrationsReady) {
        window.ClickTaleSettings.PTC.IntegrationsReady = true;

        (function () {

            function init(context) {

                function sendToCS(csTypeVendorPrefix, csKey, csValue, csEventType, csPV) {
                    csKey = csTypeVendorPrefix + csKey;

                    window._uxa = window._uxa || [];
                    _uxa.push(["trackDynamicVariable", {
                        key: csKey,
                        value: csValue
                    }]);

                    if (csEventType === "etr") {
                        if (window.ClickTaleIsSavedRecording && ClickTaleIsSavedRecording() === false) {
                            ClickTaleEventTrigger("@ET@ " + csKey);
                        }
                    } else if (csEventType === "reg") {
                        _uxa.push(["trackPageEvent", csKey + " | " + csValue]);
                    }

                    if (csPV) {
                        _uxa.push(["trackPageview", window.location.pathname + "?" + csPV]);
                    }
                }

                function generateReplayLink(pvNum) {
                    pvNum = pvNum || 0;

                    var uxaGet = _uxa.push(["getSessionData"]);
                    if (uxaGet && uxaGet.projectId) {
                        var pid = uxaGet.projectId;
                        var uu = uxaGet.userId;
                        var sn = uxaGet.sessionNumber;
                        var pvid = uxaGet.pageNumber - pvNum;

                        if (pid && uu && sn && pvid) {
                            var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid;
                            return intLink;
                        }
                    }
                }

                function readCookie(name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(";");
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == " ") c = c.substring(1, c.length);
                        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                    }
                    return "";
                }

                function postMessage(type) {
                    var json = JSON.stringify({
                        contentsquare_integration: readCookie("_cs_s")
                    });

                    if (type === "opener") {
                        window.opener.postMessage(json, document.referrer);
                    } else if (type === "top") {
                        window.top.postMessage(json, document.referrer);
                    }
                }

                /*
                 *Name: Qualtrics CAP Integration
                 *Version: 1.17
                 *Required Shared Components: ClickTaleOnRecording, Self Invoking function, _uxa afterPageView callback, sendToCS, readCookie, postMessage, generateReplayLink
                 */
                if (document.location.host.indexOf("qualtrics.com") === -1) {

                    var UID = ClickTaleGetUID();
                    var userValues = UID + "|" + readCookie("_cs_id") + "|" + readCookie("_cs_s") + "|" + readCookie("_cs_c") + "|" + readCookie("_cs_optout");
                    localStorage.setItem("CT_UID", userValues);

                } else {

                    var tvp = "FB_QT_";

                    if (window.Page && Page.getSessionId && Page.runtime && Page.runtime.ED && Page.runtime.ED.SurveyID) {
                        var surveyID = Page.runtime.ED.SurveyID;
                        var responseID = Page.getSessionId().replace("FS_", "R_");

                        sendToCS(tvp, "Feedback Displayed", "Survey ID : " + surveyID);
                        if (window.opener) {
                            postMessage("opener");
                        } else if (self != top) {
                            postMessage("top");
                        }

                        var submitSent = false;
                        var sentQuestionIDs = [];

                        function afterSubmit() {
                            if (!submitSent) {
                                submitSent = true;

                                sendToCS(tvp, "Feedback Submitted", "Survey ID : " + surveyID, "etr", "cs_qualtrics=feedback_submitted_" + surveyID);
                                sendToCS(tvp, "Feedback Response ID", responseID);

                                if (window.opener) {
                                    postMessage("opener");
                                } else if (self != top) {
                                    postMessage("top");
                                }
                            }

                            if (Page._questionRenderers) {
                                var pqr = Page._questionRenderers;
                                var keys = Object.keys(pqr);

                                for (var i = 0; i < keys.length; i++) {
                                    var prefix = pqr[keys[i]].runtime;
                                    if (prefix) {
                                        if (prefix.Selector && prefix.QuestionText && prefix.Displayed) {
                                            var question = prefix.QuestionText;
                                            if (prefix.Selector === "NPS") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);
                                                    var rating = parseInt(prefix.Selected);
                                                    sendToCS("NPS Rating - " + keys[i] + " - " + surveyID + " - " + question, rating);
                                                }
                                            }
                                            if (prefix.Selector === "STAR") {
                                                if (sentQuestionIDs.indexOf(keys[i]) === -1) {
                                                    sentQuestionIDs.push(keys[i]);

                                                    var starObj = prefix.Choices;
                                                    var starKeys = Object.keys(starObj);

                                                    for (var j = 0; j < starKeys.length; j++) {
                                                        var starSubQuestion = starObj[starKeys[j]].Display;
                                                        var starRating = parseInt(starObj[starKeys[j]].Value);
                                                        sendToCS(tvp, "Star Rating - " + keys[i] + " (" + (j + 1) + ") - " + surveyID + " - " + starSubQuestion, starRating);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            Qualtrics.SurveyEngine.addOnPageSubmit(afterSubmit);
                        }

                        if (window.Qualtrics && Qualtrics.SurveyEngine && Qualtrics.SurveyEngine.addOnPageSubmit) {
                            Qualtrics.SurveyEngine.addOnPageSubmit(afterSubmit);
                        }
                    }

                    var intLink = generateReplayLink(1);
                    if (intLink) {
                        if (Qualtrics.SurveyEngine && Qualtrics.SurveyEngine.setEmbeddedData) {
                            Qualtrics.SurveyEngine.setEmbeddedData("ClicktaleSpecificRecording", intLink);
                            Qualtrics.SurveyEngine.setEmbeddedData("ContentsquareReplayLink", intLink);
                        }
                    }
                }
                //Qualtrics CAP Integration End
            }

            function callback(context) {
                if (!disableCallback) {
                    disableCallback = true;
                    init(context);

                    if (window.CS_CONF) {
                        CS_CONF.integrations = CS_CONF.integrations || [];
                        CS_CONF.integrations.push("Qualtrics");
                    }

                }
            }

            var disableCallback = false;

            window._uxa = window._uxa || [];
            _uxa.push(["afterPageView", callback]);

        })();
    }
    //End CAP Integrations

}


//seems like extra uneeded code when updated from R16 to R17
//
// data-styled
// data-styled-components
//===================================
//        rewriteApi.add({
//     pattern: /(\d*.)(?=within the next)/g,
//     replace: '--------- '
// });

// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource,
	pccSource = scriptSource;

if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}


if(!ClickTaleGlobal.init.pccRequested) {
		var pccSrc = pccSource ? pccSource : (isHttps ? 'https://cdnssl.clicktale.net/pcc/' : 'http://cdn.clicktale.net/pcc/');
	    pccSrc += '981cd16e-1e89-4cc9-af2f-bcfec60511e3.js?DeploymentConfigName=Release_20201014&Version=1';
			var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
		pccScriptElement.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        pccScriptElement.integrity = ClickTaleGlobal.scripts.sri.hashes.pcc;
        pccScriptElement.src = ClickTaleGlobal.scripts.sri.path + "pcc.js";
	}else {
       pccScriptElement.src = pccSrc;
    }
	
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	
window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=1071, 
		Ratio=1, 
		PartitionPrefix="www56",
		SubsId=233732;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	
if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
};

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(function () {
    var pcc = document.querySelector('script[src*="clicktale"][src*="pcc"]');
    if (pcc) {
        var versionmatch = pcc.src.match(/DeploymentConfigName=(.+)/i);
        if (versionmatch && typeof ClickTaleExec === 'function') {
            ClickTaleExec("console.info('" + versionmatch[0] + "');");
            ClickTaleEvent("Config: " + versionmatch[1].replace(/\&.+/, ''));
        }
    }
});

function doUpload() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        ClickTaleUploadPageNow();
        window.ClickTaleSettings.PTC.UploadPageHappened = true;
    };
};

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        return !!!document.querySelector('div.ux-load-mask');
    }
    return false;
};

ClickTaleDelayUploadPage();

window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 200, 20, doUpload);

var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
    if (typeof initFuncs[i] === 'function') {
        initFuncs[i]();
    }
}

//VOC Integration Start
if (ClickTaleSettings.PTC.RecordSurvey === false) {
    return;
}
//VOC Integration End

	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
		var wrScript = ClickTaleCreateDOMElement("script");
	wrScript.crossOrigin = "anonymous";
	wrScript.type = 'text/javascript';
		wrScript.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        wrScript.integrity = ClickTaleGlobal.scripts.sri.hashes.wr;
        wrScript.src = ClickTaleGlobal.scripts.sri.path + "wr.js";
	}else {
        wrScript.src = window.ClickTaleScriptSource + 'latest-WR110.js';
    }

	ClickTaleGlobal.init.isAllowed && document.body.appendChild(wrScript);
})();









//Signature:pzwwtqBq7FVjnZK/KmAYcFtIOXKMUwRpMr0ajH1AvKuo5peRy/XG6TTZcd99ZfJ94MEHz5tpI9qr6X1rbIn5uLwoAnDhJozJNR5atToM5GKx0I67bWVOBgLO8oYjZzRls3xTGz7fJA8Zwb7ot7g6VqUvdKh42UU/F39VaMPfF/k=
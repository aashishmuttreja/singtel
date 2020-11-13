/*global Ractive */
var config = {

	// Lux defines its own context to avoid clashing with other projects
	// with use requirejs as well.
	context: 'luxContext',

	// increasing the default timeout from 7s to 40s for low speed networks (>= Regular 2G 250kb/s)
	waitSeconds: 40,

	// Tip: never include a ".js" extension since the paths config could be for a directory.
	// Tip: See below for jQuery special handling.
	paths: {

		// DO NOT USE!!!
		// Only here to support legacy widgets.
		// For new widgets, please use ractive-foundation components.
		foundation: 'vendors/foundation-v4/js/foundation',
		'foundation.forms': 'vendors/foundation-v4/js/foundation.forms',
		'foundation.tooltips': 'vendors/foundation-v4/js/foundation.tooltips',
		modernizr: 'vendors/foundation-sites/js/vendor/modernizr',
		jQueryCookie: 'vendors/oneportal/jquery.cookie',
		RatingsAndReviews: 'vendors/oneportal/ratingsAndReviewsAMD',
		browserFix: 'vendors/oneportal/browserFix',
		ocaUsageMeters: 'vendors/oneportal/ocaUsageMeterWithDays',
		createMeter: 'vendors/oneportal/createMeter',
		slideSelector: 'vendors/oneportal/slideSelector',
		optusTip: 'vendors/oneportal/optusTip',
		newOverlay: 'vendors/oneportal/newOverlay',
		ajaxFormOverlay: 'vendors/oneportal/ajaxFormOverlay',
		customAlertsForm: 'vendors/oneportal/customAlertsForm',
		myAccountSettings: 'vendors/oneportal/myAccountSettings',
		'jquery.validate': 'vendors/oneportal/jquery.validate',
		'jquery.ui.core': 'vendors/oneportal/jquery.ui.core',
		'jquery.ui.datepicker': 'vendors/oneportal/jquery.ui.datepicker',
		myUsage: 'vendors/oneportal/myUsage',
		TrackTimer: 'vendors/oneportal/TrackTimer',
		functions: 'vendors/oneportal/functions',

		// redmarine definitions for use inside YS's requirejs setup.
		ractive: 'vendors/ractive/ractive',
		RactiveValidate: 'plugins/ractiveValidate',
		RactiveHelpers: 'core/ractiveHelpers',
		CommonHelpers: 'core/commonHelpers',
		ProductFacade: 'core/ProductFacade',
		RactiveTouch: 'vendors/ractive-touch/index',
		'ractive-events-tap': 'vendors/ractive-events-tap/dist/ractive-events-tap.umd',
		ConfigStrings: 'core/configStrings',
		hammerjs: 'vendors/hammerjs/hammer',
		simulant: 'vendors/simulant/dist/simulant',
		IScroll: 'vendors/iscroll/build/iscroll',
		'lodash-compat': 'vendors/lodash-compat/index',
		underscoreString: 'vendors/underscore.string/dist/underscore.string.min',
		q: 'vendors/q/q',
		moment: 'vendors/moment/min/moment.min',
		ResponsiveAlertUtil: 'lib/responsiveAlertUtil',
		IndustrieITUtil: 'lib/industrieitUtil',
		polyfills: 'lib/polyfills',
		mxn: 'lib/mxn',
		parseParamsFromUrl: 'lib/parseParamsFromUrl',
		opcUtil: 'lib/opcUtil',
		parseJSON: 'lib/parseJSON',
		OpcDataTable: 'lib/opcDataTable',

		'ractive-transitions-fade': 'vendors/ractive-transitions-fade/dist/ractive-transitions-fade',
		'ractive-transitions-slide': 'vendors/ractive-transitions-slide/dist/ractive-transitions-slide',
		ractiveTransitionsFly: 'vendors/ractive-transitions-fly/dist/ractive-transitions-fly.umd',
		ractiveTransitionsSlide: 'vendors/ractive-transitions-slide/dist/ractive-transitions-slide',
		ractiveTooltip: 'vendors/ractive-tooltip/ractive-tooltip.min',
		jslider: 'vendors/nouislider/distribute/nouislider', //USED THIS FOR EASY MOBILE
		//'jquery.ui.widget': 'vendors/blueimp-file-upload/js/vendor/jquery.ui.widget', //USED THIS FOR EASY MOBILE
		//fileuploader: 'vendors/blueimp-file-upload/js/jquery.fileupload', //USED THIS FOR EASY MOBILE
		swiper: 'vendors/swiper/dist/js/swiper',
		enquire: 'vendors/enquire/enquire',//REMOVE THIS AND USE FOUNDATION MQ INSTEAD
		d3: 'vendors/d3/d3',
		pikaday: 'vendors/pikaday/pikaday',

		luxEventBinding: 'core/luxEventBinding',
		luxMessage: 'core/luxMessage',

		widgetManager: 'core/widgetManager',
		dispatcher: 'core/dispatcher',
		carousel: 'core/carousel',

		browser: 'lib/browser',
		query: 'lib/query',
		sessionTimeout: 'lib/sessionTimeout',
		router: 'lib/router',
		storage: 'lib/storage',
		ICS: 'lib/ics',
		ICSListener: 'lib/icsListener',

		BaseWidget: 'widgets/baseWidget/javascript/baseWidget',
		RRPOrderBaseMixin: 'core/RRPOrderBaseMixin',
		AidWidget: 'widgets/aidWidget/javascript/aidWidget',
		DateUtils: 'vendors/date-utils/lib/date-utils',

		globalRactivePartials: 'lib/globalRactivePartials',
		RedmarinePartials: 'compiled/partials',
		LUXComponents: 'compiled/componentsBase',
		LUXComponentTemplates: 'compiled/componentTemplatesBase',

		// Include Redmarine custom plugins
		RedmarineTransition: 'plugins/redmarineTransition',
		RedmarineDecorator: 'plugins/redmarineDecorator',
		PasswordStrength: 'plugins/passwordStrength',
		CapslockWarning: 'plugins/capslockWarning',
		RactiveF: 'vendors/ractive-foundation/dist/ractivef',

		page: 'vendors/page/page',
		jshashes: 'vendors/jshashes/hashes.min',
		rlite: 'vendors/rlite-router/rlite.min',
		store: 'vendors/store2/dist/store2.min',

		legacyEqualizer: 'plugins/equalizer',
		ExecuteScript: 'plugins/executeScript',

		waypoints: 'vendors/waypoints/lib/jquery.waypoints',
		Equalizer: 'vendors/equalizer/dist/equalizer',

		'ractive-events-keys': 'vendors/ractive-events-keys/dist/ractive-events-keys.min',

		parallaxDecorator: 'decorators/parallax',
		enterViewDecorator: 'decorators/enterView',
		equaliseHeightsDecorator: 'decorators/equaliseHeightsDecorator',
		loadMaskDecorator: 'decorators/loadMaskDecorator',
		singtelTooltipDecorator: 'decorators/singtelTooltipDecorator'

		// BUNDLE START - DO NOT EDIT!!! GULP WILL ADD CONTENTS DURING BUILD
		,accessorySingtelBundle: 'compiled/widgets/accessorySingtelBundle',
accountDashboardBundle: 'compiled/widgets/accountDashboardBundle',
baseWidgetBundle: 'compiled/widgets/baseWidgetBundle',
billPdfDownloadBundle: 'compiled/widgets/billPdfDownloadBundle',
bookStoreAppointmentBundle: 'compiled/widgets/bookStoreAppointmentBundle',
broadbandCatalogBundle: 'compiled/widgets/broadbandCatalogBundle',
cardPaymentMethodBundle: 'compiled/widgets/cardPaymentMethodBundle',
cartHeaderSingtelBundle: 'compiled/widgets/cartHeaderSingtelBundle',
changeBillPreferenceBundle: 'compiled/widgets/changeBillPreferenceBundle',
changeMobileNumberBundle: 'compiled/widgets/changeMobileNumberBundle',
changeOwnershipBundle: 'compiled/widgets/changeOwnershipBundle',
changePlanBundle: 'compiled/widgets/changePlanBundle',
checkAppointmentStatusBundle: 'compiled/widgets/checkAppointmentStatusBundle',
checkoutFulfillmentDetailsBundle: 'compiled/widgets/checkoutFulfillmentDetailsBundle',
chooseNumberBundle: 'compiled/widgets/chooseNumberBundle',
colorCapacitySelectorBundle: 'compiled/widgets/colorCapacitySelectorBundle',
consolidateAccountsBundle: 'compiled/widgets/consolidateAccountsBundle',
crossSellingBannerBundle: 'compiled/widgets/crossSellingBannerBundle',
customerProfileInfoBundle: 'compiled/widgets/customerProfileInfoBundle',
deviceImageGalleryBundle: 'compiled/widgets/deviceImageGalleryBundle',
deviceTechSpecBundle: 'compiled/widgets/deviceTechSpecBundle',
emptyShoppingCartSingtelBundle: 'compiled/widgets/emptyShoppingCartSingtelBundle',
energyOrderSummaryBundle: 'compiled/widgets/energyOrderSummaryBundle',
energyPlanCallbackBundle: 'compiled/widgets/energyPlanCallbackBundle',
energyPlanConfirmationBundle: 'compiled/widgets/energyPlanConfirmationBundle',
energyPlanRoiBundle: 'compiled/widgets/energyPlanRoiBundle',
expressServiceActivationBundle: 'compiled/widgets/expressServiceActivationBundle',
fibreCoverageCheckBundle: 'compiled/widgets/fibreCoverageCheckBundle',
fibreInstallationFlowBundle: 'compiled/widgets/fibreInstallationFlowBundle',
giroPaymentMethodBundle: 'compiled/widgets/giroPaymentMethodBundle',
guestCheckoutBundle: 'compiled/widgets/guestCheckoutBundle',
helloWorldBundle: 'compiled/widgets/helloWorldBundle',
identityDocumentUploadBundle: 'compiled/widgets/identityDocumentUploadBundle',
inboxNotificationSingtelBundle: 'compiled/widgets/inboxNotificationSingtelBundle',
loggedInUserGreetingsBundle: 'compiled/widgets/loggedInUserGreetingsBundle',
luxComponentsBundle: 'compiled/widgets/luxComponentsBundle',
mainLineSelectionBundle: 'compiled/widgets/mainLineSelectionBundle',
manageAddonsBundle: 'compiled/widgets/manageAddonsBundle',
managePaymentCCBundle: 'compiled/widgets/managePaymentCCBundle',
marketingTradeinBannerBundle: 'compiled/widgets/marketingTradeinBannerBundle',
mcssSingtelLoginBundle: 'compiled/widgets/mcssSingtelLoginBundle',
micrositeBundle: 'compiled/widgets/micrositeBundle',
microSitePlanListBundle: 'compiled/widgets/microSitePlanListBundle',
miniCartBundle: 'compiled/widgets/miniCartBundle',
onepassServiceLinkingBundle: 'compiled/widgets/onepassServiceLinkingBundle',
orderConfirmationSingtelBundle: 'compiled/widgets/orderConfirmationSingtelBundle',
orderDetailsBundle: 'compiled/widgets/orderDetailsBundle',
orderSummarySingtelBundle: 'compiled/widgets/orderSummarySingtelBundle',
payBillsBundle: 'compiled/widgets/payBillsBundle',
payBillsInfoBundle: 'compiled/widgets/payBillsInfoBundle',
paymentHistoryBundle: 'compiled/widgets/paymentHistoryBundle',
personalDataProtectionActBundle: 'compiled/widgets/personalDataProtectionActBundle',
phoneCatalogWithFiltersBundle: 'compiled/widgets/phoneCatalogWithFiltersBundle',
phonePromotionsBundle: 'compiled/widgets/phonePromotionsBundle',
planSummaryBundle: 'compiled/widgets/planSummaryBundle',
postpaidNominationBundle: 'compiled/widgets/postpaidNominationBundle',
premiumAddonsBundle: 'compiled/widgets/premiumAddonsBundle',
prepaidTopupBundle: 'compiled/widgets/prepaidTopupBundle',
productConfigurationBundle: 'compiled/widgets/productConfigurationBundle',
redeemVoucherBundle: 'compiled/widgets/redeemVoucherBundle',
relocateMyFixedServicesBundle: 'compiled/widgets/relocateMyFixedServicesBundle',
replaceSimBundle: 'compiled/widgets/replaceSimBundle',
resumeServiceBundle: 'compiled/widgets/resumeServiceBundle',
rewardAndVoucherBannerBundle: 'compiled/widgets/rewardAndVoucherBannerBundle',
rrpAccessoriesCatalogBundle: 'compiled/widgets/rrpAccessoriesCatalogBundle',
rrpCommonFunctionalityBundle: 'compiled/widgets/rrpCommonFunctionalityBundle',
rrpCustomerRegistrationBundle: 'compiled/widgets/rrpCustomerRegistrationBundle',
rrpEmptyShoppingCartBundle: 'compiled/widgets/rrpEmptyShoppingCartBundle',
rrpFulfillmentBundle: 'compiled/widgets/rrpFulfillmentBundle',
rrpImageGalleryBundle: 'compiled/widgets/rrpImageGalleryBundle',
rrpOrderConfirmationBundle: 'compiled/widgets/rrpOrderConfirmationBundle',
rrpOrderSummaryBundle: 'compiled/widgets/rrpOrderSummaryBundle',
rrpShoppingCartBundle: 'compiled/widgets/rrpShoppingCartBundle',
rrpVarientSelectorBundle: 'compiled/widgets/rrpVarientSelectorBundle',
scSendFeedbackBundle: 'compiled/widgets/scSendFeedbackBundle',
scTerminateEasyMobileBundle: 'compiled/widgets/scTerminateEasyMobileBundle',
selectDeviceButtonBundle: 'compiled/widgets/selectDeviceButtonBundle',
selectFixedLineBundle: 'compiled/widgets/selectFixedLineBundle',
selectNumberBundle: 'compiled/widgets/selectNumberBundle',
selectPhoneFirstFlowBundle: 'compiled/widgets/selectPhoneFirstFlowBundle',
selectPlanBundle: 'compiled/widgets/selectPlanBundle',
serviceAgreementBundle: 'compiled/widgets/serviceAgreementBundle',
setTopBoxBundle: 'compiled/widgets/setTopBoxBundle',
shoppingCartSingtelBundle: 'compiled/widgets/shoppingCartSingtelBundle',
singtelBillExplainerBundle: 'compiled/widgets/singtelBillExplainerBundle',
singtelBreadcrumbBundle: 'compiled/widgets/singtelBreadcrumbBundle',
singtelComponentOverlapBundle: 'compiled/widgets/singtelComponentOverlapBundle',
singtelEnergyCatalogBundle: 'compiled/widgets/singtelEnergyCatalogBundle',
singtelEnergyLoginBundle: 'compiled/widgets/singtelEnergyLoginBundle',
singtelEnergyServiceDetailsBundle: 'compiled/widgets/singtelEnergyServiceDetailsBundle',
singtelHomePageBundle: 'compiled/widgets/singtelHomePageBundle',
singtelInboxBundle: 'compiled/widgets/singtelInboxBundle',
singtelLoginSimulatorBundle: 'compiled/widgets/singtelLoginSimulatorBundle',
singtelLogoutBundle: 'compiled/widgets/singtelLogoutBundle',
singtelLogoutPageBundle: 'compiled/widgets/singtelLogoutPageBundle',
singtelOneClickBundle: 'compiled/widgets/singtelOneClickBundle',
singtelPrepaidBuyflowBundle: 'compiled/widgets/singtelPrepaidBuyflowBundle',
singtelProductSubscribeBundle: 'compiled/widgets/singtelProductSubscribeBundle',
singtelTimelineBundle: 'compiled/widgets/singtelTimelineBundle',
singtelTvGoBundle: 'compiled/widgets/singtelTvGoBundle',
stockAvailabilityAccordionBundle: 'compiled/widgets/stockAvailabilityAccordionBundle',
suspendServiceBundle: 'compiled/widgets/suspendServiceBundle',
tvCatalogSingtelBundle: 'compiled/widgets/tvCatalogSingtelBundle',
tvSelfHelpBundle: 'compiled/widgets/tvSelfHelpBundle',
updateEmailBundle: 'compiled/widgets/updateEmailBundle',
validateUrlParametersBundle: 'compiled/widgets/validateUrlParametersBundle',
viewBillBundle: 'compiled/widgets/viewBillBundle',
viewBillSummaryBundle: 'compiled/widgets/viewBillSummaryBundle',
viewBillSummaryLegacyBundle: 'compiled/widgets/viewBillSummaryLegacyBundle',
wifiMeshBundle: 'compiled/widgets/wifiMeshBundle'
// BUNDLE FINISH

	},

	// DO NOT USE!!!
	// TODO This is only here while we migrate redmarine -> LUX.
	// See 1P FE: modulesConfig.js
	shim: {
		store: {
			exports: 'store'
		},
		foundation: {
			deps: [
				'jquery'
			],
			exports: 'Foundation'
		},
		'foundation.tooltips': {
			deps: [
				'foundation'
			],
			exports: 'Foundation.libs.tooltips'
		},
		'foundation.forms': {
			deps: [
				'foundation'
			]
		},
		modernizr: {
			exports: 'Modernizr'
		},
		DateUtils: {
			exports: 'DateUtils'
		}
	}

};

// Special case - don't load jQuery again if it's already loaded by existing page scripts etc.
// Check global scope.
// @see http://www.manuel-strehl.de/dev/load_jquery_before_requirejs.en.html
if (typeof jQuery === 'undefined') {
	// Not loaded yet, define it for requirejs to load.
	config.paths.jquery = 'vendors/jquery/dist/jquery.min';
} else {
	// Loaded already, use what's in global scope.
	define('jquery', [], function () {
		return jQuery;
	});
}
// Special case - don't load ractive again if it's already loaded by existing page scripts etc.
// Check global scope.
if (typeof Ractive === 'undefined') {
	// Not loaded yet, define it for requirejs to load.
	config.paths.ractive = 'vendors/ractive/ractive';
} else {
	// Loaded already, use what's in global scope.
	Ractive.defaults._subs = Ractive.defaults._subs ? Ractive.defaults._subs : [];
	define('ractive', [], function () {
		return Ractive;
	});
}
requirejs.config(config);

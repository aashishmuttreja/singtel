/*global Ractive, osg, luxReq*/
/* jshint latedef:nofunc */
// TODO I have included the above directive to overcome a jshint issue which is failing all bamboo builds.
// This needs to be resolved properly.
window.osg = window.osg || {};

osg.wrapAsRactive = function (osgConfig, ractiveComp) {
	ractiveComp = ractiveComp || Ractive;

	osg.initWidgetManager = function (widgetData, ractive) {
		var self = ractive || this;
		var widgetObserver;
		var selfObserver;
		var widget;

		function onWidgetDataChange(newVal, oldVal, keypath) {
			if (onWidgetDataChange.inSync) {
				return;
			}

			//cancel selfObserver
			onSelfDataChange.inSync = true;
			//update self
			try {
				self.set(keypath, newVal);
			} finally {
				onSelfDataChange.inSync = false;
			}
		}

		function onSelfDataChange(newVal, oldVal, keypath) {
			if (onSelfDataChange.inSync) {
				return;
			}
			//cancel widgetObserver
			onWidgetDataChange.inSync = true;
			//update widget
			try {
				widget.set(keypath, newVal);
			} finally {
				onWidgetDataChange.inSync = false;
			}
		}

		//proxy all named events
		function onWidgetEvent(event) {
			if (onWidgetEvent.inSync) {
				return;
			}
			onSelfEvent.inSync = true;
			if (!event || !event.name) {
				return;
			}
			try {
				Array.prototype.splice.call(arguments, 0, 0, event.name);
				self.fire.apply(self, arguments);
			} finally {
				onSelfEvent.inSync = false;
			}
		}

		function onSelfEvent(event) {
			if (onSelfEvent.inSync) {
				return;
			}
			onWidgetEvent.inSync = true;
			if (!event || !event.name) {
				return;
			}
			try {
				Array.prototype.splice.call(arguments, 0, 0, event.name);
				widget.fire.apply(self, arguments);
			} finally {
				onWidgetEvent.inSync = false;
			}
		}

		function syncWidget(innerWidget) {
			widget = innerWidget;
			//observe changes in widget
			widget.on('*.*', onWidgetEvent);
			self.on('*.*', onSelfEvent);
			selfObserver = self.observe('*', onSelfDataChange);
			widgetObserver = widget.observe('*', onWidgetDataChange);
		}

		luxReq(['require'], function (require) {
			require(['core/requireConfig'], function () {
				require(['ractive', 'widgetManager'], function (Ractive, widgetManager) {
					widgetManager.initWidget({
						widgetContainer: self.el,
						widgetData: widgetData,
						require: require
					}).done(function (widget) {
						//self.set('widget',widget)
						window.mywidget = widget;
						syncWidget(widget.instance.ractive);
						window.jQuery(document).trigger('widgetInitialized.lux', {
							element: self.el,
							ractive: widget
						});
					});
				});
			});
		});
	};

	function createWidget(widgetData) {
		//either upgrade existing component or create a new one
		var widgetComponent = ractiveComp.components[widgetData.id] || Ractive.extend(
			{
				template: '<div></div>',
				name: 'emptyWidget'
			});
		var onInit = widgetComponent.oninit;
		widgetComponent.prototype.oninit = function () {
			if (onInit) {
				onInit.apply(this, arguments);
			}
			var initData = this.get();
			if (initData) {
				for (var prop in initData) {
					if (initData.hasOwnProperty(prop)) {
						widgetData[prop] = initData[prop];
					}
				}
			}
			osg.initWidgetManager.call(this, widgetData);
		};
		//widgetComponent.prototype.adapt.push('widgetAdaptor');

		return widgetComponent;
	}

	osgConfig.widgets.forEach(function (widgetData) {
		ractiveComp.components[widgetData.id] = createWidget(widgetData);
	});
};

// osg Ractive Wrapper end

var singtelWidgets = {
	accessorySingtelWidget: {
		'id': 'accessorySingtel',
		'status': 'ok',
		'viewName': 'accessorySingtelStateOneView'
	},
	accountDashboardWidget: {
		'id': 'accountDashboard',
		'status': 'ok',
		'viewName': 'accountDashboardStateOneView'
	},
	billPdfDownloadWidget: {
		'id': 'billPdfDownload',
		'status': 'ok',
		'viewName': 'billPdfDownloadStateOneView'
	},
	bookStoreAppointment: {
		'id': 'bookStoreAppointment',
		'status': 'ok',
		'viewName': 'bookStoreAppointmentStateOneView'
	},
	broadbandCatalog: {
		'id': 'broadbandCatalog',
		'status': 'ok',
		'viewName': 'broadbandCatalogStateOneView'
	},
	cardPaymentMethodWidget: {
		'id': 'cardPaymentMethod',
		'status': 'ok',
		'viewName': 'cardPaymentMethodStateOneView'
	},
	cartHeaderSingtel: {
		'id': 'cartHeaderSingtel',
		'status': 'ok',
		'viewName': 'cartHeaderSingtelStateOneView'
	},
	changeBillPreferenceWidget: {
		'id': 'changeBillPreference',
		'status': 'ok',
		'viewName': 'changeBillPreferenceStateOneView'
	},
	changePlanWidget: {
		'id': 'changePlan',
		'status': 'ok',
		'viewName': 'changePlanStateOneView'
	},
	changeMobileNumberWidget: {
		'id': 'changeMobileNumber',
		'status': 'ok',
		'viewName': 'changeMobileNumberStateOneView'
	},
	changeOwnership: {
		'id': 'changeOwnership',
		'status': 'ok',
		'viewName': 'changeOwnershipStateOneView'
	},
	checkoutFulfillmentDetails: {
		'id': 'checkoutFulfillmentDetails',
		'status': 'ok',
		'viewName': 'checkoutFulfillmentDetailsNew'
	},
	checkAppointmentStatusWidget: {
		'id': 'checkAppointmentStatus',
		'status': 'ok',
		'viewName': 'checkAppointmentStatusStateOneView'
	},
	consolidateAccountsWidget: {
		'id': 'consolidateAccounts',
		'status': 'ok',
		'viewName': 'consolidateAccountsStateOneView'
	},
	crossSellingBannerWidget: {
		'id': 'crossSellingBanner',
		'status': 'ok',
		'viewName': 'crossSellingBannerStateOneView'
	},
	customerProfileInfoWidget: {
		'id': 'customerProfileInfo',
		'status': 'ok',
		'viewName': 'customerProfileInfoStateOneView'
	},
	deviceImageGallery: {
		'id': 'deviceImageGallery',
		'status': 'ok',
		'viewName': 'deviceImageGalleryStateOneView'
	},
	deviceTechSpec: {
		'id': 'deviceTechSpec',
		'status': 'ok',
		'viewName': 'deviceTechSpecStateOneView'
	},
	emptyShoppingCartSingtel: {
		'id': 'emptyShoppingCartSingtel',
		'status': 'ok',
		'viewName': 'emptyShoppingCartSingtelStateOneView'
	},
	energyOrderSummary: {
		'id': 'energyOrderSummary',
		'status': 'ok',
		'viewName': 'energyOrderSummaryStateOneView'
	},
	energyPlanCallback: {
		'id': 'energyPlanCallback',
		'status': 'ok',
		'viewName': 'energyPlanCallbackStateOneView'
	},
	energyPlanConfirmation: {
		'id': 'energyPlanConfirmation',
		'status': 'ok',
		'viewName': 'energyPlanConfirmationStateOneView'
	},
	energyPlanRoi: {
		'id': 'energyPlanRoi',
		'status': 'ok',
		'viewName': 'energyPlanRoiStateOneView'
	},
	expressServiceActivation: {
		'id': 'expressServiceActivation',
		'status': 'ok',
		'viewName': 'expressServiceActivationStateOneView'
	},
	fibreCoverageCheck: {
		'id': 'fibreCoverageCheck',
		'status': 'ok',
		'viewName': 'fibreCoverageCheckStateOneView'
	},
	fibreInstallationFlow: {
		'id': 'fibreInstallationFlow',
		'status': 'ok',
		'viewName': 'fibreInstallationFlowStateOneView'
	},
	layoutBox: {
		'id': 'layoutBox',
		'status': 'ok',
		'viewName': 'layoutBoxView'
	},
	giroPaymentMethodWidget: {
		'id': 'giroPaymentMethod',
		'status': 'ok',
		'viewName': 'giroPaymentMethodStateOneView'
	},
	guestCheckout: {
		'id': 'guestCheckout',
		'status': 'ok',
		'viewName': 'guestCheckoutStateOneView'
	},
	identityDocumentUpload: {
		'id': 'identityDocumentUpload',
		'status': 'ok',
		'viewName': 'identityDocumentUploadStateOneView'
	},
	inboxNotificationSingtel: {
		'id': 'inboxNotificationSingtel',
		'status': 'ok',
		'viewName': 'inboxNotificationSingtelStateOneView'
	},
	loggedInUserGreetings : {
		'id': 'loggedInUserGreetings',
		'status': 'ok',
		'viewName': 'loggedInUserGreetingsStateOneView'
	},
	mainLineSelection: {
		'id': 'mainLineSelection',
		'status': 'ok',
		'viewName': 'mainLineSelectionStateOneView'
	},
	manageAddons: {
		'id': 'manageAddons',
		'status': 'ok',
		'viewName': 'manageAddonsStateOneView'
	},
	managePaymentCC: {
		'id': 'managePaymentCC',
		'status': 'ok',
		'viewName': 'managePaymentCCStateOneView'
	},
	marketingTradeinBanner: {
		'id': 'marketingTradeinBanner',
		'status': 'ok',
		'viewName': 'marketingTradeinBannerStateOneView'
	},
	mcssSingtelLoginWidget: {
		'id': 'mcssSingtelLogin',
		'status': 'ok',
		'viewName': 'mcssSingtelLoginStateOneView'
	},
	miniCart: {
		'id': 'miniCart',
		'status': 'ok',
		'viewName': 'miniCart'
	},
	orderConfirmationSingtel: {
		'id': 'orderConfirmationSingtel',
		'status': 'ok',
		'viewName': 'orderConfirmationSingtelStateOneView'
	},
	orderDetails: {
		'id': 'orderDetails',
		'status': 'ok',
		'viewName': 'orderDetailsStateOneView'
	},
	orderSummarySingtel: {
		'id': 'orderSummarySingtel',
		'status': 'ok',
		'viewName': 'orderSummarySingtelStateOneView'
	},
	payBillsInfoWidget: {
		'id': 'payBillsInfo',
		'status': 'ok',
		'viewName': 'payBillsInfoStateOneView'
	},
	payBillsWidget: {
		'id': 'payBills',
		'status': 'ok',
		'viewName': 'payBillsStateOneView'
	},
	paymentHistoryWidget: {
		'id': 'paymentHistory',
		'status': 'ok',
		'viewName': 'paymentHistoryStateOneView'
	},
	personalDataProtectionAct: {
		'id': 'personalDataProtectionAct',
		'status': 'ok',
		'viewName': 'personalDataProtectionActStateOneView'
	},
	phoneCatalogWithFilters: {
		'id': 'phoneCatalogWithFilters',
		'status': 'ok',
		'viewName': 'phoneCatalogWithFiltersStateOneView'
	},
	phonePromotions: {
		'id': 'phonePromotions',
		'status': 'ok',
		'viewName': 'phonePromotionsStateOneView'
	},
	postpaidNominationWidget: {
		'id': 'postpaidNomination',
		'status': 'ok',
		'viewName': 'postpaidNominationStateOneView'
	},
	planSummaryWidget: {
		'id': 'planSummary',
		'status': 'ok',
		'viewName': 'planSummaryStateOneView'
	},
	phoneDetails: {
		'id': 'colorCapacitySelector',
		'status': 'ok',
		'viewName': 'colorCapacitySelectorStateOneView'
	},
	premiumAddons: {
		'id': 'premiumAddons',
		'status': 'ok',
		'viewName': 'premiumAddonsStateOneView'
	},
	prepaidTopupWidget: {
		'id': 'prepaidTopup',
		'status': 'ok',
		'viewName': 'prepaidTopupStateOneView'
	},
	productConfiguration: {
		'id': 'productConfiguration',
		'status': 'ok',
		'viewName': 'productConfiguration'
	},
	relocateServicesWidget: {
		'id': 'relocateMyFixedServices',
		'status': 'ok',
		'viewName': 'relocateMyFixedServicesStateOneView'
	},
	redeemVoucherWidget: {
		'id': 'redeemVoucher',
		'status': 'ok',
		'viewName': 'redeemVoucherStateOneView'
	},
	resumeServiceWidget: {
		'id': 'resumeService',
		'status': 'ok',
		'viewName': 'resumeServiceStateOneView'
	},
	replaceSim: {
		'id': 'replaceSim',
		'status': 'ok',
		'viewName': 'replaceSimStateOneView'
	},
	rewardAndVoucherBannerWidget: {
		'id': 'rewardAndVoucherBanner',
		'status': 'ok',
		'viewName': 'rewardAndVoucherBannerStateOneView'
	},
	rrpAccessoriesCatalogWidget: {
		'id': 'rrpAccessoriesCatalog',
		'status': 'ok',
		'viewName': 'rrpAccessoriesCatalogStateOneView'
	},
	rrpCustomerRegistrationWidget: {
		'id': 'rrpCustomerRegistration',
		'status': 'ok',
		'viewName': 'rrpCustomerRegistrationStateOneView'
	},
	rrpCommonFunctionalityWidget: {
		'id': 'rrpCommonFunctionality',
		'status': 'ok',
		'viewName': 'rrpCommonFunctionalityStateOneView'
	},
	rrpFulfillmentWidget: {
		'id': 'rrpFulfillment',
		'status': 'ok',
		'viewName': 'rrpFulfillmentStateOneView'
	},
	rrpImageGalaryWidget: {
		'id': 'rrpImageGallery',
		'status': 'ok',
		'viewName': 'rrpImageGalaryStateOneView'
	},
	rrpEmptyShoppingCartWidget: {
		'id': 'rrpEmptyShoppingCart',
		'status': 'ok',
		'viewName': 'rrpEmptyShoppingCartStateOneView'
	},
	rrpOrderConfirmationWidget: {
		'id': 'rrpOrderConfirmation',
		'status': 'ok',
		'viewName': 'rrpOrderConfirmationStateOneView'
	},
	rrpOrderSummaryWidget: {
		'id': 'rrpOrderSummary',
		'status': 'ok',
		'viewName': 'rrpOrderSummaryStateOneView'
	},
	rrpShoppingCartWidget: {
		'id': 'rrpShoppingCart',
		'status': 'ok',
		'viewName': 'rrpShoppingCartStateOneView'
	},
	rrpVarientSelectorWidget: {
		'id': 'rrpVarientSelector',
		'status': 'ok',
		'viewName': 'rrpVarientSelectorStateOneView'
	},
	singtelEnergyCatalog: {
		'id': 'singtelEnergyCatalog',
		'status': 'ok',
		'viewName': 'singtelEnergyCatalogStateOneView'
	},
	singtelEnergyLoginWidget: {
		'id': 'singtelEnergyLogin',
		'status': 'ok',
		'viewName': 'singtelEnergyLoginStateOneView'
	},
	singtelEnergyServiceDetails: {
		'id': 'singtelEnergyServiceDetails',
		'status': 'ok',
		'viewName': 'singtelEnergyServiceDetailsStateOneView'
	},
	scSendFeedback: {
		'id': 'scSendFeedback',
		'status': 'ok',
		'viewName': 'scSendFeedbackStateOneView'
	},
	scTerminateEasyMobile: {
		'id': 'scTerminateEasyMobile',
		'status': 'ok',
		'viewName': 'scTerminateEasyMobileStateOneView'
	},
	selectDeviceButton: {
		'id': 'selectDeviceButton',
		'status': 'ok',
		'viewName': 'selectDeviceButtonStateOneView'
	},
	selectFixedLine: {
		'id': 'selectFixedLine',
		'status': 'ok',
		'viewName': 'selectFixedLineStateOneView'
	},
	serviceAgreement: {
		'id': 'serviceAgreement',
		'status': 'ok',
		'viewName': 'serviceAgreementStateOneView'
	},
	selectNumber: {
		'id': 'selectNumber',
		'status': 'ok',
		'viewName': 'selectNumberStateOneView'
	},
	selectPhoneFirstFlow: {
		'id': 'selectPhoneFirstFlow',
		'status': 'ok',
		'viewName': 'phoneDetailsView'
	},
	selectPlan: {
		'id': 'selectPlan',
		'status': 'ok',
		'viewName': 'selectPlanStateOneView'
	},
	setTopBoxWidget: {
		'id': 'setTopBox',
		'status': 'ok',
		'viewName': 'setTopBoxStateOneView'
	},
	shoppingCartSingtel: {
		'id': 'shoppingCartSingtel',
		'status': 'ok',
		'viewName': 'shoppingCartSingtelStateOneView'
	},
	singtelBillExplainer: {
		'id': 'singtelBillExplainer',
		'status': 'ok',
		'viewName': 'singtelBillExplainerStateOneView'
	},
	singtelBreadcrumb: {
		'id': 'singtelBreadcrumb',
		'status': 'ok',
		'viewName': 'singtelBreadcrumbStateOneView'
	},
	singtelInbox: {
		'id': 'singtelInbox',
		'status': 'ok',
		'viewName': 'singtelInboxStateOneView'
	},
	singtelLoginSimulatorWidget: {
		'id': 'singtelLoginSimulator',
		'status': 'ok',
		'viewName': 'singtelLoginSimulatorStateOneView',
		'customerIdType': [
			{
				'title': 'National Registration ID Card (NRIC)',
				'value': '2',
				'selected': 'true'
			},
			{
				'title': 'Foreign Identification Number',
				'value': '6'
			},
			{
				'title': 'Foreigner Dependent Pass',
				'value': '532'
			},
			{
				'title': 'Foreigner Employment Pass',
				'value': '534'
			},
			{
				'title': 'Foreigner S Pass',
				'value': '535'
			},
			{
				'title': 'Passport Number',
				'value': '536'
			},
			{
				'title': 'Foreigner Social Visit Pass',
				'value': '531'
			},
			{
				'title': 'Foreigner Work Permit',
				'value': '530'
			},
			{
				'title': 'Foreigner Student Pass',
				'value': '533'
			}
		],
		'headers': {
			'userId': '',
			'status': null,
			'email': 'john@amdocs.com',
			'nric': null,
			'familyName': 'John Doe',
			'nickName': 'Johny',
			'billPayer': 'Self',
			'redirectUrl': null
		}
	},
	singtelLogoutWidget: {
		'id': 'singtelLogout',
		'status': 'ok',
		'viewName': 'singtelLogoutStateOneView'
	},
	singtelLogoutPageWidget: {
		'id': 'singtelLogoutPage',
		'status': 'ok',
		'viewName': 'singtelLogoutPageStateOneView'
	},
	singtelOneClickWidget: {
		'id': 'singtelOneClick',
		'status': 'ok',
		'viewName': 'singtelOneClickStateOneView'
	},
	singtelProductSubscribe: {
		'id': 'singtelProductSubscribe',
		'status': 'ok',
		'viewName': 'singtelProductSubscribeStateOneView'
	},
	singtelPrepaidBuyflow: {
		'id': 'singtelPrepaidBuyflow',
		'status': 'ok',
		'viewName': 'singtelPrepaidStateOneBuySIMCardView'
	},
	singtelTVGo: {
		'id': 'singtelTvGo',
		'status': 'ok',
		'viewName': 'singtelTvGoStateOneView'
	},
	singtelTimeline: {
		'id': 'singtelTimeline',
		'status': 'ok',
		'viewName': 'singtelTimelineStateOneView'
	},
	suspendServiceWidget: {
		'id': 'suspendService',
		'status': 'ok',
		'viewName': 'suspendServiceStateOneView'
	},
	tvCatalogSingtel: {
		'id': 'tvCatalogSingtel',
		'status': 'ok',
		'viewName': 'tvCatalogSingtelStateOneView'
	},
	tvSelfHelp: {
		'id': 'tvSelfHelp',
		'status': 'ok',
		'viewName': 'tvSelfHelpStateOneView'
	},
	updateEmailWidget: {
		'id': 'updateEmail',
		'status': 'ok',
		'viewName': 'updateEmailStateOneView'
	},
	validateUrlParametersWidget: {
		'id': 'validateUrlParameters',
		'status': 'ok',
		'viewName': 'validateUrlParametersStateOneView'
	},
	viewBillWidget: {
		'id': 'viewBill',
		'status': 'ok',
		'viewName': 'viewBillStateOneView'
	},
	viewBillSummaryWidget: {
		'id': 'viewBillSummary',
		'status': 'ok',
		'viewName': 'viewBillSummaryStateOneView'
	},
	wifiMesh: {
		'id': 'wifiMesh',
		'status': 'ok',
		'viewName': 'wifiMeshStateOneView'
	}
};

//Optus widget definition
var optusWidgets = {
	accountDashBoardOptus : {
		'id': 'accountDashBoardOptus',
		'status': 'ok',
		'viewName': 'accountDashBoardOptusStateOneView'
	},
	accountSelectionOptus : {
		'id': 'accountSelectionOptus',
		'status': 'ok',
		'viewName': 'accountSelectionOptusStateOneView'
	},
	accountServiceSettings: {
		'id': 'accountServiceSettings',
		'status': 'ok',
		'viewName': 'accountServiceSettingsStateOneView'
	},
	accountServiceSettingsBack: {
		'id': 'accountServiceSettingsBack',
		'status': 'ok',
		'viewName': 'accountServiceSettingsBackStateOneView'
	},
	activateSimConfirmation: {
		'id': 'activateSimConfirmation',
		'status': 'ok',
		'viewName': 'activateSimConfirmationStateOneView'
	},
	addOns: {
		'id': 'addOns',
		'status': 'ok',
		'viewName': 'addOnsStateOneView'
	},
	addressDetails: {
		'id': 'addressDetails',
		'status': 'ok',
		'viewName': 'addressDetailsStateOneView'
	},
	autoRegistration: {
		'id': 'autoRegistration',
		'status': 'ok',
		'viewName': 'autoRegistrationStateOneView'
	},
	billingAccountDetailsAddress: {
		'id': 'billingAccountDetailsAddress',
		'status': 'ok',
		'viewName': 'billingAccountDetailsAddress'
	},
	billingAccountDetailsManualPayments: {
		'id': 'billingAccountDetailsManualPayments',
		'status': 'ok',
		'viewName': 'billingAccountDetailsManualPayments'
	},
	billingAccountDetailsSelectBankAccount: {
		'id': 'billingAccountDetailsSelectBankAccount',
		'status': 'ok',
		'viewName': 'billingAccountDetailsSelectBankAccount'
	},
	billingAccountDetailsSelectBillingAccount: {
		'id': 'billingAccountDetailsSelectBillingAccount',
		'status': 'ok',
		'viewName': 'billingAccountDetailsSelectBillingAccount'
	},
	billingAccountDetailsSelectCreditCard: {
		'id': 'billingAccountDetailsSelectCreditCard',
		'status': 'ok',
		'viewName': 'billingAccountDetailsSelectCreditCard'
	},
	billingAccountOptions: {
		'id': 'billingAccountOptions',
		'status': 'ok',
		'viewName': 'billingAccountOptionsStateOneView'
	},
	changeBillingPreferencesOptus: {
		'id': 'changeBillingPreferences',
		'status': 'ok',
		'viewName': 'changeBillingPreferencesStateOneView'
	},
	checkCustomerEligibility: {
		'id': 'checkCustomerEligibility',
		'status': 'ok',
		'viewName': 'checkCustomerEligibilityStateOneView'
	},
	changeUserName: {
		'id': 'changeUserName',
		'status': 'ok',
		'viewName': 'changeUserNameStateOneView'
	},
	chooseAccount: {
		'id': 'chooseAccount',
		'status': 'ok',
		'viewName': 'chooseAccountStateOneView'
	},
	chooseIdentificationDocument: {
		'id': 'chooseIdentificationDocument',
		'status': 'ok',
		'viewName': 'chooseIdentificationDocumentStateOneView'
	},
	chooseIdentificationMethod: {
		'id': 'chooseIdentificationMethod',
		'status': 'ok',
		'viewName': 'chooseIdentificationMethodStateOneView'
	},
	contactOptus: {
		'id': 'contactOptus',
		'status': 'ok',
		'viewName': 'contactOptusStateOneView'
	},
	contactPermissionContactList: {
		'id': 'contactPermissionContactList',
		'status': 'ok',
		'viewName': 'contactPermissionContactList'
	},
	createOptusRegistration: {
		'id': 'createOptusRegistration',
		'status': 'ok',
		'viewName': 'createOptusRegistrationStateOneView'
	},
	creditCheck: {
		'id': 'creditCheck',
		'status': 'ok',
		'viewName': 'creditCheckStateOneView'
	},
	customerIntent: {
		'id': 'customerIntent',
		'status': 'ok',
		'viewName': 'customerIntentStateOneView'
	},
	customerSummaryDashboardOptus: {
		'id': 'customerSummaryDashboard',
		'status': 'ok',
		'viewName': 'customerSummaryDashboardStateOneView'
	},
	directDebitOptus: {
		'id': 'directDebitOptus',
		'status': 'ok',
		'viewName': 'paymentOptionsView'
	},
	editPhoneAndPlanOptus: {
		'id': 'editPhoneAndPlanOptus',
		'status': 'ok',
		'viewName': 'editPhoneAndPlanOptusStateOneView'
	},
	eligibilityCheckAddressIdentification: {
		'id': 'eligibilityCheckAddressIdentification',
		'status': 'ok',
		'viewName': 'eligibilityCheckAddressIdentification'
	},
	eligibilityCheckAvailability: {
		'id': 'eligibilityCheckAvailability',
		'status': 'ok',
		'viewName': 'eligibilityCheckAvailability'
	},
	eligibilityCheckCarousel: {
		'id': 'eligibilityCheckCarousel',
		'status': 'ok',
		'viewName': 'eligibilityCheckCarousel'
	},
	eligibilityCheckEditAddressDetails: {
		'id': 'eligibilityCheckEditAddressDetails',
		'status': 'ok',
		'viewName': 'eligibilityCheckEditAddressDetails'
	},
	eligibilityCheckPickAddress: {
		'id': 'eligibilityCheckPickAddress',
		'status': 'ok',
		'viewName': 'eligibilityCheckPickAddressStateOneView'
	},
	emailVerification: {
		'id': 'emailVerification',
		'status': 'ok',
		'viewName': 'emailVerificationVerifyDOBView'
	},
	enterNewPrepaidSIM: {
		'id': 'enterNewPrepaidSIM',
		'status': 'ok',
		'viewName': 'enterNewPrepaidSIMStateOneView'
	},
	forgottenPasswordWidget: {
		'id': 'forgottenPassword',
		'status': 'ok',
		'viewName': 'forgottenPasswordStateOneView'
	},
	guestCheckoutOptus: {
		'id': 'guestCheckoutOptus',
		'status': 'ok',
		'viewName': 'guestCheckoutStateOneView'
	},
	globalErrorPage: {
		'id': 'globalErrorPage',
		'status': 'ok',
		'viewName': 'globalErrorPageStateOneView'
	},
	globalSearch: {
		'id': 'globalSearch',
		'status': 'ok',
		'viewName': 'globalSearchStateBoxView'
	},
	globalSearchViewResults: {
		'id': 'globalSearchViewResults',
		'status': 'ok',
		'viewName': 'globalSearchViewResultsStateOneView'
	},
	ipPaymentConfirmation: {
		'id': 'ipPaymentConfirmation',
		'status': 'ok',
		'viewName': 'ipPaymentConfirmationStateOneView'
	},
	kmsEvaluationWidget: {
		'id': 'kmsEvaluation',
		'status': 'ok',
		'viewName': 'kmsEvaluationStateOneView'
	},
	letsGetStarted : {
		'id': 'letsGetStarted',
		'status': 'ok',
		'viewName': 'letsGetStartedStateOneView'
	},
	loginWidget: {
		'id': 'login',
		'status': 'ok',
		'viewName': 'loginStateOneView'
	},
	manageCustomerInfo : {
		'id': 'manageCustomerInfo',
		'status': 'ok',
		'viewName': 'manageCustomerInfoStateOneView'
	},
	manageNotification: {
		'id': 'manageNotification',
		'status': 'ok',
		'viewName': 'manageNotificationStateOneView'
	},
	migrationGlobalParamConfig : {
		'id': 'migrationGlobalParamConfig',
		'status': 'ok',
		'viewName': 'migrationGlobalParamConfigStateOneView'
	},
	multiContactError: {
		'id': 'multiContactError',
		'status': 'ok',
		'viewName': 'multiContactErrorStateOneView'
	},
	notificationType: {
		'id': 'notificationType',
		'status': 'ok',
		'viewName': 'notificationType'
	},
	myOrders : {
		'id': 'myOrders',
		'status': 'ok',
		'viewName': 'myOrdersStateOneView'
	},
	occupation: {
		'id': 'occupation',
		'status': 'ok',
		'viewName': 'occupationStateOneView'
	},
	oneTimePassword: {
		'id': 'oneTimePassword',
		'status': 'ok',
		'viewName': 'oneTimePassword'
	},
	optusCare: {
		'id': 'optusCare',
		'status': 'ok',
		'viewName': 'optusCareStateOneView'
	},
	optusLoginSimulatorWidget: {
		'id': 'optusLoginSimulator',
		'status': 'ok',
		'viewName': 'optusLoginSimulatorStateOneView'
	},
	optusLogoutWidget: {
		'id': 'optusLogout',
		'status': 'ok',
		'viewName': 'optusLogoutStateOneView'
	},
	orderSummary: {
		'id': 'orderSummary',
		'status': 'ok',
		'viewName': 'orderSummaryStateOneView'
	},
	paymentHistoryWidget : {
		'id': 'paymentHistoryList',
		'status': 'ok',
		'viewName': 'paymentHistoryListStateOneView'
	},
	payYourBill : {
		'id': 'payYourBill',
		'status': 'ok',
		'viewName': 'payYourBillUseStoredCard'
	},
	personalDetails: {
		'id': 'personalDetails',
		'status': 'ok',
		'viewName': 'personalDetailsStateOneView'
	},
	portingNumberOptus: {
		'id': 'portingNumberOptus',
		'status': 'ok',
		'viewName': 'choosePortingNumberMethodView'
	},
	prepaidAccountSelectionOptusWidget: {
		'id': 'prepaidAccountSelectionOptus',
		'status': 'ok',
		'viewName': 'prepaidAccountSelectionOptusStateOneView'
	},
	prepaidActivationSummary: {
		'id': 'prepaidActivationSummary',
		'status': 'ok',
		'viewName': 'prepaidActivationSummaryStateOneView'
	},
	prepaidDashboardTabsWidget: {
		'id': 'prepaidDashboardTabs',
		'status': 'ok',
		'viewName': 'prepaidDashboardTabsStateOneView'
	},
	prepaidMobileBalanceWidget: {
		'id': 'prepaidMobileBalance',
		'status': 'ok',
		'viewName': 'prepaidMobileBalanceStateOneView'
	},
	prepaidSimConfirmation: {
		'id': 'prepaidSimConfirmation',
		'status': 'ok',
		'viewName': 'prepaidSimConfirmationStateOneView'
	},
	recommendedActivities: {
		'id': 'recommendedActivities',
		'status': 'ok',
		'viewName': 'recommendedActivities'
	},
	registration: {
		'id': 'registration',
		'status': 'ok',
		'viewName': 'registrationStateOneView'
	},
	requestSIM: {
		'id': 'requestSIM',
		'status': 'ok',
		'viewName': 'requestSIMStateOneView'
	},
	selectItem: {
		'id': 'selectItem',
		'status': 'ok',
		'viewName': 'selectItemStateOneView'
	},
	serviceActivationUserUnauthorized: {
		'id': 'serviceActivationUserUnauthorized',
		'status': 'ok',
		'viewName': 'serviceActivationUserUnauthorizedStateOneView'
	},
	serviceDetailsHeader: {
		'id': 'serviceDetailsHeader',
		'status': 'ok',
		'viewName': 'serviceDetailsHeaderStateOneView'
	},
	serviceDetailsOptus : {
		'id': 'viewServiceDetail',
		'status': 'ok',
		'viewName': 'viewServiceDetailStateOneView'
	},
	serviceNickname: {
		'id': 'serviceNickname',
		'status': 'ok',
		'viewName': 'serviceNicknameStateOneView'
	},
	shoppingCart: {
		'id': 'shoppingCart',
		'status': 'ok',
		'viewName': 'shoppingCartStateOneView'
	},
	simReplacement: {
		'id': 'simReplacement',
		'status': 'ok',
		'viewName': 'simReplacementEnterNumber'
	},
	submitOrder: {
		'id': 'submitOrder',
		'status': 'ok',
		'viewName': 'submitOrderStateOneView'
	},
	transactionSuccess: {
		'id': 'transactionSuccess',
		'status': 'ok',
		'viewName': 'transactionSuccessStateOneView'
	},
	unbilledUsageWidget : {
		'id': 'unbilledUsage',
		'status': 'ok',
		'viewName': 'unbilledUsageDashboardSummary'
	},
	upgradeFee: {
		'id': 'upgradeFee',
		'status': 'ok',
		'viewName': 'upgradeFeeStateOneView'
	},
	shippingAddress: {
		'id': 'shippingAddress',
		'status': 'ok',
		'viewName': 'shippingAddressStateOneView'
	},
	upgradeExistingService: {
		'id': 'upgradeExistingService',
		'status': 'ok',
		'viewName': 'upgradeExistingServiceStateOneView'
	},
	updatePasswordWidget: {
		'id': 'updatePassword',
		'status': 'ok',
		'viewName': 'updatePasswordStateOneView'
	},
	usageEvents : {
		'id': 'usageEvents',
		'status': 'ok',
		'viewName': 'usageEventsStateOneView'
	},
	userLoginInfo: {
		'id': 'userLoginInfo',
		'status': 'ok',
		'viewName': 'userLoginInfoStateOneView'
	},
	verifyUsernameWidget: {
		'id': 'verifyUsername',
		'status': 'ok',
		'viewName': 'verifyUsernameStateOneView'
	},
	viewServiceDetailsOverview: {
		'id': 'viewServiceDetailsOverview',
		'status': 'ok',
		'viewName': 'viewServiceDetailsOverviewStateOneView'
	},
	viewYourBillDownloadWidget: {
		'id': 'viewYourBillDownload',
		'status': 'ok',
		'viewName': 'viewYourBillDownloadStateOneView'
	},
	viewYourBillEventWidget: {
		'id': 'intlVoiceBillOptus',
		'status': 'ok',
		'viewName': 'viewYourBillEventStateOneView'
	},
	viewYourBillGraphWidget: {
		'id': 'viewYourBillGraph',
		'status': 'ok',
		'viewName': 'viewYourBillGraphStateOneView'
	},
	viewYourBillWidget: {
		'id': 'viewYourBill',
		'status': 'ok',
		'viewName': 'viewYourBillStateOneView'
	},
	yourContracts: {
		'id': 'yourContracts',
		'status': 'ok',
		'viewName': 'yourContractsStateOneView'
	}
};

//osg Ractive Wrapper call example
osg.wrapAsRactive({
	widgets: [
		optusWidgets.accountDashBoardOptus,
		optusWidgets.accountSelectionOptus,
		optusWidgets.accountServiceSettings,
		optusWidgets.accountServiceSettingsBack,
		optusWidgets.activateSimConfirmation,
		optusWidgets.addOns,
		optusWidgets.addressDetails,
		optusWidgets.autoRegistration,
		optusWidgets.billingAccountDetailsAddress,
		optusWidgets.billingAccountDetailsManualPayments,
		optusWidgets.billingAccountDetailsSelectBankAccount,
		optusWidgets.billingAccountDetailsSelectBillingAccount,
		optusWidgets.billingAccountDetailsSelectCreditCard,
		optusWidgets.billingAccountOptions,
		optusWidgets.changeBillingPreferencesOptus,
		optusWidgets.changeUserName,
		optusWidgets.checkCustomerEligibility,
		optusWidgets.chooseAccount,
		optusWidgets.chooseIdentificationDocument,
		optusWidgets.chooseIdentificationMethod,
		optusWidgets.contactOptus,
		optusWidgets.contactPermissionContactList,
		optusWidgets.createOptusRegistration,
		optusWidgets.creditCheck,
		optusWidgets.customerIntent,
		optusWidgets.customerSummaryDashboardOptus,
		optusWidgets.directDebitOptus,
		optusWidgets.editPhoneAndPlanOptus,
		optusWidgets.eligibilityCheckAddressIdentification,
		optusWidgets.eligibilityCheckAvailability,
		optusWidgets.eligibilityCheckCarousel,
		optusWidgets.eligibilityCheckEditAddressDetails,
		optusWidgets.eligibilityCheckPickAddress,
		optusWidgets.enterNewPrepaidSIM,
		optusWidgets.emailVerification,
		optusWidgets.forgottenPasswordWidget,
		optusWidgets.guestCheckoutOptus,
		optusWidgets.globalErrorPage,
		optusWidgets.globalSearch,
		optusWidgets.globalSearchViewResults,
		optusWidgets.letsGetStarted,
		optusWidgets.kmsEvaluationWidget,
		optusWidgets.loginWidget,
		optusWidgets.manageCustomerInfo,
		optusWidgets.manageNotification,
		optusWidgets.migrationGlobalParamConfig,
		optusWidgets.multiContactError,
		optusWidgets.myOrders,
		optusWidgets.notificationType,
		optusWidgets.occupation,
		optusWidgets.oneTimePassword,
		optusWidgets.optusCare,
		optusWidgets.optusLogoutWidget,
		optusWidgets.optusLoginSimulatorWidget,
		optusWidgets.orderSummary,
		optusWidgets.paymentHistoryWidget,
		optusWidgets.payYourBill,
		optusWidgets.personalDetails,
		optusWidgets.portingNumberOptus,
		optusWidgets.prepaidActivationSummary,
		optusWidgets.prepaidSimConfirmation,
		optusWidgets.prepaidAccountSelectionOptusWidget,
		optusWidgets.prepaidMobileBalanceWidget,
		optusWidgets.prepaidDashboardTabsWidget,
		optusWidgets.recommendedActivities,
		optusWidgets.registration,
		optusWidgets.requestSIM,
		optusWidgets.selectItem,
		optusWidgets.serviceActivationUserUnauthorized,
		optusWidgets.serviceDetailsOptus,
		optusWidgets.serviceNickname,
		optusWidgets.shoppingCart,
		optusWidgets.submitOrder,
		optusWidgets.transactionSuccess,
		optusWidgets.viewServiceDetailsOverview,
		optusWidgets.serviceDetailsHeader,
		optusWidgets.updatePasswordWidget,
		optusWidgets.unbilledUsageWidget,
		optusWidgets.upgradeFee,
		optusWidgets.upgradeExistingService,
		optusWidgets.usageEvents,
		optusWidgets.userLoginInfo,
		optusWidgets.ipPaymentConfirmation,
		optusWidgets.shippingAddress,
		optusWidgets.simReplacement,
		optusWidgets.verifyUsernameWidget,
		optusWidgets.viewYourBillWidget,
		optusWidgets.viewYourBillGraphWidget,
		optusWidgets.viewYourBillDownloadWidget,
		optusWidgets.viewYourBillEventWidget,
		optusWidgets.yourContracts,
		singtelWidgets.accessorySingtelWidget,
		singtelWidgets.accountDashboardWidget,
		singtelWidgets.billPdfDownloadWidget,
		singtelWidgets.bookStoreAppointment,
		singtelWidgets.broadbandCatalog,
		singtelWidgets.cardPaymentMethodWidget,
		singtelWidgets.cartHeaderSingtel,
		singtelWidgets.changeBillPreferenceWidget,
		singtelWidgets.changePlanWidget,
		singtelWidgets.changeMobileNumberWidget,
		singtelWidgets.changeOwnership,
		singtelWidgets.checkAppointmentStatusWidget,
		singtelWidgets.checkoutFulfillmentDetails,
		singtelWidgets.consolidateAccountsWidget,
		singtelWidgets.crossSellingBannerWidget,
		singtelWidgets.customerProfileInfoWidget,
		singtelWidgets.deviceImageGallery,
		singtelWidgets.deviceTechSpec,
		singtelWidgets.emptyShoppingCartSingtel,
		singtelWidgets.energyOrderSummary,
		singtelWidgets.energyPlanCallback,
		singtelWidgets.energyPlanConfirmation,
		singtelWidgets.energyPlanRoi,
		singtelWidgets.fibreCoverageCheck,
		singtelWidgets.fibreInstallationFlow,
		singtelWidgets.layoutBox,
		singtelWidgets.giroPaymentMethodWidget,
		singtelWidgets.guestCheckout,
		singtelWidgets.identityDocumentUpload,
		singtelWidgets.inboxNotificationSingtel,
		singtelWidgets.loggedInUserGreetings,
		singtelWidgets.mainLineSelection,
		singtelWidgets.manageAddons,
		singtelWidgets.managePaymentCC,
		singtelWidgets.marketingTradeinBanner,
		singtelWidgets.mcssSingtelLoginWidget,
		singtelWidgets.miniCart,
		singtelWidgets.orderConfirmationSingtel,
		singtelWidgets.orderDetails,
		singtelWidgets.orderSummarySingtel,
		singtelWidgets.payBillsInfoWidget,
		singtelWidgets.payBillsWidget,
		singtelWidgets.paymentHistoryWidget,
		singtelWidgets.personalDataProtectionAct,
		singtelWidgets.phoneCatalogWithFilters,
		singtelWidgets.phonePromotions,
		singtelWidgets.postpaidNominationWidget,
		singtelWidgets.phoneDetails,
		singtelWidgets.planSummaryWidget,
		singtelWidgets.premiumAddons,
		singtelWidgets.prepaidTopupWidget,
		singtelWidgets.productConfiguration,
		singtelWidgets.relocateServicesWidget,
		singtelWidgets.redeemVoucherWidget,
		singtelWidgets.replaceSim,
		singtelWidgets.resumeServiceWidget,
		singtelWidgets.rewardAndVoucherBannerWidget,
		singtelWidgets.rrpAccessoriesCatalogWidget,
		singtelWidgets.rrpCommonFunctionalityWidget,
		singtelWidgets.rrpCustomerRegistrationWidget,
		singtelWidgets.rrpFulfillmentWidget,
		singtelWidgets.rrpImageGalaryWidget,
		singtelWidgets.rrpEmptyShoppingCartWidget,
		singtelWidgets.rrpOrderConfirmationWidget,
		singtelWidgets.rrpOrderSummaryWidget,
		singtelWidgets.rrpShoppingCartWidget,
		singtelWidgets.rrpVarientSelectorWidget,
		singtelWidgets.scSendFeedback,
		singtelWidgets.scTerminateEasyMobile,
		singtelWidgets.selectDeviceButton,
		singtelWidgets.selectFixedLine,
		singtelWidgets.selectNumber,
		singtelWidgets.selectPhoneFirstFlow,
		singtelWidgets.selectPlan,
		singtelWidgets.setTopBoxWidget,
		singtelWidgets.singtelBillExplainer,
		singtelWidgets.singtelBreadcrumb,
		singtelWidgets.suspendServiceWidget,
		singtelWidgets.shoppingCartSingtel,
		singtelWidgets.singtelInbox,
		singtelWidgets.singtelBillExplainer,
		singtelWidgets.singtelEnergyCatalog,
		singtelWidgets.singtelEnergyLoginWidget,
		singtelWidgets.singtelEnergyServiceDetails,
		singtelWidgets.singtelLoginSimulatorWidget,
		singtelWidgets.singtelLogoutWidget,
		singtelWidgets.singtelLogoutPageWidget,
		singtelWidgets.singtelOneClickWidget,
		singtelWidgets.singtelProductSubscribe,
		singtelWidgets.singtelPrepaidBuyflow,
		singtelWidgets.singtelTimeline,
		singtelWidgets.singtelTVGo,
		singtelWidgets.serviceAgreement,
		singtelWidgets.expressServiceActivation,
		singtelWidgets.tvCatalogSingtel,
		singtelWidgets.tvSelfHelp,
		singtelWidgets.updateEmailWidget,
		singtelWidgets.validateUrlParametersWidget,
		singtelWidgets.viewBillWidget,
		singtelWidgets.viewBillSummaryWidget,
		singtelWidgets.wifiMesh
	]
});

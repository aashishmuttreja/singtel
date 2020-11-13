(function(window) {
    'use strict';
    window._uxf_metadata = [{
            id: 'accessorySingtel',
            library: ['commerceExpPackage'],
            topics: {
                accessoriesTopic : {
                    uxfName: 'AccessoriesTopic'
                },
                productAvailability : {
                    uxfName: 'MtposStockAvailabilityTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                }                              
            }
        },
        {
            id: 'accountDashboard',
            library: ['careExpPackage','billingCareExpPackage','supportExpPackage', 'commerceExpPackage'],
            topics: {
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic',
                    callActions: {
                        'setInitDataForVm': {
                            includeLob1: ['VTV', 'MOB', 'TV'],
                            excludeLob1: ['VTV']
                        }
                    }
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isGetBillsList: false,
                            isGetBalance: true
                        }
                    }
                },
                productsAndServices: {
                    uxfName: 'ViewServiceDetailsContext'
                },
                productInContext: {
                    uxfName: 'ImplProductInContext'
                },
                customerInContext: {
                    uxfName: 'ImplCustomerInContext'
                },
                personInfoActions: {
                    uxfName: 'personInfoActionsTopic'
                },
                updatePersonInfo: {
                    uxfName: 'personInfoUpdateTopic'
                },
                supportCase: {
                    uxfName: 'CreateCaseTopic'
                },
                easyMobileTweak: {
                    uxfName: 'TweakEasyMobilePlanTopic'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },
                reContractTopic: {
                    uxfName: 'ReContractTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                },
                contractDetails: {
                    uxfName: 'ReContractDetailsTopic'
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                },
                transferOwnershipTopic: {
                    uxfName: 'GetAddressTopic'  
                },
                changeOwnershipDonorTopic: {
                    uxfName: 'ChangeOwnershipDonorTopic'//put the topic name
                },
                checkPendingOnPendingOrderTopic: {
                    uxfName: 'CheckPendingOnPendingOrderTopic'
                },
                energyTopic: {
                    uxfName: 'ImplSingtelEnergyTopic'
                }
            }
        }, {
            id:'billPdfDownload',
            library: ['careExpPackage'],
            topics: {
                billPdfDownloadTopic: {
                    uxfName: 'BillPdfDownloadTopic'
                }
            }
        },{
            id: 'bookStoreAppointment',
            library: ['careExpPackage', 'commerceExpPackage', 'supportExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },
                bookCallBackAppointment: {
                    uxfName: 'bookCallBackAppointmentViewTopic'
                },
                bookStoreAppointment: {
                    uxfName: 'bookStoreAppointmentViewTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                singtelShopEAppointmentTopic: {
                    uxfName: 'SingtelShopEAppointmentTopic'
                }            
            }
        },{
            id: 'broadbandCatalog',
            library: ['commerceExpPackage','billingCareExpPackage', 'careExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                validateSessionToken: {
                    uxfName: 'ValidateSessionTokenTopic'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                contractDetails: {
                    uxfName: 'ReContractDetailsTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                submitRegisterInterestTopic: {
                    uxfName: 'SubmitRegisterInterestTopic'
                },
                checkPendingOnPendingOrderTopic: {
                    uxfName: 'CheckPendingOnPendingOrderTopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                },
                networkCoverageTopic: {
                    uxfName: 'GetNetworkCoverageTopic'
                }
            }
        }, {
            id: 'cartHeaderSingtel',
            library: ['careExpPackage','commerceExpPackage'],
            topics: {
                cartHeaderTopic: {
                    uxfName: 'GetCartOrderItemsTopic'
                },
                logoutAction: {
                    uxfName: 'ImplLogoutActionTopic'
                },
                gaTopicData: {
                    uxfName: 'GATopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                }
            }
        }, {
            id: 'changeMobileNumber',
            library: ['careExpPackage','billingCareExpPackage'],
            topics: {
                changeMobileNum: {
                    uxfName: 'changeMobileNumberTopic'
                },
                accountSummary:{
                    uxfName:'ViewBillingAccountSummaryTopic'
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic'
                },
                productInContext: {
                    uxfName: 'ImplProductInContext'
                },
                customerInContext: {
                    uxfName: 'ImplCustomerInContext'
                }
            }
        },{
            id: 'prepaidTopup',
            library: ['billingCareExpPackage'],
            topics: {
                prepaidTopupData: {
                    uxfName: 'PrepaidTopupTopic'
                },
                onepassInfo: {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'changePlan',
            library: ['commerceExpPackage', 'careExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                addressRetrieve : {
                    uxfName: 'GetAddressTopic'
                },
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                assignedProductInContext: {
                    uxfName: 'ImplProductInContext'  
                },
                assignedProduct: {
                    uxfName: 'ImplRetreiveAssignedProductDetailsTopic'  
                },
                changePlanTopic: {
                    uxfName: 'ChangePlanTopic'  
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                },
                onepassInfo: {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                notificationTopic: {
                    uxfName: 'NotificationTopic'
                }
            }
        },{
            id: 'checkAppointmentStatus',
            library: ['careExpPackage'],
            topics: {
                appointmentStatus: {
                    uxfName: 'AppointmentStatusTopic'
                },
                appointmentInContext: {
                    uxfName: 'AppointmentInContextTopic'
                }
            }
        },{
            id: 'checkoutFulfillmentDetails',
            library: ['careExpPackage','commerceExpPackage', 'supportExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                addressRetrieve : {
                    uxfName: 'GetAddressTopic'
                },
                /*accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },*/
                orderFullfilment : {
                    uxfName: 'CheckOutFulfillmentDetailsTopicView'
                },
                orderFullfilmentUpdateAction : {
                    uxfName: 'CheckOutFulfillmentDetailsTopicAction'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },                
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                selfCollectionTimeSlot: {
                    uxfName: 'SelfCollectionTimeSlotsTopic'
                },
                dispatchAppointmentSlot: {
                    uxfName: 'LogisticsDispatchAppointmetSlotTopic'
                },
                idDocumentsUpload : {
                    uxfName: 'IdDocumentsUploadDataTopic'
                },
                idDocumentsUploadAction : {
                    uxfName: 'IdDocumentsUploadActionTopic'
                },
                shoppingCartSummary: {
                    uxfName: 'shoppingCartViewTopic'
                },
                technicalAppointment: {
                    uxfName: 'ScheduleTechnicalAppointmentTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                reserveEquipment: {
                    uxfName: 'ReserveAllocatePOSEquipmentsTopic'
                },
                mtposReservationTopicAction: {
                    uxfName: 'ExtendReservationTopic'
                },
                selfCollectNowTopic: {
                    uxfName: 'SelfCollectNowTopic'
                },
                singtelShopEAppointmentTopic: {
                    uxfName: 'SingtelShopEAppointmentTopic'
                },
                consolidateAppointmentTopic: {
                    uxfName: 'ConsolidateAppointmentTopic'
                }
            }
        }, {
            id: 'singtelBreadcrumb',
            library: ['commerceExpPackage'],
            topics: {
                breadcrumbTopic: {
                    uxfName: 'ImplBreadcrumbTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        },{
            id: 'consolidateAccounts',
            library: ['careExpPackage', 'billingCareExpPackage', 'supportExpPackage', 'commerceExpPackage'],
            topics: {
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic'
                },
                supportCase: {
                    uxfName: 'CreateCaseTopic'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },
                consolidateAccounsAction: {
                    uxfName: 'ConsolidateAccountsTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        }, {
            id: 'loggedInUserGreetings',
            library: ['careExpPackage', 'billingCareExpPackage'],
            topics: {
                viewPersonInfo:{
                    uxfName: 'personInfoViewTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                onepassAction :{
                    uxfName: 'OnePassDetailsActionTopic'
                }
            }
        },
        {
            id: 'colorCapacitySelector',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                miniCart : {
                    uxfName: 'MiniCartInContextTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                productAvailability : {
                    uxfName: 'MtposStockAvailabilityTopic'
                },
                whiteListTopic: {
                    uxfName: 'WhiteListTopic'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                }
            }
        },
        {
            id: 'crossSellingBanner',
            library: ['commerceExpPackage'],
            topics: {              
                cartData: {
                    uxfName: 'ImplOrderInContext'
                }
            }
        },
         {
            id: 'customerProfileInfo',
            library: ['careExpPackage', 'billingCareExpPackage'],
            topics: {
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                updatePersonInfo: {
                    uxfName: 'personInfoUpdateTopic'
                },
                personInfoActions: {
                    uxfName: 'personInfoActionsTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }, 
                emailVerification :{
                    uxfName : 'EmailVerificationTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            },
            vmName: 'businesswidget/repository_l9_common/common/viewmodel/business/ViewUpdateCustomerProfileWidgetViewModel',
            vmName2: 'businesswidget/repository_l9_common/common/viewmodel/viewServiceDetailsViewModel'
        },{
            id: 'changeBillPreference',
            library: ['billingCareExpPackage','careExpPackage'],
            topics: {
                changeBillPreference: {
                    uxfName: 'ChangeBillPreferenceTopic'
                },
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        },{
            id: 'deviceImageGallery',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                }
            }
        },{
            id: 'deviceTechSpec',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                }
            }
        },{
            id: 'energyPlanCallback',
            library: ['commerceExpPackage'],
            topics: {
                energyEmailNotifyTopic: {
                    uxfName: 'SingtelEnergyEmailTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                }
            }
        },{
            id: 'energyPlanConfirmation',
            library: ['commerceExpPackage'],
            topics: {
                singtelEnergyConfirmation: {
                    uxfName: 'SingtelEnergyOrderConfirmationTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                }
            }
        },{
            id: 'energyPlanRoi',
            library: ['commerceExpPackage'],
            topics: {
                energyEmailNotifyTopic: {
                    uxfName: 'SingtelEnergyEmailTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                }
            }
        },{
            id: 'energyOrderSummary',
            library: ['commerceExpPackage'],
            topics: {
                energySummary: {
                    uxfName: 'SingtelEnergyOrderSummaryTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                }
            }
        },{
            id: 'fibreCoverageCheck',
            library: ['commerceExpPackage'],
            topics: {
                /*ScheduleTechnicalAppointmentTopic: {
                    uxfName: 'ScheduleTechnicalAppointmentTopic'
                },*/
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                networkCoverageTopic: {
                    uxfName: 'GetNetworkCoverageTopic'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                worryFreeTopic : {
                    uxfName: 'WorryFreeTopic'
                }

            }
        }, {
            id: 'fibreInstallationFlow',
            library: ['commerceExpPackage', 'careExpPackage', 'billingCareExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                },
                networkCoverageTopic: {
                    uxfName: 'GetNetworkCoverageTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                contractDetails: {
                    uxfName: 'ReContractDetailsTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                cartHeaderTopic: {
                    uxfName: 'GetCartOrderItemsTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                checkPendingOnPendingOrderTopic: {
                    uxfName: 'CheckPendingOnPendingOrderTopic'
                },
                expressCheckout: {
                    uxfName: 'ExpressCheckoutTopic'
                },
                worryFreeTopic : {
                    uxfName: 'WorryFreeTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'giroPaymentMethod',
            library: ['billingCareExpPackage','careExpPackage'],
            topics: {
                payMeansInfo :{
                    uxfName: 'PayMeansTopic'
                }
            }
        },{
            id: 'guestCheckout',
            library: ['careExpPackage', 'commerceExpPackage'],
            topics: {
                deviceIdAndPlanId:{
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                guestCheckout: {
                    uxfName: 'GuestCheckoutTopicData'
                },
                guestCheckoutAction: {
                    uxfName: 'GuestCheckoutTopicAction'
                },
                addressRetrieve : {
                    uxfName: 'GetAddressTopic'
                },
                tvSubscription: {
                    uxfName: 'TvSubscriptionTopic'
                },
                shoppingCartSummary: {
                    uxfName: 'shoppingCartViewTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                reserveEquipment: {
                    uxfName: 'ReserveAllocatePOSEquipmentsTopic'
                },
                shoppingCartSummaryAction: {
                    uxfName: 'shoppingCartActionTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                worryFreeTopic : {
                    uxfName: 'WorryFreeTopic'
                }
            }
        }, {
            id: 'identityDocumentUpload',
            library: ['commerceExpPackage'],
            topics: {
                IdDocumentsUploadDataTopic : {
                    uxfName: 'IdDocumentsUploadDataTopic'
                },
                IdDocumentsUploadActionTopic : {
                    uxfName: 'IdDocumentsUploadActionTopic'
                }
            }
        },{
            id: 'inboxNotificationSingtel',
            library: ['commerceExpPackage'],
            topics: {
                inboxTopic : {
                    uxfName: 'InboxTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'mainLineSelection',
            library: ['commerceExpPackage', 'careExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                mobileShare: {
                    uxfName: 'MobileShareTopic'
                },
                miniCart : {
                    uxfName: 'MiniCartViewModelTopics'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                }
            }
        },{
            id: 'managePaymentCC',
            library: ['careExpPackage', 'billingCareExpPackage'],
            topics: {
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic'
                },
                payMeansInfo :{
                    uxfName: 'PayMeansTopic'
                }
            }
        },
        {
            id: 'marketingTradeinBanner',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                }
            }
        },
        {
            id: 'mcssSingtelLogin',
            library: ['billingCareExpPackage'],
            topics: {
                loginData: {
                    uxfName: 'ImplLoginViewTopic'
                },
                loginAction: {
                    uxfName: 'ImplLoginActionTopic'
                }
            }
        },
        {
            id: 'miniCart',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                miniCart : {
                    uxfName: 'MiniCartViewModelTopics'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                }

            }
        },
        {
            id: 'orderSummarySingtel',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                orderSummary: {
                    uxfName: 'ViewExistingOrderSummaryWidgetTopic'
                },
                orderSummaryUpdate: {
                    uxfName: 'ExistingOrderSummaryWidgetTopic'
                },
                orderSummaryAction: {
                    uxfName: 'ActionsExistingOrderSummaryWidgetTopic'
                },
                paymentGateway:{
                    uxfName :'PaymentGatewayTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                onepassInfo: {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                addressRetrieve : {
                    uxfName: 'GetAddressTopic'
                },
                whiteListTopic: {
                    uxfName: 'WhiteListTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                mtposReservationTopicAction: {
                    uxfName: 'ExtendReservationTopic'
                },
                expressCheckout: {
                    uxfName: 'ExpressCheckoutTopic'
                }
            }
        }, {
            id: 'orderConfirmationSingtel',
            library: ['commerceExpPackage','supportExpPackage','careExpPackage'],
            topics: {
                orderConfirmation: {
                    uxfName: 'OrderConfirmationTopicViewModel'
                },
                supportCase: {
                    uxfName: 'CreateCaseTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                paymentGateway:{
                    uxfName :'PaymentGatewayTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                }
            }
        }, 
        {
            id: 'orderDetails',
            library: ['careExpPackage'],
            topics: {
                orderDetailsInfo :{
                    uxfName : 'OrderDetailsTopic'
                }
            }
        },{
            id: 'paymentHistory',
            library: ['careExpPackage', 'billingCareExpPackage'],

            topics: {
                paymentDetails : {uxfName: 'PaymentHistoryTopicRead'},
                paymentHistoryActions : {uxfName: 'PaymentHistoryTopicWrite'},
                implAccountInContextTopic : {uxfName: 'AccountInContextTopic'},
                customerInContext: {
                    uxfName: 'ImplCustomerInContext'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        }, {
            id: 'payBills',
            library: ['billingCareExpPackage', 'careExpPackage'],
            topics: {
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isGetBillsList: false,
                            isGetBalance: true
                        }
                    }
                },
                viewBillActions: {
                    uxfName: 'ViewPayBillTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isNewConfirmationAPICall: true
                        }
                    }
                },
                PayMeansInfo :{
                    uxfName: 'PayMeansTopic'
                },
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        },{
            id: 'payBillsInfo',
            library: ['careExpPackage','billingCareExpPackage'],
            topics: {
                payBillActions: {
                    uxfName: 'ViewPayBillTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isNewConfirmationAPICall: true
                        }
                    }
                },
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'personalDataProtectionAct',
            library: ['commerceExpPackage'],
            topics: {
                personalDataProtectionAct: {
                    uxfName: 'personalDataProtectionActTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'phoneCatalogWithFilters',
            library: ['commerceExpPackage', 'supportExpPackage'],
            topics: {
                 miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                bookStoreAppointment: {
                    uxfName: 'bookStoreAppointmentViewTopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                }
            }
        },{
            id: 'planSummary',
            library: ['commerceExpPackage', 'careExpPackage'],
            topics: {
                assignedProductInContext: {
                    uxfName: 'ImplProductInContext'  
                },
                assignedProduct: {
                    uxfName: 'ImplRetreiveAssignedProductDetailsTopic'  
                }
            }
        },{
            id: 'postpaidNomination',
            library: ['careExpPackage'],
            topics: {
                postPaidNomination : {
                    uxfName: 'KeyNominationTopic'
                }
            }
        },
        {
            id: 'premiumAddons',
            library: ['commerceExpPackage'],
            topics: {
                premiumAddonTopic : {
                    uxfName: 'PremiumAddonsTopic'
                }
            }
        },
        {
            id: 'productConfiguration',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                productConfiguration : {
                    uxfName: 'ProductConfiguration'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                }
            }
        },{
            id: 'redeemVoucher',
            library: ['careExpPackage', 'commerceExpPackage'],
            topics: {
                voucherDetails: {
                    uxfName: 'VoucherTopic'
                },
                reContractTopic: {
                    uxfName: 'ReContractTopic'
                }
            }
        },{
            id: 'relocateMyFixedServices',
            library: ['careExpPackage','billingCareExpPackage','supportExpPackage'],
            topics: {
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },
                productsAndServices: {
                    uxfName: 'ViewServiceDetailsContext'
                },
                productInContext: {
                    uxfName: 'ImplProductInContext'  
                },
                relocateMyServicesDetails: {
                    uxfName: 'RelocateMyServicesTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isCreateCase: false,
                            isSendNotificationForAnonymousUser: true
                        }
                    }
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },
                supportCase: {
                    uxfName: 'CreateCaseTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                }
            }
        },{
            id: 'replaceSim',
            library: ['commerceExpPackage', 'careExpPackage'],
            topics: {
                assignedProductInContext: {
                    uxfName: 'ImplProductInContext'  
                },
                assignedProduct: {
                    uxfName: 'ImplRetreiveAssignedProductDetailsTopic'  
                },
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                personInfoActions: {
                    uxfName: 'personInfoActionsTopic'
                },
                personInfoupdate: {
                    uxfName: 'personInfoUpdateTopic'
                },
                dispatchAppointmentSlot: {
                    uxfName: 'LogisticsDispatchAppointmetSlotTopic'
                },
                changeSimPlan :{
                    uxfName: 'ChangeSimTopic'
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                }
            }
        },{
            id: 'resumeService',
            library: ['careExpPackage', 'commerceExpPackage'],
            topics: {
                resumeServices : {
                    uxfName: 'resumeServiceTopic'
                },
                /*accountSummary:{
                    uxfName:'ViewBillingAccountSummaryTopic'
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic'
                }*/
            }
        },{
            id: 'rewardAndVoucherBanner',
            library: ['careExpPackage','billingCareExpPackage'],
            topics: {
                voucherInfo: {
                    uxfName: 'VoucherTopic'
                }
            }
        },{
            id: 'rrpAccessoriesCatalog',
            library: ['commerceExpPackage'],
            topics: {
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'rrpVarientSelector',
            library: ['commerceExpPackage'],
            topics: {
                productAvailability : {
                    uxfName: 'MtposStockAvailabilityTopic'
                },
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic',
                    callActions: {
                        'setInitDataForVm': {
                            retrieveOrdersOnLoad: true
                        }
                    }
                }
            }
        },{
            id: 'rrpCustomerRegistration',
            library: ['commerceExpPackage'],
            topics: {
                rrpSendOTPTopic: {
                    uxfName: 'RRPCustomerRegTopic'
                },
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic'
                }
            }
        },{
            id: 'rrpShoppingCart',
            library: ['commerceExpPackage'],
            topics: {
                productAvailability : {
                    uxfName: 'MtposStockAvailabilityTopic'
                },
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic',
                    callActions: {
                        'setInitDataForVm': {
                            retrieveOrdersOnLoad: true,
                            withQuote: true,
                            orderSummary: false
                        }
                    }
                },
                rrpShoppingCartTopic: {
                    uxfName: 'RRPShoppingCartTopic'
                },
                orderConfirmation: {
                    uxfName: 'OrderConfirmationTopicViewModel'
                }
            }
        },{
            id: 'rrpCommonFunctionality',
            library: ['commerceExpPackage'],
            topics: {
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic'
                },
                rrpShoppingCartTopic: {
                    uxfName: 'RRPShoppingCartTopic'
                }
            }
        },
        {
            id: 'rrpFulfillment',
            library: ['commerceExpPackage'],
            topics: {
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic'
                },
                addressRetrieve : {
                    uxfName: 'GetAddressTopic'
                },
                rrpDeliveryAppointmentManager: {
                    uxfName: 'RRPAppointmentManagerTopic'
                },
                rrpPopAppointmentManager: {
                    uxfName: 'RRPAppointmentManagerTopic'
                },
                rrpComAppointmentManager: {
                    uxfName: 'RRPAppointmentManagerTopic'
                },
                rrpReservationAppointmentManager: {
                    uxfName: 'RRPAppointmentManagerTopic'
                },
                rrpOrderDeliveryDetailsManager: {
                    uxfName: 'RRPAppointmentManagerTopic'
                }
            }
        },{
            id: 'rrpOrderSummary',
            library: ['commerceExpPackage'],
            topics: {
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic',
                    callActions: {
                        'setInitDataForVm': {
                            retrieveOrdersOnLoad: false,
                            withQuote: true,
                            orderSummary: true
                        }
                    }
                },
                rrpPaymentGatewayDetails:{
                    uxfName :'RRPPaymentGatewayTopic'
                }
            }
        },{
            id: 'rrpOrderConfirmation',
            library: ['commerceExpPackage'],
            topics: {
                rrpOrderTopic: {
                    uxfName: 'RRPOrderTopic',
                    callActions: {
                        'setInitDataForVm': {
                            retrieveOrdersOnLoad: true,
                            withQuote: false
                        }
                    }
                },
                rrpPaymentGatewayDetails:{
                    uxfName :'RRPPaymentGatewayTopic'
                },
                rrpShoppingCartTopic: {
                    uxfName: 'RRPShoppingCartTopic'
                }
            }
        },{
            id: 'suspendService',
            library: ['careExpPackage','billingCareExpPackage','commerceExpPackage'],
            topics: {
                suspendServices: {
                    uxfName: 'suspendServiceTopic'
                },
                accountSummary:{
                    uxfName:'ViewBillingAccountSummaryTopic'
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic'
                },
                implUserContext : {
                    uxfName: 'ImplUserContext'
                },
                customerInContext: {
                    uxfName: 'ImplCustomerInContext'
                },
                productsAndServices: {
                    uxfName: 'ViewServiceDetailsContext'
                },
                assignedProduct: {
                    uxfName: 'ImplRetreiveAssignedProductDetailsTopic'
                },
                assignedProductInContext: {
                    uxfName: 'ImplProductInContext'
                }
            }
        },{
            id: 'scSendFeedback',
            library: ['supportExpPackage'],
            topics: {
                sendFeedbackTopic: {
                    uxfName: 'SendFeedbackTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        }, {
            id: 'scTerminateEasyMobile',
            library: ['supportExpPackage'],
            topics: {
                sendFeedbackTopic: {
                    uxfName: 'SendFeedbackTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        }, {
            id: 'selectDeviceButton',
            library: ['commerceExpPackage', 'billingCareExpPackage', 'careExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                miniCart : {
                    uxfName: 'MiniCartInContextTopic'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                whiteListTopic: {
                    uxfName: 'WhiteListTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                }, 
                clearContextTopic: {
                    uxfName : 'clearContextInContextTopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                }

            }
        },
        {
            id: 'selectFixedLine',
            library: ['careExpPackage', 'commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                selectNumber: {
                    uxfName: 'SelectNumberTopic'
                },
                miniCart : {
                    uxfName: 'MiniCartViewModelTopics'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                cartHeaderTopic: {
                    uxfName: 'GetCartOrderItemsTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                worryFreeTopic : {
                    uxfName: 'WorryFreeTopic'
                }
            }
        }, {
            id: 'selectPhoneFirstFlow',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                miniCart : {
                    uxfName: 'MiniCartInContextTopic'
                },
                bookStoreAppointment: {
                    uxfName: 'bookStoreAppointmentViewTopic'
                }                        
            }   
        }, {
            id: 'selectPlan',
            library: ['commerceExpPackage', 'careExpPackage', 'billingCareExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                onePassDetails: {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                miniCart : {
                    uxfName: 'MiniCartViewModelTopics'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                }, 
                easyMobileSave: {
                    uxfName: 'EasyMobileTweakingInContextTopic'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                reContractTopic: {
                    uxfName: 'ReContractTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                validateSessionToken: {
                    uxfName: 'ValidateSessionTokenTopic'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                submitRegisterInterestTopic: {
                    uxfName: 'SubmitRegisterInterestTopic'
                },
                checkPendingOnPendingOrderTopic: {
                    uxfName: 'CheckPendingOnPendingOrderTopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                }
            }
        }, {
            id: 'selectNumber',
            library: ['careExpPackage', 'commerceExpPackage', 'billingCareExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                selectNumber: {
                    uxfName: 'SelectNumberTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                miniCart : {
                    uxfName: 'MiniCartViewModelTopics'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                numberPortinView: {
                    uxfName: 'NumberPortinTopicView'
                },
                numberPortinAction: {
                    uxfName: 'NumberPortinTopicActions'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                loginData: {
                    uxfName: 'ImplLoginViewTopic'
                },
                loginAction: {
                    uxfName: 'ImplLoginActionTopic'
                },
                onePassDetails: {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                reContractTopic: {
                    uxfName: 'ReContractTopic'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                cartHeaderTopic: {
                    uxfName: 'GetCartOrderItemsTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                getOrderInContextDataTopic: {
                    uxfName: 'GetOrderInContextDataTopic'
                },
                checkPendingOnPendingOrderTopic: {
                    uxfName: 'CheckPendingOnPendingOrderTopic'
                },
                worryFreeTopic : {
                    uxfName: 'WorryFreeTopic'
                },
                addressRetrieve : {
                    uxfName: 'GetAddressTopic'
                },
                prepaidTopic: {
                    uxfName: 'PrepaidServicesTopic'
                },
                worryFreeContext: {
                    uxfName: 'WorryFreeContextTopic'
                }
            }
        }, {
            id: 'setTopBox',
            library: ['commerceExpPackage'],
            topics: {               
                setTopBoxData: {
                    uxfName: 'SetTopBoxTopic'
                }
            }
        }, {
            id: 'shoppingCartSingtel',
            library: ['commerceExpPackage', 'careExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                shoppingCartSummary: {
                    uxfName: 'shoppingCartViewTopic'
                },
                shoppingCartSummaryAction: {
                    uxfName: 'shoppingCartActionTopic'
                },
                miniCartSave: {
                    uxfName: 'MiniCartInContextTopic'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                voucherTopic: {
                    uxfName: 'VoucherTopic'
                },
                tradeInTopic: {
                    uxfName: 'TradeInTopic'
                },
                tvSubscription: {
                    uxfName: 'TvSubscriptionTopic'
                },
                reserveEquipment: {
                    uxfName: 'ReserveAllocatePOSEquipmentsTopic'
                },
                contractDetails: {
                    uxfName: 'ReContractDetailsTopic'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                reContractTopic: {
                    uxfName: 'ReContractTopic'
                },
                worryFreeTopic : {
                    uxfName: 'WorryFreeTopic'
                },
                onePassDetails: {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        }, {
            id: 'singtelBillExplainer',
            library: ['commerceExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                }
            }
        },{
            id: 'singtelEnergyCatalog',
            library: ['commerceExpPackage'],
            topics: {
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                }
            }
        },{
            id: 'singtelEnergyLogin',
            library: ['commerceExpPackage'],
            topics: {
                singtelEnergy: {
                    uxfName: 'SingtelEnergyTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                }
            }
        }, {
            id: 'singtelEnergyServiceDetails',
            library: ['commerceExpPackage'],
            topics: {
                singtelEnergyDetails: {
                    uxfName: 'SingtelEnergyLoadServicesTopic'
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                },
                energyOrdering: {
                    uxfName: 'SingtelEnergyOrderingTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                }
            }
        },{
            id: 'singtelInbox',
            library: ['careExpPackage','commerceExpPackage'],
            topics: {
                inboxTopic : {
                    uxfName: 'InboxTopic'
                },
                viewPersonInfo:{
                    uxfName: 'personInfoViewTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        }, {
            id: 'singtelLoginSimulator',
            library: ['billingCareExpPackage'],
            topics: {
                loginData: {
                    uxfName: 'ImplLoginViewTopic'
                },
                loginAction: {
                    uxfName: 'ImplLoginActionTopic'
                },
                onePassDetails: {
                    uxfName: 'OnePassDetailsViewTopic'
                }
            }
        },{
            id: 'singtelOneClick',
            library: ['commerceExpPackage'],
            topics: {
                oneClick: {
                    uxfName: 'SingtelOneClickViewModelTopic'
                },
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                miniCart : {
                    uxfName: 'MiniCartViewModelTopics'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                },
                productAvailability : {
                    uxfName: 'MtposStockAvailabilityTopic'
                }
            }
        },  {
            id: 'tvCatalogSingtel',
            library: ['commerceExpPackage', 'billingCareExpPackage', 'careExpPackage'],
            topics: {
                deviceIdAndPlanId: {
                    uxfName: 'DeviceIdAndPlanIdInContextTopic'
                },
                planAndDevice: {
                    uxfName: 'PlanAndDeviceIdCatalogueViewModel'
                },
                miniCartSave : {
                    uxfName: 'MiniCartInContextTopic'
                },
                orderContext: {
                    uxfName: 'ImplOrderInContext'
                },
                validateSessionToken: {
                    uxfName: 'ValidateSessionTokenTopic'
                },
                loginStatusTopic: {
                    uxfName: 'HandleLoginStatusTopic'
                },
                contractDetails: {
                    uxfName: 'ReContractDetailsTopic'
                },
                clearContextTopic: {
                    uxfName: 'clearContextInContextTopic'
                },
                submitRegisterInterestTopic: {
                    uxfName: 'SubmitRegisterInterestTopic'
                },
                individualInContext : {
                    uxfName: 'ImplIndividualInContext'
                },
                checkPendingOnPendingOrderTopic: {
                    uxfName: 'CheckPendingOnPendingOrderTopic'
                },
                dmpCommerceTopic: {
                    uxfName: 'GetDmpCommerceTopic'
                },
                networkCoverageTopic: {
                    uxfName: 'GetNetworkCoverageTopic'
                }
            }
        },{
            id: 'tvSelfHelp',
            library: ['commerceExpPackage'],
            topics: {
                tvSelect :{
                    uxfName : 'TvSelfHelpTopic'
                }
            }
        },{
            id: 'validateUrlParameters',
            library: ['careExpPackage'],
            topics: {
                emailVerification :{
                    uxfName : 'EmailVerificationTopic'
                }
            }
        },{
            id: 'viewBill',
            library: ['careExpPackage', 'billingCareExpPackage'],
            topics: {
                accountInContext: {
                    uxfName: 'AccountInContextTopic'
                },
                billSummaryCharges: {
                    uxfName: 'BillSummaryChargesTopic'
                },
                billInContext: {
                    uxfName: 'BillInContextTopic'
                },
                billDetails: {
                    uxfName: 'ViewBillCurrentChargesTopic'
                },
                usageDetails: {
                    uxfName: 'usageDetailsTopic'
                }
            },
            vmName1: 'businesswidget/repository_l9_common/common/viewmodel/BillSummaryChargesViewModel',
            vmName2: 'businesswidget/repository_l9_common/common/viewmodel/contextTopics/BillingDetailsTopicViewModel',
            vmName3: 'businesswidget/repository_l9_common/common/viewmodel/BillSummaryChargesViewModel',
            vmName4: 'businesswidget/repository_l9_common/common/viewmodel/ViewBillCurrentChargesViewModel'
        }, {
            id: 'viewBillSummary',
            library: ['careExpPackage', 'supportExpPackage', 'billingCareExpPackage', 'commerceExpPackage'],
            topics: {
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isGetBillsList: true,
                            isGetBalance: true
                        }
                    }
                },
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic'
                },
                supportCase: {
                    uxfName: 'CreateCaseTopic'
                },
                billInContext: {
                    uxfName: 'BillInContextTopic'
                },
                ebillPreference:{
                    uxfName :'ChangeEbillPreferenceTopic'
                },
                personInfoActions: {
                    uxfName: 'personInfoActionsTopic'
                },
                updatePersonInfo: {
                    uxfName: 'personInfoUpdateTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                }
            }
        },{
            id: 'view-bill-summary',
            library: 'careExpPackage',
            widgetId: 'billingAccountSummaryWidget',

            topics: {
                accountSummary: {
                    uxfName: 'BillingAccountSummaryTopic'
                }
            },

            viewModel: 'businesswidget/repository_l9_common/common/viewmodel/business/BillingAccountSummaryViewModel'
        }, {
            id: 'singtelLogout',
            library: ['careExpPackage'],
            topics: {
                logoutAction: {
                    uxfName: 'ImplLogoutActionTopic'
                }
            }
        }, {
            id: 'singtelTimeline',
            library: ['careExpPackage', 'commerceExpPackage'],
            topics: {
                timeLineData: {
                    uxfName: 'ImplTimelineTopic',
                    callActions: {
                        'setInitDataForVm': {
                            getOrderDetails: true
                        }
                    }
                },
                dispatchAppointmentSlot: {
                    uxfName: 'LogisticsDispatchAppointmetSlotTopic'
                },
                fsAppointmentSlotTopic: {
                    uxfName: 'ImplFSAppointmentTopic'
                },
                userContext: {
                    uxfName: 'ImplUserContext'
                },
                appointmentInContext: {
                    uxfName: 'AppointmentInContextTopic'
                },
                viewPersonInfo: {
                    uxfName: 'personInfoViewTopic'
                },
                onepassInfo : {
                    uxfName: 'OnePassDetailsViewTopic'
                },
                selfCollectionTimeSlot: {
                    uxfName: 'SelfCollectionTimeSlotsTopic'
                }
            }
        },{
            id: 'updateEmail',
            library: ['careExpPackage'],
            topics: {
                updateEmailData: {
                    uxfName: 'UpdateVerifyEmailTopic'
                },
                errorTopic: {
                    uxfName: 'GlobalErrorTopic'
                }
            }
        }, {
            id: 'manageAddons',
            library: ['careExpPackage','billingCareExpPackage','supportExpPackage', 'commerceExpPackage'],
            topics: {
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic',
                    callActions: {
                        'setInitDataForVm': {
                            excludeLob1: ['VTV']
                        }
                    }
                },
                billingSummaryActions: {
                    uxfName: 'ActionsBillingAccountSummaryTopic'
                },
                productsAndServices: {
                    uxfName: 'ViewServiceDetailsContext'
                },
                customerInContext: {
                    uxfName: 'ImplCustomerInContext'
                },
                assignedProductInContext: {
                    uxfName: 'ImplProductInContext'
                },
                assignedProduct: {
                    uxfName: 'ImplRetreiveAssignedProductDetailsTopic'
                },
                addonActionsReadWrite: {
                    uxfName: 'AddOnsRetrieveUpdateConfigurationReadWrite'
                },
                addonActionsRead: {
                    uxfName: 'AddOnsRetrieveUpdateConfigurationRead'
                },
                addonActionsWrite: {
                    uxfName: 'AddOnsRetrieveUpdateConfigurationWrite'
                },
                expressOtpReadWrite: {
                    uxfName: 'ImplExpressOTPReadWriteTopic'
                },
                accountInContext: {
                    uxfName: 'AccountInContextTopic'
                }
            }
        },
        {
            id: 'wifiMesh',
            library: ['commerceExpPackage'],
            topics: {
                wifiMesh : {
                    uxfName: 'WifiMeshTopic'
                }
            }
        },
        {
            id: 'changeOwnership',
            library: ['careExpPackage','commerceExpPackage'],
            topics: {
                changeOwnershipRecipientTopic: {
                    uxfName: 'changeOwnershipRecipientTopic'
                },
                accountSummary: {
                    uxfName: 'ViewBillingAccountSummaryTopic',
                    callActions: {
                        'setInitDataForVm': {
                            isGetBillsList: false,
                            isGetBalance: true
                        }
                    }

                },
                retrieveSDPAddress: {
                    uxfName: 'GetAddressTopic'
                }
            }
        },
		{
            id: 'serviceAgreement',
            library: ['commerceExpPackage'],
            topics: {
                documentListTopic: {
                    uxfName: 'documentListTopic'
                }
            }

        }
		
    ];
}(window));
define(['singtelLogoutBundle'], function () { return {
name: 'singtelLogout',
templates: {
	singtelLogoutStateOneView: {"t":[],"v":3}
},
widget: define('singtelLogout', [
	'lodash-compat',
	'BaseWidget',
	'ractive',
	'RactiveHelpers',
	'ConfigStrings'
], function (_, BaseWidget, Ractive, RactiveHelpers, ConfigStrings) {

	var Widget = function (options) {
		var self = this;
		self.ractive = new BaseWidget(options);
		window.luxEvents.listenTo('luxComponents', function (result) {
			if (result.eventName === 'lux_logout') {
				this.logoutUser();
			}
		}.bind(self));

		Ractive.defaults.on('data_fencing_error', function () {
			this.logoutUser();
		}.bind(self));
	
		if (window.location.href.indexOf('/content/singtel/en') === -1) {
			self.ractive.observe('logoutAction.logoutVmStatus', function (logoutVmStatus) {
				if (logoutVmStatus === 'initialized') {
					this.onWidgetInit();
				} else if (logoutVmStatus === 'forceLogout') {
					if (window.isSecurePage) {
						this.logoutUser();
					}
				}
			}.bind(this));
		}
	};

	Widget.prototype = {
		logoutUser: function () {
			this.logoutFromApplication();
		},
		onWidgetInit: function () {
			var isLoginPage = window.location.href.indexOf('/personal/my-account/login') !== -1;
			if (isLoginPage) {
			
				this.clearUxfSession();
			} else {
			
				if (window.isSecurePage) {
					this.interval = setInterval(function () {
						this.clearUxfSession();
					}.bind(this), ConfigStrings.SESSION_TIMEOUT_INTERVAL);
				}
			}
		},
		clearUxfSession: function () {
		
			var checkAuthenticationURL = ConfigStrings.checkLogin + '?time=' + Date.now();
			RactiveHelpers.doAjaxJSONCall('GET', checkAuthenticationURL, function (response) {
				if (!response.isLoggedIn) {
					if (this.interval) {
						clearInterval(this.interval);
						this.logoutUser();
					} else {
						var ractiveWidget = this.ractive;
						var eventName = 'logoutAction.clearUxfSecureSession';
						ractiveWidget.fire(eventName, {
							name: eventName
						});
					}
				}
			}.bind(this));
		},

		logoutFromApplication: function () {
			var ractiveWidget = this.ractive;
			ractiveWidget.observe('logoutAction.logoutVmStatus',
				this.onLogoutVmStatusChange, {context: this});
			var eventName = 'logoutAction.logout';
			ractiveWidget.fire(eventName, {
				name: eventName
			});
		
			setTimeout(function () {
				this.redirectToLogoutPage();
			}.bind(this), 0);
		},

		onLogoutVmStatusChange: function (logoutVmStatus) {
			if (logoutVmStatus === 'logoutSuccessFull') {
				this.redirectToLogoutPage();
			}
		},

		redirectToLogoutPage: function () {
			var ractiveWidget = this.ractive;
			var logoutUrl = ractiveWidget.get('initData.logoutUrl');
			var callbackUrl = ractiveWidget.get('initData.callbackUrl');

			var fullHost = RactiveHelpers.getFullHost();
			if (callbackUrl.startsWith('/')) {
				callbackUrl = fullHost + callbackUrl;
			}
			var completeUrl = logoutUrl + encodeURIComponent(callbackUrl);
			window.location.href = completeUrl;
		}
	};

	return {

		initRactiveWidget: function (options) {
			return new Widget(options);
		}
	};

})
}});
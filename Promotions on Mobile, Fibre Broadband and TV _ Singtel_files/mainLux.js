/*global require, luxReq */
/**
 * LUX, aka the "Pattern Library".
 */
(function (window) {

	// Support turning off the bundled deps, to allow local dev/debugging.
	var COMPRESS_LUX = window.location.search.toLowerCase().indexOf('compress_lux=0') === -1;

	// Also check for global to uncompress, if QS flag not set.
	// Typically set by dev templates, rather than production sites.
	if (typeof window.COMPRESS_LUX !== 'undefined') {
		COMPRESS_LUX = window.COMPRESS_LUX !== 0;
	}

	// This allows parent projects to define where their lux assets are (remotely) located.
	// Default to root path of domain.
	// Lux domain therefore needs to set cors headers, and work on both http/https protocols.
	window.patternLibraryBaseUrl = (typeof window.patternLibraryBaseUrl === 'undefined') ? '/'
			: window.patternLibraryBaseUrl;

	window.luxReq = require.config({
		context: 'luxContext',
		baseUrl: window.patternLibraryBaseUrl
	});

	var luxStartingDeps = ['core/requireConfig'];
	if (COMPRESS_LUX) {
		luxStartingDeps.push('compiled/bundleLuxBuild');
	}

	luxReq(luxStartingDeps, function () {

		luxReq([
			'jquery',
			'widgetManager',
			'ractive',
			'router'
		], function (dollarSign, widgetManager, Ractive, router) {

			// Deeplinking route mask for component
			router.api.add('link/:alias/:target', function (r) {
				router.fireDeepLinkChange([r]);
			});

			var handleHash = function () {
				var hash = window.location.hash;
				if (!hash) {
					return;
				}
				if (router.isRoutingHash(hash)) {
					router.processHash();
				} else {
					router.scrollTo(hash);
				}
			};

			if (false !== COMPRESS_LUX) {
				Ractive.DEBUG = false;
			}

			// Find all uninitialized widget/component containers, and init them.
			var processWidgets = function (event, params) {
				params = params || {};
				return widgetManager.init({
					// Pass in the "luxContext" requirejs function.
					require: luxReq,
					uniqueId: params.uniqueId
					// Pass this prefix for remote widget assets to be loaded (bundle js and css).
					//patternLibraryBaseUrl: window.patternLibraryBaseUrl
				}).then(function (results) {
					if (results && results.length) {
						dollarSign(document).trigger('allWidgetsInitialized.lux', [ results ]);
						handleHash();
					}
				});
			};

			// Init all widget/component containers not yet initialized.
			dollarSign(document).on('initWidgets', processWidgets);

			// Wait for document ready event before binding lux to dom (for the first time).
			dollarSign(function () {
				// Trigger event to initialize missed out components & widgets
				// This will not trigger any processing if all the widgets already initialized
				processWidgets().then(processWidgets);
			});

		});

	});

})(window);

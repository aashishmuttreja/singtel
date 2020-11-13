/* jshint ignore:start */
/**
 * @see https://github.com/ractivejs/ractive/issues/2045
 */
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== 'function') {
			// closest thing possible to the ECMAScript 5
			// internal IsCallable function
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
		}

		var aArgs   = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP    = function () {},
			fBound  = function () {
				return fToBind.apply(this instanceof fNOP
						? this
						: oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)));
			};

		fNOP.prototype = this.prototype;
		// Disabling jscs here because the constructor violates the rule, requireCapitalizedConstructors
		/* jscs:disable */
		fBound.prototype = new fNOP();
		/* jscs:enable */

		return fBound;
	};
}

// IE9 Only supports console functions when developer tools are open, otherwise the console object
// is undefined and any calls will throw errors.
window.console = window.console || {
	log: function () {},
	debug: function () {},
	group: function () {},
	error: function () {},
	warn: function () {}
};

//	IE doesn't support startsWith natively, so need a workaround here.
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (searchString, position) {
		position = position || 0;
		return this.indexOf(searchString, position) === position;
	};
}

// https://github.com/jonathantneal/closest/blob/master/closest.js
if (typeof Element.prototype.matches !== 'function') {
	Element.prototype.matches = Element.prototype.msMatchesSelector ||
								Element.prototype.mozMatchesSelector ||
								Element.prototype.webkitMatchesSelector || function matches(selector) {
		var element = this;
		var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
		var index = 0;

		while (elements[index] && elements[index] !== element) {
			++index;
		}

		return Boolean(elements[index]);
	};
}

if (typeof Element.prototype.closest !== 'function') {
	Element.prototype.closest = function closest(selector) {
		var element = this;

		while (element && element.nodeType === 1) {
			if (element.matches(selector)) {
				return element;
			}

			element = element.parentNode;
		}

		return null;
	};
}

/* jshint ignore:end */

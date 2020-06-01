/*!
 * Keil.js v1.0.0
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ?  // CommonJS
        module.exports = factory() :
    typeof define === 'function' && define.amd ?                    // AMD
        define(factory) :
    (global = global || self, global.Keil = factory());             // Browser

}(this, function () { 
    'use strict';

    function Keil (options) {
        if (!(this instanceof Keil)) {
            console.error('Keil is a constructor and should be called with the `new` keyword');
            return;
        }
        this._init(options);
    }

    init(Keil);

    function init (Keil) {
        Keil.prototype._init = function (options) {

        };
    }

    Keil.prototype.add = function (a, b) {
        return a + b
    };


    return Keil;

}));

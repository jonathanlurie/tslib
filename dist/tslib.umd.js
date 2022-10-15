(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tslib = {}));
})(this, (function (exports) { 'use strict';

  class SomeClass {
    constructor(options = {}) {
      var _a, _b;
      this.fullName = `${(_a = options.firstname) != null ? _a : "John"} ${(_b = options.lastname) != null ? _b : "Doe"}`;
    }
    getFullName() {
      return this.fullName;
    }
  }

  exports.SomeClass = SomeClass;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tslib.umd.js.map

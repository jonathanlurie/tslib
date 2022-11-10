'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=tslib.cjs.map

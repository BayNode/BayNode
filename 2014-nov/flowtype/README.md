Flowtype Notes
=======

* Use `/* jshint ignore:start */` in declarations
* Declarations do not auto-reload (must restart server)
* Inline / in-file declarations not currently supported
* No transpilation required: Can write vanilla JS
* Full ES6 supoprt coming
* Write declarations for the interfaces you use (Or DON'T! and ignore flow errors)
* Annotations compatible with TypeScript
* Declaration files currently incompatible with TypeScript's .d.ts files. Converter coming!
* Declaration syntax errors usually reported as "Required module not found"
* `mixed` type is base type (no properties or methods).
* `any` type is catchall anything goes type.
An unsuccesful attempt at using `rollup` to create a component library for npm. I could not get the config correct in `rollup.config.js`. I tried many options with different versions of rollup and dependencies. The last error which I could not surmount was
```
[!] RollupError: Node tried to load your configuration file as CommonJS even though it is likely an ES 
module. To resolve this, change the extension of your configuration to ".mjs", set "type": "module" in 
your package.json file or pass the "--bundleConfigAsCjs" flag.
```

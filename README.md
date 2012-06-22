# LiveScript (JS) wrapper for SocketStream 0.3

Allows you to use [LiveScript](http://gkz.github.com/LiveScript) files (.ls) in your SocketStream project.


### Instructions

Add `ss-livescript` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-livescript'));
```

Based on the [ss-coffee](https://github.com/socketstream/ss-coffee) wrapper by the core SocketStream team.

### prelude-ls

This wrapper only includes the base LiveScript language library. If you want to use [prelude-ls](http://gkz.github.com/prelude-ls/) 
in your client then:

    place prelude.js in client/code/system
    
    add 'system' folder to code section of your client definition (in /app.js)
    
    # require prelude in your client code, here attached to window, but select your own target
    require \prelude . installPrelude window
    

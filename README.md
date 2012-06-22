# LiveScript (JS) wrapper for SocketStream 0.3

Allows you to use [LiveScript](http://gkz.github.com/LiveScript) files (.ls) in your SocketStream project.


### Instructions

Add `ss-livescript` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-livescript'));
```

Based on the [ss-coffee](https://github.com/socketstream/ss-coffee) wrapper by the core SocketStream team.

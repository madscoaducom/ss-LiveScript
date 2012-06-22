// LiveScript (JS) wrapper for SocketStream 0.3

var fs = require('fs')
  , LiveScript = require('LiveScript');

exports.init = function(root, config) {

  return {

    name: 'LiveScript',

    extensions: ['ls'],

    assetType: 'js',

    contentType: 'text/javascript; charset=utf-8',

    compile: function(path, options, cb) {    
      var input = fs.readFileSync(path, 'utf8');
      try {
        cb( LiveScript.compile(input, {bare: true}) );
      } catch (e) {
        var message = "! Error compiling LiveScript:" + path + " into Javascript";
        console.log(String.prototype.hasOwnProperty('red') && message.red || message);
        throw new Error(e);
        cb("Error compiling LiveScript: " + e.stack);  
      }
    }
  }
}

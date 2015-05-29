(function () {
  var fs = require('fs');

  var get = function (src, options) {
    if (typeof src === "string") {
      src = [src];
    }

    var foundClasses = [];
    for (var i = 0; i < src.length; i++) {
      var srcFile = src[i];
      fs.readFile(srcFile, 'utf8', function read(err, data) {
        if (err) {
          throw err;
        }
        var classNames = getAllClassNames(data);
      });
    }
  };

  var getAllClassNames = function (string) {
    var classNames = getObviousClassName(string);
  };

  var getObviousClassName = function (string) {
    var classNames = [];
    var result = string.replace(/(\"|\')([\s\w_\-\.#]+)(\"|\')/g, function (className, prefix) {
      console.log(className);
    });
  };

  module.exports = function (src, options) {
    if (typeof src === 'undefined') {
      return;
    }

    return get(src, options);
  };

})();

(function () {
  var fs = require('fs');

  var get = function (src, options) {
    if (typeof src === "string") {
      src = [src];
    }

    var foundClasses = [];
    for (var i = 0; i < src.length; i++) {
      var srcFile = src[i];
      var fileContent = fs.readFileSync(srcFile).toString();
      foundClasses = foundClasses.concat(getAllClassNames(fileContent));
    }
    foundClasses = getUniqueArray(foundClasses);

    return foundClasses;
  };

  var getAllClassNames = function (string) {
    var classNames = getObviousSelectors(string);

    return classNames;
  };

  var getObviousSelectors = function (string) {
    var classNames = [];
    string.replace(/(\"|\')([\s\w\[\]=#]*[\.]+[\s\w\.#\[\]=]+)(\"|\')/g, function (selector, prefix) {
      var foundClasses = getClasssNameFromSelector(selector);
      for (var i = 0; i < foundClasses.length; i++) {
        classNames.push(foundClasses[i]);
      }
    });

    return classNames;
  };

  var getClasssNameFromSelector = function (selector, ignoreDot) {
    var foundClasses = [];
    if (typeof selector === "string" && (ignoreDot || selector.indexOf('.') > -1)) {
      var regexStr = '(\\.)(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)';
      var selectors = [selector];
      if (ignoreDot) {
        regexStr = '([_a-zA-Z]+[_a-zA-Z0-9-]+)';
        if (selector.indexOf(' ') > -1) {
          selectors = selector.split(' ');
        }
      }
      var regex = new RegExp(regexStr, 'g');
      for (var i = 0; i < selectors.length; i++) {
        selectors[i].replace(regex, function (className) {
          foundClasses.push(className);
        });
      }
    }

    return foundClasses;
  };

  var getUniqueArray = function (ar) {
    var u = {}, a = [];
    for (var i = 0, l = ar.length; i < l; ++i) {
      if (u.hasOwnProperty(ar[i])) {
        continue;
      }
      a.push(ar[i]);
      u[ar[i]] = 1;
    }
    return a;
  };

  module.exports = function (src, options) {
    if (typeof src === 'undefined') {
      return;
    }

    return get(src, options);
  };

})();

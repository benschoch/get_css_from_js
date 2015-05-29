var div = jQuery('div .test #hello');

var justAfileName = '/path/actually_no_class.json';

var div2 = jQuery('.test');

var div3 = $('#idOnlyPleaseIgnore');

var attrSelector = $('#someId input[type=text].className');

var justAtag = $('section');

var regexTest = new RegExp('(\.testString)', 'g');

div.append('<span class="append"></span>');
var span = div.find(".append");
if (span.hasClass("append")) {
  span.addClass("appended");
}
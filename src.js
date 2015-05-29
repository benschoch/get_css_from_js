/**
 * Created by benjaminschoch on 29.05.15.
 */
var div = jQuery('div .test #hello');

var justAfileName = 'DONT_TAKE_ME.BAD';

var div2 = jQuery('.test');

div.append('<span class="append"></span>');

if (div.hasClass("append")) {
  div.addClass("appended");
}
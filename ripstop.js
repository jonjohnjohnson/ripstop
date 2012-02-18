
var ripstop = function (el) {
  // apply ontouchstart to the first child
  var children = el.getElementsByTagName('*');
  children[0].ontouchstart = function () {
    var x = el.scrollTop;
    // check for bottom
    var distanceFromBottom = children[0].offsetHeight - (x + el.offsetHeight);
    if (distanceFromBottom == 0) el.scrollTop = children[0].offsetHeight - el.offsetHeight - 1;
    // check for top
    if (x > 0) return;
    el.scrollTop = 1;
  }
}
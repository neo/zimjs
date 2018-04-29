const createjs = require('@neoli/createjs');
const zim = require('../../zim');

var scaling = 'fit'; // this will resize to fit inside the screen dimensions
var width = 1024;
var height = 768;

// as of ZIM 5.5.0 you do not need to put zim before ZIM functions and classes
var frame = new zim.Frame(scaling, width, height);
frame.on('ready', function() {
  // zog('ready from ZIM Frame'); // logs in console (F12 - choose console)

  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.outerColor = '#444';
  frame.color = '#ddd';

  // see http://zimjs.com/learn.html for video and code tutorials
  // see http://zimjs.com/docs.html for documentation
  // see http://zimjs.com/bits.html for 64 Interactive Media techniques

  // put your code here (you can delete this sample code)

  // with chaining - can also assign to a variable for later access
  new zim.Circle(100, 'orange').center(stage).drag();

  // without chaining
  // var circle = new Circle(100, "orange");
  // circle.center(stage);
  // circle.drag();

  stage.update(); // this is needed to show any changes
}); // end of ready

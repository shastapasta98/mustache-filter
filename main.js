noseX = 0;
noseY = 0;
function preload()
{
  mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   video.size(300,300);
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('poseNet is initialized');
}
function draw()
{
   image(video,0,0,300,300);
   image(mustache, noseX, noseY, 60, 60);
}

function take_snapshot() 
{
    save('you got hacked by a little kid :) jk.png');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX = results[0].pose.nose.x -30;
    noseY = results[0].pose.nose.y -2;
}
}

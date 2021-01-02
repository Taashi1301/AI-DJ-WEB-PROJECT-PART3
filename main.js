sound1="";
sound2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
sound1=loadSound("music.mp3");
sound2=loadSound("music2.mp3")
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 300, 300);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Left wrist X = "+leftWristX);
        console.log("Left wrist Y = "+leftWristY);
        console.log("Right wrist X = "+rightWristX);
        console.log("Right wrist Y = "+rightWristY);
    }
}
function play(){
    song.play();
}
function stop(){
    song.stop();
}
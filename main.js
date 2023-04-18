scoreLeftWrist=0;
statusmusic="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
music1="";
music2="";

function preload(){
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("FF0000");
    stroke("FF0000");
    status1=music1.isPlaying();
    if(scoreLeftWrist>0.1){
        circle(leftWristX, leftWristY, 20);
        music2.stop().
        if(status1=="false"){
            music2.play();
            document.getElementById("songheading").innerHTML="Song Name - Harry Potter Theme";
        }
    }
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded.");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
    }
}
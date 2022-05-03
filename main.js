//124

function setup(){
    canvas = createCanvas(1000,300);
    canvas.position(560,210);
    video = createCapture(VIDEO);
    video.size(550,550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    background('lightblue');//124
    textSize(difference);
    fill('violet');
    text('Nanditha',150,180)
}

//125
rightWristX = 0;
leftWristX = 0;
difference = 0;


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX=" + rightWristX + "leftWristX =" + leftWristX + "difference=" + difference);
    }
}


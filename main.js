function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(550,150);
    canvas.center()
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function draw() {
    background("#a6deff");
}

function modelLoaded() {
    console.log("posenet model is loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}
noseX = 0;
noseY = 0;

function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot(){
    save('Filter_Image.png');
}
function draw(){
    image(video,0,0,350,300);
    image(clown_nose, noseX-19, noseY+6, 35, 30);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/DzHVZ4x1/Mustache.png');
}
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('posenet initialised')
}

function draw()
{
    background('#0B0EEF');

    document.getElementById("font_size_display").innerHTML = "Font Size is " + difference + " px";
    textSize(difference);
    fill('#FFD700');
    text('tunishq', 50, 200);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " + leftWristX + " , right wrist x = " + rightWristX + " , difference = " + difference);
    }
}
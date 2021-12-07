function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video,180,75,320,240);
    fill(255,0,0);
    stroke(255,0,0);
circle(590,324,64);
circle(590,50,64);
circle(50,324,64);
circle(50,50,64);

fill(0,255,0)
stroke(0,255,0)
rect(80,20,480,55)
rect(80,303,480,55)
rect(40,80,20,300)
rect(580,80,20,300)
}

function take_snapshot(){
    save("aarav.png");
}
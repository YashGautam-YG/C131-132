img="";
status="";
object = [];
function preload(){

    img=loadImage('1.jpg');

}
function setup(){

    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function draw(){
    
   
    if(status !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        image(img,0,0,640,420)
            fill(r,g,b);
            text("flower",90,100);
            noFill();
            stroke(r,b,g);
            rect(90,100,400,400);
           
        }
    
}
function modelLoaded(){
    console.log("Your model is loaded");
    status=true;


}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object=results;
    }
    
}

var randomnumber1=Math.floor(Math.random()*6)+1;
var randomImage1Sourse="images/dice"+randomnumber1+".png";
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImage1Sourse);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImage2Sourse="images/dice"+randomnumber2+".png";
var Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImage2Sourse);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";

}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins";

}
else
{
    document.querySelector("h1").innerHTML="Draw!!";
}
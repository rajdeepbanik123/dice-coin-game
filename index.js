var randomNumber1=Math.floor(1+( Math.random()*6));
 var randomDiceImage="/dice"+randomNumber1+".png";
 var randomImageSource = "./images"+randomDiceImage;
   var image1=document.querySelectorAll("img")[0] ; 
    image1.setAttribute("src",randomImageSource) ; 

    var randomNumber2=Math.floor(1+( Math.random()*6));

 var randomImageSource2 = "./images"+"/dice"+randomNumber2+".png";;
   var image2=document.querySelectorAll("img")[1] ; 
    image2.setAttribute("src",randomImageSource2) ; 

    var randomNumber3=Math.floor(1+( Math.random()*2));
 var randomCoinImage3="/coin"+randomNumber3+".png";
 var randomImageSource3 = "./images"+randomCoinImage3;
   var image3=document.querySelectorAll("img")[2] ; 
    image3.setAttribute("src",randomImageSource3) ; 

   

    if (randomNumber3 === 1) {
     document.querySelector(".coinoutput").textContent = "It is a Head";
   } else {
     document.querySelector(".coinoutput").textContent = "It is a Tail";
   }

    
 
    if(randomNumber1>randomNumber2 && randomNumber3==1 ){
         document.querySelector("h1").innerHTML="player 1 wins";
    }
    else if(randomNumber1<randomNumber2 && randomNumber3==2){
        document.querySelector("h1").innerHTML="player 2 wins";
   }
   else if(randomNumber1==randomNumber2 && randomNumber3==1) {
     document.querySelector("h1").innerHTML="player 1 wins";
   } 
   else if(randomNumber1==randomNumber2 && randomNumber3==2) {
     document.querySelector("h1").innerHTML="player 2 wins";
   }
   else{
    document.querySelector("h1").innerHTML="No one wins";
   }
   

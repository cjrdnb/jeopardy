var PlayerData = new Array;
var PlayerData1 = new Array;
var age;
var showallplayers = new Array;
var  timeout;
var fanswered;

 var fque = new Array;
var fans = new Array;
var fai;
     fque= [["This bird is commonly dated to be last spotted in 1662."],["A member of the British Amateur Athletic Club wrote this 1867 set of 12 regulations whose name honors nobleman John Sholto Douglas"],["Before they were photographed together in 1862, Lincoln wryly noted this general 'should have no problem'' sitting still for it"],["Of their July 1957 first meeting at a church fair, one of this pair recalled: I' was a fat schoolboy and … he was drunk'"],["This part of the body is affected by Bright's Disease."]];
    
    fans = [["What is a dodo?"],["What are the 12 rules of Queensbury?"],["Who is George McClellan?"],["Who are John Lennon and Paul McCartney?"],["What is a kidney?"]];
function ageCalculator() {  
    var userinput = document.getElementById('dob').value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
        
    var month_diff = Date.now() - dob.getTime(); 
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
      
   
    age = Math.abs(year - 1970);   
        
        if (age <= 12){
       window.alert("You must be 12 years and older to play this game");
        enteredValue.focus();
    }else{
    return age;
    }
    }  
} 

function checkEmail(){
    var email;
    email = document.getElementById("email").value;
        if(!email.includes("@")){
            window.alert("Email was not entered correctly, Please enter an email that is similar to '@SomeEmail.com'");
            enteredValue.focus();
        }else{
            return email;
        }

}

function Register(){
    var  FName,LName, DOB, Email, Age, Gender,street, city, town, country, elevel, image;
    
    FName = document.getElementById('fname').value;
    LName = document.getElementById('lname').value;
    DOB = document.getElementById('dob').value;
    Email = checkEmail();
    Age = ageCalculator();
    Gender = document.getElementById('gender').value;
    street = document.getElementById('street').value;
    city = document.getElementById('city').value;
    town = document.getElementById('town').value;
    country = document.getElementById('country').value;
    elvel = document.getElementById('edlevel').value;
    image = document.getElementById('ioself').value;
    PlayerData.push(FName,LName,DOB,Email,Age,Gender,street,city,town,country,elevel,image);
   
    disable();
}



function disable(){
     document.getElementById("fname").disabled = true;
     document.getElementById("lname").disabled = true;
     document.getElementById("dob").disabled = true;
     document.getElementById("age").disabled = true;
     document.getElementById("email").disabled = true;
     document.getElementById("gender").disabled = true;
     document.getElementById("street").disabled = true;
     document.getElementById("city").disabled = true;
     document.getElementById("town").disabled = true;
     document.getElementById("country").disabled = true;
     document.getElementById("edlevel").disabled = true;
     document.getElementById("ioself").disabled = true;
    
    if (age >12){
     document.getElementById("play").disabled = false;
        document.getElementById("register").disabled = true;
        document.getElementById("results").disabled = false;
    }
    
     
}

function valemail(){
    var email = document.getElementById("email").value;
    
}

function play(){
    document.getElementById("play").disabled = true;
}
let questi = document.getElementById("quest");
let ddouble = document.getElementById("dd");
    Game();
    
    var tleft;
     var randomca;
     var randomca1;
     var randomca2;
    
    let qu = [
              ['What group of animals is called a pride?',100,'This reptile can change its body color to camouflage itself.',200,'What is the largest type of frog?',300,'What do you call a group of giraffes?',400,'What’s the only insect that can turn its head?',500],
        ['In 2016 Neymar led this nation to its first-ever Olympic gold medal in soccer.',100,'First held in Uruguay in 1930, it’s the largest single-sport tournament in the world.',200,'Winner of the FIFA award for Best Soccer Player of the Year in 2016 and 2017',300,'Which was the first team who won consecutively 2 world cups?',400,'What country was home to the world’s first football league?',500], 
        ['It wasn’t so long ago that this singer’s “Gangnam Style” was everywhere.',100,'This French pop duo were right at home in their “Tron: Legacy” cameos—lots of people were wearing futuristic headgear.',200,'Luther Vandross emotionally told us he’d “Love, love, love” to do this with his father again.',300,'Eminems 8 Mile is named after a road in which city?',400,'Layne Staley was the lead vocalist of this band from 1987 to 2002.',500], 
         ['The United States bought Alaska from which country?',100,'Twice in the 1800s China and Britain went to war over this drug.',200,'Where was Martin Luther King, Jr. born?',300,'Who sent Christopher Columbus to explore the New World?',400,'During World War II, Allied troops stormed the beaches of Normandy. Which country is Normandy in?',500], 
         ['What is the nearest planet to the sun?',100,'What is it called when you make light change direction by passing it through a lens?',200,'What is the smallest named time interval?',300,'What is the rarest blood type?',400,'What element is named after the Greek word for green?',500]
    ];
    
   var answers = [['Lions','Chameleon','Goliath','Tower','Praying Mantis'],
          ['Brazil','World Cup','Cristiano Ronaldo','Italy','England'],
           ['Psy','Daft Punk','Dance','Detroit','Alice in Chains'],
           ['Russia','Opium','Atlanta','King Ferdinand of Spain','France'],
           ['Mercury','Refraction','Planck time','AB-','Chlorine']
          ];
    
    
    var clicked;
    var clicked1 = new Array;
    var clicks;
    var playertot = 100;
    var finalcat;
    var ddamt;
var gamesp=0;
     var timeleft;
     var correct;


function PlayGame(){
        gameo.classList.add("open-game");
        document.getElementById("play").disabled = true;
    
}
function Game(){
document.write("<div class = 'game' id= 'gameo'><h1 id ='points'>Player Points:100</h1><br/><br/><center> <table border = '1' cellpadding = '10'  cellspacing = '5' width='40%' id ='jep'><tr> <td style = 'border:none'><button id='cat1' onclick = 'dosomething(this.id)'>Animals</button></td><td style = 'border:none'><button id='cat2' onClick = 'dosomething(this.id)'>Sports</button></td><td style = 'border:none'><button  id='cat3' onclick = 'dosomething(this.id)'>Music</button></td><td style = 'border:none'><button id='cat4' onclick = 'dosomething(this.id)'>History</button></td><td style = 'border:none' ><button id='cat5' onclick = 'dosomething(this.id)'> Science</button></td></tr><tr><td style = 'border:none'><button disabled id='cat1a'onclick= 'test(this.id)'>$100</button></td><td style = 'border:none' ><button disabled id='cat2a' onclick = 'test(this.id)'>$100</button></td><td style = 'border:none'><button disabled id='cat3a'  onclick = 'test(this.id)'>$100</button></td><td style = 'border:none'><button disabled id='cat4a'  onclick = 'test(this.id)'>$100</button></td><td style = 'border:none' ><button disabled id='cat5a'id='cat5a'  onclick = 'test(this.id)'>$100</button></td><td style = 'border:none' ></tr><td style = 'border:none' ><button disabled id='cat1b' onclick = 'test(this.id)'>$200</button></td><td style = 'border:none' ><button disabled id='cat2b'  onclick = 'test(this.id)'>$200</button></td><td style = 'border:none'><button disabled id='cat3b'  onclick = 'test(this.id)'>$200</button></td><td style = 'border:none' ><button disabled id='cat4b'  onclick = 'test(this.id)'>$200</button></td><td style = 'border:none' ><button disabled id='cat5b'  onclick = 'test(this.id)'>$200</button></td><tr><td style = 'border:none'><button disabled  id='cat1c'  onclick = 'test(this.id)'>$300</button></td><td style = 'border:none'><button disabled id='cat2c'  onclick = 'test(this.id)'>$300</button></td><td style = 'border:none'><button disabled id='cat3c'  onclick = 'test(this.id)'>$300</button></td><td style = 'border:none' ><button disabled id='cat4c'  onclick = 'test(this.id)'>$300</button></td><td style = 'border:none' ><button disabled id='cat5c'  onclick = 'test(this.id)'>$300</button></td></tr><tr><td style = 'border:none' ><button disabled id='cat1d'  onclick = 'test(this.id)''>$400</button></td><td style = 'border:none' ><button disabled id='cat2d'  onclick = 'test(this.id)'>$400</button></td><td style = 'border:none' ><button disabled id='cat3d'  onclick = 'test(this.id)'>$400</button></td><td style = 'border:none' i><button disabled id='cat4d'  onclick = 'test(this.id)'>$400</button></td><td style = 'border:none' ><button disabled id = 'cat5d'  onclick = 'test(this.id)'>$400</button></td></tr><tr><td style = 'border:none' ><button disabled id='cat1e'  onclick = 'test(this.id)'>$500</button></td><td style = 'border:none' ><button disabled id='cat2e'  onclick = 'test(this.id)'>$500</button></td><td style = 'border:none' ><button disabled id='cat3e'  onclick = 'test(this.id)'>$500</button></td><td style = 'border:none' ><button disabled id='cat4e'  onclick = 'test(this.id)'>$500</button></td><td style = 'border:none'><button disabled id='cat5e'  onclick = 'test(this.id)'>$500</button></td></tr></table><button type='button' onclick = 'findPercentageScore();finaljeopardy()'>End Game</button><button type='button' onclick = 'findPercentageScore()'>Quit</button><button type='button' onclick = 'PlayGame()'>Play Again</button></button></center></div>");
}
    
function dosomething(click){
    
    
    
    //check if buttton is already disabled2
        document.getElementById("showpercentage").value="";
         document.getElementById(click+"a").disabled = false;
         document.getElementById(click+"b").disabled = false;
         document.getElementById(click+"c").disabled = false;
         document.getElementById(click+"d").disabled = false;
         document.getElementById(click+"e").disabled = false;
         document.getElementById("cat1").disabled = true;
         document.getElementById("cat2").disabled = true;
         document.getElementById("cat3").disabled = true;
         document.getElementById("cat4").disabled = true;
         document.getElementById("cat5").disabled = true;
    
    if (clicked1.length!=0){
    
        for (let i= 0; i<clicked1.length;i++){
            document.getElementById(clicked1[i]).disabled = true;
        }
    }  
    clicks = click;
    document.getElementById(click).disabled = true;
  }
    
function checkAnswer(){
    var co=1;
    var inco=1;
    for (let i =0;i<PlayerData.length;i++){
        if (PlayerData[i]=="true"){
            co = parseInt(co)+1;
           
            
        }else if (PlayerData[i]=="false"){
            inco = parseInt(inco)+1;
          
        }
    }
     var m = localStorage.length;
    gamesp = parseInt(gamesp)+1;
   
    
    quest.classList.remove("open-question"); 
     
    var n = 1+2*(parseInt(clicked[4].charCodeAt(0)-97));
    var amt;
    
     var ans;
    ans =  document.getElementById("answer").value;
   
    
   if (tleft <=5){
             amt = parseInt(qu[parseInt(clicks[3])-1][n]);
            playertot = playertot - amt;
       revans.classList.add("open-reveal");
      
       document.getElementById('yes').addEventListener("click", function() {
            document.getElementById("anss").innerHTML = answers[parseInt(clicks[3])-1][parseInt(clicked[4].charCodeAt(0)-97)];
            setTimeout(remrev,15000);
           clicked1.push(clicked);
           
       });
       document.getElementById('no').addEventListener("click", function() {
          revans.classList.remove("open-reveal");
       });

    }else if (answers[parseInt(clicks[3])-1][parseInt(clicked[4].charCodeAt(0)-97)]==ans){
        document.getElementById(clicked).disabled = true;
        
         if (clicked == randomca||clicked == randomca1||clicked == randomca2){
            dailydd.classList.add("open-dd");
              correct = "true";
        }else {
            amt = parseInt(qu[parseInt(clicks[3])-1][n]);
            playertot = playertot +amt;
            correct = "true";
        }
        
        window.alert("Answer is Correct");
        clicked1.push(clicked);
       
    } else{
    
         if (clicked == randomca||clicked == randomca1||clicked == randomca2){
            dailydd.classList.add("open-dd");
              correct = "false";
        }else {
            amt = parseInt(qu[parseInt(clicks[3])-1][n]);
            playertot = playertot - amt;
            correct = "false";
             window.alert("Answer is InCorrect");
        }
}
    
        
        PlayerData[12] = playertot;
     document.getElementById("points").innerHTML = "Player Points:"+PlayerData[12];
    PlayerData[13] = gamesp;
    
    PlayerData.push(correct);
  
    PlayerData[parseInt(PlayerData.length)+1] = co; 
    PlayerData[parseInt(PlayerData.length)+1] = inco;
    
    
   
         document.getElementById("cat1").disabled = false;
         document.getElementById("cat2").disabled = false;
         document.getElementById("cat3").disabled = false;
         document.getElementById("cat4").disabled = false;
         document.getElementById("cat5").disabled = false;
         document.getElementById(clicks+"a").disabled = true;
         document.getElementById(clicks+"b").disabled = true;
         document.getElementById(clicks+"c").disabled = true;
         document.getElementById(clicks+"d").disabled = true;
         document.getElementById(clicks+"e").disabled = true;
        localStorage.setItem(parseInt(m),JSON.stringify(PlayerData));
        showall();
    
        dosomething();
   //return;
    //PlaerData.push(playertot);
    
}

function finaljeopardy(){
    
    if (parseInt(fanswered)==25){
        var cats=['Animals','Sports','History','Music','Science'];
        finalcat = cats[Math.floor(Math.random()*cats.length)];
        final.classList.add("open-fj");
         document.getElementById("fcat").innerHTML = "The category selected is:"+finalcat;
          if (finalcat=="Animals"){
            document.getElementById("fq").innerHTML = fque[0];
            fai=0;
        }else if (finalcat=="Sports"){
            document.getElementById("fq").innerHTML = fque[1];
            fai=1;
        }else if (finalcat=="History"){
            document.getElementById("fq").innerHTML = fque[2];
            fai=2;
        } else if (finalcat=="Music"){
            document.getElementById("fq").innerHTML = fque[3];
            fai=3;
        } else if(finalcat == "Science"){
            document.getElementById("fq").innerHTML = fque[4];
            fai=4;
        }
        
        
    }
        document.getElementById("close").addEventListener("click",function(){
           final.classList.remove("open-fj"); 
        });
}
    
function getd(){
        
        ddamt =validate(document.getElementById("dailyd").value);
        
        
        if (correct == "true"){
            playertot = playertot + ddamt;
        }else if (correct == "false"){
            playertot = playertot - ddamt;
        }
           PlayerData[12] = playertot;
        document.getElementById("points").innerHTML = "Player Points:"+PlayerData[12];
    }

function test(click){     
    document.getElementById("answer").value = "";
    quest.classList.add("open-question");
    document.getElementById("que").innerHTML = qu[parseInt(clicks[3])-1][parseInt(click[4].charCodeAt(0)-97)*2];
    //timeout = setTimeout(checkAnswer,60000);
    
    countdown();
     clicked = click;    
}   
function cquest(){
          quest.classList.remove("open-question");
    }  
function countdown(){
        var clicke = false
      var timeleft = 60;
        
        document.getElementById('sub').addEventListener("click", function() {
               clicke = true
        });

    
        var gameTime = setInterval(function(){
          if(timeleft <= 0||clicke == true){
            clearInterval(gameTime);
             //checkAnswer();
          } else {
            document.getElementById("time").innerHTML = timeleft + " seconds remaining";
              
          }
          timeleft -=1; 
            tleft = timeleft;
        }, 1000); 
        
        
        document.getElementById("sub").addEventListener("click", function() {
            clearTimeout(timeout);
        });
        timeout = setTimeout(function(){document.getElementById("answer").value="unanswered";checkAnswer();},60000);
        

        
       
        
        
    }
function remrev(){
    revans.classList.remove("open-reveal");
}
function dailydouble(){
        var cats=['cat1a','cat1b','cat1c','cat1d','cat1e','cat2a','cat2b','cat2c','cat2d','cat2e','cat3a','cat3b','cat3c','cat3d','cat3e','cat4a','cat4b','cat4c','cat4d','cat4e','cat5a','cat5b','cat5c','cat5d','cat5e'];
        
        randomca = cats[Math.floor(Math.random()*cats.length)];
        randomca1 = cats[Math.floor(Math.random()*cats.length)];
        randomca2 = cats[Math.floor(Math.random()*cats.length)];
       
    }
function remdd(){
        dailydd.classList.remove("open-dd");
    }
function validate(number){ 
        
        number = parseInt(number);
        if (number < 0 || number > PlayerData[12] ||number > PlayerData1[12] ){
           number = Math.floor(Math.random() *PlayerData[12] +0);
            return number;
        }else {
        remdd();
        return number;
           
        }
    }
function dis(){
    document.getElementById("age").value = ageCalculator();
    document.getElementById("age").disabled = true;
    
}
function findPercentageScore() {
    document.getElementById("showpercentage").value="";
  gameo.classList.remove("open-game");
    var percent;
    var date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    percent = parseInt(PlayerData[parseInt(PlayerData.length)-3])/PlayerData[13]*100;
   
    document.getElementById("showpercentage").value = "The total number of questions answered is:"+" "+PlayerData[13]+"\nThe number of correct answers is:"+" "+PlayerData[parseInt(PlayerData.length)-3]+"\nThe number of incorrect answers is:"+" "+PlayerData[parseInt(PlayerData.length)-1]+"\nThe percentage score is:"+" "+percent +"\nPlayer's Name:"+" "+PlayerData[0]+PlayerData[1]+"\nPlayer's town is:"+" "+PlayerData[8]+"\nToday's Date is:"+" "+day+"/"+month+"/"+year;
    
    clearform();
}
function clearform(){
    fanswered = PlayerData[parseInt(PlayerData.length)-1];
    PlayerData1 = PlayerData;
    document.getElementById("fname").disabled = false;
     document.getElementById("lname").disabled = false;
     document.getElementById("dob").disabled = false;
     document.getElementById("age").disabled = true;
     document.getElementById("email").disabled = false;
     document.getElementById("gender").disabled = false;
     document.getElementById("street").disabled = false;
     document.getElementById("city").disabled = false;
     document.getElementById("town").disabled = false;
     document.getElementById("country").disabled = false;
     document.getElementById("edlevel").disabled = false;
     document.getElementById("ioself").disabled = false;
   document.getElementById('fname').value = "";
     document.getElementById('lname').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('gender').value = "";
     document.getElementById('street').value= "";
   document.getElementById('city').value= "";
     document.getElementById('town').value= "";
     document.getElementById('country').value= "";
    document.getElementById('edlevel').value= "";
     document.getElementById('ioself').value = "";
    document.getElementById("register").disabled = false;
    document.getElementById("results").disabled = true;
    document.getElementById("showallplayers").value="";
    document.getElementById("famount").value = "";
    document.getElementById("fanswer").value="";
    playertot = 100;
    gamesp=0;
    PlayerData = [];
    clicked1=[];
    showallplayers=[];

}
function showall(){
    var percent;
 for (let i =1; i <=parseInt(localStorage.length);i++) {
     showallplayers[i]=JSON.parse(localStorage.getItem(i));
 }
    //document.getElementById("showallplayers").value = "";
    
    for (let i = 1; i <= parseInt(showallplayers.length);i++){
     percent = parseInt(showallplayers[i][parseInt(showallplayers[i].length)-3])/parseInt(showallplayers[i][13])*100;
     
     document.getElementById("showallplayers").value+="Name:"+showallplayers[i][0] +" "+showallplayers[i][1]+",Age:"+" "+showallplayers[i][4]+",Number of Correct Answers:"+" "+showallplayers[i][parseInt(showallplayers[i].length)-3]+",Number of Incorrect Answers:"+" "+showallplayers[i][parseInt(showallplayers[i].length)-1]+" "+",Percentage:"+percent +"\n";
    }
    
      
   
}
function end(){
    
   var n = localStorage.length;
    
    
    localStorage.setItem(parseInt(n)+1,JSON.stringify(PlayerData));
}

function finaljque(){
    
        
    var m = localStorage.length;
    var finala,answers;
    var timeleft=60;
    final.classList.remove("open-fj");
    fquestion.classList.add("fque-open");
  
    document.getElementById("ae").innerHTML = fai;
    
  
    var gameTime = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(gameTime);
             //checkAnswer();
          } else {
            document.getElementById("time1").innerHTML = timeleft + " seconds remaining";
              
          }
          timeleft -=1; 
            tleft = timeleft;
        }, 1000); 
    
    timeout = setTimeout(function(){if (tleft == 5){ PlayerData1[12] = parseInt(PlayerData1[12]) -parseInt(finala);  document.getElementById("points").innerHTML = "Player Points:"+PlayerData1[12];}},60000);
    
    document.getElementById("fsub").addEventListener("click",function(){
        finala = validate(document.getElementById("famount").value);
   
    answers = document.getElementById("fanswer").value;
    
    if (answers == fans[fai]){
        PlayerData1[12] = parseInt(PlayerData1[12]) +parseInt(finala);
        
    }else{
        PlayerData1[12] = parseInt(PlayerData1[12]) -parseInt(finala);
       
    }
         fquestion.classList.remove("fque-open");
    
        window.alert("Player's Final Points:"+PlayerData1[12]);
        
    });
    
    localStorage.setItem(parseInt(m),JSON.stringify(PlayerData1));
}


function showfreq(){
    var nummales =0;
    var numfemales =0;
    var permale;
    var perfem;
    var totp=0;
    var lt=0;
    var twtth=0;
    var fts = 0;
    var gs = 0;
    var perlt=0;
    var pertwtth=0;
    var perfts = 0;
    var pergs = 0;
    
    var freq = setInterval(function(){ 
    for (let i =1; i <=parseInt(localStorage.length);i++) {
     showallplayers[i]=JSON.parse(localStorage.getItem(i));
 }
    
   for (let i = 1; i <parseInt(showallplayers.length);i++){
        if (showallplayers[i][5]=="F"){
            numfemales = parseInt(numfemales)+1;
        }else if (showallplayers[i][5]=="M"){
                nummales = parseInt(nummales)+1;
    
        }
       
       if (showallplayers[i][4]<20){
           lt = lt + 1;
       }else if (showallplayers[i][4]>=20 && showallplayers[i][4]<=39){
          twtth = twtth +1;
       }else if (showallplayers[i][4]>=40 && showallplayers[i][4]<=69){
         fts = fts+1;
       }else if (showallplayers[i][4]>69){
        gs = gs+1;
       }
       totp = parseInt(totp)+1;
    }
    
    
    
    permale = (nummales/totp)*100;
    perfem = (numfemales/totp)*100;
    perlt = (lt/totp)*100;
    pertwtth = (twtth/totp)*100;
    perfts = (fts/totp)*100;
    pergs = (gs/totp)*100;
   
    document.getElementById("showcharts").innerHTML = "Male<img src =\"grey.png\" width="+permale+"\px\>"+"Female<img src =\"grey.png\" width="+perfem+"\px\>"+"<br/>-20&nbsp;<img src =\"grey.png\" width="+perlt+"\px\>"+ "20-x-39<img src =\"grey.png\" width="+pertwtth+"\px\>"+"40-x-69<img src =\"grey.png\" width="+perfts+"\px\>"+ "-69<img src =\"grey.png\" width="+pergs+"\px\>";},5000);
}


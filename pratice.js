
//     function inputlength() {
//       let field = document.form1.text1.value;
//       letminlength = 6;
//       letmaxlength = 11;
//       if (field.length < 6 || field.length > 11) {
//         document.querySelector('5pm').innerHTML = `please make sure you input is not less than ${minlength} and more than ${maxlength}`;
//         return false;
//       } else {
//         document.querySelector('5pm').innerHTML = 'your input is accepted';
//         return time;
//       }
//     }
//     let text = document.getElementById
//     let myAge = document.querySelector('#age').value;
//     let btn = document.querySelector('button');

//     btn.addEventListener('click', function () {

//       let myAge = document.querySelector('#age').value;

//       if (isNaN(myAge) || !myAge) {
//         document.querySelector('span').innerHTML = 'invalid';
//         document.querySelector('input').style.color = 'red';
//       }
//       else {
//         document.querySelector('span').innerHTML = 'valid ';
//         document.querySelector('span').style.color = 'green';
//       }
//       document.querySelector('span');
//     })
//     let x = 56.58724;
//     alert(x.length)
//     alert(x.toLowerCase());//
//     alert(x.lastIndexOf("nice"));//
//     alert(x.search('nice'))
//     alert(x.slice());
//     let x ='tunde';
//     alert(x.slice())
//     function oga() {
//     let a = document.querySelector('h1').innerHTML;
//     let b = a.replace('shop', 'office');
//     document.querySelector('h1').innerHTML = b;
//     }
//     alert(x.toFixed('2'));
//     let myoutput = d.getHours();
//      alert(myoutput);
//     let d = new Date();
//     let Month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'july', 'August','september', 'october', 'december']
//     alert(Month[d.getMonth()]);
//     let y = new Date().getDay();
//     alert(y)
//     setTimeout(func/code,delay,ag1,ag2)
//     greet,2000
//     let greet = function(){
//       alert('HAPPY BIRTHDAY ')
//     }
//     setTimeout();
//     setTimeout(function(){
//       alert('welcome to my birthday party')
//     },2000)
//     setInterval(function(){
//       alert('welcome to my birthday party')
//     },2000)
//     function sayHi(who, phrase){
//       alert(phrase,';'+who)
//     }
//     function printNumber(from, to){
//       let current = from;
//       function go(){
//         alert(current)
//         if(current==to){
//           clearInterval(timeId)
//         }
//         current++
//       }
//       go()
//       let timeId = setInterval(go,1000)
//       }
//     // printNumber(10,20);
//     let countdown = new Date(`december 25 2023 13:09:00`).getTime();
//     function xma(){
//       let now = new Date().getTime();
//       let distance = countdown-now;
//       let days = Math.floor(distance/(24*60*60*1000));
//       let hours = Math.floor(distance%(24*60*60*1000)/(60*60*1000));
//       let minutes = Math.floor(distance%(60*60*1000)/(60*1000));
//       let seconds = Math.floor(distance%(60*1000)/1000);
//       if(distance==0){
//       clearInterval(timeId);
//       document.querySelector(`#countdown`).innerHTML = `HAPPY NEW YEAR`
//     }
//       document.querySelector(`#countdown`).innerHTML= `${days}D:${hours}H: ${minutes}M: ${seconds}S`
      
//     }
//     xma() 
//     setInterval(xma,1000)
    
//  let countdown = new Date(`July 3 2023 13:30:00`).getTime();
//  let Month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'july', 'August','september', 'october', 'december']
//  document.querySelector(`#countdown`).innerHTML= `${days}D:${hours}H: ${minutes}M: ${seconds}S`
// let countdown = new Date(`July 3 2023 14:55:00`).getTime();
function countdown() {
  let d = new Date()
  let Months = [`january`, `feburary`, `march`, `april`, `may`, `june`, `july`, `august`, `septmber`, `october`, `november`, `december`];
  let ho = d.getHours();
  let mi = d.getMinutes();
  let sec = d.getSeconds();
  let da = d.getDate();
  if (ho < 10) {
      ho = `0` + ho;
  }
  if (da < 10) {
      da = `0` + da;
  }
  if (mi < 10) {
      mi = `0` + mi;
  }
  if (sec < 10) {
      sec = `0` + sec;
  }
  document.querySelector(`#tunde`).innerHTML = `${Months[d.getMonth()]} 
  ${da}, ${ho} : ${mi} : ${sec}`
}
countdown()
let remi = setInterval(countdown, 1000)

// let countdown = new Date(`July 5 2023 13:31:00`).getTime();
//     function countdown(){
//       let now = new Date().getTime();
//       let distance = countdown-now;
//       let days = Math.floor(distance/(24*60*60*1000));
//       let hours = Math.floor(distance%(24*60*60*1000)/(60*60*1000));
//       let minutes = Math.floor(distance%(60*60*1000)/(60*1000));
//       let seconds = Math.floor(distance%(60*1000)/1000);
//       if(distance==0){
//       clearInterval(timeId);
//       document.querySelector(`#countdown`).innerHTML = `HAPPY NEW YEAR`
//     }
//       document.querySelector(`#countdown`).innerHTML= `${days}D:${hours}H: ${minutes}M: ${seconds}S`
    
//     }
//     countdown() 
//     setInterval(countdown,1000)
     //declaring variable
      let ago= document.getElementById('min');
      let cago= document.getElementById('sec'); 
      let startbtn= document.getElementById('start');
      let stopbtn= document.getElementById('stop');
      let pausebtn= document.getElementById('pause');
      let contbtn= document.getElementById('cont');
      let resetbtn= document.getElementById('reset');
      let efg  = 0;
      let k;

      // the engine that does the counting
    function myengine(){
       ++efg;
      let mm=parseInt(efg/60);
      let ss = efg%60;

      //formatting the output
      mm =(mm<10)? "0"+mm:mm;
      ss =(ss<10)? "0"+ss:ss;

      // output the result
      ago.innerHTML=mm;
      cago.innerHTML=ss;


      // auto pause the timer at 5 minutes count
      if(mm==5){
        clearInterval(k)
      }
      
    }
   
    function Count(){
       k = setInterval(myengine,1000);
    }

    function startCount(){
       Count();
       startbtn.style.display='none';
       pausebtn.style.display='inline';
       stopbtn.style.display='inline';
    }

    function pauseCount(){
      clearInterval(k);        
       pausebtn.style.display='none';
       contbtn.style.display='inline';
    }

    function contCount(){
       Count();
       contbtn.style.display='none';
       pausebtn.style.display='inline';
      
    }

    function stopCount(){
      clearInterval(k);    
      pausebtn.style.display='none';
      contbtn.style.display='none';
      stopbtn.style.display='none';
      resetbtn.style.display='inline';
    }

    function resetCount(){
     
      efg=0
      cago.innerHTML=0+'0',
      ago.innerHTML=0+'0',

      contbtn.style.display='none';
       stopbtn.style.display='none';
       resetbtn.style.display='none';
       startbtn.style.display='inline';
       startbtn.innerHTML="START AGAIN"
      }   

    startbtn.addEventListener('click', startCount);
    pausebtn.addEventListener('click', pauseCount);
    contbtn.addEventListener('click', contCount);
    stopbtn.addEventListener('click', stopCount);
    resetbtn.addEventListener('click', resetCount);
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    const find = document.querySelector(`.check`);

    
  let gohigh = document.querySelector(`.highestscore`).innerHTML;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
  let i = document.querySelector(`.check`);

  let theNumber = document.querySelector('.number');
  let thebody = document.querySelector(`.ap`);
  let myMessage = document.querySelector(`.message`);
  let score = 20;
  let restart = document.querySelector(`.reload`);

  function scoreLine() {
    score = score - 4;
    if (score == 0) {
      myMessage.innerHTML = `Game Over`;
      myMessage.style.color=`white`
      find.innerHTML = `Game Over`;
      find.style.color = `red`;
      find.style.background = `white`;
      find.style.display = `none`
      document.querySelector(`.mynumber`).value = "Please refresh the page";
      thebody.style.backgroundColor = `red`;
      theNumber.innerHTML = `The number is ${secretNumber}`;
      restart.style.display = `block`;
      document.querySelector(`.mynumber`).value = "Please restart";
    }
  }



  let myEngine = function () {
    let myGues = Number(document.querySelector(`.mynumber`).value);
    if (!myGues || myGues < 1 || myGues > 20) {
      myMessage.innerHTML = `You must put a valid number between 1 and 20`;
      myMessage.style.color = `red`;
      document.querySelector(`.mynumber`).value = "";
      restart.style.display = `none`;
      scoreLine()

    }
    else if (myGues < secretNumber) {
      myMessage.innerHTML = `your guess is low`;
      myMessage.style.color = "lightblue";
      document.querySelector(`.mynumber`).value = "";
      restart.style.display = `none`;
      scoreLine()
    }
    else if (myGues > secretNumber) {
      myMessage.innerHTML = `your guess is too high`;
      myMessage.style.color = "lightblue";
      document.querySelector(`.mynumber`).value = "";
      restart.style.display = `none`;
      scoreLine();
    }
    else if (myGues == secretNumber) {
      myMessage.innerHTML = 'Correct';
      myMessage.style.color = 'white';
      thebody.style.background = `green`;
      thebody.style.color = `white`;
      theNumber.innerHTML = `The number is ${secretNumber} Correct`;
      theNumber.style.color = `white`;
      find.innerHTML = ` <h4> Score: ${score} </h4>`;
      find.style.color = `green`;
      find.style.background = `white`;
      find.style.display = `block`;
      restart.style.display = `block`;
      restart.style.background = `white`;
      restart.style.color = `green`;
      document.querySelector(`.mynumber`).value = "Please restart";
      if(gohigh<score){
        document.querySelector(`.highestscore`).innerHTML=`${score}`
      }
      else{
        document.querySelector(`.highestscore`).innerHTML=`${gohigh}`
      }
      
  }

}

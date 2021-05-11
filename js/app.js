

//first i select the button by its id 

let btnAdd = document.getElementById('addCourses');



// i define an array  for various linear gradients and use it for later pourposes such that whenever a new card is generated its imgColor is random and we get new cards of different colors :)



const colorsArray =['linear-gradient(120deg,rgb(231, 255, 254),rgb(255, 142, 249))' ,'linear-gradient(120deg,rgb(196, 255, 206),rgb(255, 249, 231))'  ,'linear-gradient(120deg,rgb(164, 255, 179),rgb(255, 212, 142))',  'linear-gradient(120deg,rgb(255, 171, 171),rgb(255, 202, 142))',  'linear-gradient(120deg,rgb(92, 255, 236),rgb(195, 255, 177))',   'linear-gradient(120deg,rgb(214, 214, 214),rgb(231, 231, 231))'  ,'linear-gradient(120deg,rgb(142, 255, 161),rgb(156, 199, 255))'    ,'linear-gradient(120deg,rgb(253, 255, 231),rgb(255, 221, 142))' , 'linear-gradient(120deg,rgb(200, 123, 231),rgb(65, 155, 233))'];


let t1 = document.getElementById('target1');

let count = 9 ;

let cardToBeAdded = document.querySelector('.courseCard2');

//  now making the button functional by adding event listeners and a function wil grabs the required stuff and i just clone node method to do the clone of the cards also a fetch random number is called which generates and returns random numbers from  0 to the length of the array which is then used to change the background of the generated image ::::)))))


btnAdd.addEventListener('click' , function(){
   
    // console.log(colorsArray);

    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');

  

  
    if (input1.value == 0 || input2.value == 0 ){
        alert('Enter The Course Name And Semester Details');
    }

   else{

    let courseName2 = document.getElementsByClassName('courseName2');
    let head2 = document.getElementsByClassName('head2');



    let logoImage = document.getElementsByClassName('logoImg11');

    let randomNumber = fetchRandomNumber();

    logoImage[0].style.background = colorsArray[randomNumber];
    head2[0].innerText = input2.value;
    courseName2[0].innerText = input1.value;
    
   
    t1.appendChild(cardToBeAdded.cloneNode(true));
    count+=1;
    let option = document.getElementById('courseCounter');
    option.innerText =count;
    
   }
  
});


function fetchRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}


let removeCourses  = document.getElementById('removeCourses');

removeCourses.addEventListener('click' , function(){
    // console.log('hello world');

    // console.log(t1.childNodes.length);
    t1.removeChild(t1.childNodes[t1.childNodes.length-1]);
    count-=1;

    let option = document.getElementById('courseCounter');
    option.innerText =count;

});




// first i describe a json array of objects which contains course name and its details

// < !-- < div class="cardBox" >
//     <div class="cardImg"></div>
//     <div class="semDetails"></div>
//     <div class="courseDetails"></div>
// </div > -->
////For top nav bar
var username=sessionStorage.getItem("username");
var userpic=sessionStorage.getItem("userpic");
if(username='\0'){
document.getElementById('user-name').innerHTML="username";
}
else{
    document.getElementById('user-name').innerHTML=username;
}
document.getElementById('user-pic').style.backgroundImage="url('"+userpic+"')";



/////////////for course component dropdown later in code
let dynlist=document.getElementsByClassName('dynamicList2');

let coursecomp=document.getElementsByClassName('course-components');
let clickme=document.getElementsByClassName('clickme');
////////////





//dropdownintopnavbar
var count5=0;
var x=document.getElementById('nav-dropdown');

function navDrop(){
    if(count5==0){
        x.style.display="block";
        count5=1;
        
    }
    else{
        x.style.display="none";
        count5=0;
    }
}

///////


///////
let pqrs=1;

let courseData = [

    { "courseName": "Mech Osc. & Waves", "SemDetails": "Sem II 2020-21 March " },
    { "courseName": "Electrical Sciences", "SemDetails": "Sem II 2020-21 March " },
    { "courseName": "General Chemistry", "SemDetails": "Sem II 2020-21 March " },
    { "courseName": "C Programming", "SemDetails": "Sem II 2020-21 March " },
    { "courseName": "Advanced Calculus", "SemDetails": "Sem II 2020-21 March " },
    { "courseName": "Mordern Physics", "SemDetails": "Sem II 2020-21 March " }

] ;

let recentCourseData = [
    { "courseName": "Mech Osc. & Waves", "SemDetails": "Sem II 2020-21 March " },
    { "courseName": "Electrical Sciences", "SemDetails": "Sem II 2020-21 March " }
]; 
// working with the recent courses 
let main  = document.getElementById('recent');

recentCourseGenerator(recentCourseData);

function recentCourseGenerator(data){
    for(let i = 0 ; i <data.length;i++){
        let card = `<div class="cardBox">
                        <div class="cardImg">



                        </div>

                        <div class="semDetails"> ${courseData[i].SemDetails}</div>
                        
                        <div class="courseDetails"> ${courseData[i].courseName} </div>
                    </div>`;

                    main.innerHTML+=card;
    }
}


// then i grab my target div with id of root

let root  = document.getElementById('root');

cardGenerator(courseData) ; 


function cardGenerator(data){

    for(let  i = 0 ;i<data.length ; i ++){

        let card = `<div class="cardBox">
                        <div class="cardImg">

                        <button class="dropdown">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                        
                            <div class="dropDownOnClick">
                                <div>
                                    <button class="star">Star Course</button>
                                </div>

                                <div>
                                    <button class="delete">Remove Course</button>
                                </div>
                            </div>

           
                        </div>
                        

                 <div class="semDetails"> ${courseData[i].SemDetails}</div>        

                 <div class="courseDetails"> ${courseData[i].courseName} </div>
                    </div>`;


        root.innerHTML += card ; 

    }

}

let dropDown = document.getElementsByClassName('dropdown');
let dropDownOnClick = document.getElementsByClassName('dropDownOnClick');
let count = 0;



    for(let i =0 ; i<dropDownOnClick.length ; i++){

        dropDown[i].addEventListener('mouseover', function () {
            count += 1;
            if (count % 2 != 0) {
                dropDownOnClick[i].style.display = 'flex'
                dropDown[i].style.marginLeft = '120px'
                dropDown[i].style.marginBottom = '1px'

            }
            else {
                dropDownOnClick[i].style.display = 'none'
                dropDown[i].style.margin = '0'
            }
        });

    }


// console.log(dropDownOnClick);
// console.log(dropDown);

// now giving every element random background color
let cardImg = document.getElementsByClassName('cardImg');

const colorsArray = ['linear-gradient(120deg , lightgreen , lightblue)' , 'linear-gradient(120deg,rgb(231, 255, 254),rgb(255, 142, 249))', 'linear-gradient(120deg,rgb(196, 255, 206),rgb(255, 249, 231))', 'linear-gradient(120deg,rgb(164, 255, 179),rgb(255, 212, 142))', 'linear-gradient(120deg,rgb(255, 171, 171),rgb(255, 202, 142))', 'linear-gradient(120deg,rgb(92, 255, 236),rgb(195, 255, 177))', 'linear-gradient(120deg,rgb(142, 255, 161),rgb(156, 199, 255))', 'linear-gradient(120deg,rgb(253, 255, 231),rgb(255, 221, 142))', 'linear-gradient(120deg,rgb(200, 123, 231),rgb(65, 155, 233))'];

function getRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}

for(let i=0 ; i<cardImg.length ; i++){


    cardImg[i].style.background = colorsArray[i];

}

////List to card view
/////
////
inputName=document.getElementsByClassName('courseDetails');
inputSem=document.getElementsByClassName('semDetails');


var card=document.getElementsByClassName('cardBox');
// console.log(card);
let counter=1;
function viewDropdown(x){
  pqrs=x;
    if(x==2){
    
    counter+=1;
    if(counter%2==0){
        
        
    for(let i =0 ;i<card.length;i++){
        card[i].style.width = '100%';
        card[i].style.height = '100px';
        card[i].style.padding = '20px';
        card[i].style.display = 'flex';
        card[i].style.justifyContent = 'flex-start';
        card[i].style.alignItems = 'center';
    }


    for(let i= 0 ; i<cardImg.length ; i++){
        // console.log(cardImg);
        cardImg[i].style.height = '80px';
        cardImg[i].style.width = '80px';
        cardImg[i].style.borderRadius = '50%';
        cardImg[i].style.marginRight = '10%';


    }

    for(let i=0; i<inputName.length ; i++){

        inputName[i].style.marginRight= '5%';
        inputSem[i].style.marginRight= '5%';

    }

 
    }
 }


else if(x==1){
counter+=1;

if(counter%2!=0){
 for(let i =0 ;i<card.length ;i++){
         card[i].style.width = '270px';
        card[i].style.height = '180px';
        card[i].style.padding = '0px';
        card[i].style.display = 'block';
     
        // layer[i].style.width = '100%';
        // layer[i].style.height = '100px';
        // layer[i].style.padding = '20px';
        // layer[i].style.display = 'flex';
        // layer[i].style.justifyContent = 'flex-start';
        // layer[i].style.alignItems = 'center';
    }


    for(let i= 0 ; i<cardImg.length ; i++){

        cardImg[i].style.height = '130px';
        cardImg[i].style.width = '270px';
        cardImg[i].style.borderRadius = '0%';
        cardImg[i].style.marginRight = '0%';


        // logoImgCommon[i].style.height = '50px';
        // logoImgCommon[i].style.width = '50px';
        // logoImgCommon[i].style.borderRadius = '1000000%';
        // logoImgCommon[i].style.marginRight = '10%';
    }


   

}
}
}


////List to card view end
///
///
///
///

// now  add courses and remove courses part 

let input1Sem = document.getElementById('input1Sem');

let input2Course = document.getElementById('input2Course');

let addCourse = document.getElementById('add');

let removeCourse = document.getElementById('remove');


addCourse.addEventListener('click' , function(){

    if (input1Sem.value == '' || input2Course.value == ''){
        alert('Please Fill The Course Name And Semester Details Before Adding a New Course') ; 
    }
    else{
     
        let randomNumber = getRandomNumber();

     let newCard = `<div class="cardBox">
                        <div class="cardImg">

                            <button class="dropdown">
                            <i class="fas fa-ellipsis-h"></i>
                            </button>


                                       <div class="dropDownOnClick">
                <div>
                    <button class="star">Star Course</button>
                </div>

                <div>
                        </div>

              
                    <button class="delete">Remove Course</button>
                </div>
            </div>
            
                        <div class="semDetails"> ${input1Sem.value}</div>
                        <div class="courseDetails"> ${input2Course.value} </div>
                    </div>`;

        
        root.innerHTML += newCard;
        
       let a = root.lastChild.children;
       a[0].style.background = colorsArray[randomNumber];
 

       //////
       /////If course is added when in list mode
        /////
       if(pqrs==2) //pqrs is a global variable that takes the value of the view mode option clicked
       {
        for(let i =0 ;i<card.length;i++){
            card[i].style.width = '100%';
            card[i].style.height = '100px';
            card[i].style.padding = '20px';
            card[i].style.display = 'flex';
            card[i].style.justifyContent = 'flex-start';
            card[i].style.alignItems = 'center';
        }
    
    
        for(let i= 0 ; i<cardImg.length ; i++){
            // console.log(cardImg);
            cardImg[i].style.height = '100px';
            cardImg[i].style.width = '100px';
            cardImg[i].style.borderRadius = '50%';
            cardImg[i].style.marginRight = '10%';
    
    
        }
    
        for(let i=0; i<inputName.length ; i++){
    
            inputName[i].style.marginRight= '5%';
            inputSem[i].style.marginRight= '5%';
    
        }
       }
       /////////////////end of "if course is added when in list mode"
       /////
       /////
           ////Add course to left end
       let coursecomp=document.getElementById('mycoursedropdown');
       let toBeAdded=`<li class="dynamicList2"><i class="fa fa-caret-right clickme"></i>${input2Course.value}
       <ul class="course-components">
           <li>Participants</li>
           <li>Badges</li>
           <li>Competencies</li>
           <li>Grades</li>
           <li>Notice Section</li>
           <li>Online Quiz</li>
           <li>Assignment</li>
           <li>lecture-1</li>
           <li>lecture-2</li>
           <li>lecture-3</li>
           <li>lecture-4</li>
           <li>lecture-5</li>
           <li>lecture-6</li>
           <li>lecture-7</li>
           <li>lecture-8</li>
           <li>lecture-9</li>
           <li>lecture-10</li>
       </ul>
    </li>`;
    coursecomp.innerHTML += toBeAdded;

    coursecompreveal();//function to reveal coursecomp when clicked
    generateTemplate();//genrateTemplate if clicked
       /////
    }
});

// now working on removing the courses 

removeCourse.addEventListener('click' , function(){

    root.lastChild.remove();

});

///////////////


// focussing on the leftBox again by making a json array of objects and using it to store static data



let leftHeaderArray = [

  { "HeaderName" :"Navigation"},

  { "HeaderName" :"Important Links" },

  { "HeaderName" :"Events" }
 
];

let leftListArray = [

    
    {"listEntry" : [
        "BITS Website", "AUGS/AGSR", "SWD Website", "ERP", "Student Achievements", "Recorded Classroom Videos"
    ]} , 
    {"listEntry" : [
        "OASIS", "BOSM", "Seminars & Events"
    ]}
    
];




// populating both the arrays inside html


let leftBox = document.getElementById('leftBox');

leftSideGenerator(leftHeaderArray);




function leftSideGenerator(data) {

    for (let i = 0; i < data.length; i++) {
let leftElement;
        if(i===0){
             leftElement = `
            <div class="leftElement">
               <h3>${data[i].HeaderName}</h3>
                            
              
               
               <div class="lb1"> <i class="fas fa-angle-down"></i>Dashboard</div>
               <ul class="dynamicList" list-style="none"></ul>
               <div class="lb1" id="lb1Home"> <i class="fas fa-home"></i> Site Home</div>

               <div class="lb1" id="sitePages"> <i class="fas fa-angle-down"></i>Site Pages
                   
                   <div class="wrapper" class="lb1">
                       <div class="lb1"><i class="fas fa-square"></i>Site Blogs</div>
                       <div class="lb1"><i class="fas fa-square"></i>Site Badges</div>
                       <div class="lb1"><i class="fas fa-square"></i>Tags</div>
                       <div class="lb1"> <i class="far fa-calendar-alt"></i>Calendar</div>

                   </div>
                
            </div>
            <div class="lb1"> <i class="fas fa-angle-down"></i>My courses
            <ul id="mycoursedropdown" style="list-style-type=none;">
            </ul>
            </div>
         `

        }
        else{
         leftElement = `
                             <div class="leftElement">
                                <h3>${data[i].HeaderName}</h3>

                                <ul class="dynamicList"></ul>
                            </div>
                          `
        }
        leftBox.innerHTML += leftElement ;
    }
}

//*for site pages dropdown
let sitePagesDropDown = document.getElementById('sitePages');
// console.log(sitePagesDropDown);
let wrapper = document.getElementsByClassName('wrapper');


let count10 =1 ; 
let num10 =0 ; 


sitePagesDropDown.addEventListener('click' , function(){

    count10+=1;
    if(count10%2==0){
    wrapper[0].style.display ='block';
    }

    else{
        wrapper[0].style.display = 'none';
    }
});
///
///// Adding course componenets
function addcoursedropdown(){
   let coursecomp=document.getElementById('mycoursedropdown');
   for(let i=0;i<courseData.length;i++){
    //    console.log(courseData);
   let toBeAdded=`<li class="dynamicList2"><i class="fa fa-caret-right clickme"></i>${courseData[i].courseName}
   <ul class="course-components">
       <li>Participants</li>
       <li>Badges</li>
       <li>Competencies</li>
       <li>Grades</li>
       <li>Notice Section</li>
       <li>Online Quiz</li>
       <li>Assignment</li>
       <li>lecture-1</li>
       <li>lecture-2</li>
       <li>lecture-3</li>
       <li>lecture-4</li>
       <li>lecture-5</li>
       <li>lecture-6</li>
       <li>lecture-7</li>
       <li>lecture-8</li>
       <li>lecture-9</li>
       <li>lecture-10</li>
   </ul>
</li>`;
coursecomp.innerHTML += toBeAdded;
}
}
addcoursedropdown();

function coursecompreveal(){
for(let k=0;k<clickme.length;k++){
    let check=2;
     dynlist=document.getElementsByClassName('dynamicList2');

     coursecomp=document.getElementsByClassName('course-components');
     clickme=document.getElementsByClassName('clickme'); 
     
    clickme[k].addEventListener("click",function(){
        let temp=clickme[k].classList;
        for(let i=0;i<temp.length;i++){
            if(temp[i]=="fa-caret-right"){
                check=1;
                break;
            }
            else{check=0;}
        }
        if(check==1){
       clickme[k].classList.remove('fa-caret-right');
       clickme[k].classList.add('fa-caret-down');
       coursecomp[k].style.display="block";
       }
       else if(check==0){
        clickme[k].classList.add('fa-caret-right');
        clickme[k].classList.remove('fa-caret-down');
        coursecomp[k].style.display="none";
       }
   })
 

}
}
coursecompreveal();
//////
/////
let dynamicList = document.getElementsByClassName('dynamicList');

// console.log(dynamicList);



for(let i = 0 ; i<dynamicList.length -1 ; i++){
    
    for(let j=0 ; j<leftListArray[i].listEntry.length ; j++){
         
        let  injectedElement =`<li>${leftListArray[i].listEntry[j]}</li>`

        dynamicList[i+1].innerHTML += injectedElement;
    }

}
// console.log('https://www.googleapis.com/calendar/v3/calendars/en.uk%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBZTIwciuz4BN2f5RAXf63l5B0pAG9N4JA')


////////////////////////////////////////////
// the above bar thing when any course is clicked 
//js for the dynamic boiler plate
function generateTemplate(){
let topMenu3 = document.getElementById('topMenu3');
let containerForTopMenu = document.getElementsByClassName('containerForTopMenu');



 coursecomp=document.getElementsByClassName('course-components');
 clickme=document.getElementsByClassName('clickme');



let onClickOfCard  =document.getElementsByClassName('onClickOfCard');

let layer=document.getElementsByClassName('cardBox');


for(let i=0 ; i<layer.length;i++){
    layer[i].addEventListener('click' , function(){
        onClickOfCard[0].style.display="block";
       document.getElementsByClassName('centerBox')[0].style.display="none";
       document.getElementsByClassName('centerBox2')[0].style.display="block";
       topMenu3.innerText = document.getElementsByClassName('courseDetails')[i].innerText;
       ////Make Left side drop down on clicking a particular course
          
       for(let j=0;j<coursecomp.length;j++){      //clearing any clicked course on the left side
           coursecomp[j].style.display="none";
           clickme[j].classList.add('fa-caret-right');
           clickme[j].classList.remove('fa-caret-down');

       }   
          ////Some error is coming is the down part , for now jugaad down HAVE TO FIX IT 
          ////In actuality should be i not i-2 but error is coming
           coursecomp[i-2].style.display="block";
           clickme[i-2].classList.remove('fa-caret-right');
           clickme[i-2].classList.add('fa-caret-down');
       /////////////

        
} );


}

}


let goBackToMainPage = document.getElementById('goBackToMainPage');


goBackToMainPage.addEventListener('click' , function(){

     onClickOfCard  =document.getElementsByClassName('onClickOfCard');

     layer=document.getElementsByClassName('cardBox');
    

        onClickOfCard[0].style.display="none";
       document.getElementsByClassName('centerBox')[0].style.display="block";
       document.getElementsByClassName('centerBox2')[0].style.display="none";

       for(let j=0;j<coursecomp.length;j++){      //clearing any clicked course on the left side
        coursecomp[j].style.display="none";
        clickme[j].classList.add('fa-caret-right');
        clickme[j].classList.remove('fa-caret-down');

    }  
       

})

generateTemplate();

//////////////////



// working on staring the course on click of a buttton 




let starMyCourse = document.getElementsByClassName('star');
let staredList = document.getElementById('staredList');
let courseDetails = document.getElementsByClassName('courseDetails');
// console.log(starMyCourse)


for(let i=0 ; i<starMyCourse.length ; i++){
    starMyCourse[i].addEventListener('click' , function(){


        staredList.innerHTML += `<li class="staredCourseName">${courseDetails[i].textContent}</li>`

    });
}

// working on removing the course 


let deleteTheCourse = document.getElementsByClassName('delete');


deleteTheCourse.addEventListener('click' ,function(){
for(let i = 0;i<deleteTheCourse.length ; i++){

    root.innerHTML -= card[i+2];
}

})

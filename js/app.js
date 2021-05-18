var username=sessionStorage.getItem("username");
var userpic=sessionStorage.getItem("userpic");
document.getElementById('user-name').innerHTML=username;
document.getElementById('user-pic').style.backgroundImage="url('"+userpic+"')";


/////////////for course component dropdown later in code
let dynlist=document.getElementsByClassName('dynamicList');

let coursecomp=document.getElementsByClassName('course-components');
let clickme=document.getElementsByClassName('clickme');
////////////

let sitePagesDropDown = document.getElementById('sitePages');

let wrapper = document.getElementsByClassName('wrapper');


let count =1 ; 
let num =0 ; 


sitePagesDropDown.addEventListener('click' , function(){

    count+=1;
    if(count%2==0){
    wrapper[0].style.display ='block';
    }

    else{
        wrapper[0].style.display = 'none';
    }
});



// the course dropdown

let courseDropDown = document.getElementById('course-dd');
let list = document.getElementsByClassName('myCourseDropdown');
list[0].style.display = 'none';

courseDropDown.addEventListener('click' , function(){


    num+=1;
    
    if(num%2 ==0){
    list[0].style.display = 'none';
    }
    else{
        list[0].style.display = 'block';
    }
});



// now main functionality of add and remove courses



const colorsArray =['linear-gradient(120deg,rgb(231, 255, 254),rgb(255, 142, 249))' ,'linear-gradient(120deg,rgb(196, 255, 206),rgb(255, 249, 231))'  ,'linear-gradient(120deg,rgb(164, 255, 179),rgb(255, 212, 142))',  'linear-gradient(120deg,rgb(255, 171, 171),rgb(255, 202, 142))',  'linear-gradient(120deg,rgb(92, 255, 236),rgb(195, 255, 177))',   'linear-gradient(120deg,rgb(214, 214, 214),rgb(231, 231, 231))'  ,'linear-gradient(120deg,rgb(142, 255, 161),rgb(156, 199, 255))'    ,'linear-gradient(120deg,rgb(253, 255, 231),rgb(255, 221, 142))' , 'linear-gradient(120deg,rgb(200, 123, 231),rgb(65, 155, 233))'];



let dynamicList=document.getElementById('cloneNameContainer');

let t1 = document.getElementById('target1');

let btnAdd =document.getElementById('btn11');

btnAdd.addEventListener('click' , function(){
    

var abcd=0;

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

if (input1.value == 0 || input2.value == 0 ){
    alert('Enter The Course Name And Semester Details');
}


else{
    let details = document.getElementById('textSem'); 

    let  courseName= document.getElementById('textCourse');

    
    let cardToBeAdded = document.querySelector('#cloneToBe');
    let logoImage = document.getElementsByClassName('logoImg9');

    courseName.textContent = input1.value;
    details.textContent = input2.value;
   
//add element to course dropdown
    let firstname = input1.value;
let entry = document.createElement('li');
entry.innerText=firstname;

entry.classList.add('dynamicList');

let entry2 = document.createElement('ul');

let entry3 = document.createElement('li');
/////
////
entry3.innerText="participants";
entry2.appendChild(entry3);
let entry4= document.createElement('li');
entry4.innerText="badges";
entry2.appendChild(entry4);
let entry5= document.createElement('li');
entry5.innerText="Competencies";
entry2.appendChild(entry5);
let entry6= document.createElement('li');
entry6.innerText="Grades";
entry2.appendChild(entry6);
let entry7= document.createElement('li');
entry7.innerText="Notice Section";
entry2.appendChild(entry7);
let entry8= document.createElement('li');
entry8.innerText="OnlineQuiz";
entry2.appendChild(entry8);
let entry9= document.createElement('li');
entry9.innerText="Assignment";
entry2.appendChild(entry9);
let entry10= document.createElement('li');
entry10.innerText="Lecture-1";
entry2.appendChild(entry10);
let entry11= document.createElement('li');
entry11.innerText="lecture-2";
entry2.appendChild(entry11);
let entry12= document.createElement('li');
entry12.innerText="lecture-3";
entry2.appendChild(entry12);
let entry13= document.createElement('li');
entry13.innerText="lecture-4";
entry2.appendChild(entry13);
let entry14= document.createElement('li');
entry14.innerText="lecture-5";
entry2.appendChild(entry14);
let entry15= document.createElement('li');
entry15.innerText="lecture-6";
entry2.appendChild(entry15);
let entry16= document.createElement('li');
entry16.innerText="lecture-7";
entry2.appendChild(entry16);
let entry17= document.createElement('li');
entry17.innerText="lecture-8";
entry2.appendChild(entry17);
let entry18= document.createElement('li');
entry18.innerText="lecture-9";
entry2.appendChild(entry18);
let entry19= document.createElement('li');
entry19.innerText="lecture-10";
entry2.appendChild(entry19);
//////
///////
///////
entry2.classList.add('course-components');
entry2.style.display="none";
entry.appendChild(entry2);
entry.addEventListener("click",function(){
        
    entry2.style.display="block";
  
})
list[0].appendChild(entry);

    
//--------------------------------------
let randomNumber = fetchRandomNumber();
    logoImage[0].style.background = colorsArray[randomNumber];
   
    cardToBeAdded.classList.add('layer');


    t1.appendChild(cardToBeAdded.cloneNode(true));

    // addElementToDynamicList();
    
}

});


function fetchRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}


let removeCourses  = document.getElementById('btn22');

removeCourses.addEventListener('click' , function(){
    // console.log('hello world');

    // console.log(t1.childNodes.length);
    t1.removeChild(t1.childNodes[t1.childNodes.length-1]);
    list[0].removeChild(list[0].childNodes[list[0].childNodes.length-1]);
  

  

});








// making the announcement section





 let announceInput = document.getElementById('announceInput');


 let btnAnnounce =document.getElementById('makeAnncmnt');


 let chatListChild =document.getElementsByClassName('chatListChild');


let t2 = document.getElementById('target2');



 let val = 0;

 btnAnnounce.addEventListener('click' , function(){

     val+=1
   
     if(val!=0){
         chatListChild[0].style.display = 'none';
     }

    t2.appendChild(announceInput.cloneNode(true));
 });







// for the dropdown feature



let dropcourse1 =document.getElementById('dropcourse1');

let dropcourse2 =document.getElementById('dropcourse2');

let layer = document.getElementsByClassName('layer');

let logoImgCommon = document.getElementsByClassName('logoImgCommon');

let inputSem = document.getElementsByClassName('inputSem');

let inputName = document.getElementsByClassName('inputName');

let cloneToBe = document.getElementById('cloneToBe');

let logoImg9 = document.getElementsByClassName('logoImg9');

let layer7 = document.getElementsByClassName('layer7');




let counter = 1;

function viewDropdown(x){

    if(x==2){
    
    counter+=1;
    if(counter%2==0){
    for(let i =0 ;i<layer.length ;i++){
        layer[i].style.width = '100%';
        layer[i].style.height = '100px';
        layer[i].style.padding = '20px';
        layer[i].style.display = 'flex';
        layer[i].style.justifyContent = 'flex-start';
        layer[i].style.alignItems = 'center';
    }


    for(let i= 0 ; i<logoImgCommon.length ; i++){

        logoImgCommon[i].style.height = '50px';
        logoImgCommon[i].style.width = '50px';
        logoImgCommon[i].style.borderRadius = '1000000%';
        logoImgCommon[i].style.marginRight = '10%';


    }

    for(let i=0; i<inputName.length ; i++){

        inputName[i].style.marginRight= '5%';
        inputSem[i].style.marginRight= '5%';

    }

    cloneToBe.style.width = '100%';
    cloneToBe.style.height = '100px';
    cloneToBe.style.padding = '20px';
    cloneToBe.style.display = 'flex'
    cloneToBe.style.justifyContent = 'flex-start';
    cloneToBe.style.alignItems = 'center';
    cloneToBe.style.border = '1px solid gainsboro';
    

    layer7[0].style.display='none';
    }
 }


else if(x==1){
counter+=1;

if(counter%2!=0){
 for(let i =0 ;i<layer.length ;i++){
        layer[i].style.width = '270px';
        layer[i].style.height = '180px';
        layer[i].style.padding = '0px';
        layer[i].style.display = 'block';
     
        // layer[i].style.width = '100%';
        // layer[i].style.height = '100px';
        // layer[i].style.padding = '20px';
        // layer[i].style.display = 'flex';
        // layer[i].style.justifyContent = 'flex-start';
        // layer[i].style.alignItems = 'center';
    }


    for(let i= 0 ; i<logoImgCommon.length ; i++){

        logoImgCommon[i].style.height = '130px';
        logoImgCommon[i].style.width = '270px';
        logoImgCommon[i].style.borderRadius = '0%';
        logoImgCommon[i].style.marginRight = '0%';


        // logoImgCommon[i].style.height = '50px';
        // logoImgCommon[i].style.width = '50px';
        // logoImgCommon[i].style.borderRadius = '1000000%';
        // logoImgCommon[i].style.marginRight = '10%';
    }


    cloneToBe.style.width = '270px';
    cloneToBe.style.height = '180px';
    cloneToBe.style.padding = '0';
    cloneToBe.style.display = 'block'
    cloneToBe.style.border = '1px solid gainsboro';
  



    for(let i=0; i<inputName.length ; i++){

        inputName[i].style.marginRight= '0%';
        inputSem[i].style.marginRight= '0%';

    }
    layer7[0].style.display='none';

}
}
}


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




// the above bar thing when any course is clicked 

let topMenu3 = document.getElementById('topMenu3');
let containerForTopMenu = document.getElementsByClassName('containerForTopMenu');

//js for the dynamic boiler plate



let recentContainer =document.getElementsByClassName('recentConatainer');
let courseConatainer =document.getElementsByClassName('courseConatainer');
let outerWrapper  = document.getElementsByClassName('outerWrapper');

let onClickOfCard  =document.getElementsByClassName('onClickOfCard');



for(let i=0 ; i<layer.length;i++){
        layer[i].addEventListener('click' , function(){


        outerWrapper[0].style.display = 'none';
            // layer[1].style.display ='none';

        onClickOfCard[0].style.display = 'block'

        recentContainer[0].style.display = 'none';
    
        containerForTopMenu[0].style.display = 'flex';

        topMenu3.innerText = inputName[i].textContent;
        for(let j=0;j<dynlist.length;j++){
            coursecomp[j].style.display="none";
        }
        coursecomp[i].style.display="block";
        for(let j=0;j<clickme.length;j++){
            clickme[j].classList.remove('fa-caret-down');
        clickme[j].classList.add('fa-caret-right');
        }
        clickme[i].classList.add('fa-caret-down');
        clickme[i].classList.remove('fa-caret-right');
        sessionStorage.setItem("cardthatisclicked",i);
        
} );


}
/*var gotocoursepage=document.getElementsByClassName("leadtocoursepage");
for(let i=0;i<gotocoursepage.length;i++){
    gotocoursepag[i].addEventListener('click',function(){

        outerWrapper[0].style.display = 'none';
            // layer[1].style.display ='none';

        onClickOfCard[0].style.display = 'block'

        recentContainer[0].style.display = 'none';
    
        containerForTopMenu[0].style.display = 'flex';

        topMenu3.innerText = inputName[i].textContent;
        for(let j=0;j<dynlist.length;j++){
            coursecomp[j].style.display="none";
        }
        coursecomp[i].style.display="block";
        sessionStorage.setItem("cardthatisclicked",i);
    })
}*/

let courseCard = document.getElementsByClassName('courseCard');


let courseNameOnCard = document.getElementsByClassName('courseName')

for(let i= 0 ; i<courseCard.length ; i++){


    courseCard[i].addEventListener('click' , function(){


        outerWrapper[0].style.display = 'none';
            // layer[1].style.display ='none';

        onClickOfCard[0].style.display = 'block'

        recentContainer[0].style.display = 'none';

        containerForTopMenu[0].style.display = 'flex';

        topMenu3.innerText = courseNameOnCard[i].innerText;
       

        

        
} );

}

// bringing back the things



let goBackToMainPage = document.getElementById('goBackToMainPage');


goBackToMainPage.addEventListener('click' , function(){


    outerWrapper[0].style.display = 'block';
    // layer[1].style.display ='none';

    onClickOfCard[0].style.display = 'none'

    recentContainer[0].style.display = 'block';


    containerForTopMenu[0].style.display = 'none';

    topMenu3.innerText = ' ';
    pqrs=sessionStorage.getItem("cardthatisclicked");
    coursecomp[pqrs].style.display="none";
    clickme[pqrs].classList.remove('fa-caret-down');
    clickme[pqrs].classList.add('fa-caret-right');
    for(let j=0;j<clickme.length;j++){
        clickme[j].classList.remove('fa-caret-down');
    clickme[j].classList.add('fa-caret-right');
    }
    for(let j=0;j<dynlist.length;j++){
        coursecomp[j].style.display="none";
    }

});






//fixing the calendar 


let calendar = document.getElementsByClassName('calendar');

calendar[0].style.transform = 'scaleX(0.8)';

//for the course componenets to drop down
//////////////

console.log(dynlist);
console.log(coursecomp);

for(let k=0;k<clickme.length;k++){
    
   
     clickme[k].addEventListener("click",function(){
        clickme[k].classList.remove('fa-caret-right');
        clickme[k].classList.add('fa-caret-down');
        coursecomp[k].style.display="block";
        
    })
  

}
////////////

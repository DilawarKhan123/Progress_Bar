const progress=document.getElementById('progress');
const prevBtn=document.getElementById('prev');
const nextBtn=document.getElementById('next');
const circles=document.querySelectorAll('.circle');
const form1 = document.getElementById('form1');
const myFile=document.getElementById('myfile2');
const heading2=document.getElementById('heading2');


let activeIndex=1;
        heading.style.display = 'block';
        form1.style.display = 'none';
        myFile.style.display='none';
        heading2.style.display='none';

nextBtn.addEventListener('click',()=>{
   
  
    activeIndex++;
    if(activeIndex>circles.length){
        activeIndex=circles.length; 
    }
    updateUI();
    if(activeIndex===1){
        heading.style.display = 'none';
        form1.style.display = 'none';
        myFile.style.display='none';
        heading2.style.display='none';
      
    }else if (activeIndex===2){
        form1.style.display = 'block';
        heading.style.display = 'none';
        myFile.style.display='none';
        heading2.style.display='none';
    } else if(activeIndex===3) {
        heading.style.display = 'none';
        form1.style.display = 'none';
        myFile.style.display='block';
        heading2.style.display='none';
    }else{
        heading.style.display = 'none'; 
        form1.style.display = 'none'; 
        myFile.style.display='none';
        heading2.style.display='block';
    }
    

});

prevBtn.addEventListener('click',()=>{
    activeIndex--;
  
    if(activeIndex<1){
      
        activeIndex=1;
    }
    updateUI();
    if(activeIndex===1){
        heading.style.display = 'block';
        form1.style.display = 'none';
        myFile.style.display='none';
        heading2.style.display='none';
      
    }else if (activeIndex===2){
        form1.style.display = 'block';
        heading.style.display = 'none';
        myFile.style.display='none';
        heading2.style.display='none';
    } else if(activeIndex===3) {
        heading.style.display = 'none';
        form1.style.display = 'none';
        myFile.style.display='block';
        heading2.style.display='none';
    }else{
        heading.style.display = 'none'; 
        form1.style.display = 'none'; 
        myFile.style.display='none';
        heading2.style.display='block';
    }
  

});
function updateUI(){
    circles.forEach((circle,index)=>{
        if(index<activeIndex){
            circle.classList.add('active');
        }else{
            circle.classList.remove("active");

        }
       
    });
    const actives=document.querySelectorAll(".active");
    progress.style.width=((actives.length-1)/(circles.length-1))*100+'%';

    if(activeIndex===1){
        prevBtn.disabled=true;
        heading.style.display = 'block'; 
    }else if (activeIndex===circles.length){
        nextBtn.disabled=true;

    }else{
        prevBtn.disabled=false;
        nextBtn.disabled=false;

    }

};

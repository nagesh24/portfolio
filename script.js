const pageturnbtn=document.querySelectorAll(".nextprev-btn");
pageturnbtn.forEach((e1,index)=>{
    e1.onclick=()=>{
        const pageturnid=e1.getAttribute('data-page');
        const pageturn=document.getElementById(pageturnid);
        if(pageturn.classList.contains('turn')){
            pageturn.classList.remove('turn');
            setTimeout(()=>{
                pageturn.style.zIndex=20-index;

            }, 500)
        }
        else{
            pageturn.classList.add('turn');
            setTimeout(()=>{
                pageturn.style.zIndex=20+index;
            }, 500)
        }
    }
})
const pages =document.querySelectorAll('.book-page.page-right');
const contactmebtn=document.querySelector('.btn.contact-me');
contactmebtn.onclick=()=>{
    pages.forEach((page,index)=>{
        setTimeout(()=>{
            page.classList.add('turn');
            setTimeout(()=>{
                page.style.zIndex=20+index;

            },500)
        },(index+1)*200+100)
    })
  
}
let totalpages=pages.length;
let pagenumber=0;
function reverseindex(){
    pagenumber--;
    if(pagenumber<0){
        pagenumber=totalpages-1;
    }
}
const backprofilebtn=document.querySelector('.back-profile');
backprofilebtn.onclick=()=>{
    pages.forEach((_, index)=>{
        setTimeout(()=>{
            reverseindex();
            pages[pagenumber].classList.remove('turn');
            setTimeout(()=>{
                reverseindex();
                pages[pagenumber].style.zIndex=10+index;
            },500)
        },(index+1)*200+100)
    })
}
const coverright=document.querySelector('.cover.cover-right');
const pageleft=document.querySelector('.book-page.page-left');
setTimeout(()=>{
    coverright.classList.add('turn');
},2100)
setTimeout(()=>{
    coverright.style.zIndex=-1;
},2800)
setTimeout(()=>{
    pageleft.style.zIndex=20;
},3200)

pages.forEach((_, index)=>{
    setTimeout(()=>{
        reverseindex();
        pages[pagenumber].classList.remove('turn');
        setTimeout(()=>{
            reverseindex();
            pages[pagenumber].style.zIndex=10+index;
        },500)
    },(index+1)*200+2100)
})
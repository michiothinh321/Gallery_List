let items = document.querySelectorAll('.wrapper__items img');
let closeBtn = document.querySelector('.close');
let nextBtn = document.querySelector('.right');
let prevBtn = document.querySelector('.left');
let galleryItems = document.querySelector('.gallery__items img')
let gallery = document.querySelector('.gallery')
let currentIndex = 0

function galleryShow(){
    galleryItems.src = items[currentIndex].src
    gallery.classList.add('show')
}
items.forEach(function(item,index){
    item.addEventListener('click',function(){
        currentIndex = index;
       galleryShow();
    })
})
closeBtn.addEventListener('click',function(){
    gallery.classList.remove('show')
})
document.addEventListener('keydown',function(e){
    if(e.keyCode===27){
        gallery.classList.remove('show')
    }
})

prevBtn.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--;
        galleryShow();
    }
    else
    {
        currentIndex=items.length-1
        galleryShow();
    }
})
nextBtn.addEventListener('click',function(){
    if(currentIndex < items.length-1){
        currentIndex++;
        galleryShow();
    }
    else
    {
        currentIndex=0
        galleryShow();
    }
})
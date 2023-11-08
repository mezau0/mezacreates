let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 0;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box')];
    for (var i = currentItem; i < currentItem + 24; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 24;

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}
function initCarousel() {
  let right_arrow = document.querySelector(".carousel__arrow_right");
  let left_arrow = document.querySelector(".carousel__arrow_left");
  let img = document.querySelector(".carousel__inner");
  let position = 0;
  left_arrow.style.display = 'none';
  right_arrow.addEventListener('click',() => {
    console.log(position);
    position-=img.offsetWidth;
    document.querySelector(".carousel__inner").style.transform = `translateX(${position}px)`;
    if( position == -(3 * img.offsetWidth)){
      right_arrow.style.display = 'none';
    }
    else {
      right_arrow.style.display = '';
    }
    left_arrow.style.display = '';
  });
  left_arrow.addEventListener('click',() => {
    console.log(position);
    position+=img.offsetWidth;
    document.querySelector(".carousel__inner").style.transform = `translateX(${position}px)`;
    if(position == 0){
      left_arrow.style.display = 'none';
    }
    else {
      left_arrow.style.display = '';
    }
    right_arrow.style.display = '';
   
  });
}

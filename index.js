const slide = document.querySelectorAll(".slide");
prev = document.querySelector(".prev");
next = document.querySelector(".next")

slide.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});


let counter = 0;
next.addEventListener("click",function(){
    counter++;
    // console.log(counter)
    carousel();
});

prev.addEventListener("click",function(){
    counter--;
    // console.log(counter)
    carousel();
})

function carousel(){
  if (counter === slide.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slide.length - 1;
  }

  slide.forEach(function (item) {
    item.style.transform = `translateX(-${counter * 100}%)`;
    // console.log((item.style.transform = `translateX(${counter * 100}%)`));
  });
}

setInterval(() => {
  counter++;
  carousel();
}, 4000);



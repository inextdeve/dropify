const header = document.querySelector(".header-wrapper");
if (header) {
  const slider = document.createElement("div");
  slider.classList.add("slider");
  header.append(slider);
  slider.innerHTML = `<div class="list">

            <div class="item">
                <img src="https://raw.githubusercontent.com/Mohammed-Faysal/Image-slider-using-HTML-CSS-JavaScript/refs/heads/main/image/img1.jpg" >

                <div class="content">
                    <div class="title">MAGIC SLIDER</div>
                    <div class="type">FLOWER</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
                    </div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="https://i.ibb.co/Y7XLbrSJ/2150533284.jpg" alt="">

                <div class="content">
                    <div class="title">MAGIC SLIDER</div>
                    <div class="type">NATURE</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
                    </div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="https://i.ibb.co/Y7XLbrSJ/2150533284.jpg" alt="">

                <div class="content">
                    <div class="title">MAGIC SLIDER</div>
                    <div class="type">PLANT</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
                    </div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>

            <div class="item">
                <img src="https://i.ibb.co/Y7XLbrSJ/2150533284.jpg" alt="">

                <div class="content">
                    <div class="title">MAGIC SLIDER</div>
                    <div class="type">NATURE</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
                    </div>
                    <div class="button">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="thumbnail">
            <div class="item">
                <img src="https://i.ibb.co/Y7XLbrSJ/2150533284.jpg">
            </div>
            <div class="item">
                <img src="./image/img2.jpg"></div><div class="item"><img src="./image/img4.jpg"></div><div class="item"><img src="./image/img3.jpg"></div></div><div class="nextPrevArrows"><button class="prev"> < </button><button class="next"> > </button></div>
`;
  let nextBtn = document.querySelector(".next");
  let prevBtn = document.querySelector(".prev");
  let sliderList = slider.querySelector(".slider .list");
  let thumbnail = document.querySelector(".slider .thumbnail");
  let thumbnailItems = thumbnail.querySelectorAll(".item");
  thumbnail.appendChild(thumbnailItems[0]);
  nextBtn.onclick = function () {
    moveSlider("next");
  };
  prevBtn.onclick = function () {
    moveSlider("prev");
  };
  function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll(".item");
    let thumbnailItems = document.querySelectorAll(".thumbnail .item");
    if (direction === "next") {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add("next");
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add("prev");
    }
    slider.addEventListener(
      "animationend",
      function () {
        if (direction === "next") {
          slider.classList.remove("next");
        } else {
          slider.classList.remove("prev");
        }
      },
      { once: !0 }
    );
  }
}

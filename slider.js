const header = document.querySelector(".header-wrapper");
if (header) {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  header.append(carousel);
  carousel.innerHTML = `
        <div class="list">

            <div class="item" style="background-image: url(image/eagel1.jpg);">
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">EAGLE</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div class="item" style="background-image: url(image/owl1.jpg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">OWL</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/crow.jpg);">

                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">CROW</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/butterfly1.jpeg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">BUTTERFLY</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/owl2.jpg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">OWL</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/eagel3.jpg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">EAGLE</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/kingfirser2.jpeg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">KINGFISHER</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/parrot2.jpg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">PARROT</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/heron.jpeg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">HERON</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/butterfly2.jpg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">BUTTERFLY</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(image/parrot2.jpg);">
                
                <div class="content">
                    <div class="title">SLIDER</div>
                    <div class="name">PARROT</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

        </div>

        <!--next prev button-->
        <div class="arrows">
            <button class="prev"><</button>
            <button class="next">></button>
        </div>


        <!-- time running -->
        <div class="timeRunning"></div>
  `;

  var nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    list = document.querySelector(".list"),
    item = document.querySelectorAll(".item"),
    runningTime = document.querySelector(".carousel .timeRunning");

  let timeRunning = 3000;
  let timeAutoNext = 7000;

  nextBtn.onclick = function () {
    showSlider("next");
  };

  prevBtn.onclick = function () {
    showSlider("prev");
  };

  let runTimeOut;

  let runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  function resetTimeAnimation() {
    runningTime.style.animation = "none";
    runningTime.offsetHeight; /* trigger reflow */
    runningTime.style.animation = null;
    runningTime.style.animation = "runningTime 7s linear 1 forwards";
  }

  function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add("next");
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Reset the running time animation
  }

  // Start the initial animation
  resetTimeAnimation();
}

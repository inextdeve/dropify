const header = document.querySelector("#carouselExampleCaptions");
if (header) {
  const carousel = document.createElement("div");
  carousel.classList.add("my-own-carousel");
  header.innerHTML = "";
  header.append(carousel);
  carousel.innerHTML = `
        <div class="list">

            <div class="item" style="background-image: url(https://i.ibb.co/Jjb5HPcZ/h1-slide-02-1.webp);">
                <div class="content">
                    <div class="title">SLIDER 1</div>
                    <div class="name">EAGLE</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div class="item" style="background-image: url(https://i.ibb.co/fVXntc1j/h1-slide-01.webp);">
                
                <div class="content">
                    <div class="title">SLIDER 2</div>
                    <div class="name">OWL</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(https://i.ibb.co/WWvLpgcj/transparent-bg-black-soap.png);">

                <div class="content">
                    <div class="title">SLIDER 3</div>
                    <div class="name">CROW</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div class="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div class="item" style="background-image: url(https://i.ibb.co/Jjb5HPcZ/h1-slide-02-1.webp);">
                
                <div class="content">
                    <div class="title">SLIDER 4</div>
                    <div class="name">BUTTERFLY</div>
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
  `;

  var nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    list = document.querySelector(".list"),
    item = document.querySelectorAll(".item");

  let timeRunning = 20000;
  let timeAutoNext = 70000;

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

  function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll(".my-own-carousel .list .item");
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

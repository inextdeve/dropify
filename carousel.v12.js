const ARROW_LEFT_ICON = `<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#FFFFFF}</style><g id="row2_1_"><g id="_x31__4_"><path class="st2" d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" id="left_3_"/></g></g></svg>`;
const ARROW_RIGHT_ICON = `<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#FFFFFF}</style><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>`;

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
                    <div class="title">Organic Handmade Soap</div>
                    <div class="name">EAGLE</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                </div>
            </div>

            <div class="item" style="background-image: url(https://i.ibb.co/fVXntc1j/h1-slide-01.webp);">
                
                <div class="content">
                    <div class="title">SLIDER 2</div>
                    <div class="name">OWL</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                </div>

            </div>

            <div class="item" style="background-image: url(https://i.ibb.co/WWvLpgcj/transparent-bg-black-soap.png);">

                <div class="content">
                    <div class="title">SLIDER 3</div>
                    <div class="name">CROW</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                </div>

            </div>

            <div class="item" style="background-image: url(https://i.ibb.co/Jjb5HPcZ/h1-slide-02-1.webp);">
                
                <div class="content">
                    <div class="title">SLIDER 4</div>
                    <div class="name">BUTTERFLY</div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                </div>

            </div>

        </div>

        <!--next prev button-->
        <div class="arrows">
            <button class="prev">${ARROW_LEFT_ICON}</button>
            <button class="next">${ARROW_RIGHT_ICON}</button>
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

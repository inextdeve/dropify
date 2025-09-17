const ARROW_LEFT_ICON = `<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#FFFFFF}</style><g id="row2_1_"><g id="_x31__4_"><path class="st2" d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" id="left_3_"/></g></g></svg>`;
const ARROW_RIGHT_ICON = `<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#FFFFFF}</style><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>`;
const FREE_DELIVERY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px" viewBox="0 0 32 32"><defs></defs><g id="free_delivery" data-name="free delivery"><path d="M5.37 16h.39a.25.25 0 0 0 .17-.08.23.23 0 0 0 .07-.15v-1h1.2a.21.21 0 0 0 .17-.07.2.2 0 0 0 .07-.16v-.33a.21.21 0 0 0-.07-.21.21.21 0 0 0-.17-.08H6v-.64h1.3a.26.26 0 0 0 .17-.07.23.23 0 0 0 .06-.21v-.3a.24.24 0 0 0-.24-.24H5.37a.21.21 0 0 0-.17.07.26.26 0 0 0-.07.17v3.07a.24.24 0 0 0 .07.16.21.21 0 0 0 .17.07zM8 16h.41a.21.21 0 0 0 .17-.08.23.23 0 0 0 .06-.16v-1h.41l.54 1.05a.44.44 0 0 0 .08.11.29.29 0 0 0 .21.09h.4a.26.26 0 0 0 .16-.07.23.23 0 0 0 .06-.16.26.26 0 0 0 0-.11l-.58-1.08a1.11 1.11 0 0 0 .36-.32 1.16 1.16 0 0 0 .18-.66 1.05 1.05 0 0 0-.35-.86 1.42 1.42 0 0 0-.93-.29H8a.23.23 0 0 0-.17.07.25.25 0 0 0-.06.17v3.07a.23.23 0 0 0 .06.16A.25.25 0 0 0 8 16zm.64-2v-.75h.5a.39.39 0 0 1 .31.1.34.34 0 0 1 .1.28.37.37 0 0 1-.09.27.44.44 0 0 1-.32.1zM11 16h2a.24.24 0 0 0 .17-.07.27.27 0 0 0 .06-.17v-.31a.23.23 0 0 0-.06-.17.25.25 0 0 0-.17-.08h-1.36v-.6h1.23a.24.24 0 0 0 .24-.24v-.29a.21.21 0 0 0-.11-.17.24.24 0 0 0-.17-.07h-1.19v-.58H13a.24.24 0 0 0 .17-.07.23.23 0 0 0 .07-.17v-.31a.22.22 0 0 0-.07-.17.21.21 0 0 0-.17-.07h-2a.22.22 0 0 0-.23.24v3.07A.24.24 0 0 0 11 16zM13.78 16h2a.21.21 0 0 0 .17-.08.23.23 0 0 0 .06-.16v-.31a.24.24 0 0 0-.06-.17.23.23 0 0 0-.17-.08H14.4v-.6h1.23a.21.21 0 0 0 .17-.07.23.23 0 0 0 .07-.17v-.29a.23.23 0 0 0-.07-.17.21.21 0 0 0-.17-.07H14.4v-.58h1.33a.24.24 0 0 0 .17-.07.23.23 0 0 0 .1-.18v-.3a.22.22 0 0 0-.07-.17.21.21 0 0 0-.17-.07h-2a.23.23 0 0 0-.17.07.25.25 0 0 0-.06.17v3.07a.24.24 0 0 0 .23.24z"/><path class="cls-1" d="m29.59 14.21-3.9-3.85a1.31 1.31 0 0 0-.89-.36H19V7.38A1.3 1.3 0 0 0 17.81 6H3.21A1.3 1.3 0 0 0 2 7.38v14.24A1.3 1.3 0 0 0 3.21 23H4a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h10a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h.74A1.35 1.35 0 0 0 30 21.61v-6.4a1.4 1.4 0 0 0-.41-1zM7.5 25A1.5 1.5 0 0 1 6 23.5a1.39 1.39 0 0 1 .09-.5 1.4 1.4 0 0 1 .69-.8 1.64 1.64 0 0 1 .33-.14A1.58 1.58 0 0 1 7.5 22a1.5 1.5 0 0 1 0 3zM17 11.39V21H9.94a3.48 3.48 0 0 0-4.88 0H4V8h13zM24.5 25a1.5 1.5 0 0 1 0-3 1.27 1.27 0 0 1 .39.06 1.46 1.46 0 0 1 1 .94 1.39 1.39 0 0 1 .09.5A1.5 1.5 0 0 1 24.5 25zm3.5-4h-1.06a3.48 3.48 0 0 0-4.87 0H19v-9h5.57L28 15.53z"/></g></svg>`;
const DOLLAR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px" viewBox="0 0 64 64" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path d="m37.278 14.519-21.203-2.45a4 4 0 0 0-4.433 3.514l-.763 6.606" style="fill:none;stroke:#ef5958;stroke-width:2px"/><path d="m15.001 20.404.322-2.782a1.867 1.867 0 0 1 2.069-1.641l2.976.344M53.202 19.117a4.001 4.001 0 0 0-4.609-3.28l-38.149 6.425a4.001 4.001 0 0 0-3.28 4.609l3.634 21.575a4 4 0 0 0 4.609 3.28l38.149-6.425a4.003 4.003 0 0 0 3.28-4.609l-3.634-21.575z" style="fill:none;stroke:#ef5958;stroke-width:2px"/><path d="m19.474 47.253-2.823.476a1.999 1.999 0 0 1-2.305-1.64l-.443-2.632m30.623-23.148 2.823-.475a1.998 1.998 0 0 1 2.305 1.64l.443 2.631m-38.365 6.462-.443-2.632a1.999 1.999 0 0 1 1.64-2.304l2.823-.476M52.268 36.996l.443 2.631a1.999 1.999 0 0 1-1.64 2.305l-2.823.475M33.221 29.788A2.334 2.334 0 1 0 32 33.781a2.336 2.336 0 0 1 2.69 1.914 2.336 2.336 0 0 1-3.911 2.079M31.225 29.177l-.311-1.841M33.086 40.226l-.311-1.841" style="fill:none;stroke:#ef5958;stroke-width:2px"/></svg>`;

const SUPPORT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px" viewBox="0 0 48 48"><path d="M10 34h3a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1h-1v-1a12 12 0 0 1 24 0v1h-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.91A6 6 0 0 1 30 39h-2a2.5 2.5 0 0 0-2.45-2h-3a2.5 2.5 0 0 0 0 5h3a2.51 2.51 0 0 0 2-1H30a8 8 0 0 0 7.93-7H38a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4v-1a14 14 0 0 0-28 0v1a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4zm15.5 6h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zM40 25v5a2 2 0 0 1-2 2h-2v-9h2a2 2 0 0 1 2 2zM8 25a2 2 0 0 1 2-2h2v9h-2a2 2 0 0 1-2-2z"/><path d="M24 35a5.94 5.94 0 0 0 4.81-2.41 1 1 0 1 0-1.62-1.18 4 4 0 0 1-6.38 0 1 1 0 1 0-1.62 1.18A5.94 5.94 0 0 0 24 35z"/></svg>`;

const WARRANTY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px" viewBox="0 0 52 52" data-name="Layer 1"><path d="M26,2c3,0,5.43,3.29,8.09,4.42s6.82.51,8.84,2.65,1.51,6.07,2.65,8.84S50,23,50,26s-3.29,5.43-4.42,8.09-.51,6.82-2.65,8.84-6.07,1.53-8.84,2.65S29,50,26,50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2,29,2,26s3.29-5.43,4.42-8.09.51-6.82,2.65-8.84,6.07-1.53,8.84-2.65S23,2,26,2Zm0,7.58A16.42,16.42,0,1,0,42.42,26h0A16.47,16.47,0,0,0,26,9.58Zm7.62,9.15,1.61,1.52a1.25,1.25,0,0,1,0,1.51L25.08,33.07a2.07,2.07,0,0,1-1.61.7,2.23,2.23,0,0,1-1.61-.7L16.37,27.6a1,1,0,0,1-.1-1.42l.1-.11L18,24.56a1.1,1.1,0,0,1,1.54-.07l.07.07,3.89,4,8.59-9.8A1.1,1.1,0,0,1,33.62,18.73Z"/></svg>`;

const FEAT_ICONS = [
  FREE_DELIVERY_ICON,
  DOLLAR_ICON,
  WARRANTY_ICON,
  SUPPORT_ICON,
];
// Append icons to core features
document
  .querySelectorAll(".core-features-area .core-features-icon")
  .forEach((el, i) => {
    el.innerHTML = FEAT_ICONS[i];
  });

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
} else {
  // mean carousel not exit not in the main m=page
  document
    .getElementById("sticky-header")
    .style.setProperty("background", "#31503cde", "important");
}

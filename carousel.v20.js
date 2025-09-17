const ARROW_LEFT_ICON = `<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#FFFFFF}</style><g id="row2_1_"><g id="_x31__4_"><path class="st2" d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" id="left_3_"/></g></g></svg>`;
const ARROW_RIGHT_ICON = `<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#FFFFFF}</style><g id="row1_1_"><g id="_x31__3_"><path class="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_"/></g></g></svg>`;
const FREE_DELIVERY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px" viewBox="0 0 32 32"><defs></defs><g id="free_delivery" data-name="free delivery"><path d="M5.37 16h.39a.25.25 0 0 0 .17-.08.23.23 0 0 0 .07-.15v-1h1.2a.21.21 0 0 0 .17-.07.2.2 0 0 0 .07-.16v-.33a.21.21 0 0 0-.07-.21.21.21 0 0 0-.17-.08H6v-.64h1.3a.26.26 0 0 0 .17-.07.23.23 0 0 0 .06-.21v-.3a.24.24 0 0 0-.24-.24H5.37a.21.21 0 0 0-.17.07.26.26 0 0 0-.07.17v3.07a.24.24 0 0 0 .07.16.21.21 0 0 0 .17.07zM8 16h.41a.21.21 0 0 0 .17-.08.23.23 0 0 0 .06-.16v-1h.41l.54 1.05a.44.44 0 0 0 .08.11.29.29 0 0 0 .21.09h.4a.26.26 0 0 0 .16-.07.23.23 0 0 0 .06-.16.26.26 0 0 0 0-.11l-.58-1.08a1.11 1.11 0 0 0 .36-.32 1.16 1.16 0 0 0 .18-.66 1.05 1.05 0 0 0-.35-.86 1.42 1.42 0 0 0-.93-.29H8a.23.23 0 0 0-.17.07.25.25 0 0 0-.06.17v3.07a.23.23 0 0 0 .06.16A.25.25 0 0 0 8 16zm.64-2v-.75h.5a.39.39 0 0 1 .31.1.34.34 0 0 1 .1.28.37.37 0 0 1-.09.27.44.44 0 0 1-.32.1zM11 16h2a.24.24 0 0 0 .17-.07.27.27 0 0 0 .06-.17v-.31a.23.23 0 0 0-.06-.17.25.25 0 0 0-.17-.08h-1.36v-.6h1.23a.24.24 0 0 0 .24-.24v-.29a.21.21 0 0 0-.11-.17.24.24 0 0 0-.17-.07h-1.19v-.58H13a.24.24 0 0 0 .17-.07.23.23 0 0 0 .07-.17v-.31a.22.22 0 0 0-.07-.17.21.21 0 0 0-.17-.07h-2a.22.22 0 0 0-.23.24v3.07A.24.24 0 0 0 11 16zM13.78 16h2a.21.21 0 0 0 .17-.08.23.23 0 0 0 .06-.16v-.31a.24.24 0 0 0-.06-.17.23.23 0 0 0-.17-.08H14.4v-.6h1.23a.21.21 0 0 0 .17-.07.23.23 0 0 0 .07-.17v-.29a.23.23 0 0 0-.07-.17.21.21 0 0 0-.17-.07H14.4v-.58h1.33a.24.24 0 0 0 .17-.07.23.23 0 0 0 .1-.18v-.3a.22.22 0 0 0-.07-.17.21.21 0 0 0-.17-.07h-2a.23.23 0 0 0-.17.07.25.25 0 0 0-.06.17v3.07a.24.24 0 0 0 .23.24z"/><path class="cls-1" d="m29.59 14.21-3.9-3.85a1.31 1.31 0 0 0-.89-.36H19V7.38A1.3 1.3 0 0 0 17.81 6H3.21A1.3 1.3 0 0 0 2 7.38v14.24A1.3 1.3 0 0 0 3.21 23H4a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h10a2.74 2.74 0 0 0 0 .5 3.5 3.5 0 0 0 7 0 2.74 2.74 0 0 0 0-.5h.74A1.35 1.35 0 0 0 30 21.61v-6.4a1.4 1.4 0 0 0-.41-1zM7.5 25A1.5 1.5 0 0 1 6 23.5a1.39 1.39 0 0 1 .09-.5 1.4 1.4 0 0 1 .69-.8 1.64 1.64 0 0 1 .33-.14A1.58 1.58 0 0 1 7.5 22a1.5 1.5 0 0 1 0 3zM17 11.39V21H9.94a3.48 3.48 0 0 0-4.88 0H4V8h13zM24.5 25a1.5 1.5 0 0 1 0-3 1.27 1.27 0 0 1 .39.06 1.46 1.46 0 0 1 1 .94 1.39 1.39 0 0 1 .09.5A1.5 1.5 0 0 1 24.5 25zm3.5-4h-1.06a3.48 3.48 0 0 0-4.87 0H19v-9h5.57L28 15.53z"/></g></svg>`;
const DOLLAR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px" viewBox="0 0 64 64"><path d="M45 17v4a2 2 0 0 0 0-4zM41 13a2 2 0 0 0 2 2v-4a2 2 0 0 0-2 2z"/><path d="M44 1a15 15 0 1 0 15 15A15.017 15.017 0 0 0 44 1zm1 22v1a1 1 0 0 1-2 0v-1h-2a1 1 0 0 1 0-2h2v-4a4 4 0 0 1 0-8V8a1 1 0 0 1 2 0v1h2a1 1 0 0 1 0 2h-2v4a4 4 0 0 1 0 8z" style="fill:#232328"/><path d="M60.88 32.12a3.93 3.93 0 0 0-5.42 0L44.59 43H29a1 1 0 0 1 0-2h10.5a3.5 3.5 0 0 0 0-7H19a1.033 1.033 0 0 0-.71.29l-6.88 6.88 12.42 12.42L26.41 51H47a1.033 1.033 0 0 0 .71-.29l13.17-13.17a3.839 3.839 0 0 0 0-5.42zM7.707 40.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l17 17a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414zM2.29 48.29A1.033 1.033 0 0 0 2 49v13a1 1 0 0 0 1 1h13a1.033 1.033 0 0 0 .71-.29l.88-.88L3.17 47.41z" style="fill:#232328"/></svg>`;
const SUPPORT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ef5958" width="60px" height="60px"><path d="M116.288 92.838h-4V52.875c0-6.149-1.318-12.057-3.92-17.562l3.617-1.709c2.854 6.043 4.303 12.526 4.303 19.271v39.963zM55.72 125.425c-29.468 0-44.409-10.964-44.409-32.587V52.875c0-6.837 1.486-13.402 4.418-19.512l3.606 1.73c-2.67 5.566-4.024 11.548-4.024 17.782v39.963c0 19.236 13.218 28.587 40.409 28.587v4z"/><path fill="#282D33" d="M61.78 125.449h-9.539c-3.426 0-6.213-2.804-6.213-6.251s2.787-6.251 6.213-6.251h9.539c3.425 0 6.211 2.804 6.211 6.251s-2.786 6.251-6.211 6.251zm-9.539-8.502c-1.22 0-2.213 1.01-2.213 2.251s.993 2.251 2.213 2.251h9.539c1.219 0 2.211-1.01 2.211-2.251s-.992-2.251-2.211-2.251h-9.539zM19.402 38.256a7.398 7.398 0 0 1-3.86-1.089c-3.506-2.139-4.635-6.757-2.517-10.292 9.12-15.23 25.081-24.323 42.696-24.323h16.157c17.615 0 33.577 9.093 42.698 24.324 2.118 3.535.988 8.153-2.52 10.293a7.383 7.383 0 0 1-3.856 1.088c-2.637 0-5.024-1.357-6.389-3.629C95.413 23.939 84.224 17.56 71.877 17.56H55.72c-12.342 0-23.532 6.379-29.933 17.065a7.482 7.482 0 0 1-6.385 3.631zM55.72 6.551c-16.195 0-30.873 8.366-39.264 22.378-.994 1.66-.469 3.823 1.17 4.824a3.417 3.417 0 0 0 4.729-1.183c7.13-11.904 19.603-19.01 33.365-19.01h16.157c13.766 0 26.239 7.106 33.364 19.01a3.43 3.43 0 0 0 2.958 1.686c.623 0 1.234-.173 1.77-.501 1.644-1.003 2.169-3.166 1.175-4.825-8.392-14.013-23.072-22.379-39.267-22.379H55.72zM15.572 101.688C6.985 101.688 0 94.644 0 85.986V69.023c0-8.657 6.985-15.7 15.572-15.7v4C9.191 57.323 4 62.572 4 69.023v16.963c0 6.452 5.191 11.701 11.572 11.701v4.001z"/><path fill="#282D33" d="M23.291 105.232h-5.095c-3.618 0-6.561-2.964-6.561-6.606v-41.96c0-3.643 2.943-6.606 6.561-6.606h5.095c3.618 0 6.562 2.963 6.562 6.606v41.96c0 3.643-2.944 6.606-6.562 6.606zM18.196 54.06c-1.412 0-2.561 1.169-2.561 2.606v41.96c0 1.438 1.149 2.606 2.561 2.606h5.095c1.413 0 2.562-1.169 2.562-2.606v-41.96c0-1.437-1.149-2.606-2.562-2.606h-5.095z"/><g><path fill="#282D33" d="M112.43 101.975v-4c6.38 0 11.57-5.251 11.57-11.705V69.307c0-6.454-5.19-11.704-11.57-11.704v-4c8.586 0 15.57 7.044 15.57 15.704V86.27c0 8.66-6.984 15.705-15.57 15.705z"/><path fill="#282D33" d="M109.809 105.234h-5.096c-3.618 0-6.563-2.964-6.563-6.606V56.667c0-3.642 2.944-6.604 6.563-6.604h5.096c3.617 0 6.56 2.962 6.56 6.604v41.961c-.001 3.643-2.943 6.606-6.56 6.606zm-5.096-51.171c-1.413 0-2.563 1.168-2.563 2.604v41.961c0 1.438 1.149 2.606 2.563 2.606h5.096c1.411 0 2.56-1.169 2.56-2.606V56.667c0-1.436-1.148-2.604-2.56-2.604h-5.096z"/></g></svg>`;
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

const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const handleServicesTab = () => {
  const tabBtns = $All(".services__card");
  const tabCards = $All(".services__item");

  tabBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((subbtn) => subbtn.classList.remove("active"));
      tabCards.forEach((card) => card.classList.remove("active"));

      tabBtns[i].classList.add("active");
      tabCards[i].classList.add("active");
    });
  });
};

const handleAddAdresses = () => {
  addAdressButtons = $All(".add_address");

  addAdressButtons.forEach((btn, i) => {
    let addressesCount = -10;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let tmp = `
        <div class="added-address">
        <label class="form-label">
        <span class="form-label-span">Куда</span>
        <input type="text" placeholder="Киевская 140" value="Киевская 140" class="form-input" />
        <img src="./icons/input-main.png" alt="Main" class="form-input-icon loc-icon" />
        <div class="loc-select">
          <div class="loc-select__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d67461.4604064471!2d64.3677926458177!3d41.485461656860856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1673039182714!5m2!1sen!2s"
              style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="loc-select__details">
            <div class="loc-select__details-left">
              <span class="loc-select__details-left-text">Откуда</span>
              <span class="loc-select__details-left-title">Киевская 13</span>
            </div>
            <div class="loc-select__details-right">
              <button class="normal-btn loc-select__details-right-btn">Выбрать</button>
              <button class="loc-select__details-right-x">
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
          <div class="loc-select__bg"></div>
        </div>
      </label>
      <button class="address-remove">
        <img src="./icons/x.svg" />
      </button>
        </div>
      `;

      let additionalInputs = btn.parentElement.querySelector(
        ".additional_addresses"
      );
      additionalInputs.innerHTML += tmp;
      addressesCount++;
      if (addressesCount >= 3) {
        btn.remove();
      }
      const btns = $All(".address-remove");
      btns.forEach(btn => btn.addEventListener("click", () => btn.parentElement.remove()));
    });
  });
};

let paymodal = $(".pay-modal.modal");
let payopenbtn = $(".main-sec__payment-btn.modal-opener");

payopenbtn.addEventListener("click", (e) => {
    e.preventDefault();
    paymodal.classList.add("active");
});

let hero__openForm = $All(".hero__form--main .main-sec__form input");
let swiperToggle = $(".main-sec .swiper.hero__swiper");
let main__form = $(".hero__form--main .main-sec__form");
let scndForm = $(".hero__form--main .payment__sec-2");
let thrdForm = $(".hero__form--main .payment__sec-3");
let closeForm = $(".hero__form__sections__close");


let allmainforminputs = $All(".hero__form--main input");
let openpaymentDetailsmodal = $(".normal-btn.form__oform__btn.openpaymentdetailsmodal");

let openSecondFormPage = $(".normal-btn.on-mobile.open__second__form");
let openThrForm = $(".open__thrird__form");

if (document.body.clientWidth>1250) {
    hero__openForm.forEach((input) => {
        input.addEventListener("click", () => {
            swiperToggle.classList.add("opened");
            main__form.classList.add("opened");
            scndForm.classList.add("opened");
            thrdForm.classList.add("opened");
            closeForm.classList.add("opened");
        });
    });
} else if (document.body.clientWidth<1250) {
    openSecondFormPage.addEventListener("click", () => {
        main__form.classList.add("closed");
        scndForm.classList.add("tab");
    });
    openThrForm.addEventListener("click", () => {
        scndForm.classList.remove("tab");
        thrdForm.classList.add("tab");
    });
};

closeForm.addEventListener("click", () => {
    swiperToggle.classList.remove("opened");
    main__form.classList.remove("opened");
    scndForm.classList.remove("opened");
    thrdForm.classList.remove("opened");
    closeForm.classList.remove("opened");
});

let backtofrstpage = $(".first__page__payment__back");
let backtoscndpage = $(".second__page__payment__back");

backtofrstpage.addEventListener("click", () => {
    main__form.classList.add("opened");
    main__form.classList.remove("closed");
    scndForm.classList.remove("tab");
});

backtoscndpage.addEventListener("click", () => {
    scndForm.classList.add("tab");
    thrdForm.classList.remove("tab");
});

allmainforminputs.forEach((input) => {
    if (input === "") {
        openpaymentDetailsmodal.setAttribute("disabled");
    } else{
        openpaymentDetailsmodal.removeAttribute("disabled");
    }
});

openpaymentDetailsmodal.addEventListener("click", () => {
    $(".modal.payment-details-modal").classList.add("active");
});

let scndopenDetailsBtn = $All(".opentotalsumDetailsModal");

scndopenDetailsBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        $(".modal.payment-details-modal").classList.add("active");
    });
});

let stars = $All(".reviews__modal-stars .bi.bi-star-fill");
let star01 = $(".reviews__modal-stars .bi.bi-star-fill.star01");
let star02 = $(".reviews__modal-stars .bi.bi-star-fill.star02");
let star03 = $(".reviews__modal-stars .bi.bi-star-fill.star03");
let star04 = $(".reviews__modal-stars .bi.bi-star-fill.star04");
let star05 = $(".reviews__modal-stars .bi.bi-star-fill.star05");

stars.forEach((star) => {
    star.addEventListener("click", () => {

        if (star.classList.contains("star01")) {
            star.style.color = "#F7D247";
            star02.style.color = "#D0D0D0";
            star03.style.color = "#D0D0D0";
            star04.style.color = "#D0D0D0";
            star05.style.color = "#D0D0D0";
        } else if (star.classList.contains("star02")) {
            star.style.color = "#F7D247";
            star03.style.color = "#D0D0D0";
            star04.style.color = "#D0D0D0";
            star05.style.color = "#D0D0D0";
        } else if (star.classList.contains("star03")) {
            star.style.color = "#F7D247";
            star02.style.color = "#F7D247";
            star04.style.color = "#D0D0D0";
            star05.style.color = "#D0D0D0";
        } else if (star.classList.contains("star04")) {
            star02.style.color = "#F7D247";
            star03.style.color = "#F7D247";
            star.style.color = "#F7D247";
            star05.style.color = "#D0D0D0";
        } else if (star.classList.contains("star05")) {
            star02.style.color = "#F7D247";
            star03.style.color = "#F7D247";
            star04.style.color = "#F7D247";
            star.style.color = "#F7D247";
        };
    });
});


let closeCommentModal = $(".normal-btn.close__commentModalbtn");
let commentModal = $("#comment-modal");

closeCommentModal.addEventListener("click", () => {
    commentModal.classList.remove("active");
});

let headerMenuBtns = $All("button.header__main-data-link");

headerMenuBtns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.classList.toggle("orange");
        thisbtn = btn;
        headerMenuBtns.forEach((innerEl) =>{
        if(thisbtn != innerEl){
            innerEl.classList.remove('orange')
        }
        });
    });

    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("orange");
    });
});

let mobileHeaderfixedopenbtn = $(".header__mobile-btn.open-on-click");
let header = $(".header");
let headerSmBlocks = $All(".header__sm-block");

mobileHeaderfixedopenbtn.addEventListener("click", () => {
    header.classList.toggle("fixed");
    document.body.classList.toggle('header_fixed');
    headerSmBlocks.forEach((block) => {
        block.classList.remove("active");
    })
});

const handleHeaderSublinks = () => {
  const btns = $All("button.header__main-data-link .target-hover");

  btns.forEach((btn) => {
    const target = $(`#header-${btn.getAttribute("data-target")}`);
    btn.addEventListener("mouseover", () => {
        target.style.display = "flex";
    });

    btn.addEventListener("mouseout", () => {
        target.style.display = "none";
    });
  });
};

const handleParkingTabs = () => {
  const tabs = $All(".parking__tab");
  const tabCards = $All(".parking .swiper");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = $(`#${tab.getAttribute("data-target")}`);
      tabs.forEach((subtab) => subtab.classList.remove("active"));
      tab.classList.add("active");
      tabCards.forEach((subcard) => subcard.classList.remove("active"));
      target.classList.add("active");
    });
  });
};

const handleParkingCards = () => {
  const cardTabs = $All(".parking__gallery-item");
  const cards = $All(".parking__card");

  cardTabs.forEach((tab) => {
    const target = $(`#${tab.getAttribute("data-target")}`);

    tab.addEventListener("click", () => {
      cards.forEach((card) => card.classList.remove("active"));
      cardTabs.forEach((cardTab) => cardTab.classList.remove("active"));
      tab.classList.add("active");
      target.classList.add("active");
    });
  });
};

const handleModals = () => {
  const modalOpenBtns = $All(".modal-opener");

  modalOpenBtns.forEach((btn) => {
    const modal = $(`#${btn.getAttribute("data-target")}`);

    btn.addEventListener("click", () => {
      modal.classList.add("active");
    });
  });

  const modalCloseBtns = $All(".modal__close");
  const modalBgs = $All(".modal__bg");

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.classList.remove("active");
    });
  });

  modalBgs.forEach((bg) => {
    bg.addEventListener("click", () => {
      bg.parentElement.classList.remove("active");
    });
  });
};

const handleFocusInput = () => {
  //Vanilla javascript
  document.addEventListener(
    "DOMNodeInserted",
    function (e) {
      const inputs = $All(".form-input");

      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          input.parentElement.classList.add("focused");
        });

        input.addEventListener("focusout", () => {
          input.parentElement.classList.remove("focused");
        });
      });
    },
    false
  );
};

const handleStyledSelects = () => {
  const selects = $All("select");

  selects.forEach((select) => {
    const getResultText = (text) =>
      !select.classList.contains("header-select")
        ? `<p class='result'>${text}</p>`
        : `
        <p class='result' style="text-align: center">
          Разделы:
          <b>${text}</b>
          <i class="bi bi-chevron-down"></i>
        </p>
      `;

    select.style.display = "none";
    const options = Array.from(select.children);
    const selectContainer = document.createElement("div");
    const optionsContainer = document.createElement("div");
    const icon = select?.parentElement?.querySelector(".form-input-icon");
    selectContainer.classList.add("custom-select");
    optionsContainer.style.pointerEvents = "none";
    const changeState = (isActive) => {
      optionsContainer.classList[isActive ? "add" : "remove"]("active");
      if (icon?.style)
        icon.style.transform = `rotate(${isActive ? 18 : ""}0deg)`;
      select.parentElement.classList[isActive ? "add" : "remove"]("active");
    };

    options.forEach((opt, i) => {
      const optionEl = document.createElement("button");
      optionEl.type = "button";
      optionEl.innerHTML = opt.innerHTML;
      if (select.value === opt.innerText) {
        optionEl.insertAdjacentHTML(
          "beforeend",
          `<i class="bi bi-check2-all"></i>`
        );
      }
      optionEl.addEventListener("click", () => {
        select.value = optionEl.innerText;
        const optionBtns = document.querySelectorAll(".custom-select button");
        optionBtns.forEach((btn) => {
          btn.querySelector("i")?.remove();
        });
        optionEl.insertAdjacentHTML(
          "beforeend",
          `<i class="bi bi-check2-all"></i>`
        );
        selectContainer.querySelector(".result")?.remove();
        selectContainer.insertAdjacentHTML(
          "afterbegin",
          getResultText(optionEl.innerText)
        );

        setTimeout(() => changeState(false), 100);
      });

      optionsContainer.insertAdjacentElement("beforeend", optionEl);
    });

    selectContainer.tabIndex = 1;
    selectContainer.addEventListener("click", () => {
      changeState(!optionsContainer.classList.contains("active"));
      setTimeout(() => {
        optionsContainer.style.pointerEvents = "auto";
      }, 300);
      const resultText = selectContainer
        .querySelector(".result")
        ?.querySelector("i");
      resultText?.classList?.add("active");
    });

    selectContainer.addEventListener("focusout", () => {
      changeState(false);
      const resultText = selectContainer
        .querySelector(".result")
        ?.querySelector("i");
      resultText?.classList?.remove("active");
      setTimeout(() => {
        optionsContainer.style.pointerEvents = "none";
      }, 300);
    });

    selectContainer.insertAdjacentHTML(
      "afterbegin",
      getResultText(options[0].innerText)
    );
    selectContainer.insertAdjacentElement("beforeend", optionsContainer);
    select.insertAdjacentElement("afterend", selectContainer);

    if (icon) {
      icon.style.transition = "200ms";
      icon.style.cursor = "pointer";
      icon.addEventListener("click", () => {
        if (optionsContainer.classList.contains("active")) {
          changeState(false);
          const resultText = selectContainer
            .querySelector(".result")
            ?.querySelector("i");
          resultText?.classList?.remove("active");
          setTimeout(() => {
            optionsContainer.style.pointerEvents = "none";
          }, 300);
        } else {
          changeState(true);
          setTimeout(() => {
            optionsContainer.style.pointerEvents = "auto";
          }, 300);
          const resultText = selectContainer
            .querySelector(".result")
            ?.querySelector("i");
          resultText?.classList?.add("active");
        }
      });
    }
  });
};

let planTabs = $All(".plans__tab");
planTabs.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.add("active");
        thisEl = el;
        planTabs.forEach((innerEl) =>{
        if(thisEl != innerEl){
            innerEl.classList.remove('active')
        }
        });
    });
});

const handleInputMaps = () => {
  const inputTargets = $All(".form-input-icon.loc-icon");

  inputTargets.forEach((target) => {
    target.addEventListener("click", () => {
      target.nextElementSibling.classList.add("active");
    });
  });

  const closeBgs = $All(".loc-select__bg");
  const closeBtns = $All(".loc-select__close");

  closeBgs.forEach((bg) => {
    bg.addEventListener("click", () => {
      bg.parentElement.classList.remove("active");
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.parentElement.classList.remove("active");
    });
  });
};

const handleDropDowns = () => {
  const btns = $All(".drop-down-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = $(`#${btn.getAttribute("data-target")}`);
      target.classList.toggle("hidden");
      const icon = btn.querySelector("img");
      icon.src = icon.src.includes("minus")
        ? icon.src.replace("minus", "plus")
        : icon.src.replace("plus", "minus");
    });
  });
};

let changercalendarcolor = $(".form-input.date-input.calendarcolorChanger");
let datainputs = $(".calendary__svg");

changercalendarcolor.addEventListener("click", () => {
    datainputs.classList.add("active");
});

changercalendarcolor.addEventListener("mouseout", () => {
    datainputs.classList.remove("active");
});

let openparkingModal = $(".open__parkingModal");
let opensText = $(".opens__parkingtexts");

openparkingModal.addEventListener("click", () => {
    opensText.classList.toggle("active");
});

const handleOpenOnClickBtns = () => {
  const btns = $All(".open-on-click");

  btns.forEach((btn) => {
    const img = btn.querySelector("img");
    const oldSrc = img.src;

    btn.addEventListener("click", () => {
      const target = $(`#${btn.getAttribute("data-target")}`);
      img.src = target.classList.contains("active")
        ? oldSrc
        : "./icons/close.svg";
      target.classList.toggle("active");
    });
  });
};

const handleOpenClickBtns = () => {
  const btns = $All(".open-click");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = $(`#${btn.getAttribute("data-target")}`);
      target.classList.toggle("active");
    });
  });
};

let opensTexts = $(".open__texts");
let opensTexts02 = $(".open__texts02");
let opensTexts03 = $(".open__texts03");
let openCloseTexts = $(".togglebtn");

openCloseTexts.addEventListener("click", () => {
    opensTexts.classList.toggle("active");
    opensTexts02.classList.toggle("active");
    opensTexts03.classList.toggle("active");
});

let opensectionTexts = $(".text__opens");
let opensectionTextSBtn = $(".section-text-link-text-shadow .togglebtn");
let firstsectiontext = $(".section-text-link-text");

opensectionTextSBtn.addEventListener("click", () => {
    opensectionTexts.classList.toggle("active");
    firstsectiontext.classList.toggle("margin");
});

let openPlanText = $(".open__planText");
let openPlanTextBtn = $(".plan__stats__btn");

openPlanTextBtn.addEventListener("click", () => {
    openPlanText.classList.toggle("active");
});

const handlePaymentDetailsShowMoreBtn = () => {
  const btn = $(".modal__content-right-header button");
  const elements = $(".modal__content-right-elements");

  btn.addEventListener("click", () => {
    if (elements.style.display === "none") {
      elements.style.display = "flex";
      btn.innerHTML = `
        <span>Скрыть</span>
        <i class="bi bi-chevron-up"></i>
      `;
    } else {
      elements.style.display = "none";
      btn.innerHTML = `
        <span>Показать</span>
        <i class="bi bi-chevron-down"></i>
      `;
    }
  });
};

const handleReviewShowMore = () => {
  const btns = $All(".review-more-btn");
  let opensTExtSpan = $(".opens__serviceText");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.previousElementSibling.classList.toggle("line-clamp");
      btn.parentElement.classList.toggle("no-shadow");
      btn.classList.toggle("close");
      opensTExtSpan.classList.toggle("active");
      // btn.parentElement.remove();
    });
  });
};

const handleShowMoreBtn = () => {
  const btns = $All(".show-more-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("show");
    });
  });
};

const handleCustomPhoneField = () => {
  const fields = $All(".custom-phone-field");
  const im = new Inputmask("+7 (999) 999-99-99");
  fields.forEach((field) => {
    im.mask(field);
  });
};

const handleSliderMoveBtnHover = () => {
  const btnIcons = $All(".swiper-slider-btn img");

  btnIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.src = icon.src.replace(".png", "-active.png");
    });

    icon.addEventListener("mouseout", () => {
      icon.src = icon.src.replace("-active", "");
    });
  });
};

const handleShowMoreStatCols = () => {
  const btns = $All(".service-stats__data-more-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targets = $All(`#${btn.getAttribute("data-target")}`);
      targets.forEach((target, i) => {
        if (i === 0) {
          if (target.classList.contains("hidden")) {
            btn.innerText = "Свернуть";
          } else {
            btn.innerText = "Показать еще";
          }
        }
        target.classList.toggle("hidden");
      });
    });
  });
};

const handleReviewsImage = () => {
  const input = $(".reviews__modal-add [type='file']");
  const img = $(".reviews__modal-add [type='file'] + img");

  input.addEventListener("change", () => {
    img.src = URL.createObjectURL(input.files[0]);
    img.style.padding = "0px";
  });
};

const handleDatePickers = () => {
  const inputs = $All(".date-input");
  let calendarModalOpen = $(".open--calendar"); 

  inputs.forEach((input) => {
    new AirDatepicker(input, {
      timepicker: true,
      autoClose: false,
    });
  });

  new AirDatepicker(calendarModalOpen, {
    position: "bottom center",
    timepicker: true,
  });
};

const handleClearInputFeature = () => {
  const inputs = $All(".clear-feature");

  inputs.forEach((input) => {
    const clearBtn = document.createElement("button");
    clearBtn.className = "clear-btn";
    clearBtn.type = "button";
    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.classList.remove("active");
    });
    clearBtn.innerHTML = "<img src='./icons/clear.svg' />";

    input.addEventListener("input", () => {
      if (input.value) {
        clearBtn.classList.add("active");
      } else {
        clearBtn.classList.remove("active");
      }
    });

    input.insertAdjacentElement("afterend", clearBtn);
  });
};

const handleLocationSelect = () => {
  const optionBtns = $All(".location-select");

  optionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      optionBtns.forEach((subbtn) => subbtn.classList.remove("active"));

      btn.classList.add("active");
    });
  });
};

// Красная линия
let scndFormLabel = $All(".form-label.second__label");

scndFormLabel.forEach((label) => {
    label.addEventListener("click", () => {
        label.classList.remove("second__label");
        // label.child(".form-label-span.text-gray").classList.remove("second__label");
    });
});

// дополнительные услуги переключатели

let prevpage = $All(".cost__cals__leftarrow");
let nextpage = $All(".cost__cals__rightarrow");

nextpage.forEach((nextarrows) => {
    nextarrows.addEventListener("click", () => {
        nextarrows.previousElementSibling.innerText = "2";
    });
});

prevpage.forEach((prevarrows) => {
    prevarrows.addEventListener("click", () => {
        prevarrows.nextElementSibling.innerText = "1";
    });
});

let scroller__top = document.querySelector(".scroller__top");

scroller__top.addEventListener("click", topscroll);

window.addEventListener("scroll", trackscroll);

function trackscroll () {
    let offset = window.pageYOffset;
    let clientheight = document.documentElement.clientHeight;

    if (offset > clientheight) {
        scroller__top.classList.add("show");
    } else {
        scroller__top.classList.remove("show");
    }
}

function topscroll () {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(topscroll, 0);
    }
}

window.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-1", {
    loop: true,
    pagination: false,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: "#swiper-1-next",
      prevEl: "#swiper-1-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2.3,
      },
      600: {
        slidesPerView: 1.5,
      },
    },
  });

  new Swiper(".swiper-2", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: "#swiper-2-next",
      prevEl: "#swiper-2-prev",
    },
    noSwiping: true,
    breakpoints: {
      770: {
        slidesPerView: 2.2,
      },
      600: {
        // noSwiping: false
      }
    }
  });

  new Swiper(".swiper-2-rewiews", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: "#swiper-2-next",
      prevEl: "#swiper-2-prev",
    },
    noSwiping: true,
    breakpoints: {
      770: {
        slidesPerView: 1.2,
      },
      450: {
        slidesPerView: 0.5,
      }
    }
  });

  new Swiper(".swiper-3", {
    loop: true,
    observeParents: true,
    observer: true,
    pagination: {
      el: ".main-sec__slider-pags",
    },
  });

  new Swiper(".swiper-slider-payment", {
    loop: true,
    observeParents: true,
    observer: true,
    navigation: {
      nextEl: ".payment__slider-controls-btn.next",
      prevEl: ".payment__slider-controls-btn.prev",
    },
  });

  handleServicesTab();
  handleHeaderSublinks();
  handleParkingTabs();
  handleParkingCards();
  handleModals();
  handleFocusInput();
  handleStyledSelects();
  handleInputMaps();
  handleDropDowns();
  handleOpenOnClickBtns();
  handleOpenClickBtns();
  handlePaymentDetailsShowMoreBtn();
  handleReviewShowMore();
  handleShowMoreBtn();
  handleCustomPhoneField();
  handleSliderMoveBtnHover();
  handleShowMoreStatCols();
  handleReviewsImage();
  handleAddAdresses();
  handleDatePickers();
  handleClearInputFeature();
  handleLocationSelect();

  // Custom js codes
  // document.querySelector('.header-select-container .custom-select').addEventListener('click',function(e){
  //   let list = document.querySelector('.header-select-container .custom-select > div');
  //   list.classList.toggle('active')
  // })
});

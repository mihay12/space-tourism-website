let data;
fetch("./data.json")
  .then((response) => response.json())
  .then((obj) => (data = obj));

const pageMoveConditions = {
    home: {
      active: true,
      innerText: "00 HOME",
    },
    destination: {
      active: false,
      innerText: "01 DESTINATION",
    },
    crew: {
      active: false,
      innerText: "02 CREW",
    },
    technology: {
      active: false,
      innerText: "03 TECHNOLOGY",
    },
  },
  burgerMenuTemplate = `<div class="burger-menu">
  <a href="" class="burger-menu_button">
    <spun class="burger-menu_lines"></spun>
  </a>
  <nav>
      <span class="burger-menu_link"><b>00</b> Home</span>
      <span class="burger-menu_link"><b>01</b> Destination</span>
      <span class="burger-menu_link"><b>02</b> Crew</span>
      <span class="burger-menu_link"><b>03 </b> Technology</span>
  <div class="burger-menu_overlay"></div>
<div> `;

function changePage(namePage) {
  Object.keys(pageMoveConditions).forEach((prop) => {
    if (prop === namePage) {
      pageMoveConditions[prop].active = true;
    } else {
      pageMoveConditions[prop].active = false;
    }
  });
}

function resizeWindow(nameBlockClass) {
  $(window).on("resize", function () {
    const win = $(this),
      nameBlock = nameBlockClass.slice(1, nameBlockClass.length);

    if (!pageMoveConditions[nameBlock].active) return;

    if (win.width() <= 768) {
      $("html").css({
        background: `"url(./assets/${nameBlock}/background-${nameBlock}-tablet.jpg) no-repeat center center fixed"`,
        backgroundSize: "cover",
      });
      $(nameBlockClass).css({
        display: "block",
      });
    } else if (win.width() <= 375) {
      $("html").css({
        background: `"url(./assets/${nameBlock}/background-${nameBlock}-mobile.jpg) no-repeat center center fixed"`,
        backgroundSize: "cover",
      });
      $(nameBlockClass).css({
        display: "block",
      });
      
      createBurgerMenu();
    } else {
      if ($(nameBlockClass).css("display") === "grid") return;

      $("html").css({
        background: `"url(./assets/${nameBlock}/background-${nameBlock}-desktop.jpg) no-repeat center center fixed"`,
        backgroundSize: "cover",
      });
      $(nameBlockClass).css({
        display: "grid",
      });
    }
  });
}

function createBurgerMenu() {
  if ($(document).width() <= 375 && !$(".burger-menu").length) {
    $("header").append(burgerMenuTemplate);
    $(".burger-menu").on("click", (event) => {});
  } else if ($(document).width() <= 375 && $(".burger-menu").length) {
    $(".burger-menu").show();
  } else {
    $(".burger-menu").hide();
  }
}
createBurgerMenu();

const items = $("nav span, .heading-5, .heading-1, .heading-4, .subheading-2");

for (let i = 0; i < items.length; i++) {
  const itemCode = items[i].innerHTML.toUpperCase();
  items[i].innerHTML = itemCode;
}

$("nav span").addClass("nav-text");
$("span.nav-text").eq(0).addClass("span-hover");

$("span, p").on("click", (event) => {
  const innerTextForMove = !isNaN(
      Number(event.currentTarget.innerText.slice(0, 2))
    )
      ? event.currentTarget.innerText
          .slice(3, event.currentTarget.innerText.length)
          .toLowerCase()
      : event.currentTarget.innerText.toLowerCase(),
    conditionForWidthForTablet = $(document).width() <= 768,
    conditionForWidthForMobile = $(document).width() <= 375;

  if (!pageMoveConditions[innerTextForMove]) return;

  changePage(innerTextForMove);

  for (let i = 0; i < $("span.nav-text").length; i++) {
    if ($("span.nav-text")[i] === event.target) {
      $("span.nav-text").eq(i).addClass("span-hover");
    } else {
      $("span.nav-text").eq(i).removeClass("span-hover");
    }
  }

  if (innerTextForMove === "home") {
    resizeWindow(".home");

    if (conditionForWidthForTablet) {
      $("html").css({
        background:
          "url(./assets/home/background-home-tablet.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".home").css({
        display: "block",
      });
    } else if (conditionForWidthForMobile) {
      $("html").css({
        background:
          "url(./assets/home/background-home-mobile.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".home").css({
        display: "block",
      });
    } else {
      $("html").css({
        background:
          "url(./assets/home/background-home-desktop.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".home").css({
        display: "grid",
      });
    }

    $(".destination").css({
      display: "none",
    });
    $(".crew").css({
      display: "none",
    });
    $(".technology").css({
      display: "none",
    });
  }

  if (innerTextForMove === "destination") {
    resizeWindow(".destination");

    if (conditionForWidthForTablet) {
      $("html").css({
        background:
          "url(./assets/destination/background-destination-tablet.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".destination").css({
        display: "block",
      });
    } else if (conditionForWidthForMobile) {
      $("html").css({
        background:
          "url(./assets/destination/background-destination-mobile.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".destination").css({
        display: "block",
      });
    } else {
      if ($(".destination").css("display") === "grid") return;

      $("html").css({
        background:
          "url(./assets/destination/background-destination-desktop.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".destination").css({
        display: "grid",
      });
    }

    $(".home").css({
      display: "none",
    });
    $(".crew").css({
      display: "none",
    });
    $(".technology").css({
      display: "none",
    });

    if (!$(".planet-nav").children().length) {
      for (let i = 0; i < data["destinations"].length; i++) {
        const navText = `<p class="nav-text" style="margin: 0 0 16px 20px; cursor:pointer;">${data[
          "destinations"
        ][i]["name"].toUpperCase()} </p>`;

        $(".planet-nav").append(navText);

        $(".planet-name p").text(data["destinations"][0]["name"].toUpperCase());
        $(".planet-img-tag").attr("src", `${data["destinations"][0]["images"]["png"]}`);
        $(".planet-text").text(data["destinations"][0].description);
        $(".avg-distance").text(data["destinations"][0].distance);
        $(".est-travel-time").text(data["destinations"][0].travel);
      }
      $("div.planet-nav p.nav-text").eq(0).addClass("nav-active");
    }

    $("p.nav-text").on("click", (event) => {
      const destinationInnerText = event.currentTarget.innerText;
      for (let i = 0; i < data["destinations"].length; i++) {
        const name = data["destinations"][i]["name"].toUpperCase();
        if (name === destinationInnerText) {
          $(".planet-name p").text(name);
          $(".planet-img-tag").attr("src", `${data["destinations"][i]["images"]["png"]}`);
          $(".planet-text").text(data["destinations"][i].description);
          $(".avg-distance").text(data["destinations"][i].distance);
          $(".est-travel-time").text(data["destinations"][i].travel);
          $("div.planet-nav p.nav-text").eq(i).addClass("nav-active");
        } else {
          $("div.planet-nav p.nav-text").eq(i).removeClass("nav-active");
        }
      }
    });
  }

  if (innerTextForMove === "crew") {
    resizeWindow(".crew");

    if (conditionForWidthForTablet) {
      $("html").css({
        background:
          "url(./assets/crew/background-crew-tablet.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".crew").css({
        display: "block",
      });
    } else if (conditionForWidthForMobile) {
      $("html").css({
        background:
          "url(./assets/crew/background-crew-mobile.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".crew").css({
        display: "block",
      });
    } else {
      $("html").css({
        background:
          "url(./assets/crew/background-crew-desktop.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".crew").css({
        display: "grid",
      });
    }

    $(".destination").css({
      display: "none",
    });
    $(".home").css({
      display: "none",
    });
    $(".technology").css({
      display: "none",
    });

    if (!$(".points").children().length) {
      for (let i = 0; i < data["crew"].length; i++) {
        $(".points").append(`<p class="point" id="${i}"></p>`);
      }

      $(".role").text(data.crew[0].role.toUpperCase());
      $(".name").text(data.crew[0].name.toUpperCase());
      $(".bio").text(data.crew[0].bio);
      $(".person-img-tag").attr("src", `${data.crew[0]["images"]["png"]}`);
      $(".point").eq(0).addClass("point-active");
    }

    $(".point").on("click", (event) => {
      const currentIndex = event.currentTarget.id;
      $(".role").text(data.crew[currentIndex].role.toUpperCase());
      $(".name").text(data.crew[currentIndex].name.toUpperCase());
      $(".bio").text(data.crew[currentIndex].bio);
      $(".person-img-tag").attr("src", `${data.crew[currentIndex]["images"]["png"]}`);
      for (let i = 0; i < $(".points").children().length; i++) {
        $(".point").eq(i).removeClass("point-active");
      }
      $(".point").eq(currentIndex).addClass("point-active");
    });
  }

  if (innerTextForMove === "technology") {
    resizeWindow(".technology");

    if (conditionForWidthForTablet) {
      $("html").css({
        background:
          "url(./assets/technology/background-technology-tablet.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".technology").css({
        display: "block",
      });
    } else if (conditionForWidthForMobile) {
      $("html").css({
        background:
          "url(./assets/technology/background-v-mobile.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".technology").css({
        display: "block",
      });
    } else {
      $("html").css({
        background:
          "url(./assets/technology/background-technology-desktop.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      });
      $(".technology").css({
        display: "grid",
      });
    }
    $(".destination").css({
      display: "none",
    });
    $(".home").css({
      display: "none",
    });
    $(".crew").css({
      display: "none",
    });
    if (!$(".circles").children().length) {
      for (let i = 0; i < data["technology"].length; i++) {
        $(".circles").append(
          `<div class="tech-circle heading-4"> ${i + 1}</div>`
        );
      }

      $(".name").text(data.technology[0].name.toUpperCase());
      $(".describe-text").text(data.technology[0].description);
      $(".technology-img-tag").attr("src", `${data.technology[0]["images"]["portrait"]}`);
      $(".tech-circle").eq(0).addClass("tech-circle-active");
    }

    $(".tech-circle").on("click", (event) => {
      const currentIndex = Number(event.currentTarget.textContent) - 1;

      $(".name").text(data.technology[currentIndex].name.toUpperCase());
      $(".describe-text").text(data.technology[currentIndex].description);
      $(".technology-img-tag").attr("src", `${data.technology[currentIndex]["images"]["portrait"]}`);

      for (let i = 0; i < $(".circles").children().length; i++) {
        $(".tech-circle").eq(i).removeClass("tech-circle-active");
      }
      $(".tech-circle").eq(currentIndex).addClass("tech-circle-active");
    });
  }
});

$(window).on("resize", function () {
  createBurgerMenu();
});

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu_button");
  let links = menu.find(".burger-menu_link");
  let overlay = menu.find(".burger-menu_overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overlow", "hidden");
      $("header nav").addClass("active-nav");
      $("header nav").removeClass("inactive-nav");
    } else {
      $("body").css("overlow", "visible");
      $("header nav").addClass("inactive-nav");
      $("header nav").removeClass("active-nav");
    }
  }
}

burgerMenu(".burger-menu");

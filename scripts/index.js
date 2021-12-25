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
};

function changePage(namePage) {
  Object.keys(pageMoveConditions).forEach((prop) => {
    if (prop === namePage) {
      pageMoveConditions[prop].active = true;
    } else {
      pageMoveConditions[prop].active = false;
    }
  });
}

const items = $("nav span, .heading-5, .heading-1, .heading-4, .subheading-2");

for (let i = 0; i < items.length; i++) {
  const itemCode = items[i].innerHTML.toUpperCase();
  items[i].innerHTML = itemCode;
}

$("nav span").addClass("nav-text");
$("span.nav-text").eq(0).addClass("span-hover");

$("span, p").on("click", (event) => {
  const innerTextForMove = event.currentTarget.innerText
    .slice(3, event.currentTarget.innerText.length)
    .toLowerCase();

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
    $("html").css({
      background:
        "url(./assets/home/background-home-desktop.jpg) no-repeat center center fixed",
      backgroundSize: "cover",
    });
    $(".destination").css({
      display: "none",
    });
    $(".crew").css({
      display: "none",
    });
    $(".technology").css({
      display: "none",
    });
    $(".home").css({
      display: "grid",
    });
  }

  if (innerTextForMove === "destination") {
    if ($(".destination").css("display") === "grid") return;

    $("html").css({
      background:
        "url(./assets/destination/background-destination-desktop.jpg) no-repeat center center fixed",
      backgroundSize: "cover",
    });
    $(".home").css({
      display: "none",
    });
    $(".crew").css({
      display: "none",
    });
    $(".technology").css({
      display: "none",
    });
    $(".destination").css({
      display: "grid",
    });

    if (!$(".planet-nav").children().length) {
      for (let i = 0; i < data["destinations"].length; i++) {
        const navText = `<p class="nav-text" style="margin: 0 0 16px 20px;">${data[
          "destinations"
        ][i]["name"].toUpperCase()} </p>`;

        $(".planet-nav").append(navText);

        $(".planet-name p").text(data["destinations"][0]["name"].toUpperCase());
        $(".planet-img").css({
          background: `url(${data["destinations"][0]["images"]["png"]}) no-repeat center center`,
        });
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
          $(".planet-img").css({
            background: `url(${data["destinations"][i]["images"]["png"]}) no-repeat center center`,
          });
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
    $("html").css({
      background:
        "url(./assets/crew/background-crew-desktop.jpg) no-repeat center center fixed",
      backgroundSize: "cover",
    });
    $(".destination").css({
      display: "none",
    });
    $(".home").css({
      display: "none",
    });
    $(".technology").css({
      display: "none",
    });
    $(".crew").css({
      display: "grid",
    });
  }

  if (innerTextForMove === "technology") {
    $("html").css({
      background:
        "url(./assets/technology/background-technology-desktop.jpg) no-repeat center center fixed",
      backgroundSize: "cover",
    });
    $(".destination").css({
      display: "none",
    });
    $(".home").css({
      display: "none",
    });
    $(".crew").css({
      display: "none",
    });
    $(".technology").css({
      display: "grid",
    });
  }
});
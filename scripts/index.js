let data;
fetch('./data.json')
  .then(response => response.json())
  .then(obj =>  data = obj);

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
  

    const items = $("nav span, .heading-5, .heading-1, .heading-4");
  
    for (let i = 0; i < items.length; i++) {
      const itemCode = items[i].innerHTML.toUpperCase();
      items[i].innerHTML = itemCode;
    }
  
    $("nav span").addClass("nav-text");
  
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
          background: "url(./assets/home/background-home-desktop.jpg) no-repeat center center fixed",
          backgroundSize: "cover"
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
        $("html").css({
          background:
            "url(./assets/destination/background-destination-desktop.jpg) no-repeat center center fixed",
            backgroundSize: "cover"
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
        //треба доробити
        for(let i = 0; i <= data["destinations"].length; i++) {
          const navText = `<p class="nav-text">${data["destinations"][i].name} </p>`
          $(".planet-nav").append(navText).on("click", event => {
            debugger
            $(".planet-name p").text(data["destinations"][i].name);
            $(".planet-img").css({
              background: data["destinations"][i]["images"]["png"],
            });
            $(".planet-text").text(data["destinations"][i].description);
            $(".avg-distance").text(data["destinations"][i].distance);
            $(".est-travel-time").text(data["destinations"][i].travel);
          });
        }
      }
      if (innerTextForMove === "crew") {
        $("html").css({
          background: "url(./assets/crew/background-crew-desktop.jpg) no-repeat center center fixed",
          backgroundSize: "cover"
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
          backgroundSize: "cover"
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
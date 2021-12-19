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
          background: "url(./assets/home/background-home-desktop.jpg)",
        });
        $(".destination").css({
          display: "none",
        });
        $(".home").css({
          display: "grid",
        });
        $(".crew").css({
          display: "none",
        });
        $(".technology").css({
          display: "none",
        });
        console.log(data);
      }
      if (innerTextForMove === "destination") {
        $("html").css({
          background:
            "url(./assets/destination/background-destination-desktop.jpg)",
        });
        $(".destination").css({
          display: "block",
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
      }
      if (innerTextForMove === "crew") {
        $("html").css({
          background: "url(./assets/crew/background-crew-desktop.jpg)",
        });
        $(".destination").css({
          display: "none",
        });
        $(".home").css({
          display: "none",
        });
        $(".crew").css({
          display: "block",
        });
        $(".technology").css({
          display: "none",
        });
      }
      if (innerTextForMove === "technology") {
        $("html").css({
          background:
            "url(./assets/technology/background-technology-desktop.jpg)",
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
          display: "block",
        });
      } 
    }); 
# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![home-page](/assets/screenshots/Screenshot from 2022-01-21 19-30-53.png)
![destination-page](/assets/screenshots/Screenshot from 2022-01-21 19-31-00.png)
![crew-page](/assets/screenshots/Screenshot from 2022-01-21 19-31-02.png)
![technology-page](/assets/screenshots/Screenshot from 2022-01-21 19-31-04.png)

### Links

- Solution URL: [https://github.com/mihay12/space-tourism-website](https://github.com/mihay12/space-tourism-website)
- Live Site URL: [https://mihay12.github.io/space-tourism-website/](https://mihay12.github.io/space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Serve] for run localhost
- [JQuery](https://jquery.com/) - JS library

### What I learned

I learned and consolidated my knowledge of JQuery. Here is one of the fragments I am proud of

```js
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
```

### Continued development

I want to focus on studying the Angular, React and Vue frameworks

## Author

- Website - [Misha](https://mihay12.github.io/space-tourism-website/)
- Frontend Mentor - [@mihay12](https://www.frontendmentor.io/profile/mihay12)

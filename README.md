# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


##

# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./public/images/Huddle%20Page%20desktop.png)
![](./public/images/Huddle%20Page%20mobile_PM.png)
![](./public/images/Huddle%20active1.PNG)
![](./public/images/Huddle%20active%202.PNG)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

- Solution URL: [Solution URL](https://github.com/omobolarin1989/huddle)
- Live Site URL: [Live site] (huddle-frontend-mentor-sand.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- Textclamp

### What I learned

I learned how to use text clamp for reponsive text on the website
I also learned how to properly align my google font in my project
I also used custom CSS propertt to mymy work easier

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">


    <title>vite-project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```
```css
@import "tailwindcss";






@theme {
  --font-poppins: "Poppins", sans-serif;
  --font-opensans: "Open Sans", sans-serif;


  --color-primary: #6B4AB0;
  --color-attribution-link: #3e52a3;
  --color-active: #e882e8;
}
```
```js
function{

  return(
    <p className="text-center text-[clamp(0.74rem,2vw,1.2rem)] lg:text-left font-opensans">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
  )
}
```


### Continued development

UI want to lern how to use the text clamp very well as well as the mobile first development



### AI Collaboration

I basically use only chat gpt

- I used ChatGPT
- HI use it to get more explanation on some of the code I am not getting right
- Everything worked perfectly well



## Author

- Website - [Olaniyi Olatunbosun](huddle-frontend-mentor-sand.vercel.app)
- Frontend Mentor - [@omobolarin1989](https://www.frontendmentor.io/profile/omobolarin1989)
- Linkedin - [@olaniyi-olatunbosun](linkedin.com/in/olaniyi-olatunbosun)







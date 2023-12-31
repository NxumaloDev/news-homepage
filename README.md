# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](<assets/images/Screenshot 2023-09-12 215049.png>)
![Screenshot](<assets/images/Screenshot 2023-09-12 215115.png>)
![Screenshot](<assets/images/Screenshot 2023-09-12 215140.png>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Counter() property. 

```css
footer {
    counter-reset: section;
    
    & .text {
      &::before {
        content: '0' counter(section);
        counter-increment: section;
        }
    }
}
```

## Author

- Frontend Mentor - [@NxumaloDev](https://www.frontendmentor.io/profile/NxumaloDev)
- Instagram - [@sarcasm_emoji](https://www.instagram.com/sarcasm_emoji)

## Acknowledgments

- FrontEnd Mentor
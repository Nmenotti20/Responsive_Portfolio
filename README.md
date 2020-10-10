Nmenotti20 / Responsive_Portfolio

CSS and Bootstrap - Responsive Portfolio  - by Nick Menotti






The objective of this project was to assist the our Social Media Marketing client with refactoring the code in their website to meet accessibility standards and to optimize the site for serach engines.

In order adapt the site to meet the accessabiltiy standards first I had to repair both some of the asthetics of the site, and its functionality.

At first the HTML code was not linked to the CSS style sheet. After linking this, I reveiwed the model example provided by the client to work on correcting the layout and functionality of the site.

Second,the none of the images were linked to the HTML. I repaired the image links and added the appropriate alt attributes to each image tag in the appropriate section on the page in order to label the images for accessabilty standards for voiceToText applications.

At the top of the page, the navigation bar had three skiplinks available to skip down the page to the related content in the body. Two of the three skiplinks were discovered to be inoperable. I repaired the other two skiplinks by copying the code from the one working skiplink. Functionality of the skiplinks was restored.

Next the Serch Engine Optimization container was not aligned properly with the rest of the page, and was compressed in width over to the left side of the page. I adjusted the width to bring that box in line with the Online Reputation Management, and Social Media Marketing content container.

I used the Axe Web Accesability extension and inspection tool to run a diagnostic test to determine if the contrast colors in the code meet the minimum accessability standards and discovered that the shade of blue used on the right column and center rows did not meet the minimum standard of 4.5:1 for color contrast in all areas but the header did meet the minimum standard. I then used the Axe WA extension to determine an appropriate shade of blue that would work well contrasting against the white text color that would meet the standard. In order to maintain unifornmity in color scheme on the site, I changed all the container colors to #0000FF with RBG of 0, 0, 255 - blue. After the color changes were made I reran the Axe WE extension analysis and it the page fell into compliance with the standard.

I added HTML and CSS notes throughout, in order to document the functionality and relavant information that can be used for future improvements on the code.

In order to optimize the site for Serch Engines I added the following meta tags in the section:

KEYWORD SERACH TO DRIVE RESULTS TO THE TOP:
<meta name="keywords" content="Social Media, Marketing, Search Engine Optimization, Online Reputation Management, Social Media Marketing, Lead Generation, Brand Awareness, Cost Management, Horiseon">

SITE CONTENT DESCRIPTION:
<meta name="description" content="Solutions for Social Media needs.">

SITE AUTHOR:
<meta name="author" content="Horiseon Social Solutions Services, Inc.">

CONTENT REFRESH TO KEEP THE MOST UP TO DATE CONTENT SHOWING EVERY 30 SECONDS:
<meta http-equiv="refresh" content="30">

ADJUSTABLE VIEWPORT SO THE CONTENT WILL BE VISIBLE ON MULTIPLE DEVICES IN A SCALABLE WAY:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
In addition, I changed the title tab to read "Social Media Marketing by Horiseon" instead if merely Horiseon to help be more descriptive to for potential new clients to understand what the Horiseon brand does.

The webiste has been published at: https://nmenotti20.github.io/01-HTML-CSS-Git-Code-Refactor/

CREDITS: Special thanks to the following:

Tutorials:
https://extension.ucsd.edu/courses-and-programs/the-coding-boot-camp-front-end-and-back-end-essentials

https://www.w3schools.com/

https://youtu.be/cOmehxAU_4s

Web Accesability Dev Tools Extension:
https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd

Voice Reader Extension for Chrome:
https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn

LICENSE:

MIT License

Copyright (c) [2020] [Nickolas Menotti]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

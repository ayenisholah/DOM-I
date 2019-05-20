const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Button
var btn = document.querySelector('.cta .cta-text button');
btn.textContent = "Get Started";

// Header
var ctaText = document.getElementsByTagName('h1');
ctaText[0].textContent = "DOM Is Awesome";
console.log(ctaText)

// Images
var middleImg = document.querySelector('#middle-img');
middleImg.src = "img/mid-page-accent.jpg";
middleImg.alt = "Image of code snippets across the screen";

var logoImg = document.querySelector('#cta-img');
logoImg.src = "img/header-img.png";
logoImg.alt = "Great Idea! Company logo.";

// Navigation Links
const nav = document.getElementsByTagName('a');

var services = nav[0];
services.textContent = 'Services';

var products = nav[1];
products.textContent = 'Products';

var vision = nav[2];
vision.textContent = 'Vision';

var feat = nav[3];
feat.textContent = 'Features';

var about = nav[4];
about.textContent = 'About';

var contact = nav[5];
contact.textContent = 'Contact';

// Headings
const mainHeadings = document.getElementsByTagName('h4');

var feat = mainHeadings[0];
feat.textContent = 'Features';

var about = mainHeadings[1];
about.textContent = 'About';

var services = mainHeadings[2];
services.textContent = 'Services';

var products = mainHeadings[3];
products.textContent = 'Products';

var vision = mainHeadings[4];
vision.textContent = 'Vision';

var contact = mainHeadings[5];
contact.textContent = 'Contact';

// Top Contents
const topTextContent = document.querySelectorAll('.top-content .text-content p');

var featuresContent = topTextContent[0];
featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

var aboutContent = topTextContent[1];
aboutContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//  Bottom Content
const bottomTextContent = document.querySelectorAll('.bottom-content .text-content p');

var servicesContent = bottomTextContent[0];
servicesContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

var productsContent = bottomTextContent[1];
productsContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

var visionContent = bottomTextContent[2];
visionContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Contact Content
const contactContent = document.querySelectorAll('.contact p');
var address = contactContent[0];
address.textContent = "123 Way 456 Street Somewhere, USA";

var phone = contactContent[1];
phone.textContent = "1 (888) 888-8888";

var email = contactContent[2];
email.textContent = "sales@greatidea.io";

// Footer
var footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';

const br = document.createElement('br');
ctaText[0].append(br);

// New Nav Item
const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Blog';

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Site map'

const navAnchor = document.querySelector('nav');
navAnchor.appendChild(newNavItem1);
navAnchor.prepend(newNavItem2);

// Change Nav Color to green
const navBar = document.querySelectorAll('a')
navBar.forEach(element => {
  element.style.color = 'green'
});

const pTags = document.querySelectorAll('p');

pTags.forEach(element => {
    element.style.color = '#A0001E';
});
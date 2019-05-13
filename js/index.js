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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Set Image selectors
const cta_image = document.getElementById("cta-img");
cta_image.setAttribute('src', siteContent["cta"]["img-src"])

const middle_image = document.getElementById("middle-img");
middle_image.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Set header navigation selectors
const nav = document.getElementsByTagName("a");
nav[0].innerText= siteContent["nav"]["nav-item-1"]
nav[1].innerText= siteContent["nav"]["nav-item-2"]
nav[2].innerText= siteContent["nav"]["nav-item-3"]
nav[3].innerText= siteContent["nav"]["nav-item-4"]
nav[4].innerText= siteContent["nav"]["nav-item-5"]

// Set cta section contents
const main_h1 = document.getElementsByTagName("h1")[0];
main_h1.innerText = siteContent["cta"]["h1"]

const cta_button = document.getElementsByTagName("button")[0];
cta_button.innerText = siteContent["cta"]["button"]

// Set main section contents
const h4 = document.getElementsByTagName ("h4");
h4[0].innerText = siteContent["main-content"]["features-h4"]
h4[1].innerText = siteContent["main-content"]["about-h4"]
h4[2].innerText = siteContent["main-content"]["services-h4"]
h4[3].innerText = siteContent["main-content"]["product-h4"]
h4[4].innerText = siteContent["main-content"]["vision-h4"]


const p = document.getElementsByTagName("p");
p[0].innerText = siteContent["main-content"]["features-content"]
p[1].innerText = siteContent["main-content"]["about-content"]
p[2].innerText = siteContent["main-content"]["services-content"]
p[3].innerText = siteContent["main-content"]["product-content"]
p[4].innerText = siteContent["main-content"]["vision-content"]

// Set contact section contents
h4[5].innerText = siteContent["contact"]['contact-h4']
p[5].innerText = siteContent["contact"]["address"]
p[6].innerText = siteContent["contact"]["phone"]
p[7].innerText = siteContent["contact"]["email"]

// Set footer section content
p[8].innerText = siteContent["footer"]["copyright"]

// Change navigation color
for (let i = 0; i < nav.length; i++){
  nav[i].setAttribute("style", "color: green;");
}
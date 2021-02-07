/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const all_Sections = document.querySelectorAll('section');
const sections_length = all_Sections.length;
const nav_List = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
all_Sections.forEach(element => {
  let content =element.getAttribute('data-nav');
  var nod = document.createElement("LI");
  var textnode = document.createTextNode(content);
  nod.appendChild(textnode); 
  document.querySelector("#navbar__list").appendChild(nod);
});


// Add class 'active' to section when near top of viewport
let li_link = document.querySelectorAll("li");

li_link.forEach((a) => {
  a.addEventListener("click", function () {
    li_link.forEach((a) => a.classList.remove("active_nav"));
    this.classList.add("active_nav");
  });
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
nav_li = nav_List.getElementsByTagName("li")
for (let i=1; i<=nav_li.length; i++) {
    nav_li[i-1].addEventListener('click', function (_e) {
        let id = `#section${i}`
        let section = document.querySelector(id)
        section.scrollIntoView()
    })};

// Set sections as active
const my_sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
        my_sections.forEach((section) => {
          let rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            my_sections.forEach((element) => {
              element.classList.remove("your-active-class");
            });
            section.classList.add("your-active-class");
          }
        });
      });



//alert("Hello world!"); // For debugging

// target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const lists = document.querySelector(".list");
const rightbox = document.querySelector("#right");
const leftbox = document.querySelector("#left");
var allpages = document.querySelectorAll(".page");
// select all subtopic pages

console.log(allpages);
hideall();

function hideall() { // function to hide all pages
    for (let onepage of allpages) { // go through all subtopic pages
        onepage.style.display = "none"; // hide it
    }
}

function show(pgno) {// function to show selected page no
    hideall();
    // select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    // show the page
    onepage.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous 
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});

// NavBar
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach
    (n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


// Drag and Drop
for (list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightbox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightbox.addEventListener("drop", function(e){
            rightbox.appendChild(selected);
            selected = null;
        });

        leftbox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftbox.addEventListener("drop", function(e){
            leftbox.appendChild(selected);
            selected = null;
        });
    })
}









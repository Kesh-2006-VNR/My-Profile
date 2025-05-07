function sayHello() {
    alert("You clicked the button!");
}
function Hello() {
    alert("Hi!");
}
function My() {
alert("Email: keshavans074@gmail.com");
   }

window.onscroll = function () {
  let scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

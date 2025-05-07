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
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  firebase.database().ref("messages").push({
    name,
    email,
    message
  });

  alert("Message sent!");
  form.reset();
});

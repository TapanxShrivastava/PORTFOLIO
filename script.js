var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "App Developer"],
  typeSpeed: 80,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_vzvzaee', 'template_qlzfpbm', this)
    .then(() => {
      document.getElementById("response-msg").style.display = "block";
      this.reset();
    }, (error) => {
      alert("FAILED... " + JSON.stringify(error));
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signinForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Basic validation
      if (username && password) {
        // Redirect to home page
        window.location.href = "home.html";
      } else {
        alert("Please enter both username and password.");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const expandBtn = document.getElementById("expandButton");
  const backBtn = document.getElementById("backButton");
  const container = document.getElementById("mainContainer");
  const buttonContainer = document.getElementById("buttonContainer");
  const detailedSection = document.getElementById("detailedSection");

  function hideWithAnimation(element, animation, callback) {
    element.classList.remove("fade-in", "slide-in");
    element.classList.add(animation);
    element.addEventListener("animationend", function handler() {
      element.removeEventListener("animationend", handler);
      element.style.display = "none";
      element.classList.remove(animation);
      if (callback) callback();
    });
  }

  function showWithAnimation(element, displayType, animation) {
    element.style.display = displayType;
    element.classList.add(animation);
  }

  expandBtn.addEventListener("click", function () {
    hideWithAnimation(container, "fade-out", () => {
      hideWithAnimation(buttonContainer, "fade-out", () => {
        showWithAnimation(detailedSection, "block", "slide-in");
      });
    });
  });

  backBtn.addEventListener("click", function () {
    hideWithAnimation(detailedSection, "slide-out", () => {
      showWithAnimation(container, "block", "fade-in");
      showWithAnimation(buttonContainer, "block", "fade-in");
    });
  });

  const leadForm = document.getElementById("leadTimeForm");
  leadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const forms = document.querySelectorAll(".tab-form");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab") + "Form";

      // Deactivate all tabs
      tabs.forEach(t => t.classList.remove("active"));

      // Hide all forms
      forms.forEach(form => form.style.display = "none");

      // Activate clicked tab and show its form
      tab.classList.add("active");
      const targetForm = document.getElementById(targetId);
      if (targetForm) {
        targetForm.style.display = "block";
        targetForm.classList.add("slide-in");
      }
    });
  });

  // Optional: Prevent default form submits
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert(`${form.querySelector("h3").innerText} form submitted.`);
    });
  });
});

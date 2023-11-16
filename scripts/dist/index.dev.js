"use strict";

var currentIndex = 0;
var textElement = document.getElementById("typed-text");
var colorOverlay = document.getElementById("color-overlay");
var cursor = document.getElementById("typed-cursor");
var heroDesc = document.querySelector(".hero-desc");
var titleData = [{
  id: 0,
  title: "Software engineer?",
  backgroundColor: "rgba(40, 238, 167, 0.93)",
  textColor: "#363738"
}, {
  id: 1,
  title: "Data engineer?",
  backgroundColor: "rgba(152, 100, 218, 0.93)",
  textColor: "#ffffff"
}, {
  id: 2,
  title: "UI/UX designer?",
  backgroundColor: "rgba(251, 80, 142, 0.93)",
  textColor: "#ffffff"
}];

function typeText() {
  var currentTitleData = titleData[currentIndex];
  textElement.innerHTML = "";
  textElement.style.color = currentTitleData.textColor;
  colorOverlay.style.backgroundColor = currentTitleData.backgroundColor;
  cursor.style.color = currentTitleData.textColor;
  heroDesc.style.color = currentTitleData.textColor;
  var i = 0;

  function typeCharacter() {
    if (i < currentTitleData.title.length) {
      textElement.innerHTML += currentTitleData.title.charAt(i);
      i++;
      setTimeout(typeCharacter, 75);
    } else {
      cursor.classList.add("typed-cursor-blink");
      setTimeout(backspaceText, 1200);
    }
  }

  function backspaceText() {
    if (i >= 0) {
      textElement.innerHTML = currentTitleData.title.substring(0, i);
      i--;
      setTimeout(backspaceText, 45);
    } else {
      cursor.classList.remove("typed-cursor-blink");
      currentIndex = (currentIndex + 1) % titleData.length;
      setTimeout(typeText, 0);
    }
  }

  typeCharacter();
}

typeText();
var menuIcon = document.querySelector(".menu-icon");
var closeIcon = document.querySelector(".close-icon");
var navMenu = document.querySelector(".nav-menu");
var menuItems = document.querySelectorAll(".menu-item");
menuIcon.addEventListener("click", function () {
  toggleMenu();
});
closeIcon.addEventListener("click", function () {
  toggleMenu();
});
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Remove 'current-item' class from all menu items
    menuItems.forEach(function (item) {
      item.classList.remove("current-item");
    }); // Add 'current-item' class to the clicked menu item

    menuItem.classList.add("current-item"); // Close the menu

    toggleMenu();
  });
});

function toggleMenu() {
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Set the default tab
  openTab("tab1");
});

function openTab(tabName) {
  // Hide all tabs
  var tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(function (tab) {
    tab.style.display = "none";
  }); // Show the selected tab

  var selectedTab = document.getElementById(tabName);

  if (selectedTab) {
    selectedTab.style.display = "block";
  } // Change the background color based on the selected tab


  var container = document.getElementById("programs");
  var tabButtons = document.querySelectorAll(".tab-name");
  var tabContainer = document.querySelectorAll(".program-container-parent"); // Remove "active" class from all tabs and buttons

  tabContainer.forEach(function (tab) {
    tab.classList.remove("active");
  });
  tabButtons.forEach(function (button) {
    button.classList.remove("active");
    button.style.color = "#373839";
  });

  switch (tabName) {
    case "tab1":
      container.style.backgroundColor = "rgb(255, 198, 53)";
      tabButtons.forEach(function (button) {
        return button.style.color = "rgb(255, 198, 53)";
      });
      tabButtons[0].classList.add("active");
      tabContainer[0].classList.add("active");
      break;

    case "tab2":
      container.style.backgroundColor = "rgb(40, 238, 167)";
      tabButtons.forEach(function (button) {
        return button.style.color = "rgb(40, 238, 167)";
      });
      tabButtons[1].classList.add("active");
      tabContainer[1].classList.add("active");
      break;

    case "tab3":
      container.style.backgroundColor = "rgb(152, 100, 218)";
      tabButtons.forEach(function (button) {
        return button.style.color = "rgb(152, 100, 218)";
      });
      tabButtons[2].classList.add("active");
      tabContainer[2].classList.add("active");
      break;

    case "tab4":
      container.style.backgroundColor = "rgb(251, 80, 142)";
      tabButtons.forEach(function (button) {
        return button.style.color = "rgb(251, 80, 142)";
      });
      tabButtons[3].classList.add("active");
      tabContainer[3].classList.add("active");
      break;

    default:
      console.log(tabButtons);
      container.style.backgroundColor = "rgb(255, 198, 53)"; // Default color when no tab is selected

      tabButtons.forEach(function (button) {
        return button.style.color = "rgb(255, 198, 53)";
      });
      tabButtons[0].classList.add("active");
      tabContainer[0].classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector(".slider-mask");
  var slides = document.querySelectorAll(".slide");
  var dotsContainer = document.querySelector(".dots-container");
  var currentSlide = 0;

  function showSlide(index) {
    currentSlide = index;
    updateSlider();
    updateDots();
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
    updateDots();
  }

  function updateSlider() {
    var translateValue = -currentSlide * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
  }

  function updateDots() {
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot, index) {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  function createDots() {
    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", function (index) {
        return function () {
          showSlide(index);
        };
      }(i));
      dotsContainer.appendChild(dot);
    }

    updateDots();
  }

  createDots();
  var intervalId = setInterval(showNextSlide, 5000);
  slider.addEventListener("mouseenter", function () {
    clearInterval(intervalId);
  });
  slider.addEventListener("mouseleave", function () {
    intervalId = setInterval(showNextSlide, 5000);
  });
});
//# sourceMappingURL=index.dev.js.map

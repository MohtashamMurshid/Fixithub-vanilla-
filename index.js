function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
  document.querySelector(".main-content").style.marginLeft = "0";
  document.querySelector(".main-content").style.transition = "0.5s";
  document.querySelector(".prev").style.left = "10px";
}

function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
  document.querySelector(".main-content").style.marginLeft = "260px";
  document.querySelector(".prev").style.left = "270px";
}
let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
  });
}
function handleServiceClick(service) {
  const serviceTitles = {
    "home-repair": "Home Repair",
    "appliance-maintenance": "Appliance Maintenance",
    "cleaning-services": "Cleaning Services",
    "gardening-landscaping": "Gardening & Landscaping",
  };

  const serviceTitle = serviceTitles[service];
  if (serviceTitle) {
    document.getElementById("serviceTitle").innerText = serviceTitle;
    document.getElementById("serviceModal").style.display = "block";
  }
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

function fixItNow() {
  alert("Redirecting to the Fix It Now process...");
  closeModal();
  // Implement the Fix It Now functionality here.
}

function scheduleLater() {
  alert("Redirecting to the scheduling page...");
  closeModal();
  // Implement the Schedule Later functionality here.
}
function openModal(serviceTitle) {
  const modal = document.getElementById("serviceModal");
  const serviceTitleElement = document.getElementById("serviceTitle");

  serviceTitleElement.textContent = serviceTitle;
  modal.style.display = "block";
}

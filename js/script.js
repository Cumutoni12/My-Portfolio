/* toggle icon */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Active navlink styled */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  /* Make header sticky */
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* Remove toggle */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: "2000",
  delay: "200",
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Front-End Software Developer", "Tech Enthusiast"],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

/* The pop up menu */
const popUpMenu = (project) => {
  const popUpModal = document.querySelector("#modal");
  const popUpModalOverlay = document.querySelector("#overlay");
  const popUpModalCloseBtn = document.querySelector("[data-close-button]");

  const popUpImage = document.createElement("img");
  popUpImage.src = project.image;
  popUpImage.classList.add("modal-image");

  const popUpDetails = document.createElement("div");
  popUpDetails.classList.add("modal-details");
  popUpDetails.id = "modal-details";

  const popUpTitle = document.createElement("h3");
  popUpTitle.classList.add("modal-header");
  popUpTitle.textContent = project.title;
  popUpDetails.appendChild(popUpTitle);

  const popUpText = document.createElement("p");
  popUpText.classList.add("project-details");
  popUpText.textContent = project.details;
  popUpDetails.appendChild(popUpText);

  const repoBtn = document.createElement("a");
  const seeLive = document.createElement("a");
  repoBtn.target = "_blank";
  seeLive.target = "_blank";
  repoBtn.classList.add("btn", "project-btns");
  seeLive.classList.add("btn", "project-btns");
  repoBtn.textContent = "GitHub";
  repoBtn.href = project.githubLink;
  seeLive.textContent = "Live";
  seeLive.href = project.liveLink;

  const popUpBtnsContainer = document.createElement("div");
  popUpBtnsContainer.classList.add("popup-btns-container");

  popUpBtnsContainer.appendChild(repoBtn);
  popUpBtnsContainer.appendChild(seeLive);

  popUpDetails.appendChild(popUpBtnsContainer);

  popUpModal.appendChild(popUpImage);
  popUpModal.appendChild(popUpDetails);

  popUpModal.classList.add("active");
  popUpModalOverlay.classList.add("active");

  popUpModalCloseBtn.addEventListener("click", () => {
    popUpModal.classList.remove("active");
    popUpModalOverlay.classList.remove("active");
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });

  popUpModalOverlay.addEventListener("click", () => {
    popUpModal.classList.remove("active");
    popUpModalOverlay.classList.remove("active");
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });
};

/* Render projects dynamically */
const projectsArr = [
  {
    image: "images/project_screen_shots/Screenshot 2024-11-21 201836.png",
    title: "Math Calculator",
    githubLink: "https://github.com/Cumutoni12/Math-Calculator",
    liveLink: "https://cumutoni12.github.io/Math-Calculator/",
    details:
      'Math Calculator" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
  },
  {
    image: "images/project_screen_shots/leaderboard.png",
    title: "LeaderBoard",
    githubLink: "https://github.com/Cumutoni12/leaderBoard",
    liveLink: " https://cumutoni12.github.io/leaderBoard",
    details:
      "In this project, I set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
  },
  {
    image: "images/project_screen_shots/to_do_list_2.PNG",
    title: "To do List",
    githubLink: "https://github.com/Cumutoni12/Todo-ListApp",
    liveLink: "https://cumutoni12.github.io/Todo-ListApp/",
    details:
      "The to do list  is a website that allowa you to add liat of the things.",
  },
  {
    image: "images/project_screen_shots/metrics-app.png",
    title: "stock-exchange metrics app",
    githubLink: "https://github.com/Cumutoni12/stock-exchange-app",
    liveLink: "https://cumutoni12.github.io/stock-exchange-app",
    details:
      "Metrics-Web-App is a mobile web application to that is used to check a list of metrics (numeric values) that will be created by making use of React and Redux and Data from the ACNH API.",
  },
];

const projectsContainer = document.querySelector(".portfolio-container");

projectsArr.forEach((proj) => {
  const project = document.createElement("div");
  project.classList.add("portfolio-box");

  const projectImg = document.createElement("img");
  projectImg.src = proj.image;
  projectImg.alt = proj.title;

  const layer = document.createElement("div");
  layer.classList.add("portfolio-layer");

  const title = document.createElement("h4");
  title.textContent = proj.title;

  const details = document.createElement("p");
  details.textContent = proj.details;

  const popLink = document.createElement("a");

  const popBtn = document.createElement("i");
  popBtn.classList.add("bx", "bx-link-external");

  popLink.appendChild(popBtn);

  layer.appendChild(title);
  layer.appendChild(details);
  layer.appendChild(popLink);

  project.appendChild(projectImg);
  project.appendChild(layer);

  projectsContainer.appendChild(project);

  popLink.addEventListener("click", () => {
    popUpMenu(proj);
  });
});

// global variables
const hamburgerMenu = document.querySelector('#hum');
const mobMenu = document.querySelector('.mob-menu');
const closebtn = document.getElementById('close');
const portfolio = document.getElementsByClassName('portfolio-link');
const mainSection = document.querySelector('.second-container');
const section = document.querySelector('.first-section');
const contactSec = document.getElementById('contact-section');
const myrec = document.getElementById('portfolio');
const hr = document.querySelector('.hr-big');
const body = document.getElementsByTagName('body');
const form = document.getElementById('form');
const msg = document.querySelector('.msg');
const nameValue = document.getElementById('user_name');
const emailInput = document.getElementById('user_mail');
const recievingData = localStorage.getItem('myUserInfo');

// ================  Mobile menu  ===================================

// mobile menu appears
function openMobileMenu() {
  mobMenu.classList.add('active');
}
hamburgerMenu.addEventListener('click', openMobileMenu);

// mobile menu disappears
function closeMobileMenue() {
  mobMenu.classList.remove('active');
}
closebtn.addEventListener('click', closeMobileMenue);

// when user click mobile menu options, the mobile menu disappears
function linkclose() {
  mobMenu.classList.remove('active');
}

(function closeLink() {
  for (let i = 0; i < portfolio.length; i += 1) {
    portfolio[i].addEventListener('click', linkclose);
  }
}());

// ================  popup window.  ===================================

// array of opjects to store all of the information for all projects
const recentArr = [
  {
    title: 'Remotive Jobs',
    img: 'img/Remotive Jobs.jpg',
    discription: `Remotive jobs is where top talents go to easily access active and fully remote job opportunities from vetted tech companies`,
    techs: ['REACT', 'React-redux', 'React hooks'],
    button: 'b-2',
    button2: 'p-2',
    live: 'https://remotive-app-spa-with-react-redux.onrender.com/',
    source: 'https://github.com/MostafaShahat2021/reactCapstoneProject',
  },
  {
    title: 'Math Magicians',
    img: 'img/Math Magicians.jpg',
    discription: `Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to:

    Make simple calculations.
    Read a random math-related quote.
`,
    techs: ['React', 'HTML(HTML-5)', 'CSS(Flexbox)'],
    button: 'b-4',
    button2: 'p-4',
    live: 'https://mostafashahat2021.github.io/To-Do-list-add-remove-1/dist/',
    source: 'https://github.com/MostafaShahat2021/To-Do-list-add-remove-1',
  },
  {
    title: 'Chinese Meal Generator',
    img: 'img/Chinese Meal Generator.jpg',
    discription: `Chinese Meal Generator is API meals generator that displays various chinese meals with an image, ingredients, and preparation steps.`,
    techs: ['HTML', 'CSS', 'JavaScript(ES6)'],
    button: 'b-3',
    button2: 'p-3',
    live: 'https://hisoka37.github.io/JavaScript_Capstone_ThemealdbApi/',
    source: 'https://github.com/Hisoka37/JavaScript_Capstone_ThemealdbApi',
  },
  {
    title: 'To Do list',
    img: 'img/To Do list.jpg',
    discription: `a simple HTML list of To Do tasks, built using webpack and served by a webpack dev server.`,
    techs: ['HTML(HTML-5)', 'CSS(Flexbox)', 'javaScript(ES6)', 'webpack'],
    button: 'b-4',
    button2: 'p-4',
    live: 'https://mostafashahat2021.github.io/To-Do-list-add-remove-1/dist/',
    source: 'https://github.com/MostafaShahat2021/To-Do-list-add-remove-1',
  },
  {
    title: 'Climate Change Summit',
    img: 'img/Climate Change Summit.jpg',
    discription: `capstone project -2022 United Nations Climate Change Conference page `,
    techs: ['HTML', 'CSS', 'JS'],
    button: 'b-1',
    button2: 'p-1',
    live: 'https://mostafashahat2021.github.io/capstone-project---Conference-page-Module-1/',
    source: 'https://github.com/MostafaShahat2021/capstone-project---Conference-page-Module-1',
  },
];
function techfun(item, index) {
  // declare rait  recentArr[index].techs => to pass Eslinte check
  const rait = recentArr[index].techs;
  for (let i = 0; i < rait.length; i += 1) {
    const list = document.createElement('li');
    list.innerHTML = recentArr[index].techs[i];
    item.appendChild(list);
  }
}
// create projects section dynamically
function recent() {
  for (let i = 0; i < recentArr.length; i += 1) {
    const card = document.createElement('article');
    let cls = 'con';
    if (i % 2 === 0) {
      cls = 'con-1';
    }
    card.classList.add('card-container');
    card.innerHTML = `
    <div class="${cls}">
        <img src="${recentArr[i].img}" alt="img-placeholder">
        <div class="">
            <h3 class="work-titl-2">${recentArr[i].title}</h3>
            <p>${recentArr[i].discription}</p>
            <div class="list-container">
                <ul class="skill-container">
                    
                </ul>
            </div>
            <button id="${recentArr[i].button}" type="button" class='btn'">See Project</button>
        </div>
    </div>
    `;
    mainSection.appendChild(card);
    // clicks button to open popup with details about the project appears.
    const buton = document.getElementById(`${recentArr[i].button}`);
    buton.addEventListener('click', () => {
      const pop = document.createElement('section');
      pop.innerHTML = `
      <div class="main-container">
      <article class="bg">
      <div class="card">
      <div class="top">
      <h3>${recentArr[i].title}</h3>
      <button class='pop-close' id="${recentArr[i].button2}">&#9747;</button>
      </div>
      <img class="card-img" src="${recentArr[i].img}" alt="project-picture">
      <p>${recentArr[i].discription}</p>
      <ul class="tech-list">

      </ul>
      <div class="btn-cont">
      <button class="pop-btn pop-btn-1">
      see Live <a href="${recentArr[i].live}"><img src="/img/Icon.svg" alt="live-icon"></a></button>
      <button class="pop-btn">See Source <a href="${recentArr[i].source}"><img src="/img/Group.png" alt="source-icon"></a></button>
      </div>
      </div>
      </article>
      </div>
      `;
      document.body.prepend(pop);
      mainSection.style.display = 'none';
      section.style.display = 'none';
      contactSec.style.display = 'none';
      myrec.style.display = 'none';
      hr.style.display = 'none';
      // click the close (X) button, the popup disappears.
      const popCloseBtn = document.getElementById(`${recentArr[i].button2}`);
      popCloseBtn.addEventListener('click', () => {
        pop.style.display = 'none';
        mainSection.style.display = 'grid';
        section.style.display = 'block';
        contactSec.style.display = 'flex';
        myrec.style.display = 'flex';
      });
      const techItems = document.querySelectorAll('.tech-list');
      techItems.forEach((liItem, em) => {
        techfun(liItem, em);
      });
    });
  }
  const liItems = document.querySelectorAll('.skill-container');
  liItems.forEach((liItem, en) => {
    techfun(liItem, en);
  });
}
recent();

const formCheck = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    const email = document.getElementById('user_mail');
    const emailValue = email.value;
    const validateEmail = email.value.toLowerCase();
    // const msg = document.querySelector('.msg');
    if (validateEmail !== emailValue) {
      email.classList.add('error');
      msg.style.visibility = 'visible';
      msg.innerHTML = 'Please your Email should be in lower-case.';
      msg.classList.add('error');
      e.preventDefault();
    }
  });
};

formCheck();

// preserve data in the browser
body.onload = () => {
  if (recievingData) {
    const dataSave = JSON.parse(recievingData);
    nameValue.value = dataSave.name;
    emailInput.value = dataSave.email;
    msg.value = dataSave.message;
  }
};

document.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();
    // Calling input values
    const nameData = document.querySelector('#user_name').value;
    const emailData = document.querySelector('#user_mail').value;
    const msgData = document.querySelector('#user_text').value;

    // Store values in object;
    const userInfo = {
      name: nameData,
      email: emailData,
      message: msgData,
    };

    localStorage.setItem('user', JSON.stringify(userInfo));
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
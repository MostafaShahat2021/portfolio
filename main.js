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
    title: 'Multi-Post Stories',
    img: 'img/Snapshoot-Portfolio.png',
    discription: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing
    and typesetting ever since the 1500s, when an unknown printer took a galley of type veris lapoa
    todoe.`,
    techs: ['html', 'css', 'js'],
    button: 'b-1',
    button2: 'p-1',
    live: '#',
    source: '#',
  },
  {
    title: 'Tonic',
    img: 'img/Snapshoot-Portfolio(1).png',
    discription: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing
    and typesetting ever since the 1500s, when an unknown printer took a galley of type veris lapoa
    todoe.`,
    techs: ['html', 'css', 'js', 'bootstrab'],
    button: 'b-2',
    button2: 'p-2',
    live: '#',
    source: '#',
  },
  {
    title: 'Facebook 360',
    img: 'img/Snapshoot-Portfolio(2).png',
    discription: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    techs: ['html', 'css', 'js'],
    button: 'b-3',
    button2: 'p-3',
    live: '#',
    source: '#',
  },
  {
    title: 'Uber Navigation',
    img: 'img/Snapshoot-Portfolio(3).png',
    discription: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing
    and typesetting ever since the 1500s, when an unknown printer took a galley of type veris lapoa
    todoe.`,
    techs: ['html', 'css', 'js', 'bootstrab'],
    button: 'b-4',
    button2: 'p-4',
    live: '#',
    source: '#',
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
      <div class="pop-btn pop-btn-1"><a href="${recentArr[i].live}">see Live <img src="/img/Icon.svg" alt="live-icon"></a></div>
      <div class="pop-btn"><a href="${recentArr[i].source}">See Source <img src="/img/Group.png" alt="source-icon"></a></div>
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

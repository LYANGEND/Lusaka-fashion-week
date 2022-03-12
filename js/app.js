const trainers = [
  {
    image: './images/trainers/designer1.jpg',
    name: 'Kathy Lubomba',
    position: 'CEO Magnum Clothings',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/designer.jpg',
    name: 'Wale Kangwa',
    position: 'Co-founder Famous Clothings',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/designer2.jpg',
    name: 'Samuel Williams',
    position: 'CEO Choice fashions',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/kaleab_mezgebu.jpg',
    name: 'Kaleab Mezgebu',
    position: 'Founder LTS Tailoring',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/abraham_asfaw.jpg',
    name: 'Abraham Asfaw',
    position: 'Fashion Journalist',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
];

const trainersContainer = document.getElementById('trainers-container');
const toggleButton = document.querySelector('.toggle-icon');
const primaryMenu = document.querySelector('.menu');
const moreTrainersBtn = document.querySelector('.more-trainers');
let hiddenElements;

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  primaryMenu.classList.toggle('active');
});

moreTrainersBtn.addEventListener('click', () => {
  hiddenElements = document.querySelectorAll('.hidden-mobile');
  hiddenElements.forEach((element) => {
    element.classList.remove('hidden-mobile');
  });
  moreTrainersBtn.classList.add('hidden-more');
});

trainersContainer.innerHTML = trainers
  .map(
    (trainer, index) => `
    <div class="trainer ${index > 1 ? 'hidden-mobile' : ''}">
      <div class="trainer-photo">
        <img src="${trainer.image}" alt="${trainer.name}">
      </div>
      <div class="trainer-details">
        <h3>${trainer.name}</h3>
        <span>${trainer.position}</span>
        <p>${trainer.about}</p>
      </div>
    </div>
  `,
  ).join('');

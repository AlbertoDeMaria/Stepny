const slideTrack = document.querySelector('.slide-track');
const storageKey = 'videoData';

const storedData = localStorage.getItem(storageKey);

if (storedData) {
  const dataArray = JSON.parse(storedData);
  createSlides(dataArray);
} else {
  fetch('https://demariaalberto.it/api.php')
  .then(response => response.text())
  .then(data => {
    const dataArray = JSON.parse(data);
    localStorage.setItem(storageKey, data);
      createSlides(dataArray);
    })
    .catch(error => console.error(error));
}

function createSlides(dataArray) {
  dataArray.forEach(video => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
   
    const img = document.createElement('img');
    img.src = video.thumbnail;
    slideDiv.appendChild(img);

    const playButton = document.createElement('img');
    playButton.src = 'img/icon/play_button_dark.svg';
    playButton.style.cursor = 'pointer';
    playButton.classList.add('play_button');
    playButton.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=' + video.video_id);
    });
    slideDiv.appendChild(playButton);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    
    const titleP = document.createElement('p');
    titleP.innerHTML = video.title;
    contentDiv.appendChild(titleP);

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom');
    
    const watchBtn = document.createElement('button');
    watchBtn.classList.add('btn', 'btn-border-white', 'btn-video');
    watchBtn.textContent = 'Watch now';
    watchBtn.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=' + video.video_id);
    });

    bottomDiv.appendChild(watchBtn);
    contentDiv.appendChild(bottomDiv);
    slideDiv.appendChild(contentDiv);
    slideTrack.appendChild(slideDiv);
  });
}
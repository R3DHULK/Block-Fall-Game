const play_btn = document.getElementById('play_btn');

const retry_btn = document.getElementById('retry_btn');

const back_btn = document.getElementById('back_btn');

const start_screen = document.getElementById('startScreen');

const end_screen = document.getElementById('endScreen');

const bg_cover = document.getElementById('bg_cover');

const gameplay = document.getElementById('gameplay');

const block1 = document.getElementById('block1');

const block2 = document.getElementById('block2');

const block3 = document.getElementById('block3');

const character = document.getElementById('character');

const right_btn = document.getElementById('right_btn');

const left_btn = document.getElementById('left_btn');

const all_btn = document.querySelectorAll('button');

const score_board = document.getElementById('score');

const totl_score = document.getElementById('totl_score');

let score = 0;
let i = 0;

let bg_colors = ['yellow', 'blue', 'magenta', 'red', 'white'];


block1.addEventListener('animationiteration', () => {
  score++;

  let n = parseInt(Math.random() * 5);

  if (score == 0) {
    character.style.background = bg_colors[3];
  }
  if (score == 50) {
    character.style.background = bg_colors[n];
  }

  if (score == 100) {
    character.style.background = bg_colors[n];
  }
  if (score == 150) {
    character.style.background = bg_colors[n];
  }
  if (score == 200) {
    character.style.background = bg_colors[n];
  }
  if (score == 250) {
    character.style.background = bg_colors[n];
  }
  if (score == 300) {
    character.style.background = bg_colors[n];
  }
});

block2.addEventListener('animationiteration', () => {
  score++;

  let n = parseInt(Math.random() * 5);

  if (score == 0) {
    character.style.background = bg_colors[3];
  }
  if (score == 50) {
    character.style.background = bg_colors[n];
  }

  if (score == 100) {
    character.style.background = bg_colors[n];
  }
  if (score == 150) {
    character.style.background = bg_colors[n];
  }
  if (score == 200) {
    character.style.background = bg_colors[n];
  }
  if (score == 250) {
    character.style.background = bg_colors[n];
  }
  if (score == 300) {
    character.style.background = bg_colors[n];
  }
});

block3.addEventListener('animationiteration', () => {
  score++;

  let n = parseInt(Math.random() * 5);

  if (score == 0) {
    character.style.background = bg_colors[3];
  }
  if (score == 50) {
    character.style.background = bg_colors[n];
  }

  if (score == 100) {
    character.style.background = bg_colors[n];
  }
  if (score == 150) {
    character.style.background = bg_colors[n];
  }
  if (score == 200) {
    character.style.background = bg_colors[n];
  }
  if (score == 250) {
    character.style.background = bg_colors[n];
  }
  if (score == 300) {
    character.style.background = bg_colors[n];
  }
});

back_btn.addEventListener('click', () => {
  bg_cover.classList.remove('hide');
  start_screen.classList.remove('hide');
  end_screen.classList.add('hide');
  gameplay.classList.add('hide');
});

play_btn.addEventListener('click', () => {
  bg_cover.classList.add('hide');
  start_screen.classList.add('hide');
  gameplay.classList.remove('hide');

  block1.style.animation = 'up_to_down 2s infinite ease-in-out';
  block2.style.animation = 'up_to_down 2s 1.5s infinite ease-in-out';
  block3.style.animation = 'up_to_down 2s 4.5s infinite ease-in-out';


  setInterval(() => {

    score_board.innerText = 'Score : ' + score;

    let block1_left = parseInt(block1.getBoundingClientRect().left);
    let block1_top = parseInt(block1.getBoundingClientRect().top);

    let block2_left = parseInt(block2.getBoundingClientRect().left);
    let block2_top = parseInt(block2.getBoundingClientRect().top);

    let block3_left = parseInt(block3.getBoundingClientRect().left);
    let block3_top = parseInt(block3.getBoundingClientRect().top);

    let character_left = parseInt(character.getBoundingClientRect().left);
    let character_top = parseInt(character.getBoundingClientRect().top);

    //  console.log(block1_left + ' : ' + block3_left);

    if (((block1_top > 315 && block1_top < 610) && (block1_left <= 30 && character_left < 130)) || ((block2_top > 315 && block2_top < 610) && (character_left >= 138 && character_left <= 238)) || (block3_top > 315 && block3_top < 610) && (character_left >= 146 && character_left <= 246)) {

      i = 1;
      
      
      block1.style.animation = 'none';
      block2.style.animation = 'none';
      block3.style.animation = 'none';
      
      block1.style.top = block1_top
      block2.style.top = block2_top
      block3.style.top = block3_top
      
      
      bg_cover.classList.remove('hide');

      end_screen.classList.remove('hide');
      //gameplay.classList.add('hide');
      
      totl_score.innerText = 'Your score is : ' + score;

      retry_btn.addEventListener('click', () => {
        bg_cover.classList.add('hide');
        end_screen.classList.add('hide');
        gameplay.classList.remove('hide');
        
        character.style.left = 138 + 'px';
        
        block1.style.animation = 'up_to_down 2s infinite ease-in-out';
        block2.style.animation = 'up_to_down 2s 1.5s infinite ease-in-out';
        block3.style.animation = 'up_to_down 2s 4.5s infinite ease-in-out';
      });
      character.style.background = bg_colors[3];
      score = 0;


    }


  }, 1);

});

right_btn.addEventListener('click', () => {

  let character_left = parseInt(character.getBoundingClientRect().left);
  let left = character_left;

  if (character_left >= 30 && character_left < 246) {
    left += 108;
    character.style.left = left + 'px'
    //   console.log(character_left);
  }

});

left_btn.addEventListener('click', () => {

  let character_left = parseInt(character.getBoundingClientRect().left);

  let left = character_left;

  if (character_left > 30 && character_left <= 246) {
    left -= 108;
    character.style.left = left + 'px'
    //  console.log(character_left);
  }


});

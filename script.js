// 変数、配列等
let gameIndex = 0;

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');

let homeArray = [];
let awayArray = [];

// 勝敗決定時のモーダル
const winnerModal = () => {
    document.getElementById('winnerModal').classList.add('active');
    document.getElementById('mask').classList.add('active');
};
const loserModal = () => {
    document.getElementById('loserModal').classList.add('active');
    document.getElementById('mask').classList.add('active');
};
const drawModal = () => {
    document.getElementById('drawModal').classList.add('active');
    document.getElementById('mask').classList.add('active');
};

// 順番によって「○」「✖️」を表示する関数
const box = (boxNumber) => {
  boxNumber.addEventListener('click', ()=> {
    let order = gameIndex % 2;
    if (order === 0) {
      boxNumber.innerText = '○';
      homeArray.push(parseInt(boxNumber.value))
    } else {
      boxNumber.innerText = '✖️';
      awayArray.push(parseInt(boxNumber.value))
    }
    // gameIndex += 1;
    // 配列の中に指定した要素があるかどうかを判定する関数。
    const judge = (player) => {
      if (player.includes(1) && player.includes(2) && player.includes(3)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(4) && player.includes(5) && player.includes(6)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(7) && player.includes(8) && player.includes(9)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(1) && player.includes(4) && player.includes(7)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(2) && player.includes(5) && player.includes(8)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(3) && player.includes(6) && player.includes(9)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(1) && player.includes(5) && player.includes(9)) {
        order === 0 ? winnerModal() : loserModal();
      } else if (player.includes(3) && player.includes(5) && player.includes(7)) {
        order === 0 ? winnerModal() : loserModal();
      } 
    };
    judge(homeArray);
    judge(awayArray);
    gameIndex += 1;
    console.log(gameIndex);
    if (gameIndex === 9) {
      drawModal();
    }
  },{once: true});
  
}
box(box1);
box(box2);
box(box3);
box(box4);
box(box5);
box(box6);
box(box7);
box(box8);
box(box9);

document.getElementById('winnerModalClose').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('winnerModal').classList.remove('active');
  document.getElementById('mask').classList.remove('active');
  window.location.href = 'https://shigeyukisakoda.com/ticTacToe/index.html';
});
document.getElementById('loserModalClose').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loserModal').classList.remove('active');
  document.getElementById('mask').classList.remove('active');
  window.location.href = 'https://shigeyukisakoda.com/ticTacToe/index.html';
});
document.getElementById('drawModalClose').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('drawModal').classList.remove('active');
  document.getElementById('mask').classList.remove('active');
  window.location.href = 'https://shigeyukisakoda.com/ticTacToe/index.html';
});


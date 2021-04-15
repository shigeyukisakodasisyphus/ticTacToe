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
let gameArray = [];
const initialGameArray = [1,2,3,4,5,6,7,8,9];

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

// 配列の中に指定した要素があるかどうかを判定する関数。
const judge = (player, vias) => {
  if (player.includes(1) && player.includes(2) && player.includes(3)) {
    (gameIndex + vias) % 2 === 0 ? winnerModal() : loserModal();
  } else if (player.includes(4) && player.includes(5) && player.includes(6)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else if (player.includes(7) && player.includes(8) && player.includes(9)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else if (player.includes(1) && player.includes(4) && player.includes(7)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else if (player.includes(2) && player.includes(5) && player.includes(8)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else if (player.includes(3) && player.includes(6) && player.includes(9)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else if (player.includes(1) && player.includes(5) && player.includes(9)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else if (player.includes(3) && player.includes(5) && player.includes(7)) {
    (gameIndex + vias) % 2  === 0 ? winnerModal() : loserModal();
  } else {
    gameIndex += 1;
  }
};

// away側のどこに打つかを決める関数
const awayHitPoint = ()=> {

  let nowArray = initialGameArray.filter(i => gameArray.indexOf(i) == -1);//相手が打てる場所を抽出
  let selectNumber = Math.floor(Math.random() * nowArray.length);//ランダム数字を作成。
  // console.log(nowArray[selectNumber]);

  if (nowArray[selectNumber] === 1) {
    box1.innerText = '✖️';
    awayArray.push(parseInt(box1.value))
    gameArray.push(parseInt(box1.value))
  }  else if (nowArray[selectNumber] === 2) {
    box2.innerText = '✖️';
    awayArray.push(parseInt(box2.value))
    gameArray.push(parseInt(box2.value))
  } else if (nowArray[selectNumber] === 3) {
    box3.innerText = '✖️';
    awayArray.push(parseInt(box3.value))
    gameArray.push(parseInt(box3.value))
  } else if (nowArray[selectNumber] === 4) {
    box4.innerText = '✖️';
    awayArray.push(parseInt(box4.value))
    gameArray.push(parseInt(box4.value))
  } else if (nowArray[selectNumber] === 5) {
    box5.innerText = '✖️';
    awayArray.push(parseInt(box5.value))
    gameArray.push(parseInt(box5.value))
  } else if (nowArray[selectNumber] === 6) {
    box6.innerText = '✖️';
    awayArray.push(parseInt(box6.value))
    gameArray.push(parseInt(box6.value))
  } else if (nowArray[selectNumber] === 7) {
    box7.innerText = '✖️';
    awayArray.push(parseInt(box7.value))
    gameArray.push(parseInt(box7.value))
  } else if (nowArray[selectNumber] === 8) {
    box8.innerText = '✖️';
    awayArray.push(parseInt(box8.value))
    gameArray.push(parseInt(box8.value))
  } else if (nowArray[selectNumber] === 9) {
    box9.innerText = '✖️';
    awayArray.push(parseInt(box9.value))
    gameArray.push(parseInt(box9.value))
  }
}


// opening
const starting = Math.floor(Math.random() * 10) + 1;
let order = starting % 2 ;
console.log(order);
document.getElementById('orderButton').addEventListener('click', ()=> {
  document.getElementById('starting').innerText = (order === 0) ? 'Heads is You': 'You are tails';
  document.getElementById('starting').classList.add('active');
  document.getElementById('gameStart').classList.add('active');
}, {once: true});
document.getElementById('gameStart').addEventListener('click', ()=> {
    // e.preventDefault();
    if (order === 0) {
      document.getElementById('startingContainer').classList.add('negative');
      document.getElementById('startingMask').classList.add('negative');
    } else {
      document.getElementById('startingContainer').classList.add('negative');
      document.getElementById('startingMask').classList.add('negative');
      box5.innerText = '✖️';
      awayArray.push(parseInt(box5.value))
      gameArray.push(parseInt(box5.value))
      gameIndex += 1;
    }
},{once: true});
const homeButton = document.getElementById('home');
const awayButton = document.getElementById('away');
awayButton.classList.add('hide');
homeButton.classList.add('hide');

// game start
if (order === 0) {
// 先攻の場合
// home側の関数

const box = (boxNumber) => {
  boxNumber.addEventListener('click', ()=> {
    if (boxNumber.innerText === '' && order % 2 === 0) {    

    boxNumber.innerText = '○';
    homeArray.push(parseInt(boxNumber.value))
    gameArray.push(parseInt(boxNumber.value))
    homeButton.classList.add('hide');
    awayButton.classList.remove('hide');

    judge(homeArray, 0);
    // gameIndex += 1;judge()に記述
    order += 1;
    console.log(homeArray);
    console.log(awayArray);
    console.log(gameArray);
    console.log(gameIndex);
    console.log(order);

    if (gameIndex === 9) {
      drawModal();
    }
  }
  });
  
};
// awayButtonを押すと動くaway側関数
awayButton.addEventListener('click', () => {

  awayHitPoint();

  judge(awayArray, 0);
  // gameIndex += 1;judge()に記述
  order += 1;

  console.log(homeArray);
  console.log(awayArray);
  console.log(gameArray);
  console.log(gameIndex);
  console.log(order);

  awayButton.classList.add('hide');
  homeButton.classList.remove('hide');
})

box(box1);
box(box2);
box(box3);
box(box4);
box(box5);
box(box6);
box(box7);
box(box8);
box(box9);

} else {
// 後攻の場合
const box = (boxNumber) => {
  boxNumber.addEventListener('click', ()=> {
    if (boxNumber.innerText === '' && order % 2 === 1) {

    boxNumber.innerText = '○';
    homeArray.push(parseInt(boxNumber.value))
    gameArray.push(parseInt(boxNumber.value))
    homeButton.classList.add('hide');
    awayButton.classList.remove('hide');

    judge(homeArray, 1);
    // gameIndex += 1;judge()に記述
    order += 1;

    console.log(homeArray);
    console.log(awayArray);
    console.log(gameArray);
    console.log(gameIndex);
    console.log(order);

    }
  });
  
};
// awayButtonを押すと動くaway側関数
awayButton.addEventListener('click', () => {

  awayHitPoint();

  judge(awayArray, 1);
  
    // gameIndex += 1;judge()に記述
  
  order += 1;

  console.log(homeArray);
  console.log(awayArray);
  console.log(gameArray);
  console.log(gameIndex);
  console.log(order);

  awayButton.classList.add('hide');
  homeButton.classList.remove('hide');

  if (gameIndex === 9) {
    drawModal();
  }
})

box(box1);
box(box2);
box(box3);
box(box4);
box(box5);
box(box6);
box(box7);
box(box8);
box(box9);
};
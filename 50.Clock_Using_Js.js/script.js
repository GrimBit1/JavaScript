let h_hand = document.getElementsByClassName("h_hand")[0];


let m_hand = document.getElementsByClassName("m_hand")[0];


let s_hand = document.getElementsByClassName("s_hand")[0];

console.log(h_hand);

console.log(m_hand);

console.log(s_hand);


// Date
let time = new Date();


let hour = time.getHours();


let minute = time.getMinutes();


let second = time.getSeconds();




setInterval(() => {
  let time = new Date();


  let hour = time.getHours();


  let minute = time.getMinutes();


  let second = time.getSeconds();

  console.log(hour, minute, second);

  s_hand.style.transform = `rotate(${second * 6 + 180}deg)`;

  m_hand.style.transform = `rotate(${minute * 6 + 180}deg)`;

  h_hand.style.transform = `rotate(${hour * 30 + 180}deg)`;

}, 1000);


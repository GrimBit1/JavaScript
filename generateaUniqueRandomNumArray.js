let randomUniqueNumArr = [];
let generateaUniqueRandomNumArray = (length) => {
  let randomUniqueNumArr = [];

  for (let i = 0; i < length; i++) {
    let randomNum = parseInt(Math.random() * length);

    while (randomUniqueNumArr.includes(randomNum)) {
      randomNum = parseInt(Math.random() * length);
    }
    randomUniqueNumArr.push(randomNum);
  }
  return randomUniqueNumArr;
};

//Index start from 0
// console.log(generateaUniqueRandomNumArr(10))
export default generateaUniqueRandomNumArray
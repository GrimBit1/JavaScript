console.log("Hi");


async function weather() { // async function runs in the background
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("27 Deg");

      resolve("27 Deg");

    }, 1000);

  });


  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("21 Deg");
      resolve("21 Deg");

    }, 1000);

  });


  let delhiW = await delhiWeather // this makes fuction to wait until the promise is resolved
  let bangloreW = await bangloreWeather
  return[delhiW,bangloreW]

}

weather().then((v)=>{
console.log(v)
})

// weather().then((value)=>{
//     console.log(value)
// })

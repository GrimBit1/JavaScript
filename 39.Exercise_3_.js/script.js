// console.log("hi")
let hi_div = document.getElementById("hi")
// console.log(hi_div)  

// console.log(hi_div)
//Code for random Jokes

const jokes = ["Sgt.: Commissar! Commissar! The troops are revolting! Commissar: Well, youre pretty repulsive yourself.", "I tried to write a chemistry joke, but could never get a reaction.", "What do you call a girl between two posts? Annette.", "Thanks for explaining the word \"many\" to me. It means a lot.", "Why did Mozart kill all his chickens?Because when he asked them who the best composer was, they'd all say \"Bach bach bach!\"", "How many tickles does it take to tickle an octopus? Ten-tickles!", "What`s E.T. short for? He`s only got little legs.","A man tried to sell me a coffin today. I told him that's the last thing I need.","What did the pirate say on his 80th birthday? Aye Matey!","I knew i shouldn`t have ate that seafood. Because now i`m feeling a little… Eel"]
console.log(jokes.length)
let random_n = parseInt(Math.random() * 10)

console.log(random_n)

console.log(jokes[random_n])
hi_div.innerHTML =  jokes[random_n]
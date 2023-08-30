var text1 = document.getElementsByTagName("h3")[0]
var text2 = document.getElementsByTagName("h2")[0]
console.log(text1)
console.log(text2)


var quotes = {
    "― Roy T. Bennett" : "More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.",
    "― Roy T. Bennett" : "You cannot control the behavior of others, but you can always choose how you respond to it.",
    "― H. Jackson Brown Jr" : "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "― William W. Purkey" : "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    "― Mahatma Gandhi" : "Be the change that you wish to see in the world."
}
    
var author = Object.keys(quotes)
console.log(author)
var quotesr = Object.values(quotes)
console.log(quotesr)


// var rng = Math.floor(Math.random()*author.length)
// console.log(rng)
var past;
function random(){  
    
    var rng = Math.floor(Math.random()*author.length)
    

        if(past==rng){
            var rng = Math.floor(Math.random()*author.length)

            text2.innerText=(author[rng])
            text1.innerText=(quotesr[rng])
        }else{
            text2.innerText=(author[rng])
            text1.innerText=(quotesr[rng])
        }
            

    past = rng
    text1.style.opacity = "0";
    text2.style.opacity = "0";
    setTimeout(() => {
        text1.innerText=(quotesr[rng])
        text1.style.opacity=("1")
        text2.innerText=(author[rng])
        text2.style.opacity=("1")
    }, 500)
}




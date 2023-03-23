let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
document.getElementById('main-title').innerHTML = "DOM Toretto's Homepage"

  // Part 2
  // Select the bodyand change the background-color to a new color of your choice.
this.body.style.backgroundColor = '#EBC217'

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
let stopStaring = document.getElementById('favorite-things')
stopStaring.removeChild(stopStaring.lastElementChild)

  // Part 4
  // Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
let fonts = document.querySelectorAll('.special-title')
for (let i=0;i<fonts.length;i++){
  let newFont = fonts[i]
  newFont.style.fontSize = '2rem'
}

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
let races = document.getElementById('past-races')
races.removeChild(races.children[3])

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
let newLi = document.createElement('li')
let liText = document.createTextNode('Paris')
newLi.appendChild(liText)
races.appendChild(newLi)

  // Part 7
  // Create a new .blog-postcorresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
let main = document.querySelector('.main')
let newDiv = document.createElement('div')
newDiv.setAttribute('class', 'blog-post purple')
main.appendChild(newDiv)

let newH1 = document.createElement('h1')
newH1.textContent = 'Paris'
newDiv.appendChild(newH1)

let newP = document.createElement('P')
newP.textContent = 'I ATE A CROISSANT!'
newH1.appendChild(newP)

  // Part 8
  // Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked.
let newEv = document.querySelector('#quote-title')
newEv.addEventListener ('click', randomQuote)

  // Part 9
  //   Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
    // The mouseouthandler should toggle the class .purple
    // The mouseenterhandler should toggle the class .red
let blogPosts = document.querySelectorAll('.blog-post')
for (let i=0;i<blogPosts.length; i++){
  let events = blogPosts[i]
  events.addEventListener('mouseenter', function (evt){
    events.style.backgroundColor = 'red'
  })
  events.addEventListener('mouseout', function (evt){
    events.style.backgroundColor = 'purple'
  })
}

});

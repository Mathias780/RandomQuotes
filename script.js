//fetch doms elements
const displayQuotes = document.querySelector('.container p')

// Eventlistener and function 

function GeneratesQuotes() {
    const someQuotes = ['Fear does not stop death, It stops life',
    'Most people run, Because deep down they want to be chased',
    'Fall seven times, stand up eight',
    'A man is not old until his regrets take the place of his Dreams.',
    'When you make a choice you change the future',
    'Clear your head of CANT',
    'Work hard Dream big',
    'Be happy for this moment.This moment is your life',
    "Don't try to rush things that need time to grow",]

    const randomIndex = Math.floor(Math.random() * someQuotes.length)
    const randomQuotes = someQuotes[randomIndex]
    displayQuotes.textContent = randomQuotes
}
    
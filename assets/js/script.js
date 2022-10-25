// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0
let UpdateScoreboard = () => {
let total = headsRolls + tailsRolls 
let percentHeads = 0
let percentTails = 0
if (total > 0) {
percentHeads = Math.round((headsRolls / total) * 100)
percentTails = Math.round((tailsRolls / total) * 100)


}

}
document.addEventListener('DOMContentLoaded', () => {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    
    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {
        let flip = Math.random() > 0.5
        if (headsRolls) {
            document.querySelector(".penny-image").src= 'assets/images/penny-heads.jpg'
        document.querySelector('message').textContent = "flipped heads"
        headsRolls += 1
        } else { 
            document.querySelector(".penny-image").src= 'assets/images/penny-tails.jpg'
        document.querySelector('message').textContent = "flipped tails"
        
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        document.getElementById('heads').textContent = headsRolls, 

        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    document.getElementById('Clear').addEventListener('click', () => {
        headsRolls = 0
        tailsRolls = 0
    },
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
})

/*
document.querySelector(#flip) eventlistener (click, function) {
flip the penny
let isHeads = math.random () > .5
if (isHeads) {
    document.querySelector(".penny-image").src= penny-heads.jpg
document.querySelector(.result-header).textContent = "flipped heads"
} else { 
    document.querySelector(".penny-image").src= penny-tails.jpg
document.querySelector(.result-tails).textContent = "flipped tails"

}

}
*/
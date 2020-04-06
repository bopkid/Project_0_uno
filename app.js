
// this object will hold all the logic needed for the game to work
// what will track:
// 1. The Deck 
// 2. What has been played before
// 3. which way the game is going
// 4, whos turn is it
// 
//  method:
// 
// 
// 
const game = {
    // contains the whole deck 108 cards
    deck:[],

    // check what is played and add what is played and be reshuffled when the deck is empty
    cardInPlay:[],

    // will change who will go next with the reverse
    currentFlow: 'clockwise',

    // track what color is being played
    currentColor: null,

    //track what number is currently showing
    currentnNumber: null,
    
    // generate a new deck of uno
    // in total the size should 108
    generateDeck(){

    },
    // generate new number cards 1-9 *2
    // generate card 0 *1 
    generateNumber(){

    },
    // generate new speical cards colors: +2, reverse, skip*2
    // no-color: +4,change color *2 
    generateSpeical(){

    },
    // will  interpert the card the player just played 
    cardInterperter(){

    },
    // check if different from currentcolor if so changed it to this
    changeColor(){

    },
    // check if differnt from number if so changed it to this
    changeNumber(){

    },

    // will  change which way the game flow will go with reverse hand
    changeFlow(){

    },

    //check each player hands size and if 2 may call uno
    callingUno(){

    },
    // will deal a card to the player hands
    dealCards(){

    },
    // check who has no card left declar that person is the victor
    checkForVictor(){

    }

}
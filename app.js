
// this object will hold all the logic needed for the game to work
// what will track:
// 1. The Deck 
// 2. What has been played before
// 3. which way the game is going
// 4, whos turn is it
// 
//  method:
// generateDeck
// generateNumber
//   generateSpeical(){
//  cardInterperter
// changeColor
//changeNumber
//changeFlow
//callingUno
//dealCards
//checkForVictor
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
    // and show who has won
    checkForVictor(){

    },
    // clear the game borad and show to play again?
    clearAndPlay(){

    }

}




/* 
    player object should hold what the player should see and handle the player in a sense play the card 
    
    what should this objct hold:
    1. the cards a array of objects
    2. Uno a bool 
    method: 
    1. playerCard()
 */
const player ={
    playerHand:[],
    hasUno: false,

    playCard(){

    }
}

/* 
    class  computer will be able to make the needed computer 

    what should this class hold:
    1. the cards a array of objects
    2. Uno a bool 
    method: 
    1. playerCard()
 */

class computer{
    constructor(playerId){
        this.playerHand = [];
        this.hasUno = false;
        this.playerId = playerId;
    }
    playCard(){
        
    }

}

// this object will hold the logic to make the needed to make the computder class needed 

const computersList = {
    computerPlayers:[],
// make the needed computer player
    generateComputerPlayers(){
        const newComputer = new computer(this.computersList.length);
        this.computerPlayers.push(newComputer)
        return newComputer;
        }

}
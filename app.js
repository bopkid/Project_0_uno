
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
    deck:[
    {
        card_number: '0',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '0',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '0',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '0',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },

    {
        card_number: '1',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '1',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },
        {
        card_number: '6',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '6',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'red',
        card_action: 'regular',
        png:''
    },    {
        card_number: '+2',
        card_color: 'red',
        card_action: 'action',
        png:''
    },    {
        card_number: '+2',
        card_color: 'red',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'red',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'red',
        card_action: 'action',
        png:''
    },    {
        card_number: 'skip',
        card_color: 'red',
        card_action: 'action',
        png:''
    },   {
        card_number: 'skip',
        card_color: 'red',
        card_action: 'action',
        png:''
    },   

    {
        card_number: '1',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '1',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },
        {
        card_number: '6',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '6',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'blue',
        card_action: 'regular',
        png:''
    },    {
        card_number: '+2',
        card_color: 'blue',
        card_action: 'action',
        png:''
    },    {
        card_number: '+2',
        card_color: 'blue',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'blue',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'blue',
        card_action: 'action',
        png:''
    },    {
        card_number: 'skip',
        card_color: 'blue',
        card_action: 'action',
        png:''
    },   {
        card_number: 'skip',
        card_color: 'blue',
        card_action: 'action',
        png:''
    },   
    {
        card_number: '1',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '1',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },
        {
        card_number: '6',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '6',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'green',
        card_action: 'regular',
        png:''
    },    {
        card_number: '+2',
        card_color: 'green',
        card_action: 'action',
        png:''
    },    {
        card_number: '+2',
        card_color: 'green',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'green',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'green',
        card_action: 'action',
        png:''
    },    {
        card_number: 'skip',
        card_color: 'green',
        card_action: 'action',
        png:''
    },   {
        card_number: 'skip',
        card_color: 'green',
        card_action: 'action',
        png:''
    },   

    {
        card_number: '1',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '1',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '2',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '3',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '4',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
    {
        card_number: '5',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },
        {
        card_number: '6',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '6',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '7',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '8',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '9',
        card_color: 'yellow',
        card_action: 'regular',
        png:''
    },    {
        card_number: '+2',
        card_color: 'yellow',
        card_action: 'action',
        png:''
    },    {
        card_number: '+2',
        card_color: 'yellow',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'yellow',
        card_action: 'action',
        png:''
    },    {
        card_number: 'reverse',
        card_color: 'yellow',
        card_action: 'action',
        png:''
    },    {
        card_number: 'skip',
        card_color: 'yellow',
        card_action: 'action',
        png:''
    },   {
        card_number: 'skip',
        card_color: 'yellow',
        card_action: 'action',
        png:''
    },   
    {
        card_number:'+4',
        card_color:'black',
        card_action:'action',
        png:''
    },   
    {
        card_number:'+4',
        card_color:'black',
        card_action:'action',
        png:''
    },
    {
        card_number:'+4',
        card_color:'black',
        card_action:'action',
        png:''
    },
    {
        card_number:'+4',
        card_color:'black',
        card_action:'action',
        png:''
    },
    {
        card_number:'change',
        card_color:'black',
        card_action:'action',
        png:''
    },
    {
        card_number:'change',
        card_color:'black',
        card_action:'action',
        png:''
    },
    {
        card_number:'change',
        card_color:'black',
        card_action:'action',
        png:''
    },    
    {
        card_number:'change',
        card_color:'black',
        card_action:'action',
        png:''
    },
],

    // check what is played and add what is played and be reshuffled when the deck is empty
    cardInPlay:[],

    // will change who will go next with the reverse
    currentFlow: 'clockwise',

    // track what color is being played
    currentColor: 'red',

    //track what number is currently showing
    currentNumber: '7',

    // will  interpert the card the player just played 
    cardInterperter(card){
        if(card.card_color === this.currentColor || card.card_number===this.currentNumber){ 
        this.changeColor(card);
        this.changeNumber(card);
        }
    },
    // check if different from currentcolor if so changed it to this
    changeColor(card){
        if(card.card_color != this.currentColor){
            this.currentColor = card.card_color;
        }

    },
    // check if differnt from number if so changed it to this
    changeNumber(card){
        if(card.card_number != this.currentNumber){
            this.currentNumber = card.card_number;
        }
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
const test = {
    card_number:'5',
    card_color:'green'
}
game.cardInterperter(test)
console.log(game.currentNumber);
console.log(game.currentColor)

console.log(game.deck.length);

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
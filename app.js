
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
        
        if(card[1]=== this.currentColor || (card[1] === 'black')){
            if((card[1] === 'black')){
                game.currentColor = 'black'
            }
            
            return true
        }
        else if(this.currentColor ==='black'){
            this.currentColor = card[1]
            return true
        }
      
      
    },
    // check if different from currentcolor if so changed it to this
    changeColor(card){
        console.log(card[1])
      game.currentColor = card[1];
      return true

    },
    // check if differnt from number if so changed it to this
    changeNumber(card){
        console.log(card)
       game.currentNumber = card
    },
    // select a random card from the deck
    randomCard(){
        const random =  Math.floor(Math.random()*Math.floor(this.deck.length))
       console.log(this.deck.length)
        return random;
    },
    // will  change which way the game flow will go with reverse hand
    changeFlow(){

    },

    //check each player hands size and if 2 may call uno
    callingUno(){

    },
    // this will at the start of the game give the player the cards to the hand
    dealStarterHand(){
        for(let i = 0; i < 7;i++){
            this.dealToPlayer();
        }
        for(let i = 0; i < computersList.computerPlayers.length;i++){
            for(let t = 0; t< 7;t++){   
                const deal = this.randomCard();
                computersList.getComputerPlayer(i).playerHand.push(this.deck[deal])
                this.deck.splice(deal,1)
            }
        }
        console.log(this.deck.length)
    },
    dealToPlayer(){
        const deal = this.randomCard();
        player.playerHand.push(this.deck[deal])
        this.cardInPlay.push(this.cardInPlay);
        this.deck.splice(deal,1)


    
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
    2.displayCard()
 */
const player ={
    playerHand:[],
    hasUno: false,

    playCard(){
        const card = document.querySelector('.hand');
        card.addEventListener('click',(event)=>{
         
            console.log(event.target.classList)
           if(game.cardInterperter(event.target.classList))
           {
               console.log('red')
           }
        })
        
    },
    displayCard(){
        
        for(let i = 0; i < this.playerHand.length;i++){
            const showCard = document.createElement('span');
            
            showCard.classList.add( 'player_hand');

            if(this.playerHand[i].card_color === 'yellow'){
                showCard.classList.add('yellow')
            }
            else if(this.playerHand[i].card_color === 'blue'){
                showCard.classList.add('blue')
            }
            else if(this.playerHand[i].card_color === 'red'){
                showCard.classList.add('red')
            }
            else if(this.playerHand[i].card_color === 'green'){
                showCard.classList.add('green')
            }
            else if(this.playerHand[i].card_color === 'black'){
                showCard.classList.add('black')
            }
           showCard.innerText = this.playerHand[i].card_number
            console.log(showCard)
            const hand = document.querySelector('.hand');
            console.log(hand)
            hand.appendChild(showCard)
        
        
        }
    }
    
}

/* 
    class  computer will be able to make the needed computer 

    what should this class hold:
    1. the cards a array of objects
    2. Uno a bool 
    method: 
    1. playerCard()
    2.displayCard()
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
        const newComputer = new computer(this.computerPlayers.length);
        this.computerPlayers.push(newComputer)
        return newComputer;
        },
    getComputerPlayer(index){
        return this.computerPlayers[index];
    }

}
computersList.generateComputerPlayers();
computersList.generateComputerPlayers();
game.dealStarterHand();

// console.log(player.playerHand)
// console.log(computersList.computerPlayers[0].playerHand)
// console.log(player.playerHand[0].card_color)

player.displayCard();


const card = document.querySelector('.hand');
card.addEventListener('click',(event)=>{
 
    
   if(game.cardInterperter(event.target.classList))
   {
      game.changeNumber(event.target.innerText)
   }
   else if(game.currentNumber == event.target.innerText){
       game.changeColor(event.target.classList)
   }
   console.log(game.currentColor);
   console.log(game.currentNumber)
})


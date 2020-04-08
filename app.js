
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

    // keeps track the cards that are in player hands
    cardsInHand:[],
    // keeps track what has been played from the player hand
    cardInPlay:[],
    

    // will change who will go next with the reverse
    currentFlow: 'clockwise',

    // track what color is being played
    currentColor: null,

    //track what number is currently showing
    currentNumber: null,

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
        this.cardsInHand.push(this.cardsInHand);
        this.deck.splice(deal,1)


    
    },
    startingCards(){
        const random = this.randomCard();
        this.cardInPlay.push(this.deck[random]);
        let firstCard = this.deck[random];
        this.deck.splice(random,1);


        const startCard =document.querySelector('#current_Card');
        const card = document.createElement('div')

        card.setAttribute('id', 'current')
        card.classList.add('player_hand')


        if(firstCard.card_color === 'yellow'){
            card.classList.add('yellow')
        }
        else if(firstCard.card_color === 'blue'){
            card.classList.add('blue')
        }
   
        else if(firstCard.card_color === 'red'){
            card.classList.add('red')
        }
        else if(firstCard.card_color === 'green'){
            card.classList.add('green')
        }
        else if(firstCard.card_color === 'black'){
            card.classList.add('black')
        }
        card.innerHTML = firstCard.card_number;
        startCard.appendChild(card)
        
        
        this.currentColor = firstCard.card_color;
        this.currentNumber = firstCard.card_number;
        console.log(this.currentNumber);
        console.log(this.currentColor);
        
    },

   
    // check who has no card left declar that person is the victor
    // and show who has won
    checkForVictor(){
        
    },
    // clear the game borad and show to play again?
    clearAndPlay(){

    },
    cardInterperter(card){
        
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
    // display card only for player not computer or the current card in play
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
    const current = document.querySelector('#current');

    if(event.target.classList.contains('black')){
        game.currentNumber= event.target.innerHTML;
        game.currentColor = event.target.classList[1];
        current.innerHTML = event.target.innerHTML;
        current.classList.replace(current.classList[1], event.target.classList[1])
    }
    else if(event.target.classList.contains(current.classList[1])){
        console.log('same color')
        game.currentNumber=  event.target.innerHTML
        current.innerHTML = event.target.innerHTML;;
    }
    else if(event.target.innerText == current.innerHTML){
        console.log('same number');
        current.classList.replace(current.classList[1],event.target.classList[1]);
        game.currentColor = event.target.classList[1];
        
    }
    console.log(game.currentColor)
    console.log(game.currentNumber)

})



game.startingCards();
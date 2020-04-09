
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
    },   
    //  {
    //     card_number: 'reverse',
    //     card_color: 'red',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'reverse',
    //     card_color: 'red',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'skip',
    //     card_color: 'red',
    //     card_action: 'action',
    //     png:''
    // },   {
    //     card_number: 'skip',
    //     card_color: 'red',
    //     card_action: 'action',
    //     png:''
    // },   

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
    },   
     {
        card_number: '+2',
        card_color: 'blue',
        card_action: 'action',
        png:''
    }, 
       {
        card_number: '+2',
        card_color: 'blue',
        card_action: 'action',
        png:''
    }, 
    //    {
    //     card_number: 'reverse',
    //     card_color: 'blue',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'reverse',
    //     card_color: 'blue',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'skip',
    //     card_color: 'blue',
    //     card_action: 'action',
    //     png:''
    // },   {
    //     card_number: 'skip',
    //     card_color: 'blue',
    //     card_action: 'action',
    //     png:''
    // },   
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
    },   
    // {
    //     card_number: 'reverse',
    //     card_color: 'green',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'reverse',
    //     card_color: 'green',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'skip',
    //     card_color: 'green',
    //     card_action: 'action',
    //     png:''
    // },   {
    //     card_number: 'skip',
    //     card_color: 'green',
    //     card_action: 'action',
    //     png:''
    // },   

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
    },   
    //  {
    //     card_number: 'reverse',
    //     card_color: 'yellow',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'reverse',
    //     card_color: 'yellow',
    //     card_action: 'action',
    //     png:''
    // },    {
    //     card_number: 'skip',
    //     card_color: 'yellow',
    //     card_action: 'action',
    //     png:''
    // },   {
    //     card_number: 'skip',
    //     card_color: 'yellow',
    //     card_action: 'action',
    //     png:''
    // },   
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
    playerTurn:[]
    ,
    maxComp:0
    ,
    // keeps track the cards that are in player hands
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
       
        return random;
    },
    // will  change which way the game flow will go with reverse hand
    changeFlow(){

    },

    //check each player hands size and if 2 may call uno
    callingUno(){
        const uno = document.querySelector('#Uno')
        if(player.playerHand.length ===2 ){  
           
            uno.classList.replace('noDisplay','display')
        }

    },
    // this will at the start of the game give the player the cards to the hand
    dealStarterHand(){
        for(let i = 0; i < 7;i++){
            this.dealToPlayer();
        }
    
      },
    dealToPlayer(){
        const deal = this.randomCard();
        player.playerHand.push(this.deck[deal])
   
        this.deck.splice(deal,1)


    
    },
    startingCards(){
        const changer = document.querySelector('#change_color')
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
            card.classList.add('red');
        }
        else if(firstCard.card_color === 'green'){
            card.classList.add('green')
        }
        else if(firstCard.card_color === 'black'){
            card.classList.add('black')
            changer.classList.replace('noDisplay','display')
        }


        
        card.innerHTML = firstCard.card_number;
        startCard.appendChild(card)
        
        
        this.currentColor = firstCard.card_color;
        this.currentNumber = firstCard.card_number;

        
    },

   
    // check who has no card left declar that person is the victor
    // and show who has won
    checkForVictor(){


        if(game.maxComp ===3 ){
        if(player.playerHand.length === 0){
            return false
        }
        else if(comp1.computerHand.length === 0){
            return false;
        }
        else if(comp2.computer2Hand.length === 0){
            return false;
        }
        else if(comp3.computer3Hand.length === 0){
            return false;
        }
        
    }
    else if(game.maxComp == 2 ){
        if(player.playerHand.length === 0){
            return false
        }
        else if(comp1.computerHand.length === 0){
            return false;
        }
        else if(comp2.computer2Hand.length === 0){
            return false;
        }

    }
    else if(game.maxComp === 1) {
        if(player.playerHand.length === 0){
            return false
        }
        else if(comp1.computerHand.length === 0){
            
            return false;
        }
    }
    return true
    },
    // clear the game borad and show to play again?
    clearAndPlay(){

    },
    startGame(){
        const showGame = document.querySelector('#player')
        const deck = document.querySelector('#deck')
        const current = document.querySelector('#current_Card');

        

        this.startingCards();
        this.dealStarterHand();
        player.displayCard();

        showGame.classList.replace('noDisplay','display');
        current.classList.replace('noDisplay', 'display');
        deck.classList.replace('noDisplay','display');




    }
    ,
    // dertermine what the action will be base on the card
    cardInterperter(index){
        if(player.playerHand[index].card_action === 'action'){
            if(player.playerHand[index].card_number === '+2'){
        
            }
        }
    },

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
    calledUno: false,
    drawCard(){
        const randomCard =game.randomCard();
        const add = document.querySelector('.hand')
        this.playerHand.push(game.deck[randomCard]);
       
        const newCard = document.createElement('span');
        newCard.classList.add('player_hand');

        if(game.deck[randomCard].card_color==='yellow'){
            newCard.classList.add('yellow')
        }
       else if(game.deck[randomCard].card_color==='red'){
            newCard.classList.add('red')
        }
       else if(game.deck[randomCard].card_color==='blue'){
            newCard.classList.add('blue')
        }
        else if(game.deck[randomCard].card_color==='green'){
            newCard.classList.add('green')
        }  
        else if(game.deck[randomCard].card_color==='black'){
            newCard.classList.add('black')
        }
        newCard.innerHTML = game.deck[randomCard].card_number
        add.appendChild(newCard);
        game.deck.splice(randomCard,1);
    },

    playCard(card){
        for(let i = 0;i< this.playerHand.length;i++){
            if(card.classList[1]== this.playerHand[i].card_color){
                
                game.cardInPlay.push(this.playerHand[i]);
                this.playerHand.splice(i,1);
                 return true
            }
            else if (card.innerHTML == this.playerHand[i].card_number){
                game.cardInPlay.push(this.playerHand[i]);
    
                this.playerHand.splice(i,1);
                return true
            }
            
        }
        
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
            const hand = document.querySelector('.hand');

            hand.appendChild(showCard)
        
        
        }
    }
    
}

const comp1= {
    computerHand:[],
    isTurn: false
    ,
    autoPlayCard(){
        console.log(this.computerHand)
        const current = document.querySelector('#current');
        for(let i= 0;i < this.computerHand.length;i++){
            console.log(this.computerHand.length)
            if(this.computerHand[i].card_color=== game.currentColor){

                console.log(`found one ${this.computerHand[i].card_color}`)
                game.currentNumber = this.computerHand[i].card_number;
                current.innerHTML = this.computerHand[i].card_number;

                this.computerHand.splice(i,1)
                console.log(`chaned${this.computerHand.length}`)
                return true;
            
            }
            else if(this.computerHand[i].card_number=== game.currentNumber){

                console.log(`found a same number`);

                game.currentColor = this.computerHand[i].card_color;
                current.classList.replace(game.currentColor, this.computerHand[i].card_color)

                this.computerHand.splice(i,1)
                console.log(`chaned${this.computerHand.length}`)
                return true
         
            }
            else if (this.computerHand[i].card_color=== 'black'){
                console.log(`found speical MUST PLAY`)

              const random=  Math.floor(Math.random() * Math.floor(4));
              console.log(random)
              current.innerHTML = this.computerHand[i].card_number;
              if(random === 0){
                  current.classList.replace(game.currentColor, 'red')
                  game.currentColor = 'red';
                 
                  console.log('red change')
                  return true
              }
            else if(random === 1){
            
                current.classList.replace(game.currentColor, 'blue')
                game.currentColor = 'blue';
                console.log('blue change')
                return true
            }
           else if(random === 2){
                current.classList.replace(game.currentColor,'yellow')
                game.currentColor = 'yellow';
                console.log('yellow change')
                return true
            }
            else  if(random === 3){
                
                current.classList.replace(game.currentColor, 'green')
                game.currentColor = 'green';
                console.log('green change')
                return true
            }
           
            }
            else if(i === this.computerHand.length -1 ){
                console.log(`need to draw a card`)
                this.getNewCard()
                console.log(`chaned${this.computerHand.length}`)
                return true
            }
        }

    },
    getNewCard(){
        const deal = game.randomCard()
        this.computerHand.push(game.deck[deal])
        game.deck.splice(deal,1)
        return deal;

    }
}

const comp2= {
    computer2Hand:[],
    autoPlayCard(){
        for(let i = 0;i < this.computer2Hand.length;i++){
            if(this.computerHand[i].card_color == game.currentColor )
            {
               game.cardInPlay.push(this.computerHand[i])
               this.computerHand.slice(i,1)
            }
            else if(this.computerHand[i].card_number== game.currentNumber){
                game.cardInPlay.push(this.computerHand[i])
                this.computerHand.slice(i,1)
            }
            else if(this.computerHand[i].color == 'black'){
                game.cardInPlay.push(this.computerHand[i])
                this.computerHand.slice(i,1)
            }
        }
        
    }
}
const comp3= {
    computer3Hand:[],
    autoPlayCard(){
        for(let i = 0;i < this.computer3Hand.length;i++){
            if(this.computerHand[i].card_color == game.currentColor )
            {
               game.cardInPlay.push(this.computerHand[i])
               this.computerHand.slice(i,1)

            }
            else if(this.computerHand[i].card_number== game.currentNumber){
                game.cardInPlay.push(this.computerHand[i])
                this.computerHand.slice(i,1)
            }
            else if(this.computerHand[i].color == 'black'){
                game.cardInPlay.push(this.computerHand[i])
                this.computerHand.slice(i,1)
            }
        }
        
    }
}



const card = document.querySelector('.hand');
const changer = document.querySelector('#change_color')
const uno = document.querySelector('#Uno')
const start = document.querySelector('.startUno')
const titleStart = document.querySelector('#start')
const computerPicker = document.querySelector('.computer-player')




start.addEventListener('click',()=>{
    start.classList.add('noDisplay')
    computerPicker.classList.replace('noDisplay', 'display')
})
titleStart.addEventListener('click', (e)=>{
    if(e.target.classList.contains('1c')){
        game.maxComp= 1;
        titleStart.classList.replace('display','noDisplay')

        for(let i = 0;i < game.maxComp;i++){
            for(let t=0; t < 7 ;t++){
                const deal = game.randomCard()
                comp1.computerHand.push(game.deck[deal])
             
                game.deck.splice(deal,1)
            }
       
        }
        
        game.startGame()
    }
    else if(e.target.classList.contains('2c')){
        game.maxComp =2;
        titleStart.classList.replace('display','noDisplay')

      
            for(let t=0; t < 7 ;t++){
                const deal1 = game.randomCard()
                const deal2 = game.randomCard()
     
                comp1.computerHand.push(game.deck[deal1])
                game.deck.splice(deal1,1)

                comp2.computer2Hand.push(game.deck[deal2])
                game.deck.splice(deal2,1)
               
            }

            
        
        game.startGame()
    }
    else if(e.target.classList.contains('3c')){
        game.maxComp =3;
        titleStart.classList.replace('display','noDisplay')
        for(let t=0; t < 7 ;t++){
            const deal1 = game.randomCard()
            const deal2 = game.randomCard()
            const deal3 = game.randomCard()
 
            comp1.computerHand.push(game.deck[deal1])
            game.deck.splice(deal1,1)

            comp2.computer2Hand.push(game.deck[deal2])
            game.deck.splice(deal2,1)

            comp3.computer3Hand.push(game.deck[deal3])
            game.deck.splice(deal3,1)
           
        }
    
        game.startGame()
    }


})




uno.addEventListener('click', ()=>{
    player.calledUno = true;
    
    uno.classList.replace('display','noDisplay')
})

card.addEventListener('click',(event)=>{

    
    const current = document.querySelector('#current');
    const changerSytle = document.querySelector('#change_color')
    const uno = document.querySelector('#Uno')
    console.log(event.target.innerHTML)

    if(event.target.classList.contains('black')){
       
        event.target.remove();
        player.playCard(event.target)      
        game.currentNumber= event.target.innerHTML;

        game.currentColor = event.target.classList[1];
        current.innerHTML = event.target.innerHTML;

        current.classList.replace(current.classList[1], event.target.classList[1])
        changerSytle.classList.replace('noDisplay','display')
        console.log(game.currentColor)
        // comp1.isTurn = true;
        // comp1.autoPlayCard()
    }
    else if(event.target.classList.contains(current.classList[1])){
        player.playCard(event.target)
        event.target.remove();
      
        game.currentNumber=  event.target.innerHTML
        current.innerHTML = event.target.innerText;;
        // comp1.isTurn = true;
        comp1.autoPlayCard()
    }
    else if(event.target.innerText == current.innerHTML){
        player.playCard(event.target)
        event.target.remove();

        current.classList.replace(current.classList[1],event.target.classList[1]);
        game.currentColor = event.target.classList[1];
        // comp1.isTurn = true;
        comp1.autoPlayCard()
        
    }
    game.callingUno();
    if(player.playerHand.length > 2 ){
        uno.classList.replace('display','noDisplay')

    }
        if(player.playerHand.length === 1){
            if(player.calledUno === false){
                {for(let i = 0; i<2;i++){
                    player.drawCard()
                }
            }
        }
    }
    console.log(game.currentColor)
    // checks if player has called uno before last card
   

})


changer.addEventListener('click', (e)=>{
    const current = document.querySelector('#current');

    game.currentColor = e.target.classList[0]
    current.classList.replace(current.classList[1], e.target.classList[0])
    comp1.isTurn = true;
    comp1.autoPlayCard()
    changer.classList.replace('display','noDisplay')
})

const draw = document.querySelector('#deck');

draw.addEventListener('click', (e)=>{
    const uno = document.querySelector('#Uno')
    player.drawCard();
    comp1.isTurn = true;
    comp1.autoPlayCard()
    uno.classList.replace('display','noDisplay')

})



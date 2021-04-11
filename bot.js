
let smal = {
    joy: [
        'e-1f600',
       '&#128512;',
       '&#128515;',
       '&#128516;',
       '&#128513;',
       '&#128518;',
       '&#128514;',
       '&#128578;',
       '&#129321;',
       '&#129395;',
       
    ],
   
     sadness: [
       '&#128543;',
       '&#128542;',
       '&#128532;',
       '&#128543;',
       '&#128577;',
       '&#128533;',
       '&#128577;',
       '&#128553;',
       '&#128555;',
       '&#128531;'
   
    ],
   
    anger: [
       '&#128127;',
       '&#128556;',
       '&#128548;',
       '&#128545;',
       '&#128122;',
       '&#128128;',
       '&#128544;',
       '&#129327;',
       '&#129320;'
   
    ]
}

 
 const buttonMessage = document.getElementById('button-message');
 const message = document.getElementById('message'); 
 const buttonInput = document.getElementById('button-smul')
 let valueInput = ''
 const inputMessage = document.getElementsByClassName('input-message')
let inputOne = document.getElementById('input-1')
 


 for (key in smal.joy){buttonInput.innerHTML += `<input  class="input-message" type="button" onClick={test} value="${smal.joy[key]}">`}
 for (key in smal.sadness){buttonInput.innerHTML += `<input  class="input-message" type="button" onClick={console.log(56)} value="${smal.sadness[key]}">`}
 for (key in smal.anger){buttonInput.innerHTML += `<input  class="input-message" type="button" onClick={console.log(57)} value="${smal.anger[key]}">`}


 document.addEventListener('click', function(event) {
    console.log(event.target.defaultValue)
    console.log(event)
   
    const str =  event.target.defaultValue;
    console.log(
      str.replace(/\p{Emoji}/ug, (m, idx) =>
       `[e-${m.codePointAt(0).toString(16)}]`
      )
    ) 

   

    })


/* for(key of inputMessage){
    key.onclick = () => {
        console.log(smal.joy.includes(key.value))
        smal.joy.includes(inputMessage.value)
    }
} */
 
let moodСhanges = ''
let bolJoy = ''
let bolSadness = ''
let bolAnger = ''
    
 const bollFun = () => {
    
    bolJoy = smal.joy.includes(inputMessage.value)
    bolSadness = smal.sadness.includes(inputMessage.value)
    bolAnger = smal.anger.includes(inputMessage.value)

 }
 
 const test = () => {
    if(bolJoy == true) {
        console.log('Привет у тебя настроение огонь =)') 
        moodСhanges = 3
    }
 }

 const  firstStage = () =>  {

    console.log(inputMessage.value)

    if(bolJoy == true) {
        console.log('Привет у тебя настроение огонь =)') 
        moodСhanges = 3
    }

    else if(bolSadness == true){
        console.log('Привет все будет ок не злись')
        moodСhanges = 2
    }
    
    
    else if (bolAnger == true){
        console.log('Привет не бей плиз =)')
        moodСhanges = 1
        
    }
    
    else{
        console.log('не понимаю тебя')
        moodСhanges = 0
        console.log(inputMessage.value)
    }


    console.log(moodСhanges)

 }

 const buttonMessageFunc = () => {
    
   if (moodСhanges == 1 &&  bolSadness === true ) {
       console.log('твое натроение стало чуть лучше ')
       moodСhanges = 2
   }
    else if (moodСhanges == 1 && bolJoy == true){
        console.log('ты Лучший =)')
        moodСhanges = 3
    }
    else if (moodСhanges == 1 && bolAnger == true){
        console.log('я не хотел =(((')
        moodСhanges = 1
    }
   else if (moodСhanges == 2 && bolJoy == true) {
       console.log('Твое настроени уже не испортить ')
       moodСhanges = 3
   }
   else if (moodСhanges == 2 && bolSadness == true){
       console.log('у тебя по прежнему все ок =)')
       moodСhanges = 2
   }
   else if (moodСhanges == 2 && bolAnger == true){
        console.log('плиз не удаляй меня ')
        moodСhanges = 1
    }
    else if (moodСhanges == 3 && bolJoy == true){
        console.log('ТЫ просто пушка =)')
        moodСhanges = 3
    }
    else if (moodСhanges == 3 && bolSadness == true){
        console.log('что то у нас с тобой пошло не так ')
        moodСhanges = 2
    }
    else if (moodСhanges == 3 && bolAnger == true){
        console.log('noooooo')
        moodСhanges = 1
    }
   else if (bolJoy == false){
        console.log('не понимаю тебя')
        moodСhanges = 0
   }
   
   
   

 }

 buttonMessage.onclick = () => {
  
    bollFun()

    if (moodСhanges == '') {
        firstStage()
    }else if (moodСhanges == 0){
        moodСhanges = ''
    }else if (moodСhanges >= 1){
        buttonMessageFunc()
    }
   
 }

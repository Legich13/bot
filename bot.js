const smal = {
    joy: [
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

 const inputMessage = document.getElementById('input-message');
 const buttonMessage = document.getElementById('button-message');
 const message = document.getElementById('message'); 
 
     buttonMessageFunc = () =>  {


    console.log(smal.joy.includes(inputMessage.value))
    console.log(inputMessage.value)
    

    const bolJoy = smal.joy.includes(inputMessage.value)
    const bolSadness = smal.sadness.includes(inputMessage.value)
    const bolAnger = smal.anger.includes(inputMessage.value)

    const moodСhanges = ''

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

 buttonMessage.onclick = () => {
    
    if(moodСhanges === 1 ){
        buttonMessageFunc()
    }
    else if (moodСhanges == 3){
        console.log('ok')
    }
 }
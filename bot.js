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

    const moodСhanges = []

    if(bolJoy == true) {
        console.log('У тебя настроение огонь =)') 
        moodСhanges.push(3)
    }

    else if(bolSadness == true){
        console.log('не злись')
        moodСhanges.push(2)
    }
    
    
    else if (bolAnger == true){
        console.log('не бей плиз =)')
        moodСhanges.push(1)
        
    }
    
    else{
        console.log('не понимаю тебя')
        moodСhanges.push(0)
    }


    console.log(moodСhanges)

 }

 buttonMessage.onclick = () => {
    buttonMessageFunc()
 }
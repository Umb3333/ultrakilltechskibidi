const button1div = document.querySelector('.bind1');
const button2div = document.querySelector('.bind2');
const start = document.getElementById('start-btn');
const output = document.querySelector('.timeoutput');
const button1 = document.querySelector('.bind1-btn');
const button2 = document.querySelector('.bind2-btn');


const keyBindings = {
    button1: null, 
    button2: null, 
};

document.addEventListener('DOMContentLoaded', () =>{
     keyBindings = {
        button1: "ControlLeft", 
        button2: "Space", 
    };
})


function handleKeyDown(button, keyBindingKey) {
    return function () {
        button.textContent = "BIND.."; 

        function keyDownHandler(e) {
            e.preventDefault(); 
            console.log(e.code);

            if (e.code === "Escape") {
                
                button.textContent = "BIND";
                keyBindings[keyBindingKey] = null; 
                document.removeEventListener('keydown', keyDownHandler);
                return;
            }

            
            button.textContent = e.code.toUpperCase();
            keyBindings[keyBindingKey] = e.code; 
            console.log(`Key bound for ${keyBindingKey}: ${e.code}`);

           
            document.removeEventListener('keydown', keyDownHandler);
        }

        
        document.addEventListener('keydown', keyDownHandler);
    };
}


button1.addEventListener('click', handleKeyDown(button1, 'button1'));
button2.addEventListener('click', handleKeyDown(button2, 'button2'));


function handleStart() {
    console.log("skividi");
    let FirstTStamp = null;
    let SecondTStamp = null;

    
    function keytrack(e) {
        console.log(e.code);


        if (e.code === keyBindings.button1) {
            FirstTStamp = performance.now();
            console.log(`Button 1 key pressed at: ${FirstTStamp}`);
        }

        
        if (e.code === keyBindings.button2) {
            SecondTStamp = performance.now();
            console.log(`Button 2 key pressed at: ${SecondTStamp}`);
        }

       
        if (FirstTStamp && SecondTStamp) {
            const timeDifference = SecondTStamp - FirstTStamp;
            if (timeDifference < 200) {
                output.innerHTML += `<div class = "output-text-success">Done in ${timeDifference}ms </div>`;
            }
            else {
                output.innerHTML += `<div class = "output-text-fail">Done in ${timeDifference}ms</div>`;
            }

            
            FirstTStamp = null;
            SecondTStamp = null;
        }
        
    }

    
    document.addEventListener('keydown', keytrack);
}


start.addEventListener('click', () => {
    handleStart();
});
const button1div = document.querySelector('.bind1');
const button2div = document.querySelector('.bind2');
const start = document.getElementById('start-btn');
const output = document.querySelector('.output');
const button1 = document.querySelector('.bind1-btn');
const button2 = document.querySelector('.bind2-btn');

const keyBindings = {
    button1: "CTRL", 
    button2: "SPACE", 
};

function handleKeyDown(button) {
    return function () {
        button.textContent = "BIND.."; 

        
        function keyDownHandler(e) {
            e.preventDefault(); 

            if (e.key === "Escape") {
                
                button.textContent = keyBindings[keyBindingKey];
                
                document.removeEventListener('keydown', keyDownHandler);
                return;
            }

            
            button.textContent = e.key.toUpperCase();
            console.log(`Key bound for ${button.className}: ${e.key}`);

            
            document.removeEventListener('keydown', keyDownHandler);
        }

        
        document.addEventListener('keydown', keyDownHandler);
    };
}


button1.addEventListener('click', handleKeyDown(button1));
button2.addEventListener('click', handleKeyDown(button2));


function handleStart() {
    let FirstTStamp = null; 
    let SecondTStamp = null; 

    document.addEventListener('keydown', (e) => {
        
        if (e.key === button1.textContent.toLowerCase()) {
            FirstTStamp = performance.now(); 
            console.log(`Button 1 key pressed at: ${FirstTStamp}`);
        }

        if (e.key === button2.textContent.toLowerCase()) {
            SecondTStamp = performance.now();
            console.log(`Button 2 key pressed at: ${SecondTStamp}`);
        }

      
        if (FirstTStamp && SecondTStamp) {
            const timeDifference = SecondTStamp - FirstTStamp;
            console.log(`Time difference between button1 and button2: ${timeDifference} ms`);
        }
    });
}

start.addEventListener('click', () => {
// var allowedkeys = {button1: button1.textContent, button2: button2.textContent};
// var pattern = {button1: button1.textContent, button2: button2.textContent};
// var key = allowedKeys[e.keyCode];
handleStart();






});
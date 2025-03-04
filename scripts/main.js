const button1div = document.querySelector('.bind1');
const button2div = document.querySelector('.bind2');
const start = document.getElementById('start-btn');
const output = document.querySelector('.output');
const button1 = document.querySelector('.bind1-btn');
const button2 = document.querySelector('.bind2-btn');

function handleKeyDown(button) {
    return function () {
        button.textContent = "BIND.."; 

        
        function keyDownHandler(e) {
            e.preventDefault(); 

            if (e.key === "Escape") {
                
                button.textContent = "BIND";
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


start.addEventListener('click', () => {
var allowedkeys = {button1: button1.textContent, button2: button2.textContent};
var pattern = {button1: button1.textContent, button2: button2.textContent};
var key = allowedKeys[e.keyCode];   
console.log(allowedkeys);

});
//   ______ __  __          _   _ _    _ ______ _       _____ 
//  |  ____|  \/  |   /\   | \ | | |  | |  ____| |     / ____|
//  | |__  | \  / |  /  \  |  \| | |  | | |__  | |    | (___  
//  |  __| | |\/| | / /\ \ | . ` | |  | |  __| | |     \___ \ 
//  | |____| |  | |/ ____ \| |\  | |__| | |____| |____ ____) |
//  |______|_|  |_/_/    \_\_| \_|\____/|______|______|_____/ 
// 
// _  ______  _____  
// | |/ / __ \|  __ \ 
// | ' / |  | | |  | |
// |  <| |  | | |  | |
// | . \ |__| | |__| |
// |_|\_\____/|_____/ 
                   
                   
                 
                 
                                                           
                                                           
// Declare variables 
const button1div = document.querySelector('.bind1');
const button2div = document.querySelector('.bind2');
const start = document.getElementById('start-btn');
const output = document.querySelector('.timeoutput');
const button1 = document.querySelector('.bind1-btn');
const button2 = document.querySelector('.bind2-btn');
const dropdown_button = document.querySelector('.dropbtn');
const dropdown_content = document.querySelector('.dropup-content');
const dropdown_A = document.querySelectorAll('drop-A');
const timingH4 = document.getElementById('#timing');
const DashID = document.getElementById('DashTab');
const SlamID = document.getElementById('SlamStorageTab');
const ProjectileID = document.getElementById('ProjectileBoostTab');

// keybinds for buttons
const keyBindings = {
    button1: null, 
    button2: null, 
};
 // DONT TOUCH THIS
 window.addEventListener('DOMContentLoaded', () =>{



    //   switch(window.location.hash) {
    //       case includes('#'): {
    //             console.log("help");
    //           window.location.hash = null;  
    //       } 
    //       break;
    //   };
 });

// Function to get binds for buttons
function handleKeyDown(button, keyBindingKey) {
    return function () {
        
        button.textContent = "BIND.."; 

        function keyDownHandler(e) {
            e.preventDefault(); 
            console.log(e.code);
            // Edge case for esc 
            if (e.code === "Escape") {
                // Lets you exit the binding and sets it to null.
                button.textContent = "BIND";
                keyBindings[keyBindingKey] = null; 
                // When done, remove the keydown listener to prevent more than one input
                document.removeEventListener('keydown', keyDownHandler);
                return;
            }

            // Set the button text to the key that was pressed in caps 
            button.textContent = e.code.toUpperCase();
            keyBindings[keyBindingKey] = e.code; 
            console.log(`Key bound for ${keyBindingKey}: ${e.code}`);

           
            document.removeEventListener('keydown', keyDownHandler);
        }

        // When bind is set, add the keydown listener again to capture the next key on click.
        document.addEventListener('keydown', keyDownHandler);
    };
}

// assigns the function to the buttons.
button1.addEventListener('click', handleKeyDown(button1, 'button1'));
button2.addEventListener('click', handleKeyDown(button2, 'button2'));
// bool for checking if keytracking is active
let isKeytrackActive = false;

function handleStart(timing) {
    console.log("skividi");

    // Define Time stamps
    let FirstTStamp = null;
    let SecondTStamp = null;
    // checks if its already listening for keystrokes. 
    if (isKeytrackActive) {
        console.log("Keytrack listener is already active.");
        return;
    }

    // FUNCTION INSIDE ANOTHER FUNCTION ‼‼‼
    function keytrack(e) {
        console.log(e.code);
        
        // Checks if the key pressed is the first key
        if (e.code === keyBindings.button1) {
            // Using the performance Web API to get precise timestamps
            FirstTStamp = performance.now();
            console.log(`Button 1 key pressed at: ${FirstTStamp}`);
        }

        // Checks if the key pressed is the second key
        if (e.code === keyBindings.button2) {
            SecondTStamp = performance.now();
            console.log(`Button 2 key pressed at: ${SecondTStamp}`);
        }

       
        if (FirstTStamp && SecondTStamp) {
            const timeDifference = SecondTStamp - FirstTStamp;
            if ( timeDifference < 0) {
                output.innerHTML += `<div class = "output-text-fail">Wrong order!</div>`;
            }
            else if (timeDifference < timing) {
                output.innerHTML += `<div class = "output-text-success">Done in ${timeDifference}ms </div>`;
            }
            else if(timeDifference > timing) {
                output.innerHTML += `<div class = "output-text-fail">Done in ${timeDifference}ms</div>`;
            }
            

            
            FirstTStamp = null;
            SecondTStamp = null;
        }
        
    }

    
    document.addEventListener('keydown', keytrack);
    isKeytrackActive = true; 
    
}


start.addEventListener('click', () => {
    handleStart(currentTiming);
});

var currentTiming = 130; // its here lmao

dropdown_button.addEventListener('click', () => {
    dropdown_content.style.display = dropdown_content.style.display === 'flex' ? 'none' : 'flex';
});

// dropdown_A.addEventListener('click', () => {
    
//     dropdown_content.style.display = 'none';
// });
dropdown_A.forEach(link => {
    link.addEventListener('click', (e) => {
        
        dropdown_content.style.display = 'none';
        
        
        const hash = link.getAttribute('href');
        window.location.hash = hash;
    });
});

window.addEventListener('hashchange', function() {
    var hash = window.location.hash;
    switch(hash) {
        case '#SlamStorage':
            dropdown_button.textContent = "Slam Storage";
            keyBindings.button1 = "ControlLeft";
            keyBindings.button2 = "Space";
            currentTiming = 130;
            document.getElementById('timing').textContent = `Required timing: ${currentTiming}ms`;
            break;
        case '#DashJump':
            dropdown_button.textContent = "Dash Jump";
            keyBindings.button1 = "ShiftLeft";
            keyBindings.button2 = "Space";
            currentTiming = 100;
            document.getElementById('timing').textContent = `Required timing: ${currentTiming}ms`;
            break;
        case '#ProjectileBoost':
            dropdown_button.textContent = "ULTRADIVE";
            keyBindings.button1 = "ControlLeft";
            keyBindings.button2 = "Space";
            currentTiming = 80;
            document.getElementById('timing').textContent = `Required timing: ${currentTiming}ms`;
            break;

        case '#CONTENTSlamStorage':
            if (SlamID.style.transform === 'translateX(22vw)') 
                {
                SlamID.style.transform = 'translateX(0vw)';
                SlamID.style.visibility = 'hidden';
            } else {
                SlamID.style.transform = 'translateX(22vw)';
                SlamID.style.visibility = 'visible';

                DashID.style.transform = 'translateX(0vw)';
                DashID.style.visibility = 'hidden';

                ProjectileID.style.transform = 'translateX(0vw)';
                ProjectileID.style.visibility = 'hidden';
            };

            SlamID.style.transition = 'ease-in-out 1s';
            
            break;
        case '#CONTENTDashJump':
            if (DashID.style.transform === 'translateX(22vw)') 
                {
                DashID.style.transform = 'translateX(0vw)';
                DashID.style.visibility = 'hidden';
            } else {
                DashID.style.transform = 'translateX(22vw)';
                DashID.style.visibility = 'visible';

                ProjectileID.style.transform = 'translateX(0vw)';
                ProjectileID.style.visibility = 'hidden';

                SlamID.style.transform = 'translateX(0vw)';
                SlamID.style.visibility = 'hidden';
            };
            DashID.style.transition = 'ease-in-out 1s';
            
            console.log("balls");
            
            break;
        case '#CONTENTProjectileBoost':
            if (ProjectileID.style.transform === 'translateX(22vw)') 
                {
                ProjectileID.style.transform = 'translateX(0vw)';
                ProjectileID.style.visibility = 'hidden';
            } else {
                ProjectileID.style.transform = 'translateX(22vw)';
                ProjectileID.style.visibility = 'visible';

                SlamID.style.transform = 'translateX(0vw)';
                SlamID.style.visibility = 'hidden';

                DashID.style.transform = 'translateX(0vw)';
                DashID.style.visibility = 'hidden';

            };
            ProjectileID.style.transition = 'ease-in-out 1s';
            
            
            break;
            
        default:
            console.log('Unknown hash:', hash);
    }
});



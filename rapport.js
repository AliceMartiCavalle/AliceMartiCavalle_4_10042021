// pour que la div hidden reste ouverte assez longtemps pour qu'on puisse cliquer
// sur le lien sur les petits écrans

let clickerTab = document.getElementsByClassName('clicker');
let hiddenTab = document.getElementsByClassName('hidden');

console.log(clickerTab);
console.log(hiddenTab);

let i = 0;
function myFunction(x) {
    if (x.matches) { // If media query matches
        for (y = 0; y <= clickerTab.length; y++) {
            (function(arg) {
                console.log(i, clickerTab[i]);
                clickerTab[i].addEventListener('click', function() {
                    console.log('clicked');
                    for (let x = 0; x < hiddenTab.length; x++) {
                        hiddenTab[x].style.display = 'none';
                    }
                    i = arg - 1;
                    // console.log(y, hiddenTab[y])
                    hiddenTab[i].style.display = 'block';
                
                }, false);
                // console.log(arg); // s'incrémente
                i = arg;
            })(y);
        }
    }
}

let x = window.matchMedia("(max-width: 426px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
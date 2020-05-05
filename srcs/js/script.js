const logoBlue = document.querySelector('.animated-blue').querySelectorAll('path');
const ava = document.querySelector('.photo-wrapper');
const delay = 900;

// logoBlue.setAttribute
setTimeout(function() {
    ava.style.opacity = '1';
}, delay);


const paths = Array.prototype.slice.call(logoBlue);
console.log(paths);

// while(true) {
//     paths.forEach(function(path) {
//         path.setAttribute('stroke', ('#'+(Math.random()*0xFFFFFF<<0).toString(16)));
//     });
// }

let hue = 0;

function bgcolor() {
    hue = hue + Math.random() * 3 ;
    let color = 'hsl(' + hue + ', 50%, 50%)';

    paths.forEach(function(path) {
        path.setAttribute('stroke', color);
    }
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    )}
    

setInterval(bgcolor, 50);

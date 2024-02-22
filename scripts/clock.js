function updateClock() {
    if(!document.hidden){
        const cubicBezier = 'cubic-bezier(.4,0,.6,1)';
        const showAnimation = [
            {
                top: '50%',
                transform: 'rotateX(90deg)',
                opacity: 0,
                filter: 'blur(4px)'
            },
            {
                top: '0',
                transform: 'rotateX(0deg)',
                opacity: 1,
                filter: 'blur(0px)'
            }
        ];
        const hideAnimation = [
            {
                top: '0',
                transform: 'rotateX(0deg)',
                opacity: 1,
                filter: 'blur(0px)'
            },
            {
                top: '-50%',
                transform: 'rotateX(90deg)',
                opacity: 0,
                filter: 'blur(4px)'
            }
        ];

        const clockHr = document.querySelector(".hr"),
            clockMin = document.querySelector(".min"),
            clockSec = document.querySelector(".sec");
        const writtenHr = document.querySelector(".hr").innerHTML, 
            writtenMin = document.querySelector(".min").innerHTML,
            writtenSec = document.querySelector(".sec").innerHTML;
        const d = new Date();
        const hr = ("0" + d.getHours()).slice(-2), 
            min = ("0" + d.getMinutes()).slice(-2), 
            sec = ("0" + d.getSeconds()).slice(-2);
        if(writtenHr != hr){
            let hrElement = document.createElement("span");
            hrElement.innerHTML = hr;
            hrElement.className = "clock hr";

            clockHr.insertAdjacentElement('afterend', hrElement);
            hrElement.animate(showAnimation,
                {
                    duration: 500,
                    fill: "forwards",
                    easing: cubicBezier
                }
            )
            clockHr.animate(hideAnimation,
                {
                    duration: 400,
                    fill: "forwards",
                    easing: cubicBezier
                }
            )
            setTimeout(() => {
                clockHr.remove();
            }, 500);
        }
        if(writtenMin != min){
            let minElement = document.createElement("span");
            minElement.innerHTML = min;
            minElement.className = "clock min";

            clockMin.insertAdjacentElement('afterend', minElement);
            minElement.animate(showAnimation,
                {
                    duration: 500,
                    fill: "forwards",
                    easing: cubicBezier
                }
            )
            clockMin.animate(hideAnimation,
                {
                    duration: 400,
                    fill: "forwards",
                    easing: cubicBezier
                }
            )
            setTimeout(() => {
                clockMin.remove();
            }, 500);
        }
        if(writtenSec != sec){
            let secElement = document.createElement("span");
            secElement.innerHTML = sec;
            secElement.className = "clock sec";

            clockSec.insertAdjacentElement('afterend', secElement);
            secElement.animate(showAnimation,
                {
                    duration: 400,
                    fill: "forwards",
                    easing: cubicBezier
                }
            )
            clockSec.animate(hideAnimation,
                {
                    duration: 400,
                    fill: "forwards",
                    easing: cubicBezier
                }
            )
            setTimeout(() => {
                clockSec.remove();
            }, 500);
        }
    }
    setTimeout(updateClock, 1000)
}

const time = new Date();
document.querySelector(".hr").innerHTML = ("0" + time.getHours()).slice(-2);
document.querySelector(".min").innerHTML = ("0" + time.getMinutes()).slice(-2);
document.querySelector(".sec").innerHTML = ("0" + time.getSeconds()).slice(-2);

updateClock();
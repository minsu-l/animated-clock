function updateClock() {
    const clockHr = document.querySelector(".hr"),
        clockMin = document.querySelector(".min"),
        clockSec = document.querySelector(".sec");
    const writtenHr = document.querySelector(".hr").innerHTML, 
        writtenMin = document.querySelector(".min").innerHTML,
        writtenSec = document.querySelector(".sec").innerHTML;
    console.log(`${writtenHr}:${writtenMin}:${writtenSec}`);
    const d = new Date();
    const hr = ("0" + d.getHours()).slice(-2), 
        min = ("0" + d.getMinutes()).slice(-2), 
        sec = ("0" + d.getSeconds()).slice(-2);
    console.log(`${hr}:${min}:${sec}`);
    if(writtenHr != hr){
        let hrElement = document.createElement("span");
        hrElement.innerHTML = hr;
        hrElement.className = "clock hr";

        clockHr.insertAdjacentElement('afterend', hrElement);
        hrElement.animate(
            [
                {
                    top: '100%'
                },
                {
                    top: '0'
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out'
            }
        )
        clockHr.animate(
            [
                {
                    top: '0'
                },
                {
                    top: '-100%'
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out'
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
        minElement.animate(
            [
                {
                    top: '100%'
                },
                {
                    top: '0'
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out'
            }
        )
        clockMin.animate(
            [
                {
                    top: '0'
                },
                {
                    top: '-100%'
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out'
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
        secElement.animate(
            [
                {
                    top: '100%'
                },
                {
                    top: '0'
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out'
            }
        )
        clockSec.animate(
            [
                {
                    top: '0'
                },
                {
                    top: '-100%'
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out'
            }
        )
        setTimeout(() => {
            clockSec.remove();
        }, 500);
    }
}

// updateClock();
setInterval(updateClock, 1000);
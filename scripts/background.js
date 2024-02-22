function cycleBg() {
    bg.animate(
        [
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],
        {
            duration: 2000,
            fill: 'forwards',
            easing: 'ease-in'
        }
    );
}
const bg = document.querySelector(".bg-img");
bg.style.cssText = 'opacity: 0;'

setTimeout(cycleBg, 500);
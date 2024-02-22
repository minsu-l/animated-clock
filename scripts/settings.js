function handleBlur() {
    document.querySelector('.bg-blur').style.backdropFilter = `blur(${blurInput.value}px)`;
}
function handleBrightness() {
    document.querySelector('.bg-blur').style.backgroundColor = `rgba(0, 0, 0, ${1 - (brightnessInput.value / 100)})`;
}
function handleSize() {
    document.querySelector('.container').style.fontSize = `${sizeInput.value}px`;
}
function handleOpacity() {
    document.querySelector('.container').style.opacity = `${opacityInput.value/100}`;
}

function handleSettingsToggle() {
    const optionsContainer = document.querySelector('#options-container');
    if(optionsContainer.dataset.toggled == 0){
        optionsContainer.dataset.toggled = 1;
    }
    else {
        optionsContainer.dataset.toggled = 0;
    }
}


const blurInput = document.querySelector('#blur-slider');
const brightnessInput = document.querySelector('#brightness-slider');
const sizeInput = document.querySelector('#size-slider');
const opacityInput = document.querySelector('#opacity-slider');

const settingsButton = document.querySelector('#settings-button');



blurInput.addEventListener('input', handleBlur);
brightnessInput.addEventListener('input', handleBrightness);
sizeInput.addEventListener('input', handleSize);
opacityInput.addEventListener('input', handleOpacity);

settingsButton.addEventListener('mouseup', handleSettingsToggle);
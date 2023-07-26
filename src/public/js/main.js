// Obtenemos referencias a los elementos del DOM
const audio = document.getElementById('miAudio');
const volumenRange = document.getElementById('volumenRange');
const botonReproducir = document.getElementById('botonReproducir');

// Establecemos el volumen inicial del audio en 1 (máximo)
audio.volume = 1;

// Agregamos un event listener al input range para detectar cambios en su valor
volumenRange.addEventListener('input', function () {
    // Obtenemos el valor del rango y lo asignamos al volumen del audio
    audio.volume = volumenRange.value;
});

const musicOn = document.getElementById('musicon');

botonReproducir.addEventListener('click', function () {
    if (audio.paused) {
        musicOn.classList.toggle('bi-volume-up-fill');
        musicOn.classList.toggle('bi-volume-mute-fill');
        audio.play(); // Si el audio está pausado, lo reproducimos
    } else {
        musicOn.classList.toggle('bi-volume-mute-fill');
        musicOn.classList.toggle('bi-volume-up-fill');
        audio.pause(); // Si el audio está reproduciendo, lo pausamos
    }
});

function loadoff() {
    document.getElementById('cover').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(loadoff, 1500);
});

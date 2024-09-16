
var context = new AudioContext();

  function jsNota(frecuencia) {
    var o = context.createOscillator();
    var g = context.createGain();

    o.connect(g);
    o.type = "sawtooth";  // Tipo de onda
    o.frequency.value = frecuencia;  // Frecuencia del tono

    g.connect(context.destination);
    o.start();  // Comienza a emitir el sonido

    // Reduce el volumen gradualmente
    g.gain.setValueAtTime(1, context.currentTime);
    g.gain.linearRampToValueAtTime(0, context.currentTime + 1.2);

    // Detén el oscilador después de 1.5 segundos
    o.stop(context.currentTime + 1);
  }


// JavaScript
document.querySelectorAll('.piano-key').forEach(key => {
  key.addEventListener('mousedown', () => {
    key.classList.add('active');
    // Remove the active class after the animation duration
    setTimeout(() => key.classList.remove('active'), 300);
  });
});

// JavaScript
document.querySelectorAll('.piano-key').forEach(key => {
  key.addEventListener('mousedown', () => {
    key.classList.add('clicked');
  });
  key.addEventListener('mouseup', () => {
    key.classList.remove('clicked');
  });
});

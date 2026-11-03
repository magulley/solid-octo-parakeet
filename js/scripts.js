  const values = ['Africa 48.8°C','Asia 53.9°C','Europe 48.8°C','North America 56.7°C','South America 48.9°C','Australia 50.7°C','Antarctica 18.3°C','Global +1.2°C','Ocean +0.88°C','Arctic +3.1°C','2023 14.98°C','2016 14.81°C','1.5°C limit','2.0°C scenario','July 16.95°C','January 12.20°C','Land +1.59°C','Sea +0.88°C','417 ppm','36.8 billion tons'];
  document.getElementById('numbers').innerHTML = values.map(value => `<span>${value}</span>`).join('');
  let timer;
  function flash(message) {
    const box = document.getElementById('feedback');
    box.textContent = message;
    box.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => { box.hidden = true; }, 1800);
  }

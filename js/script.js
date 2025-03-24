let trackingArea = document.getElementById('trackingArea');

function trackMouse(event) {
     trackingArea.textContent = `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`;
}

document.addEventListener('mousemove', trackMouse);

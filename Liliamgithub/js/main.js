function contactWhatsApp(productName, price) {
    const phoneNumber = '+573001234567'; // Reemplaza con el número de teléfono de la tienda
    const message = `Hola, estoy interesado en comprar ${productName} con precio de $${price}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Popup
const subscriptionPopup = document.getElementById('subscriptionPopup');
const popupClose = document.getElementById('popupClose');
const popupForm = document.getElementById('popupForm');

window.addEventListener('load', () => {
    if (sessionStorage.getItem('popupShown') !== 'true') {
        setTimeout(() => {
            subscriptionPopup.style.display = 'flex';
            sessionStorage.setItem('popupShown', 'true');
        }, 2000); // Mostrar después de 2 segundos
    }
});

popupClose.addEventListener('click', () => {
    subscriptionPopup.style.display = 'none';
});

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = popupForm.querySelector('input[type="email"]');
    if (emailInput.value.trim() !== '') {
        alert(`Gracias por suscribirte a nuestro Newsletter. Revisa tu correo: ${emailInput.value}`);
        subscriptionPopup.style.display = 'none';
    } else {
        alert('Por favor, ingresa tu correo electrónico.');
    }
});
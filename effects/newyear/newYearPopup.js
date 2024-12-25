class NewYearPopup {
    constructor(options) {
        this.options = options;
        this.init();
    }

    // Initialize the popup
    init() {
        const currentDate = new Date();
        const startDate = new Date(this.options.startDate);
        const endDate = new Date(this.options.endDate);

        // Check if the popup should be shown
        if (currentDate >= startDate && currentDate <= endDate) {
            this.createPopup();
        }
    }

    // Create the popup element
    createPopup() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.zIndex = '9998';
        overlay.id = 'popup-overlay';

        // Create popup container
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '20px';
        popup.style.backgroundColor = '#fff';
        popup.style.borderRadius = '10px';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        popup.style.zIndex = '9999';
        popup.style.textAlign = 'center';
        popup.style.animation = 'shake 0.5s infinite';

        // Add popup content
        const img = document.createElement('img');
        img.src = this.options.imageUrl;
        img.alt = 'New Year Celebration';
        img.style.maxWidth = '100%';
        img.style.borderRadius = '10px';

        const message = document.createElement('h2');
        message.innerText = this.options.message;
        message.style.color = '#333';
        message.style.marginTop = '15px';

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.style.marginTop = '15px';
        closeButton.style.padding = '10px 20px';
        closeButton.style.backgroundColor = '#e74c3c';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer';

        closeButton.addEventListener('click', () => this.closePopup());

        popup.appendChild(img);
        popup.appendChild(message);
        popup.appendChild(closeButton);
        overlay.appendChild(popup);

        document.body.appendChild(overlay);

        // Add CSS animation
        //this.addShakeAnimation();
        this.addGlowEffect();
    }

    // Close the popup
    closePopup() {
        const overlay = document.getElementById('popup-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    // Add shake animation
    addShakeAnimation() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            @keyframes shake {
                0% { transform: translate(-50%, -50%) rotate(0); }
                25% { transform: translate(-48%, -50%) rotate(-5deg); }
                50% { transform: translate(-50%, -48%) rotate(5deg); }
                75% { transform: translate(-52%, -50%) rotate(-5deg); }
                100% { transform: translate(-50%, -50%) rotate(0); }
            }
        `;
        document.head.appendChild(style);
    }

    // Add glow effect
    addGlowEffect() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            @keyframes glow {
                0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
                50% { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
                100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
            }
            #popup-container {
                animation: glow 2s infinite;
            }
        `;
        document.head.appendChild(style);
    }
}

// Configuration for the popup
const popupOptions = {
    startDate: '2024-12-20', // Start showing popup
    endDate: '2025-02-09',   // End showing popup
    imageUrl: 'https://quangdang8x.github.io/VietCITWeb_CDN/effects/newyear/hpny_2025.jpg', // URL of the popup image
    message: 'Happy New Year! 🎉 Wishing you joy and success!' // Popup message
};

// Create and show the popup
window.addEventListener('DOMContentLoaded', () => {
    new NewYearPopup(popupOptions);
});

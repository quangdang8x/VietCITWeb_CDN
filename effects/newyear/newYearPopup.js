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
        popup.style.padding = '10px'; // Minimized padding
        popup.style.backgroundColor = 'transparent';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        popup.style.textAlign = 'center';
        popup.style.zIndex = '9999';
        popup.id = 'popup-container';

        // Add close icon
        const closeButton = document.createElement('div');
        closeButton.innerHTML = '&#x2715;'; // Unicode "X" icon
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px'; // Positioned within the top padding
        closeButton.style.right = '10px'; // Positioned within the right padding
        closeButton.style.width = '32px'; // Slightly larger for better usability
        closeButton.style.height = '32px';
        closeButton.style.display = 'flex';
        closeButton.style.alignItems = 'center';
        closeButton.style.justifyContent = 'center';
        closeButton.style.backgroundColor = '#e74c3c';
        closeButton.style.color = '#fff';
        closeButton.style.borderRadius = '50%';
        closeButton.style.cursor = 'pointer';
        closeButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        closeButton.title = 'Close';

        closeButton.addEventListener('click', () => this.closePopup());

        // Add popup content
        const img = document.createElement('img');
        img.src = this.options.imageUrl;
        img.alt = 'New Year Celebration';
        img.style.maxWidth = '100%';
        img.style.borderRadius = '8px';
        img.style.marginTop = '40px'; // Add space for the close button above

        // Append close button and image to popup
        popup.appendChild(closeButton);
        popup.appendChild(img);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        // Add ripple effect
        this.addGlowEffect();
    }

    // Close the popup
    closePopup() {
        const overlay = document.getElementById('popup-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    // Add glow effect
    addGlowEffect() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            #popup-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 8px;
                box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.8);
                animation: glow-and-expand 3s infinite;
                pointer-events: none;
            }

            @keyframes glow-and-expand {
                0% {
                    transform: scale(1);
                    box-shadow: 0 0 20px 15px rgba(255, 255, 255, 1);
                    opacity: 1;
                }
                30% {
                    transform: scale(1);
                    box-shadow: 0 0 30px 20px rgba(255, 255, 255, 0.8);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.5);
                    box-shadow: 0 0 40px 25px rgba(255, 255, 255, 0.5);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(5);
                    box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Configuration for the popup
const popupOptions = {
    startDate: '2024-12-20', // Start showing popup
    endDate: '2025-01-02',   // End showing popup
    imageUrl: 'https://quangdang8x.github.io/VietCITWeb_CDN/effects/newyear/hpny_2025.jpg', // URL of the popup image
};

// Create and show the popup
window.addEventListener('DOMContentLoaded', () => {
    new NewYearPopup(popupOptions);
});

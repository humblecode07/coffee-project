"use strict"

const coffeePic = document.getElementById('coffee-input') as  HTMLInputElement;

coffeePic?.addEventListener('change', (e) => {
    const input = e.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    const reader = new FileReader();

    if (file) {
        reader.addEventListener('load', () => {
            const base64 = reader.result as string;

            let image = new Image();
            image.src = base64;
            document.body.appendChild(image)
        });

        reader.readAsDataURL(file);
    }
});



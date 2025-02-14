const imageUpload = document.getElementById('imageUpload');
    const bookImage = document.getElementById('bookImage');
    const pointsDisplay = document.getElementById('points');
    
    let points = 0;

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                bookImage.src = e.target.result;
                bookImage.style.display = 'block';
                
                // Increase points when an image is uploaded
                points += 100;
                pointsDisplay.textContent = points;
            };

            reader.readAsDataURL(file);
        }
    });
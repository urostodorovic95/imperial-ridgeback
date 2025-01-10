// gallery.js

// Handle image selection and modal preview
document.querySelectorAll('.custom-gallery-img').forEach(img => {
  img.addEventListener('click', function() {
    // Get the image source from the clicked image's data attribute
    const imgSrc = this.getAttribute('data-bs-img');
    
    // Set the modal image source
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imgSrc;
  });
});

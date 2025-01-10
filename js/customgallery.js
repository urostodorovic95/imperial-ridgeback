// gallery.js

// Handle image selection and modal preview
document.querySelectorAll('.custom-gallery-img').forEach(img => {
    img.addEventListener('click', function() {
      // Remove 'selected' class from all items
      document.querySelectorAll('.custom-gallery-item').forEach(item => {
        item.classList.remove('selected');
      });
  
      // Add 'selected' class to clicked item
      this.closest('.custom-gallery-item').classList.add('selected');
  
      // Set the modal image source
      const modalImage = document.getElementById('modalImage');
      modalImage.src = this.getAttribute('data-bs-img');
    });
  });
  
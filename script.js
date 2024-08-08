document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const loadingMessage = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const sentMessage = document.querySelector('.sent-message');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      loadingMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
      submitBtn.disabled = true;

      const formData = {
          name: form.name.value,
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value
      };

      try {
          const response = await fetch('https://formsubmit.co/ajax/sidrayousaf288@gmail.com', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify(formData)
          });

          if (response.ok) {
              sentMessage.style.display = 'block';
              form.reset();
          } else {
              throw new Error('Failed to submit form');
          }
      } catch (error) {
          console.error('Form submission error:', error);
          errorMessage.textContent = 'Something went wrong. Please try again.';
          errorMessage.style.display = 'block';
      } finally {
          loadingMessage.style.display = 'none';
          submitBtn.disabled = false;
      }
  });
});

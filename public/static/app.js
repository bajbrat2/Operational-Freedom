// Operational Freedom — app.js

document.addEventListener('DOMContentLoaded', function () {

  // Contact form handler
  var form = document.getElementById('contact-form')
  var successMsg = document.getElementById('form-success')

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault()
      var btn = form.querySelector('#submit-btn')
      btn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Sending...'
      btn.disabled = true

      var formData = new FormData(form)

      try {
        var res = await fetch('/api/contact', {
          method: 'POST',
          body: formData
        })
        var data = await res.json()

        if (data.success) {
          form.style.display = 'none'
          if (successMsg) successMsg.style.display = 'block'
        } else {
          alert('Something went wrong. Please try again.')
          btn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Send My Message'
          btn.disabled = false
        }
      } catch (err) {
        alert('Network error. Please try again.')
        btn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Send My Message'
        btn.disabled = false
      }
    })
  }

})

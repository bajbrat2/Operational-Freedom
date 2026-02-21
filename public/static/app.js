// Contact form handler
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form')
  const successMsg = document.getElementById('form-success')

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault()
      const btn = form.querySelector('button[type="submit"]')
      btn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Sending...'
      btn.disabled = true

      const formData = new FormData(form)

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: formData
        })
        const data = await res.json()

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

  // Force full page navigation for all internal links
  // (fixes sandbox proxy routing issue)
  document.querySelectorAll('a[href^="/"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      window.location.href = window.location.origin + link.getAttribute('href')
    })
  })
})

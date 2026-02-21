// Internal navigation fix for sandbox proxy environment
// Forces window.location assignment with full origin for all internal links
document.addEventListener('DOMContentLoaded', function () {

  // Fix all internal links to use full URL navigation
  document.querySelectorAll('a').forEach(function(link) {
    var href = link.getAttribute('href')
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      link.addEventListener('click', function(e) {
        e.preventDefault()
        e.stopPropagation()
        var destination = window.location.protocol + '//' + window.location.host + href
        window.location.assign(destination)
      })
    }
  })

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

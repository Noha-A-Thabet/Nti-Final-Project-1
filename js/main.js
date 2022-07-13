// Validation Form BootStrap
(() => {
     'use strict'

     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     const forms = document.querySelectorAll('.needs-validation')

     // Loop over them and prevent submission
     Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
               if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
               }

               form.classList.add('was-validated')
          }, false)
     })
})()

// Pre Load Image
let Loadi = document.getElementById('preLoad');

function Loading() {
     Loadi.style = 'display:none'
}

window.onload = Loading;
setInterval(Loading, 2000)


// Dark Mode 

let my_Body = document.body;
let Dark = document.getElementById('dark');
var element = document.body;

Dark.onclick = function () {
     element.classList.toggle("dark_mode")
}
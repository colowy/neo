// Variables globales
let loginForm = document.getElementById("loginForm")
let message = document.getElementById("message")
let intentos = 3
// Agregamos un eventlistener para nuestro formulario
loginForm.addEventListener("submit", function(event){
  event.preventDefault() // Evitar que se envie el formulario 
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    // Creamos una condicion para el acceso
    if(username==="CV"&& password==="2024"){
        //Inicio de sesion correcta
        message.innerHTML = "Inicio de sesion correcto"
        message.style.color="green"
        // Cerramos la ventana actual
        window.close()
        // Al ser los datos correcto mandamos abrir la pagina de menu
        window.open("cv.html")
    } else{
        // Acceso ha sido incorrecto
        intentos--
        if(intentos > 0){
            message.innerHTML="Inicio de sesión incorrecto, te quedan " + intentos + " intentos..."
            message.style.color="red"
        }else{
            loginForm.style.display="none"
            message.innerHTML="Has agotado tus intentos... El acceso a sido BLOQUEADO"
            message.style.color="red"
        }
    }
})
  
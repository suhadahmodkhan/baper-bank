const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const logingButton = document.getElementById('loging-button')

logingButton.addEventListener('click',function () {
   console.log(emailInput.value) 

   
   if(emailInput.value=='creationit2020@gmail.com' || passwordInput.value=='123456'){
    window.location.href= "blog.html"
   }
   
   else{
    console.log('password doesnot match')
   }
})
        
   






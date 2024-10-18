// const userName = document.querySelector('#username');
// const userEmail = document.querySelector('#email');
// const userPass = document.querySelector('#password');
// const userCPass = document.querySelector('#cpassword');
// const form = document.querySelector('#frm');


// form.addEventListener('submit', (e) => {
//    if( !validationInput()){
//     e.preventDefault();
// }
// });

// function validationInput() {
//     const userNameVal = userName.value.trim();
//     const userMailVal = userEmail.value.trim();
//     const userPassVal = userPass.value.trim();
//     const userCPVal = userCPass.value.trim();
//     // const success = true;

//     if(userNameVal ===''){
//          success = false
//         setError(userName,'Username is Required');
//     }else{
//         setSeccess(userName)
//     }

//     if(userMailVal ==''){
//          success = false
//         setError(userEmail,'Email is Required');
//     }else if(!validateEmail(userMailVal)){
//          success = false
//         setError(userEmail,'Please enter valid Email')
//     }else{
//         setSeccess(userEmail)
//     }

//     if(userPassVal==''){
//          success = false
//         setError(userPass,'password is required');
//     }else if(userPassVal.lenght<8){
//          success = false
//         setError(userPass,'password must be atleast 8 charecters')
//     }  else {
//         setSeccess(userPass)
//     }

//     if(userCPVal===''){
//          success = false
//         setError(userCPass,' password is required')
//     } else if(userCPVal!==userPassVal){
//          success = false
//         setError(userCPass,'Reenter same password')
//     } else{
//         setSeccess(userCPass);
//     }
      
//      return success;
// };


// const setError = (element,message) => {
//     const inputGroup = element.parentElement;
//     const errorEl = inputGroup.querySelector('.error');

//     errorEl.innerText = message;
//     inputGroup.classList.add('error');
//     inputGroup.classList.remove('success');

// }

// const setSeccess = (element) => {
//     const inputGroup = element.parentElement;
//     const errorEl = inputGroup.querySelector('.error');

//     errorEl.innerText = '';
//     inputGroup.classList.add('success');
//     inputGroup.classList.remove('error');
// }

// function validateEmail(email) {
//     return String(email).toLowerCase().match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    
//   }


// const formEl = document.querySelector('#frm');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const cpassword = document.querySelector('#cpassword');


// function checkRequired (inputs) {
//     inputs.forEach( (input) => {
//         if(input.value.trim() ===''){
//             setErr(input,`${getName(input)} is Required`)
//         }else{
//             setSuccess(input)
//         }
//     })
// }

//     hdhdhdijbh

// const getName = (input) => {
//     return input.id
//     // return input.getAttripute("data-name");
// }

//  function setErr(input,message) {
//     const formGroup = input.parentElement;
//     formGroup.className = 'input-group error';
//     const errEl = formGroup.querySelector('.error');
//     errEl.innerHTML = message
//  }
//  function setSuccess(input){
//     const formGroup = input.parentElement;
//     formGroup.className = 'input-group success';
//     const secEl = formGroup.querySelector('.error')
//     errEl.innerHTML = '';
//  }

// //  function checkLength (input,min,max) {
// //     const data = input.value.trim().length;
// //     if(data < min){
// //         setErr(input,`${getName(input)}  atleast greater than ${min} charecter`)
// //     } else if(data > max){
// //         setErr(input,`${getName(input)} atleast greater than ${max} charecter`)
// //     } else{
// //         setSuccess(input)
// //     }
// //  }

// formEl.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkRequired ([username,email,password,cpassword]);
//     // checkLength(username,3,15)
//     // checkEmail(email);
// })



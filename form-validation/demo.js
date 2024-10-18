const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const form = document.querySelector('#frm');


// input box Empty cheking 
function checkRequired (inputs){
    inputs.forEach( (input)=>{
        if(input.value.trim()===''){
            // errEl(input,`${input.id} is Required`);      ipd eluthunalum same output tha;
            errEl(input,`${getName(input)} is Required`);
        }else{
            sucsEl(input);
            
        }
    });
}


const getName = (input) => {
    return input.id
    // return input.getAttripute("data-name"); data attripute html page la set pannanum;
 }

//  error function
function errEl(input,message){
    const formGroup = input.parentElement;
    formGroup.className = 'input-group error';
    const disBox = formGroup.querySelector('.error');
    disBox.innerHTML = message;
}

// success function
function sucsEl(input){
    const formGroup = input.parentElement;
    formGroup.className = 'input-group success';
    const disBox = formGroup.querySelector('.error');
    disBox.innerHTML = "";
}

// username,pasword length charecter cheking
function checkLength(input,min,max){
    const data = input.value.trim().length;
    if(data < min){
        errEl(input,`${getName(input)}  atleast   ${min} chacters`);
    }else if(data > max){
        errEl(input,`${getName(input)}  maximum ${max} chacters`);

    }
}

// conform password chekking
function checkConformPass(input1,input2){
    if(input1.value !== input2.value){
        errEl(input2,`${getName(input2)} not equal to ur password`);
    }
}

// email check
String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

function checkEmail(input){
    if( !input.value.trim().isEmail()){
        errEl(input,`In valid email addres`);
    }
}

// username only allow alphapet
String.prototype.isAlpha = function(){
    return !!this.match(/^[a-zA-Z]*$/)
}

function checkAlpha(input){
    if( !input.value.trim().isAlpha()){
        errEl(input,`${ getName(input)} only allowed Alphapets`);
    }
}

// submit btn click function initial start...
form.addEventListener('submit', function (e)  {
    e.preventDefault();
    checkRequired([userName,email,password,cpassword]);
    checkLength(userName,3,15);
    checkLength(password,3,15);
    checkConformPass(password,cpassword);
    checkEmail(email)
    checkAlpha(userName);
});
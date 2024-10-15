function Name_(name, error) {
    let a = document.getElementById(name);
    let Msg = document.getElementById(error);
    let b = a.value;
    let p = /^[a-zA-Z]\D{0,20}$/;
    let result = p.test(b);
    if (result){
        Msg.textContent = "sucess";
        Msg.style.color='green';
    } else {
        Msg.textContent = "error";
        Msg.style.color='red';

    }
}
function Email_(name, error) {
    let a = document.getElementById(name);
    let Msg = document.getElementById(error);
    let emailValue = a.value.toLowerCase(); 
    let P = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue.length > 0) {
        if (P.test(emailValue)) {
            Msg.textContent = 'Success';
            Msg.style.color = 'green';
        } else {
            Msg.textContent = 'Enter a valid email format!';
            Msg.style.color = 'red';
        }
    } else {
        Msg.textContent = ''; 
    }
}
function Password_(name, error) {
    let c = document.getElementById(name);
    let mgs = document.getElementById(error);
    let a = c.value;

    let hasLower = /[a-z]/;    
    let hasUpper = /[A-Z]/;     
    let hasDigit = /[0-9]/;     
    let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;  


    let result1 = hasLower.test(a);
    let result2 = hasUpper.test(a);
    let result3 = hasSpecial.test(a);
    let result4 = hasDigit.test(a);


    if (result1 && result2 && result3 && result4 && a.length >= 8) {
        mgs.textContent = 'Password is good!';
        mgs.style.color = 'green';
    } else {
        mgs.textContent = 'Error:( A-Z ,a-b,!-*)';
        mgs.style.color = 'red';
    }

    P_check();
}

function P_check() {
    let a = document.getElementById('password1').value;
    let b = document.getElementById('password2').value;
    let errorP = document.getElementById('error6');

    if (a.length > 0 && b.length > 0) {
        if (a !== b) {
            errorP.textContent = 'Passwords do not match!';
            errorP.style.color = 'red';
        } else {
            errorP.textContent = 'Passwords match!';
            errorP.style.color = 'green';
        }
    } else {
        errorP.textContent = ''; 
    }
}

function Phonenumber_(name, error) {
    let a = document.getElementById(name);
    let Msg = document.getElementById(error);
    let p = /^[6789][0-9]\d{8}$/;
    let c = a.value;         
    let result = p.test(c);

    if (result) {
        Msg.textContent = 'Success';
        Msg.style.color = 'green';
    } else {
        Msg.textContent = 'Enter the correct format! (10 digits, starts with 6, 7, 8, or 9)';
        Msg.style.color = 'red';
    }
}

function address1_(emm, message) {
    let a = document.getElementById(emm);
    let msg = document.getElementById(message);
    let b = a.value;
    let p = /^[a-zA-Z\s,.-]\D{0,50}$/; 
    let result = p.test(b);
    if (result) {
      msg.textContent = "Address format is correct";
      msg.style.color = "green";
    } 
    else if (result.length>0){
      msg.textContent="no empty value"
      msg.style.color = "red";
  }
    else {
      msg.textContent = "Give correct format for address";
      msg.style.color = "red";
    }
  }
    date.max = new Date().toISOString().split("T")[0]
    date1.max = new Date().toISOString().split("T")[0]
  


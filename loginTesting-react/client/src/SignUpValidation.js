
function Validation(values) {
    let error = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

   
    if(!emailPattern.test(values.email)) {
        error.email = 'Email is invalid';
    } else {
        error.email = '';
    }

    if(!passwordPattern.test(values.password)) {
        error.password = 'Password is invalid';
    } else {
        error.password = '';
    }
    return error;
}

export default Validation;
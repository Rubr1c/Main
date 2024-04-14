function Validation(values) {
    let error = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailPattern.test(values.email)) {
        error.email = 'Email is invalid';
    } else {
        error.email = '';
    }

    error.password = '';
    
    return error;
}

export default Validation;
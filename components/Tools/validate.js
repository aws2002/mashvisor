export const validateEmail=(email)=>{
    const Email=email.trim()
    const emailRegex=!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(!Email){
        return "Email is required"
    }else if(! new RegExp(emailRegex).test(Email)){
        return "incorrect email format"
    }
    return ""
}

export const validatePassword=(email)=>{
    const Password=email.trim()
    const passwordRegex={
        numCheck:/[0-9]/,
        capsCheck:/[A-Z]/,
        specialCharCheck:/[!@#$%^&*]/,
        lengthCheck:8
    }
    if(!Password){
        return "Password is required"
    }else if(! new RegExp(passwordRegex.numCheck).test(Password)){
        return "Password must have 1 Number"
    }
    return ""
}
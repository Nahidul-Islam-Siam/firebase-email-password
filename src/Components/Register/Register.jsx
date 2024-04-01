import { createUserWithEmailAndPassword} from "firebase/auth";

import auth from "../firebase.config";
import { useState } from "react";


const Register = () => {

const [registerError, setRegisterError] = useState('')
const [success, setSuccess] = useState('')
    const handleRegister =e =>{
e.preventDefault();
const email = e.target.email.value
const password = e.target.password.value
console.log(email, password);


if (password.length < 6) {
    setRegisterError('Password should be at least 6 character longer')
    return
}

// reset error
setRegisterError('')
setSuccess('')


// create user
createUserWithEmailAndPassword(auth,email,password)
.then(result=>{
    console.log(result.user);
    setSuccess('User Created Successfully.')
})
.catch(error=>{
    console.error(error)
    setRegisterError(error.message)
})
    }
    return (
        <div className="mx-auto border items-center justify-center bg-base-300">
        
   <div className="mx-auto md:w-1/2">
   <h2 className="text-3xl mb-2 ">Please Register</h2>  
<form className="" onSubmit={handleRegister}>
    <input className="mb-4 w-3/4 px-4 py-2" type="email" name="email" id="email"  placeholder="Email Address"/>
    <br />
    <input className="mb-4 w-3/4 px-4 py-2" type="password" name="password" id="password" placeholder="Password"/>
    <br />
    <input className="mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
</form>
{
    registerError && <p className="text-red-700">{registerError}</p>
}
{ success && <p className="text-green-400">{success}</p>


}
        
   </div>
        </div>
    );
};

export default Register;
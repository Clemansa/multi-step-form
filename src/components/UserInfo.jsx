import { useState } from "react";


const specialCharacters = ["!", "#", "$", "%", "^", "&", "*", "(", ")"];

const UserInfo = (props) => {
  const [error, setError] = useState("");
      const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    // setErrors({});

        // tema de implementat validarile
        const nameIsValid = validateName(data.get('name'));
        const emailIsValid=validateEmail(data.get('email'));
        const phoneNumberIsValid = validatePhoneNumber(data.get('phone'));

        if (nameIsValid === false || emailIsValid===false ||phoneNumberIsValid===false) {
          return;
        }
    

    // daca validarile au fost cu success, trecem pe pasul urmator
    // if (daca nu sunt erori) {
    props.setCurrentStep(2);
          // }
          
  };
  
  const validateName = (name) => {
    if (name.length === 0) {
      setError((prev) => ({
        ...prev, name: "This field is required!"
      }));
      return false;
    }
    return true;
    
  }

  const validateEmail = (email) => {
    // email length
    if (email.length === 0) {
      setError((prev) => ({
        ...prev, email: 'This field is required!'
      }));
      return false;
    }
    if (email.length < 6) {
      setError((prev) => ({
        ...prev, email: 'This email is too short!'
      }));
      return false;
    }

    // number of aronds

    let numberOfAronds = 0;
    for (let i = 0; i < email.length; i++){
      if (email[i] === "@") {
        numberOfAronds++;
      }
    }

    if (numberOfAronds === 0) {
      setError((prev) => ({
        ...prev, email: 'Invalid email!'
      }));
      return false;
    }

    //numberOfDots 
    let numberOfDots = 0;
     for (let i = email.indexOf("@") + 1; i < email.length; i++){
        if (email[i] === ".") {
            numberOfDots++;
        }
    }

    if (numberOfDots !== 1) {
       setError((prev) => ({
        ...prev, email: 'Invalid email!'
      }));
      return false;
    }

    // special characters
       for (let i = 0; i < email.length; i++){
        if (specialCharacters.includes(email[i])) {
                 setError((prev) => ({
        ...prev, email: 'Invalid email!'
      }));
            return false;  
        }
    }

    // index of aronds
    const indexOfArond = email.indexOf("@");

     if (email[indexOfArond - 1] === "_" || email[indexOfArond - 1] === "_") {
             setError((prev) => ({
        ...prev, email: 'Invalid email!'
      }));
            return false;  
    }
    if (email[indexOfArond + 1] === "-" || email[indexOfArond +1] === "-") {
            setError((prev) => ({
        ...prev, email: 'Invalid email!'
      }));
            return false;  
    }
    return true;

  }

  const validatePhoneNumber = (phone) => {
    if (phone.length === 0) {
               setError((prev) => ({
        ...prev, phone: 'This field is required!'
               }));
      return false;
    }

    if (phone.length > 10) {
       setError((prev) => ({
        ...prev, phone: 'This phone number is too long!'
               }));
      return false;
    }
  }
    
    
    return (
          <form  onSubmit={handleSubmit} id="personal-info-form" className="bg-white m-4 rounded-lg p-6 absolute mt-24 md:relative md:min-w-113 md:mt-0">
          <h1 className="title-md mt-2 mb-6 text-blue-950" >Personal info</h1>
          <p className="font-medium text-base text-gray-500 mb-6">Please provide your name,email address and phone number.</p>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center justify-between ">
             <label htmlFor="name">Name</label>
                   {error.name !== undefined ? (
            <p className="standard-error">{ error.name}</p>
          ):null}
          </div>
         
          <input type="text" name="name" id="name" className="input" placeholder="e.g Stephen King" />
 
          </div>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center justify-between ">
            <label htmlFor="email">Email Address</label>
                   {error.email !== undefined ? (
            <p className="standard-error">{ error.email}</p>
          ):null}
          </div>
            
            <input type="text" name="email" id="email" className="input" placeholder="e.g stephenking@lorem.com" />
          </div>

        <div className="flex flex-col gap-2 mb-4">
          
          <div className="flex items-center justify-between ">
            <label htmlFor="phone">Phone Number</label>
                   {error.phone !== undefined ? (
            <p className="standard-error">{ error.phone}</p>
          ):null}
          </div>
           
            <input type="number" name="phone" id=" phone" className="input" placeholder="e.g +1 1222 123 123" />
          </div>
         </form>
    )
};

export default UserInfo;
import { useState } from "react";
import Stepper from "./components/stepper";
import UserInfo from "./components/UserInfo";


const App = () => {
  
  const [currentStep, setCurrentStep] = useState(1);
  
  
 

  return (
    <main>
      <section className="h-screen  flex flex-col justify-between md:flex-row md:items-baseline md:gap-6 md:p-4 md:h-151  lg:ml-auto lg:mr-auto lg:bg-auto">
        {/*--- STEPPER--- */}
        <Stepper currentStep={currentStep } />

        {/* ---FORM CONTAINER--- */}
        {currentStep === 1 ? (
          <>
            <UserInfo setCurrentStep={setCurrentStep} />
             {/*---FOOTER--- */}
        <div className="bg-white  w-100% p-4 flex items-center justify-end md:absolute md:ml-146 md:mt-116 lg:ml-210 ">
            <button className="w-24 p-2 text-gray-500 font-bold cursor-pointer hidden">Go Back</button>
            <button form="personal-info-form" className="w-24 p-2 bg-blue-950 text-white font-bold  rounded-sm cursor-pointer">Next Step</button>
        </div>
          </>
         
        ) : null}
        

        
       
        
      </section>
  </main>
  )
}

export default App

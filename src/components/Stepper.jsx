const Stepper = (props) => {
    return (
        <div className='h-43 bg-[url(./src/assets/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat md:h-screen md:bg-[url(./src/assets/images/bg-sidebar-desktop.svg)] md:rounded-xl md:bg-cover md:relative md:w-[40%] md:p-8' >
            <div className="flex gap-4 justify-center pt-8 md:flex-col">

                <div className="md:flex md:gap-4 md:items-center md:justify-start" >
                    <p className={`body-md-bold h-8 w-8 flex items-center justify-center  rounded-full ${props.currentStep === 1 ? "text-blue-950 bg-blue-200" : "text-white border border-white"}`}>1</p>
                    <div className="hidden md:block">
                        <p className="body-sm-regular text-white opacity-70">STEP 1</p>
                        <h4 className="body-md-bold text-white">YOUR INFO</h4>
                    </div>
                </div>

                <div className="md:flex md:gap-4 md:items-center md:justify-start">
                    <p className={`body-md-bold h-8 w-8 flex items-center justify-center  rounded-full ${props.currentStep === 2 ? "text-blue-950 bg-blue-200" : "text-white border border-white"}`}>2</p>
                    <div className="hidden md:block">
                        <p className="body-sm-regular text-white opacity-70" >STEP 2</p>
                        <h4 className="body-md-bold text-white">SELECT PLAN</h4>
                    </div>
                </div>

                <div className="md:flex md:gap-4 md:items-center md:justify-start">
                    <p className={`body-md-bold h-8 w-8 flex items-center justify-center  rounded-full ${props.currentStep === 3 ? "text-blue-950 bg-blue-200" : "text-white border border-white"}`}>3</p>
                    <div className="hidden md:block">
                        <p className="body-sm-regular text-white opacity-70">STEP 3</p>
                        <h4 className="body-md-bold text-white">ADD-ONS</h4>
                    </div>
                </div>

                <div className="md:flex md:gap-4 md:items-center md:justify-start">
                    <p className={`body-md-bold h-8 w-8 flex items-center justify-center  rounded-full ${props.currentStep === 4 ? "text-blue-950 bg-blue-200" : "text-white border border-white"}`}>4</p>
                    <div className="hidden md:block">
                        <p className="body-sm-regular text-white opacity-70">STEP 4</p>
                        <h4 className="body-md-bold text-white">SUMMARY</h4>
                    </div>
                </div>
          
            
            </div>

         
        </div>
    )
}

    
    export default Stepper;
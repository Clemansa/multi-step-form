const App=()=> {

  return (
    <main>
      <section className="h-screen flex flex-col justify-between ">
        {/*--- STEPPER--- */}
        <div className='h-43 bg-cover bg-no-repeat' style={{ backgroundImage: 'url(./src/assets/images/bg-sidebar-mobile.svg)' }}>
          <div className="flex gap-4 justify-center pt-8">

          <div  >
            <p className="body-md-bold h-8 w-8 flex items-center justify-center bg-blue-200 rounded-full text-blue-950">1</p>
            <div className="hidden md:block">
              <p >STEP 1</p>
              <h4>YOUR INFO</h4>
            </div>
          </div>

          <div>
            <p className="body-md-bold h-8 w-8 flex items-center justify-center  rounded-full text-white border -white">2</p>
            <div className="hidden md:block">
              <p >STEP 2</p>
              <h4>YOUR INFO</h4>
            </div>
          </div>

          <div>
            <p className="body-md-bold h-8 w-8 flex items-center justify-center  rounded-full text-white border -white">3</p>
            <div className="hidden md:block">
              <p>STEP 3</p>
              <h4>YOUR INFO</h4>
            </div>
          </div>

            <div>
            <p className="body-md-bold h-8 w-8 flex items-center justify-center  rounded-full text-white border -white">4</p>
            <div className="hidden md:block">
              <p>STEP 4</p>
              <h4>YOUR INFO</h4>
            </div>
          </div>
          
            
          </div>

         
        </div>

        {/* ---FORM CONTAINER--- */}
        <form id="personal-info-form" className="bg-white m-4 rounded-lg p-6 ">
          <h1 className="title-md mt-2 mb-6 text-blue-950" >Personal info</h1>
          <p className="font-medium text-base text-gray-500 mb-6">Please provide your name,email address and phone number.</p>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="input" placeholder="e.g Stephen King" />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" className="input" placeholder="e.g stephenking@lorem.com" />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" name="phone" id=" phone" className="input" placeholder="e.g +1 1222 123 123" />
          </div>
         </form>

         {/*---FOOTER--- */}
        <div className="bg-white  w-100% p-4 flex items-center justify-between ">
            <button className="w-24 p-2 text-gray-500 font-bold cursor-pointer">Go Back</button>
            <button className="w-24 p-2 bg-blue-950 text-white font-bold  rounded-sm cursor-pointer">Next Step</button>
        </div>
       
        
      </section>
  </main>
  )
}

export default App

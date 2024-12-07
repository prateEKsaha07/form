import {react, useState} from 'react'


const TheForm = () => {
  const [firstName,setFirstName] = useState("")

  return (
    <>
    <div className="bg-white-300 border-2 shadow-sm px-3 py-4 w-[500px]
    text-center m-auto mt-[20px]">
      <h1 className='text-4xl text-center bg-[customColor] rounded-sm '>Application Form</h1>
      <fieldset className='border-0'>
      <p className="text-gray-800 font-medium">
    ⚠️ <strong>Please Note: <br /></strong> 
    Kindly fill out all the required fields accurately to ensure proper communication and assistance. 
    For the "Preferred Language" section, select your desired language to help us better address your needs.
  </p>
        <form action="#" method='get'> 


           <label className="text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400  "htmlFor="first name ">
            <span>First name</span>
           </label>
           <input className='block w-full p-[8px] border-box border border-gray-300 p-4 text-base ' type="text" id='FirstName' placeholder='Enter your first Name Here' value={firstName} onChange={(e) =>setFirstName(e.target.value)} required />


           <label className=' text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400  ' htmlFor="lastName">
            last Name
           </label>
           <input className =" block w-full p-[8px] border-box border border-gray-300 p-4 text-base  " type="text" id='LastName' placeholder='Enter Your Last Name' required />


           <label className=' text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400  ' htmlFor="Enter Your Last Name">
            email
           </label>
           <input className='block w-full p-[8px] border-box border border-gray-300 p-4 text-base '  type="email" id="Email" placeholder='Enter Your Email Id' required />


           <label className=' text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400  '  htmlFor="mobile" >
            Contact number
            </label>
           <input className='block w-full p-[8px] border-box border border-gray-300 p-4 text-base ' type="tel" name="contact" id="contact" 
           placeholder='Enter your Phone Number' />
           


           <label className='inline-flex item-center  text-sm block w-full m-4 text-sm text-gray-400 pl-12 ' htmlFor="gender">
          
           <input className="w-[10%] h-10 inline-block" type="radio" name="gender" id="male"  />
           <span className='text-center mt-2'>male</span>
           <input className="w-[10%] h-10 inline-block"  type="radio" name="gender" id="female"  />
           <span className='text-center mt-2'>female</span>
           <input className="w-[10%] h-10 inline-block"  type="radio" name="gender" id="other" />
           <span className='text-center mt-2'>other</span>
           <input className="w-[10%] h-10 inline-block"  type="radio" name="gender" id="other" />
           <span className='text-center mt-2'>prefers not to say</span>
           
           </label>


           <label className='inline-flex item-center  text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400 ' htmlFor="language"> 
            <span className=''>preferred languages</span>
            <input className='inline-block w-[10%] h-10' type="checkbox" name="language" id="english" />
            <span className='text-center m-2 ' >english</span>
           <input className='w-[10%] h-10 inline-block' type="checkbox" name="language" id="hindi" />
           <span className='text-center m-2 ' >hindi</span>
           <input className='w-[10%] h-10 inline-block' type="checkbox" name="language" id="marathi" />
           <span className='text-center m-2 ' >marathi</span>
           <input className='w-[10%] h-10 inline-block' type="checkbox" name="language" id="bengali" />
           <span className='text-center m-2 ' >telegu</span>
           <input className='w-[10%] h-10 inline-block' type="checkbox" name="language" id="tamil" />
           <span className='text-center m-2 ' >tamil</span>
           </label>

           <label className=' text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400  ' htmlFor="resume">
            upload your resume
            <input className='block w-full p-[8px] border-box border border-gray-300 p-4 text-base ' type="file" name="file" id="file" placeholder='upload your file here' /> your file
           </label>


           <label className='text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400' htmlFor="url">
            enter your url
            <input className='block w-full p-[8px] border-box border border-gray-300 p-4 text-base ' type="url" name="url" id="url" placeholder='enter your url'/>
           </label>


           <label className='text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400' htmlFor="options">
            <span>Your Specifications</span>
            <select className='block w-full mb-[15px] p-[10px] box-border  rounded-[15px] border border-gray-300' name="select" id="select">
              <option value="1">react js</option>
              <option value="2">express js</option>
              <option value="3">mongodb</option>
              <option value="4">node js</option>
              <option value="5">full stack</option>
            </select>
           </label>


          <label  className="text-sm block w-full mt-[8px] mb-[5px] text-left text-gray-400 " htmlFor="about">
            <textarea className='resize-none w-11/12 min-h-full max-h-full p-5 ml-5' name="about" id="about" rows="18" cols="60" required >
            </textarea>

            <button className ="p-[15px] rounded-[10px] m-sm border-0 text-white-400 cursor-pointer bg-green-500 w-5/12 text-xl m-5 " type="reset">reset</button>

            <button className= "p-[15px] rounded-[10px] m-sm border-0 text-white-400 cursor-pointer bg-green-500 w-5/12 text-xl m-5" type="submit">submit</button>
          </label>
        </form>
      </fieldset>
    </div>
    </>
  )
}

export default TheForm
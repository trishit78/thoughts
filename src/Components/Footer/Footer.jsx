import React from 'react';
import { Input, Select, MenuItem, TextField, Checkbox, Button, FormControl, InputLabel } from '@mui/material';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Footer = () => {
  return (
    <div className='pt-6 pb-10 bg-[#16131a]'>
      <h1 className='text-7xl md:text-9xl text-center text-[#fbddc1] font-bold'>LET'S GET STARTED</h1>
      <div className=' md:mt-12 bg-[#1b181f] ml-[6%] mr-[6%]  md:flex'>
        <div className='md:w-[42%]'>
          <div className=' mt-4 pt-4 md:pt-16 pl-12'>
            <h1 className='text-6xl text-[#fbddc1] font-bold'>FEEL FREE TO</h1>
            <h1 className='text-6xl text-[#fbddc1] font-bold'>CONTACT US</h1>
          </div>
          <div className='pt-6 pl-12'>
            <p className='text-lg text-[#b5b4b8]'>Reach out to us with any questions, feedback, or</p>
            <p className='text-lg text-[#b5b4b8]'>inquiries you may have. Our team is here to assist</p>
            <p className='text-lg text-[#b5b4b8]'>you every step of the way.</p>
          </div>
        </div>
        <div className='md:w-[55%]'>
          <form className="grid grid-cols-2 gap-6 pt-12 pr-12 pl-12 pb-8">
            <Input 
              placeholder="First Name" 
              fullWidth 
              sx={{ 
                '& .MuiInputBase-input::placeholder': { 
                  color: '#fff' 
                },
                '& .MuiInputBase-input': { 
                  color: '#fff'
                },
                backgroundColor:'#000',
                borderRadius: '4px', 
                padding: '10px',
                
              }}
            />
            <Input 
              placeholder="Last Name" 
              fullWidth 
              sx={{ 
                '& .MuiInputBase-input::placeholder': { 
                  color: '#fff' 
                },
                '& .MuiInputBase-input': { 
                  color: '#fff' // To change input text color to white as well
                },
                backgroundColor:'#000',
                borderRadius: '4px', 
                padding: '10px',
              }}
            />
            <FormControl fullWidth className="flex">
                

                <div>
              {/* <InputLabel id="country-code-label" sx={{color:'#fff'}}>Country Code</InputLabel> */}
              {/* <Select labelId="country-code-label" defaultValue="+91" sx={{ color: '#fff' }}>
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
                <MenuItem value="+91">+91</MenuItem>
              </Select> */}
              </div>


              <div>
              <Input 
                placeholder="Phone Number" 
                fullWidth 
                sx={{ 
                  '& .MuiInputBase-input::placeholder': { 
                    color: '#fff' 
                  },
                  '& .MuiInputBase-input': { 
                    color: '#fff' // To change input text color to white as well
                  },
                  backgroundColor:'#000',
                borderRadius: '4px', 
                padding: '10px',
                }}
              />
              </div>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="city-label" sx={{color:'#b5b4b8'}} >City</InputLabel>
              <Select labelId="city-label" defaultValue="" sx={{  backgroundColor: '#000', borderRadius: '4px' }}>
                <MenuItem value="new-york">New York</MenuItem>
                <MenuItem value="london">London</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              className="col-span-2" 
              placeholder="Write your queries" 
              multiline 
              rows={2} 
              fullWidth 
              sx={{ 
                '& .MuiInputBase-input::placeholder': { 
                  color: '#fff' 
                },
                '& .MuiInputBase-input': { 
                  color: '#fff' // To change input text color to white as well
                },
                backgroundColor:'#000',
                borderRadius: '4px', 
                padding: '10px',
              }}
            />
              </form>
           <div className=' flex items-center justify-between w-full pl-10 pr-10 pb-8'>
            <div className='flex items-center space-x-1'>
                <div className='mt-1'>

            <IoIosCheckmarkCircleOutline
            color='#b5b4b8'
            size={20}
            />
                </div>
              <p className='text-sm text-[#b5b4b8]'
              >By checking this box, you are agreeing to our <u>
                Terms of service
                </u> .</p>
            </div>
            <div>
                <button className='font-semibold bg-white pt-3 pb-3 pl-4 pr-4 rounded-full'>SUBMIT</button>

            </div>
           </div>
          
        </div>
      </div>


              {/* <div className='flex pl-[6%] pt-10 pr-[6%] justify-between'>

              
              <h1 className='text-xl font-bold text-white'>
                Thoughts
              </h1>
              
              <div className='flex items-center justify-between space-x-20'>

                <div >
                    <h2 className=' text-white'>
                        Quick links
                    </h2>
                    <div className='flex-col space-y-1 mt-2'>
                        <p className='text-sm text-[#b5b4b8]'>Thoughts</p>
                        <p className='text-sm text-[#b5b4b8]'>Blogs</p>
                        <p className='text-sm text-[#b5b4b8]'>Podcasts</p>
                        <p className='text-sm text-[#b5b4b8]'>FAQs</p>
                        
                    </div>
                </div>
                <div >
                    <h2 className=' text-white'>
                        Pricing
                    </h2>
                    <div className='flex-col space-y-1 mt-2'>
                        <p className='text-sm text-[#b5b4b8]'>Changeing</p>
                        <p className='text-sm text-[#b5b4b8]'>Docs</p>
                        
                    </div>
                </div>
                <div >
                    <h2 className=' text-white'>
                        Company
                    </h2>
                    <div className='flex-col space-y-1 mt-2'>
                        <p className='text-sm text-[#b5b4b8]'>About Us</p>
                        <p className='text-sm text-[#b5b4b8]'>Contact Us</p>
                    
                        
                    </div>
                </div>
                <div >
                    <h2 className=' text-white'>
                        Customer Support
                    </h2>
                    <div className='flex-col space-y-1 mt-2'>
                        <p className='text-sm text-[#b5b4b8]'>hello @contact.com</p>
                        <p className='text-sm text-[#b5b4b8]'>+26467477</p>
                        
                    </div>
                </div>
                <div >
                    <h2 className=' text-white'>
                        Elsewhere
                    </h2>
                    <div className='flex-col space-y-1 mt-2'>
                        <p className='text-sm text-[#b5b4b8]'>Youtube</p>
                        <p className='text-sm text-[#b5b4b8]'>LinkedIn</p>
                        <p className='text-sm text-[#b5b4b8]'>Twitter</p>
                        <p className='text-sm text-[#b5b4b8]'>Facebook</p>
                        
                    </div>
                </div>
                

              </div>
              </div>  */}


              <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex justify-between mr-[4%]">
          <div className="w-full ml-[6%] p-6 md:w-1/2 lg:w-5/12">
          <h1 className='text-xl font-bold text-white'>
                Thoughts
              </h1>
          </div>


          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-white">
              Quick links
              </h3>
              <ul>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Thoughts
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Blogs
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Podcasts
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    FAQs
                  </a>
                </li>
               


              </ul>
            </div>
          </div>


          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-white">
              Pricing
              </h3>
              <ul>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Changing
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Docs
                  </a>
                </li>
                
               


              </ul>
            </div>
          </div>
          <div className="hidden md:block w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-white">
              Company
              </h3>
              <ul>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    About Us
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Contact Us
                  </a>
                </li>
                
               


              </ul>
            </div>
          </div>
          <div className="hidden md:block w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-white">
              Company Support
              </h3>
              <ul>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    hello@contact.com
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    +245463686
                  </a>
                </li>
               
               


              </ul>
            </div>
          </div>
          <div className=" hidden md:block w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-white">
              Elsewhere
              </h3>
              <ul>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Youtube
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    LinkedIn
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Twitter
                  </a>
                </li>
                <li >
                  <a className=" text-sm  text-[#b5b4b8] " href="#">
                    Facebook
                  </a>
                </li>
               


              </ul>
            </div>
          </div>

         


        </div>
      </div>
    </section>

    </div>
  );
}

export default Footer;

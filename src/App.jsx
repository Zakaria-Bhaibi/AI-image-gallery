import im1 from './assets/1.png'
import im2 from './assets/2.png'
import im4 from './assets/4.png'
import im5 from './assets/5.png'
import im6 from './assets/6.png'
import im7 from './assets/7.png'
import bookmark from './assets/bookmark.png'
import './App.css'

function App() {
  

  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-cyan-100">
        {/* Card Container */}
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
          {/* Menu Container */}
          <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
            {/* Menu items */}
            <div className="group">
              <a href="#">Vector</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Illustrations</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Images</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <a href="#">Icons</a>
              <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
            </div>
          </div>
          {/* Search container */}
          <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            <div className="flex justify-between border-b">
              <input placeholder='Search' type="text" className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" />
              <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
              </button>
            </div>
            {/* Upload Button */}
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-1000 hover:bg-white hover:text-black">
            Upload
          </button>
          </div>
          {/* Gallery Container */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative group">
              <img src={im1} alt="" className='w-72'/>
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Dog Retro Theme</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src={bookmark} alt="" className='h-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={im2} alt="" className='w-72'/>
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">The OverThinker</p>
                    <p className="text-xs">300 Likes - 30 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src={bookmark} alt="" className='h-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={im7} alt="" className='w-72'/>
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">RPG character M1</p>
                    <p className="text-xs">100 Likes - 10 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src={bookmark} alt="" className='h-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={im4} alt="" className='w-72'/>
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">Cat Retro Theme</p>
                    <p className="text-xs">350 Likes - 40 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src={bookmark} alt="" className='h-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={im5} alt="" className='w-72'/>
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">RPG character M2</p>
                    <p className="text-xs">100 Likes - 10 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src={bookmark} alt="" className='h-6' />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={im6} alt="" className='w-72'/>
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className="flex justify-between w-full">
                  <div className="font-normal">
                    <p className="text-sm">The Mindblowing</p>
                    <p className="text-xs">245 Likes - 35 Shares</p>
                  </div>
                  <div className="flex items-center">
                    <img src={bookmark} alt="" className='h-6' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

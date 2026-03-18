import React, { useState } from 'react'
import user from '../assets/user.webp'

function Profile() {
  const [edit, setEdit] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  return (
    <>
      <div className='bg-gray-300 pt-[3vh]  min-h-dvh w-full'>
        <div className='md:h-[60vh] min-h-screen border-2 border-blue-500 shadow-2xl shadow-black bg-white mx-[5vw] rounded-xl flex flex-col md:flex-col md:justify-center justify-start gap-5 items-center '>
          <div>
            <img src={preview || user} className='h-[14vh] w-[14vh] rounded-full ml-8 ' alt="profile-img" />
            <h1 className='font-bold text-gray-400'>Mern Stack Developer</h1>
          </div>
          <div className='flex flex-col gap-5'>
            {edit ? (
              <>
                <h1 className='text-2xl font-bold text-center text-gray-800'>Edit Profile</h1>
                <h1 className=' font-semibold text-base text-gray-500 text-center'>Make Changes to your profile here</h1>
                <div className='flex md:flex-row flex-col fle gap-5 md:gap-10'>
                  <div className='flex flex-col gap-1 items-center'>
                    <h1 className='text-center text-sm font-bold text-stone-500'>Picture</h1>
                    <input
                      type="file"
                      name='file'
                      accept='image/*'
                      id='fileUpload'
                      className="border hidden md:w-[30vw] text-sm  w-[80vw] p-2 rounded-xl outline-none"
                      onChange={(e) => {
                        const selectedFile = e.target.files[0];
                        if (selectedFile) {
                          setFile(selectedFile);
                          setFileName(selectedFile.name);
                          setPreview(URL.createObjectURL(selectedFile));
                        }
                      }}
                    /><label
                      htmlFor="fileUpload"
                      className="border md:w-[30vw] text-sm text-stone-500 w-[80vw] p-2 rounded-xl text-center cursor-pointer bg-gray-100 hover:bg-gray-200"
                    >
                      Choose Profile Picture
                    </label>
                    <p className="text-sm text-gray-500 text-center">{fileName}</p>
                  </div>
                   <div className='flex flex-col gap-1 items-center'>


                    <h1 className='text-center text-sm font-bold text-stone-500'>First Name</h1>
                    <input
                      type="text"
                      placeholder="First Name"
                      name='firstname'
                      className="border p-2 text-sm rounded-xl md:w-[30vw]  w-[80vw] outline-none"
                    />
                  </div>
                 


                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-10'>
                 
                  <div className='flex flex-col gap-1  items-center'>
                    <h1 className='text-center text-sm font-bold text-stone-500 '>Last Name</h1>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name='lastname'
                      className="border md:w-[30vw] p-2 text-sm rounded-xl w-[80vw] outline-none"
                    />
                  </div>
                   <div className='flex flex-col gap-1 items-center juw'>
                    <h1 className='text-center text-sm font-bold text-stone-500'>Description</h1>
                    <input
                      name='bio'
                      type="text"
                      placeholder="Description"
                      className="border md:w-[30vw] text-sm  w-[80vw] p-2 rounded-xl outline-none"
                    />
                  </div>
                </div>
                <div className='flex md:flex-row flex-col fle gap-5 md:gap-10'>
                  <div className='flex flex-col gap-1 items-center'>
                    <h1 className='text-center text-stone-500  text-sm font-bold '>Facebook</h1>
                    <input
                      type="text"
                      placeholder="Facebook"
                      name='facebook'
                      className="border md:w-[30vw] text-sm  w-[80vw] p-2 rounded-xl outline-none"
                    />
                  </div>
                  <div className='flex flex-col gap-1 items-center'>
                    <h1 className='text-center text-sm font-bold text-stone-500'>Instagram</h1>
                    <input
                      type="text"
                      name='instagram'
                      placeholder="Instagram"
                      className="border md:w-[30vw] text-sm  w-[80vw] p-2 rounded-xl outline-none"
                    />
                  </div>
                </div>
                <div className='flex md:flex-row flex-col fle gap-5 md:gap-10'>
                  <div className='flex flex-col gap-1 items-center'>
                    <h1 className='text-center text-sm font-bold text-stone-500'>Linkedin</h1>
                    <input
                      type="text"
                      placeholder="Linkedin"
                      name='linkedin'
                      className="border md:w-[30vw] text-sm  w-[80vw] p-2 rounded-xl outline-none"
                    />
                  </div>
                  <div className='flex flex-col gap-1 items-center'>
                    <h1 className='text-center text-sm font-bold text-stone-500'>Github</h1>
                    <input
                      type="text"
                      placeholder="Github"
                      name='github'
                      className="border md:w-[30vw] text-sm w-[80vw] p-2 rounded-xl outline-none"
                    />
                  </div>

                </div>

              </>
            ) : (
              <>
                <h1 className='text-2xl font-bold text-center mb-4'>Welcome User</h1>
                <h1 className='font-bold'>
                  Email: <span className='text-gray-500 text-sm'>ayushbahuguna006@gmail.com</span>
                </h1>

                <h1 className='font-bold mt-2'>About me</h1>

                <p className='md:min-w-[50vw] w-[70vw] mb-1 text-gray-500 border border-gray-300 p-6 rounded-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </>
            )}

            <div className='flex justify-center items-center mb-2'><button className='border p-2 md:w-[15vw] w-[30vw]  rounded-xl text-white bg-black cursor-pointer hover:bg-gray-700 border-black ]' onClick={() => setEdit(!edit)}> {edit ? "Save" : "Edit Profile"}</button></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Profile
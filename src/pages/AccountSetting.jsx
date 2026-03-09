import { Camera } from 'lucide-react'

export const AccountSetting = () => {
  return (
    <div className="h-full w-75 mx-auto bg-[#F7F8F9]">
        <div className="bg-white">

            {/* Account Setting Heading */}
            <div className="px-3.5 py-3.5">
                <h1>Account Settings</h1>
            </div>

            <div>

                {/* user Image, name and gmail */}
                <div className="flex px-3.5 py-4">

                    {/* User image */}
                    <div className='relative'>
                        <img 
                            src="https://img.freepik.com/free-photo/beautiful-woman-dreaming-cyber-monday-sales_23-2148313194.jpg?semt=ais_rp_50_assets&w=740&q=80" 
                            alt="Marry Doe"
                            className="h-15 rounded-full" 
                        />
                        <Camera 
                            className='w-6 h-6 bg-[#6C25FF] text-white p-1.5 rounded-full absolute bottom-0 -right-1' 
                        />
                    </div>

                    {/* User Name and gmail */}
                    <div className='px-5.5'>
                        <p className="font-medium text-sm">
                            Marry Doe
                        </p>
                        <p className="text-sm">
                            Marry@gmail.com
                        </p>
                    </div>

                </div>

                    {/* User Information */}
                    <div className='text-sm px-3.5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis totam modi possimus ad at aliquam suscipit?</p>
                    </div>

            </div>

        </div>
    </div>
  )
}

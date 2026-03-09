import { Button } from "../components/Button"

export const LoginPage = () => {
  return (
    <div className="h-full w-75 mx-auto bg-white">
      
      <div className="px-3.5 py-7 space-y-1">

        {/* Sign-in page text content */}
        <div className="space-y-1">
            <h2 className="font-bold text-[22px] leading-7.5">
                Signin to your<br/>
                PopX account
            </h2>
            <p className="text-sm font-medium text-gray-400">
                Lorem ipsum dolor sit amet,
                <br /> 
                consectetur adipisicing elit.
            </p>
        </div>

        {/* Login */}
        <form className="">
          <div>
            <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
              Email address<span className="text-red-500">*</span>
            </span>
            <input 
              type="email"
              placeholder="Marry Doe" 
              required
              className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
            />
          </div>
          <div>
            <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
              Password<span className="text-red-500">*</span>
            </span>
            <input 
              type="password"
              placeholder="Marry Doe" 
              required
              className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
            />
          </div>
          <div className="mt-3">
              <Button className="bg-[#6C25FF] text-white text-sm font-bold py-2 rounded-md w-full">
                  Login
              </Button>
          </div>
        </form>

      </div>

    </div>
  )
}

import { useState } from "react";
import { Button } from "../components/Button"

export const LoginPage = () => {
  const [loginId, setLoginId] = useState({
    email: "",
    password: ""
  });

  const handleSumbit = (e) => {
    e.preventDefault();

  }

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
        <form onSubmit={handleSumbit}>
          <div>
            <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
              Email address<span className="text-red-500">*</span>
            </span>
            <input 
              type="email"
              placeholder="Enter email Address" 
              required
              value={loginId.email}
              onChange={(e) => setLoginId({ ...loginId, email: e.target.value })}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
            />
          </div>
          <div>
            <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
              Password<span className="text-red-500">*</span>
            </span>
            <input 
              type="password"
              placeholder="Enter password" 
              required
              value={loginId.password}
              onChange={(e) => setLoginId({ ...loginId, password: e.target.value })}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
            />
          </div>
          <div className="mt-3">
            <Button className={`${(loginId.email.length && loginId.password.length) ? "bg-[#6C25FF]" : "bg-[#CBCBCB]"} text-white text-sm font-bold py-2 rounded-md w-full`}>
                Login
            </Button>
          </div>
        </form>

      </div>

    </div>
  )
}

import { useState } from "react"
import { Button } from "../components/Button"

export const CreateAccPage = () => {
  const [newUserAccount, setNewUserAccount] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: ""
  });

  const handleSumbit = (e) => {
    e.preventDefault();

    setNewUserAccount({
      name: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      isAgency: ""
    })
  }

  return (
    <div className="h-full w-75 mx-auto bg-white">
      
      <div className="px-3.5 py-7">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold">
            Create your
            <br /> 
            PopX account
          </h2>
        </div>

        {/* User Information */}
        <div className="mt-2 h-full">
          <form onSubmit={handleSumbit}>
            <div>
              <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
                Full Name<span className="text-red-500">*</span>
              </span>
              <input 
                type="text"
                placeholder="Marry Doe" 
                required
                value={newUserAccount.name}
                onChange={(e) => setNewUserAccount({ ...newUserAccount, name: e.target.value })}
                className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
              />
            </div>
            <div>
              <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
                Phone Number<span className="text-red-500">*</span>
              </span>
              <input 
                type="text"
                placeholder="Marry Doe" 
                required
                value={newUserAccount.phone}
                onChange={(e) => setNewUserAccount({ ...newUserAccount, phone: e.target.value })}
                className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
              />
            </div>
            <div>
              <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
                Email address<span className="text-red-500">*</span>
              </span>
              <input 
                type="email"
                placeholder="Marry Doe" 
                required
                value={newUserAccount.email}
                onChange={(e) => setNewUserAccount({ ...newUserAccount, email: e.target.value })}
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
                value={newUserAccount.password}
                onChange={(e) => setNewUserAccount({ ...newUserAccount, password: e.target.value })}
                className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
              />
            </div>
            <div>
              <span className="text-[11px] text-[#6C25FF] bg-white font-medium relative top-2 left-1.5 px-2">
                Company Name
              </span>
              <input 
                type="text"
                placeholder="Marry Doe" 
                value={newUserAccount.company}
                onChange={(e) => setNewUserAccount({ ...newUserAccount, company: e.target.value })}
                className="w-full text-xs font-medium px-3 py-2 rounded-lg outline-none border-[1.5px] border-[#E6E6E6]"
              />
            </div>
            <div className="mt-2">
              <span className="text-[11px] font-medium">
                Are you an Agency?<span className="text-red-500">*</span>
              </span>
              <br />
              <div className="flex gap-5 mt-0.5">
                <label className="flex items-center text-sm font-medium gap-2.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="isAgency" 
                    value="yes"
                    checked={newUserAccount.isAgency === "yes"}
                    onChange={(e) => setNewUserAccount({ ...newUserAccount, isAgency: e.target.value })}
                    className="accent-[#6C25FF] w-4 h-4" 
                  />Yes
                </label>
                <label className="flex items-center text-sm font-medium gap-2.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="isAgency" 
                    value="no"
                    checked={newUserAccount.isAgency === "no"}
                    onChange={(e) => setNewUserAccount({ ...newUserAccount, isAgency: e.target.value })}
                    className="accent-[#6C25FF] w-4 h-4" 
                  />No
                </label>
              </div>
            </div>

            {/* Create Account Button */}
            <div>
              <Button className="w-full mt-30 bg-[#6C25FF] text-white text-sm font-bold py-2 rounded-md">
                  Create Account
              </Button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

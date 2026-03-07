import { Button } from "../components/Button"

export const WelcomePage = () => {
  return (
    <div className="h-full w-75 mx-auto bg-white flex flex-col">

        <div className="mt-auto bg-white px-3 py-9 space-y-5.5">
            {/* Welcome Screen text Content */}
            <div className="space-y-1">
                <h2 className="font-bold text-[22px]">
                    Welcome to PopX
                </h2>
                <p className="text-sm font-medium text-gray-400">
                    Lorem ipsum dolor sit amet,
                    <br /> 
                    consectetur adipisicing elit.
                </p>
            </div>

            {/* Welcome screen buttons */}
            <div className="flex flex-col space-y-1.5">
                <Button className="bg-[#6C25FF] text-white text-sm font-bold py-2 rounded-md">
                    Create Account
                </Button>
                <Button className="bg-[#CEBAFB] text-black text-sm font-bold py-2 rounded-md">
                    Already Registered? Login
                </Button>
            </div>

        </div>

    </div>
  )
}

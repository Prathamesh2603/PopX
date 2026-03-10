import { AccountSetting } from "./pages/AccountSetting";
import { CreateAccPage } from "./pages/CreateAccPage";
import { LoginPage } from "./pages/LoginPage";
import { WelcomePage } from "./pages/WelcomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-black h-screen w-full py-4">
      <Routes>
        <Route path="/" element={ <WelcomePage /> } />
        <Route path="/account" element={ <CreateAccPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/setting" element={ <AccountSetting /> } />
      </Routes>
    </div>
  )
}

export default App;
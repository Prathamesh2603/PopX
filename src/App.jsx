import { CreateAccPage } from "./pages/CreateAccPage";
import { LoginPage } from "./pages/LoginPage";
import { WelcomePage } from "./pages/WelcomePage";


const App = () => {
  return (
    <div className="bg-black h-screen w-full py-4">
      {/* <WelcomePage />       */}
      {/* <CreateAccPage /> */}
      <LoginPage />
    </div>
  )
}

export default App;
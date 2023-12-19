
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import TermsOfUse from './pages/TermsOfUse.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import '@fontsource/geostar-fill';
import '@fontsource/monofett';

const router = createBrowserRouter(
    [
      { path: "/", element: <Home/> }, 
      { path: "/terms-of-use", element: <TermsOfUse/> }, 
      { path: "/privacy-policy", element: <PrivacyPolicy/> }
    ]
);
function App() {

    return (
        <>
      <RouterProvider router={router}/>
    </>
    );
}
export default App;


  
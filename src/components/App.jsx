import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from './Footer';
function App() {
  return (
    <>
      <Nav></Nav>
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
      <Footer></Footer>

     
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Courses from "./Courses";
import Nav from "./Nav";
function App() {
  return (
    <>
      <Nav></Nav>
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
     
    </>
  );
}

export default App;

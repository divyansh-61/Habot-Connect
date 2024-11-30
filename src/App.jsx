import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="overflow-x-hidden relative">
      <div className="fixed w-full z-50">
        <Header />
      </div>

      {/* Page main content will be displaced here */}
      <main className="mt-16 md:mt-20">
        <Outlet />
      </main>

      <Footer className="absolute bottom-0" />
    </main>
  );
};
export default App;

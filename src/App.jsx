import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="overflow-x-hidden relative">
      <Header />

      {/* Page main content will be displaced here */}
      <main>
        <Outlet />
      </main>

      <Footer className="absolute bottom-0" />
    </main>
  );
};
export default App;

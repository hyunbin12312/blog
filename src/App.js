import CustomerInfoInput from "./components/CustomerInfoInput/CustomerInfoInput";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Main from "./components/content/main/main";
import Page1Content from "./components/content/page1/Page1Contents";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page1" element={<Page1Content />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

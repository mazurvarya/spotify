import { BrowserRouter, Route, Routes } from "react-router-dom";
import UiKit from "./pages/uiKit";
import "./themes/normalize.css";
import "./themes/variables.css"
import Main from "@/pages/Main/index.tsx";
import { SinglePlayListPage } from "@/pages/SinglePlayListPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/playlist/:playlistId" element={<SinglePlayListPage/>} />
        <Route path="/ui" element={<UiKit/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

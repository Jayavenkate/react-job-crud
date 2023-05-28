import "./App.css";
import { Create } from "./Create";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Read } from "./Read";
import { Update } from "./Update";
export default function App() {
  return (
    <div>
      <h1>CRUD OPERATION </h1>
      <div>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/read/update/:id" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

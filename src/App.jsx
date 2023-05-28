import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Create } from "./Create";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Read } from "./Read";
import { Update } from "./Update";
export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CRUD OPERATION
            </Typography>

            <Button onClick={() => navigate("/")} color="inherit">
            Create
            </Button>
            <Button onClick={() => navigate("/read")} color="inherit">
            Read
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/read/update/:id" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

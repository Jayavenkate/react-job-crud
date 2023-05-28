import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";

export function Read() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const deleteData = async (id) => {
    await fetch(`${API}/:id`, {
      method: "DELETE",
    });
    getData();
  };
  const getData = () => {
    fetch(`${API}/read`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Read Operation</h1>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Qualificatin</TableCell>
              <TableCell>Place</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.qualification}</TableCell>
                <TableCell>{data.place}</TableCell>
                <TableCell>
                  <Button onClick={() => deleteData(data.id)} color="error">
                    <DeleteIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => navigate(`/read/update/${data._id}`)}
                    color="error"
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [place, setPlace] = useState("");
  const postdata = async () => {
    const newdata = {
      name: name,
      age: age,
      gender: gender,
      qualification: qualification,
      place: place,
    };
    console.log(newdata);
    await fetch("http://localhost:4003/create", {
      method: "POST",
      body: JSON.stringify(newdata),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/read");
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Create Operation </h2>
      <div className="create-text">
        <TextField
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Age"
          variant="outlined"
          onChange={(event) => setAge(event.target.value)}
        />
        <TextField
          label="Gender"
          variant="outlined"
          onChange={(event) => setGender(event.target.value)}
        />
        <TextField
          label="Qualification"
          variant="outlined"
          onChange={(event) => setQualification(event.target.value)}
        />
        <TextField
          label="Place"
          variant="outlined"
          onChange={(event) => setPlace(event.target.value)}
        />
        <Button onClick={postdata} variant="contained">
          Add Details
        </Button>
      </div>
    </div>
  );
}

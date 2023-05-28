import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function Update() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4003/read")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return data ? <UpdateForm data={data} /> : <h1>loading....</h1>;
}
function UpdateForm({ data }) {
  const navigate = useNavigate();
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);
  const [qualification, setQualification] = useState(data.qualification);
  const [place, setPlace] = useState(data.place);
  const updatedata = async () => {
    const newdata = {
      name: name,
      age: age,
      gender: gender,
      qualification: qualification,
      place: place,
    };
    console.log(newdata);
    await fetch(`http://localhost:4003/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(newdata),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/read");
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update Operation </h2>
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
        <Button onClick={updatedata} variant="contained">
          Update Details
        </Button>
      </div>
    </div>
  );
}

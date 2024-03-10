/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../global";


export function Update() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/read/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((dt) => setData(dt))
      .catch((err) => console.log(err))
  }, [id]);
  console.log(data);

  return data ? <UpdateForm data={data} /> : <h1>loading....</h1>;
}

function UpdateForm({ data }) {
  const navigate = useNavigate();
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);
  const [qualification, setQualification] = useState(data.qualification);
  const [place, setPlace] = useState(data.place);

  function updatedata() {
    const newdata = {
      name: name,
      age: age,
      gender: gender,
      qualification: qualification,
      place: place,
    };
    console.log(newdata);
    fetch(`${API}/read/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(newdata),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/read");
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update Operation </h2>
      <div className="create-text">
        <TextField
          value={name}
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          value={age}
          label="Age"
          variant="outlined"
          onChange={(event) => setAge(event.target.value)}
        />
        <TextField
          value={gender}
          label="Gender"
          variant="outlined"
          onChange={(event) => setGender(event.target.value)}
        />
        <TextField
          value={qualification}
          label="Qualification"
          variant="outlined"
          onChange={(event) => setQualification(event.target.value)}
        />
        <TextField
          value={place}
          label="Place"
          variant="outlined"
          onChange={(event) => setPlace(event.target.value)}
        />
        <Button onClick={() => updatedata()} variant="contained">
          Update Details
        </Button>
      </div>
    </div>
  );
}

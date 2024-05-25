import { useState } from "react";
import { useNavigate } from "react-router-dom"


function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  async function SubmitNewPlayer(event) {
    event.preventDefault();
    console.log(name, breed, status, imageUrl);
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
            status: status,
            imageUrl: imageUrl,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setName("");
      setBreed("");
      setStatus("");
      setImageUrl("");
      alert("Player added successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={SubmitNewPlayer}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>New Puppy</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        <label style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ flex: "2" }}
          required
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        <label style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
          Status:
        </label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ flex: "2" }}
          required
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        <label style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
          Breed:
        </label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          style={{ flex: "2" }}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <label style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
          Image URL:
        </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ flex: "2" }}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: "20px" }}>
        Add Player
      </button>
    </form>
  );
}

export default NewPlayerForm;

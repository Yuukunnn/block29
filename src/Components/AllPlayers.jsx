import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlayersAPI =
  "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT/players";

function AllPlayers() {
  const [AllPlayers, setAllPlayers] = useState([]);
  const [targetName, setTargetName] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlayers = async () => {
      try {
        const response = await fetch(PlayersAPI);
        const json = await response.json();
        const players = json.data.players;
        setAllPlayers(players);
        setFilteredPlayers(players);
      } catch (error) {
        console.error("fetch error", error);
      }
    };
    getAllPlayers();
  }, []);

  const handleSearchClick = (targetName) => {
    setFilteredPlayers(
      AllPlayers.filter((doggy) => {
        return (doggy.name === targetName);
      })
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => navigate("/new")}>Add More Puppies</button>
        </div>

        <div>
          <input type="text" placeholder="Search Player by NAME" value={targetName} onChange={(event) => setTargetName(event.target.value)} style={{ width: "200px" }}></input>
          <button onClick={handleSearchClick}> Search Players </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          columnGap: "20px",
        }}
      >
        {filteredPlayers ? (
          filteredPlayers.map((player) => {
            return (
              <div
                key={player.id}
                style={{
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid white",
                  margin: "20px",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  width="120"
                  height="140"
                />
                <h4 style={{ margin: "10px 0 -5px" }}>{player.name}</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>{player.breed}</li>
                  <li>{player.status}</li>
                </ul>
                <button onClick={() => navigate(`/${player.id}`)}>
                  Details
                </button>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}

export default AllPlayers;

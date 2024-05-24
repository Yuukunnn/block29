import { useState, useEffect } from "react";

const API =
  "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT/players";

function AllPlayers() {
  const [AllPlayers, setAllPlayers] = useState(null);

  useEffect(() => {
    const getAllPlayers = async () => {
      try {
        const response = await fetch(API);
        const json = await response.json();
        const players = json.data.players;
        setAllPlayers(players);
      } catch (error) {
        console.error("fetch error", error);
      }
    };
    getAllPlayers();
  }, []);

  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(5, 1fr)",
        columnGap:"20px"
    }}>
      {AllPlayers ? (
        AllPlayers.map((player) => {
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
              <img src={player.imageUrl} alt={player.name} width="120" height="140" />
              <h4 style={{margin:"10px 0 -5px"}}>{player.name}</h4>
              <ul style={{textAlign:"left"}}>
                <li>{player.breed}</li>
                <li>{player.status}</li>
              </ul>
              <button>Details</button>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default AllPlayers;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SinglePlayer() {
  const [singlePlayer, setSinglePlayer] = useState(null);
  const { playerId } = useParams();
  const navigate = useNavigate();

  async function DeletePlayer(singlePlayerId) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT/players/${singlePlayerId}`,
        {
          method: "DELETE",
        }
      );

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-MT-WEB-PT/players/${playerId}`
        );
        const json = await response.json();
        const player = json.data.player;
        setSinglePlayer(player);
      } catch (error) {
        console.error("singleFetchErr:", error);
      }
    };
    fetchSinglePlayer();
  }, [playerId]);

  if (!singlePlayer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={singlePlayer.imageUrl} alt={singlePlayer.name} width="400"/>
      <h2>{singlePlayer.name}</h2>
      <h2>{singlePlayer.breed}</h2>
      <h2>{singlePlayer.status}</h2>
      <h2>{singlePlayer.teamId}</h2>
      <button
        onClick={() => {
          DeletePlayer(singlePlayer.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default SinglePlayer;

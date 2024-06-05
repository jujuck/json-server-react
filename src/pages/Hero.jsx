import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

function Hero() {
  const hero = useLoaderData();
  const [like, setLike] = useState(hero.like);
  const [favory, setFavory] = useState(hero.favory);

  const handleLike = () => {
    fetch(`http://localhost:3000/super-heroes/${hero.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        like: like + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => setLike(data.like));
  };

  const handleFavory = () => {
    fetch(`http://localhost:3000/super-heroes/${hero.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        favory: !favory,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFavory(data.favory));
  };

  return (
    <main>
      <h1>Ton super Hero en détail</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favory">Favory</Link>
      </nav>
      <article>
        <h2>{hero.name}</h2>
        <img src={hero.image_md} alt={hero.name} />
        <ul>
          <li>First Appearance : {hero.firstAppearance}</li>
          <li>Race: {hero.race}</li>
          <li>Gender: {hero.gender}</li>
          <li>Work: {hero.work}</li>
          <li>Place of Birth: {hero.placeOfBirth}</li>
        </ul>
        <div>
          <p>Like : {like}</p>
          <button onClick={() => handleLike()}>Clic</button>
        </div>
        <div>
          <p>{favory ? "Actuellement en Favory" : "Mettre en favory"}</p>
          <button onClick={() => handleFavory()}>Modifier</button>
        </div>
      </article>
    </main>
  );
}

export default Hero;

/**
 * {
    "id": "5",
    "name": "Abraxas",
    "slug": "5-abraxas",
    "image_sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/5-abraxas.jpg",
    "image_md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
    "gender": "Male",
    "race": "Cosmic Entity",
    "eyeColor": "Blue",
    "hairColor": "Black",
    "fullName": "Abraxas",
    "placeOfBirth": "Within Eternity",
    "firstAppearance": "Fantastic Four Annual #2001",
    "work": "Dimensional destroyer",
    "intelligence": 88,
    "strength": 63,
    "speed": 83,
    "durability": 100,
    "power": 100,
    "combat": 55,
    "like": 0,
    "favory": false
}
 */

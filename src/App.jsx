import { useLoaderData, Link } from "react-router-dom";
import "./App.css";

function App() {
  const heroes = useLoaderData();

  return (
    <>
      <h1> Mes super Heroes</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favory">Favory</Link>
      </nav>
      <main>
        <section>
          {heroes.map((hero) => (
            <Link to={`/heroes/${hero.id}`} key={hero.id}>
              <h2>{hero.name}</h2>
              <img src={hero.image_sm} alt={hero.slug} />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;

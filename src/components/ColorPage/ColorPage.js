import FavoriteColor from "../FavoriteColor/FavoriteColor";
import "./ColorPage.css";

function ColorPage() {
  return (
    <>
      <header>
        <h1>ColorPage</h1>
      </header>
      <main className="color-page">
        <FavoriteColor name="Mario" favColor="red"/>
        <FavoriteColor name="Luigi" favColor="green"/>
        <FavoriteColor name="Bowser" favColor="blue"/>
      </main>
    </>
  );
}

export default ColorPage;

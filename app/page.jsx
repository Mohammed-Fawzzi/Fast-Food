import Flavors from "./(Components)/Flavors/Flavors";
import Header from "./(Components)/Header/Header";
import Icons from "./(Components)/Header/Icons";
import Popular from "./(Components)/Popular/Popular";
import Reserve from "./(Components)/Reserve/Reserve";

export default function Home() {
  return (
    <div>
      <Header/>
      <Icons />
      <Popular />
      <Reserve />
      <Flavors />
    </div>
  );
}

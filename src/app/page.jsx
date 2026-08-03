import Flavors from "@components/Flavors/Flavors";
import Header from "@components/Header/Header";
import Icons from "@components/Header/Icons";
import Popular from "@components/Popular/Popular";
import Reserve from "@components/Reserve/Reserve";

export default function Home() {
  return (
    <div>
      <Header />
      <Icons />
      <Popular />
      <Reserve />
      <Flavors />
    </div>
  );
}

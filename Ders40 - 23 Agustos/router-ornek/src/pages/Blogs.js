import { useState } from "react";
import EgitimCard from "../components/EgitimCard";
import Footer from "./Footer";

function Blogs() {
  const [egitimler, setEgitimler] = useState([
    {
      aciklama:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      baslik: "HTML",
      gorsel: require("./../pages/egitim-images/html.png"),
    },
    {
      aciklama:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      baslik: "CSS",
      gorsel: require("./../pages/egitim-images/css.png"),
    },
  ]);

  return (
    <div>
      {egitimler.map((item) => {
        return (
          <div>
            <hr />
            <EgitimCard
              aciklama={item.aciklama}
              baslik={item.baslik}
              gorsel={item.gorsel}
            ></EgitimCard>
            <hr />
          </div>
        );
      })}

      <Footer></Footer>
    </div>
  );
}

export default Blogs;

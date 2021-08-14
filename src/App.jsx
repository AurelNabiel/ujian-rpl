import React from "react";
import Header from "./assets/header";
import Artikel from "./assets/artikel";
import Footer from "./assets/footer";

function App() {
  const [artikel, useArtikel] = React.useState([
    {
      judul: "Sashimi",
      link: "https://asset.kompas.com/crops/tN5W8qP-EsnVuQnW0bOXEzvIhAw=/0x15:1000x682/750x500/data/photo/2018/02/17/3818919575.jpg",
      alt: "Takoyaki.jpg",
      harga: "20.000",
    },
    {
      judul: "okonomiyaki",
      link: "http://kbu-cdn.com/dk/wp-content/uploads/okonomiyaki.jpg",
      alt: "Okonomiyaki.jpg",
      harga: "40.000",
    },
    {
      judul: "Takoyaki",
      link: "https://i0.wp.com/bisnika.hops.id/wp-content/uploads/2021/02/01e473522a5e61c5b281646d61562ac4.jpg?resize=564%2C470&ssl=1",
      alt: "Takoyaki.jpg",
      harga: "32.000",
    },
    {
      judul: "Teriyaki",
      link: "https://www.masakapahariini.com/wp-content/uploads/2019/07/daging-bumbu-teriyaki-780x440.jpg",
      alt: "Teriyaki.jpg",
      harga: "32.000",
    },
    {
      judul: "Dango",
      link: "https://simplyhomecooked.com/wp-content/uploads/2021/02/dango-recipe-16.jpg",
      alt: "Dango.jpg",
      harga: "9.000",
    },
    {
      judul: "Nikuyaki",
      link: "https://media-cdn.tripadvisor.com/media/photo-s/09/2f/14/42/caption.jpg",
      alt: "Nikuyaki.png",
      harga: "15.000",
    },
    {
      judul: "Ramen",
      link: "https://www.masakapahariini.com/wp-content/uploads/2021/03/ramen-jepang-ayam-780x440.jpg",
      alt: "Ramen.jpg",
      harga: "29.000",
    },
    {
      judul: "Udon",
      link: "https://i0.wp.com/tarasmulticulturaltable.com/wp-content/uploads/2014/02/Niku-Udon-Japanese-Meat-Udon-4-of-5.jpg?resize=720%2C480&ssl=1",
      alt: "Udon.jpg",
      harga: "27.000",
    },
    {
      judul: "Dorayaki",
      link: "https://selerasa.com/wp-content/uploads/2016/11/images_dorayaki-coklat.jpg",
      alt: "Dorayaki.jpg",
      harga: "35.000",
    },
    {
      judul: "Kare",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpRVEmsAynTGP2jlTfHFOrt5oBIBKUQmdiA&usqp=CAU",
      alt: "Kare.jpg",
      harga: "45.000",
    },
  ]);

  return (
    <React.Fragment>
      <div className="antialiased h-screen w-full bg-gray-50 px-16">
        <div className="h-20 w-full">
          <Header></Header>
        </div>
        <div className="grid grid-cols-6 ">
          <div className="col-span-6 grid grid-cols-5 gap-5 overflow-auto px-1 py-5">
            {artikel.map((ar, index) => (
              <Artikel
                key={index}
                judul={ar.judul}
                link={ar.link}
                alt={ar.alt}
                harga={ar.harga}
              ></Artikel>
            ))}
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

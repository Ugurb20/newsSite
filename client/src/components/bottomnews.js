import Newscard from "./newscard";
import "./newscard.css";

export default function Bottomnews() {
  const cards = [
    {
      link: "https://img.memurlar.net/galeri/18219/71f5c829-9664-ea11-80f5-a0369f7d1486.jpg?width=800",
      title:
        "COVID-19 May Have Appeared in Casablanca as Early as January, 2020",
      description: `The paper also shows that the genetic analysis of the COVID-19
        genomes from local patients revealed various new mutations
        of which there were no records in other sequences worldwide.`,
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NoYuq71edzi-REIlk90pJXOdp525-JZn0Q&usqp=CAU",
      title:
        "Scientists Discover 66 Million Year Old Marine Lizard in Casablanca",
      description: `Rabat Scientists in Morocco have discovered a new species
      of mosasaur, a type of marine lizard that went extinct
      approximately 66 million years ago.`,
    },
    {
      link: "https://live.staticflickr.com/1482/26656821751_79a73e4969_c.jpg",
      title: "Fruit and vegetable wholesale prices",
      description: `Here's an overview of weekly wholesale prices on Morocco's
      Casablanca wholesale market. These are for the most traded
      fruit and vegetables. It shows the lowest and highest sales
      price in Moroccan dirhams/kg.`,
    },
  ];
  return (
    <div
      className="bottom-news-wrapper"
      style={{ padding: "5% 0", minHeight: "100%", width: "100%" }}
    >
      {cards.map((card) => {
        return (
          <Newscard
            photolink={card.link}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
  );
}

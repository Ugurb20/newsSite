import "./placestovisit.css";

export default function Placestovisit() {
  const places = [
    {
      link: "https://thumbs.dreamstime.com/b/ben-moro-kasbah-ouarzazate-morocco-black-white-218455085.jpg",
      title: "Skoura",
    },
    {
      link: "https://www.moroccoworldnews.com/wp-content/uploads/2016/06/German-Photographer-Captures-Beauty-of-Fez-in-Black-and-White-by-German-photographer-Victoria-Knobloch.-Gate-of-Boujloud-in-Fez.jpg",
      title: "Fez",
    },
    {
      link: "https://c0.wallpaperflare.com/preview/353/203/673/marrakesh-morocco-built-up-moody.jpg",
      title: "Marrakesh",
    },
  ];
  return (
    <div className="places-to-visit-container">
      <div className="head">
        Places to <em>visit</em>
      </div>

      <ul>
        {places.map((place) => {
          return (
            <li>
              <div className="li-flex-container">
                <div
                  className="place-photo"
                  style={{ backgroundImage: `url(${place.link})` }}
                ></div>
                <div className="place-name">{place.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

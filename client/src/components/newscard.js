import "./newscard.css";

export default function Newscard(props) {
  return (
    <div className="card-news">
      <div
        className="card-photo"
        style={{ backgroundImage: `url(${props.photolink})` }}
      ></div>
      <div className="card-title">{props.title}</div>
      <div className="card-description">{props.description}</div>
    </div>
  );
}

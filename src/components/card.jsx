// const title = "React App";
// const description = "React App with Vite";
// const date = new Date();
// const year = date.getFullYear();

function Card(props) {
  const { title, description, date, year } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
      <div className="row">
        <div className="col-md-6">
          <p>{date.toDateString()}</p>
        </div>
        <div className="col-md-6">
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
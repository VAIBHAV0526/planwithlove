import Cards from "./Cards";

function Tours({ tours, removetour }) {
  return (
    <div className="container">
      <div className="cont">
        <h1 className="title">Plan with love</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Cards  key={tour.id} {...tour} removetour={removetour}></Cards>; /// .... tour s pas s the obhect
        })}
      </div>
    </div>
  );
}
export default Tours;

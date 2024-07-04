
import './CardLates.css'
const CardLatest = ({ cards }) => {
  const { name, image, recipe } = cards;
  return (
    <div className="card  bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="" />
      </figure>
      <div className="card-body containerc">
        <h2 className="card-title .boxc">{name}</h2>
        <p className='.boxc'>{recipe}</p>
        
      </div>
    </div>
  );
};

export default CardLatest;
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detail/${id}`);
  };

  return (
    <div>
      <div className="col mx-5 mb-5">
        <p className="text-black-50">{props.genre}</p>
        <img src={props.imgUrl} alt="" className="foto w-100" />
        <h4 className="fw-semibold mt-3">{props.title}</h4>
        <p className="text-justify">{props.description}</p>
        <button className="btn btn-success" onClick={() => handleClick(props.id)}>
          Baca Sekarang
        </button>
      </div>
    </div>
  );
};
export default Card;

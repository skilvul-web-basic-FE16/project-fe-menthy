import { useNavigate } from "react-router-dom";

const PopularCard = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detail/${id}`);
  };
  return (
    <section className="d-flex align-items-center py-lg-0 py-5">
      <div className="container">
        <div className="row justify-content-around align-items-center g-5 g-lg-0">
          <div className="col-lg-6 order-lg-1 order-1 g-5">
            <img className="w-100" src={props.imgUrl} alt="" />
          </div>
          <div className="col-lg-6 order-lg-2 order-2 g-5">
            <p className="mb-1">{props.genre}</p>
            <h1 className="mb-3">{props.title}</h1>
            <p className="mb-5">{props.description}</p>
            <button onClick={() => handleClick(props.id)} className="btn btn-success btn-lg">
              Baca Artikel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularCard;

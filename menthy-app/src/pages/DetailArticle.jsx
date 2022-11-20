import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailArticle = () => {
  const { id } = useParams();

  const [detailArticle, setDetailArticle] = useState([]);

  const getDetailArticle = async () => {
    try {
      let response = await axios.get("https://63744259716c2e1916595d88.mockapi.io/menthy");
      console.log();
      setDetailArticle(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <>
      <div className="container p-5">
        <h2 className=" container border-bottom pb-2 fw-semibold mt-5 mb-3">Menthy</h2>
        <div className="row">
          <div className="col">
            {detailArticle
              .filter((item) => item.id === id)
              .map((item) => {
                return (
                  <div key={item.id} className="mt-5">
                    <p>{item.genre}</p>
                    <h1 className="mt-3 mb-4">{item.title}</h1>
                    <div>
                      <img src={item.imgUrl} alt="" className="card-img-top mb-5 mt-3" />
                      <h6 className="fw-semibold mb-3 fs-5 fst-italic">{item.description}</h6>
                      <p className="lh-lg text">{item.text}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailArticle;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import PopularCard from "../components/PopularCard";
import Intro from "../components/Intro";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [newArticle, setNewArticle] = useState([]);
  const [popularArticle, setPopularArticle] = useState([]);

  // get new article
  const getNewArticle = async () => {
    try {
      let response = await axios.get("https://63744259716c2e1916595d88.mockapi.io/menthy?new=true");
      setNewArticle(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getNewArticle();
  }, []);

  // get popular article
  const getPopularArticle = async () => {
    try {
      let response = await axios.get("https://63744259716c2e1916595d88.mockapi.io/menthy?popular=true");
      setPopularArticle(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPopularArticle();
  }, []);

  return (
    <>
      <Navbar />
      <Intro heading={"Wellcome to Menthy"} description={"Partner Kesehatan Mentalmu"} />
      <br />
      <br />
      <br />
      <h2 className="container border-bottom pb-2 fw-semibold mt-5 mb-3">Popular Article</h2>
      {popularArticle.map((item, index) => {
        return <PopularCard key={index} id={item.id} imgUrl={item.imgUrl} title={item.title} genre={item.genre} description={item.description} text={item.text} />;
      })}

      <h2 className=" container border-bottom pb-2 fw-semibold mt-5 mb-3">New Article</h2>
      <div className="container mb-5">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {newArticle.map((item, index) => {
            return <Card key={index} id={item.id} imgUrl={item.imgUrl} title={item.title} genre={item.genre} description={item.description} text={item.text} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;

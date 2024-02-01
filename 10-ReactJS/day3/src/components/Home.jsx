import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [articles, SetArticles] = useState([]);

  async function getData() {
    let { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a42129d229834aa3a2036f79d2624324"
    );
    console.log(data);
    SetArticles(data.articles);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          {articles.length == 0 ? (
            <FontAwesomeIcon icon={faSpinner} spin className="fa-3x" />
          ) : null}
          {articles.map((article, index) => (
            <div key={index} className="col-md-4">
              <img src={article.urlToImage} className="w-50" alt="" />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

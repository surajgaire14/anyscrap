import React, { useEffect } from "react";
import "./style.css";
import API from "../../utils/Api";
import {Link} from "react-router-dom"
import Loading from "../../components/Loading";
const bbcLogo = require("../../assets/bbc.png");
const nytLogo = require("../../assets/nyt.png");
const okLogo = require("../../assets/ok.png");

function News() {

  const [news,setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getNews = async() => {
    setLoading(true);
    const news = await API.get("/scrap/all-news")
    setNews(news.data.data)
    setLoading(false);
  }

  useEffect(() => {
    getNews()
  },[])

  return (
    <div className="container">
      <div className="results__section">
        <div className="results__container">
          {  loading ? <div className="loader"><Loading /></div> :
          <div className="results__body">
            <span className="scrap__time">Last Scrap : { Date(news.time).toString()}</span>
            <div className="result__body-container">
              <img src={bbcLogo} alt="" className="provider__logo" />
            <div className="dFlex JustifySpace">
            {news.bbc && news.bbc.map((news,i) => {
              return <div key={i} className="card">
                <p>{news.title}</p>
                <img src={news.img} alt={news.title} width={"100%"} />
                <a href={`${news.link}`}  >Go to news</a>
              </div>
            })}
            </div>
            </div>

            <div className="result__body-container">
              <img src={nytLogo} alt="" className="provider__logo"/>
            <div className="dFlex JustifySpace">
            {news.nytimes && news.nytimes.map((news,i) => {
              return <div key={i} className="card">
                <p>{news.title}</p>
                <img src={news.img} alt={news.title} width={"100%"} />
                <a href={`${news.link}`}  >Go to news</a>
              </div>
            })}
            </div>
            </div>

            <div className="result__body-container">
              <img src={okLogo} alt="" className="provider__logo"/>
            <div className="dFlex JustifySpace">
            {news.ok && news.ok.map((news,i) => {
              return <div key={i} className="card">
                <p>{news.title}</p>
                <img src={news.img} alt={news.title} width={"100%"} />
                <a href={`${news.link}`}>Go to news</a>
              </div>
            })}
            </div>
            </div>

          </div>
}
        </div>
      </div>
    </div>
  );
}

export default News;

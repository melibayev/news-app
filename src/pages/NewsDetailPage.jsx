import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestNews from '../components/latestNews/LatestNews'
import Loader from '../components/shared/Loader'

import styles from './NewsDetailPage.module.scss'

const NewsDetailPage = () => {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=43021f4e5ff342d1a21062038a9adbe5'
  const req = new Request(url);
  const pageUrl = useParams();
  const [data, setData] = useState([])
  const [latestNewsObject, setLatestNews] = useState([])
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    fetch(req)
        .then((response) => response.json())
        .then((result) => {
          if (result.articles && result.articles.length > 0) {
            const latestNews = result.articles.slice(result.articles.length - 14, -6);
            setData(result.articles)
            setLatestNews(latestNews);
          } else {
            console.log("No articles found in the response.");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        
  }, []);

  useEffect(() => {
    const filteredNews = data.filter((el) => el.author === pageUrl.author);
    if (filteredNews.length > 0) {
      setNewsDetail(filteredNews[0]);
    }
  }, [data, pageUrl.author]);

  console.log(newsDetail);
  if (!newsDetail) {
    return <Loader />; 
  }
  const {author, content, description, title, urlToImage} = newsDetail
  
  return (
    <Fragment>
      <Header />
      <section id={styles.about}>
        <div className="container">
          <div className={styles.about}>
            <h1>{title}</h1>
            <h4>{content}</h4>
            <img src={urlToImage} alt="" />
            <p>{description}</p>
            <p>{author}</p>
          </div>
        </div>
      </section>
      <section id={styles.latest_post}>
          <div className="container">
            <div className={styles.latest_post_title}>
              <h1>Our Lateset Post</h1>
              <NavLink to={'/all'}><button>View All</button></NavLink>
            </div>
            <div className={styles.latest_post_cards}>
                {latestNewsObject.map((card) => (
                  <LatestNews {...card}/>
                ))}
            </div>
          </div>
        </section>
      <Footer />
    </Fragment>
  )
}

export default NewsDetailPage
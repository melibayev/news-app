import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestNews from '../components/latestNews/LatestNews'

import styles from './NewsDetailPage.module.scss'

const NewsDetailPage = () => {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=95fe2b66ff6b4e32a03344e5a3acd39d'
  const req = new Request(url);
  const pageUrl = useParams();
  const [data, setData] = useState([])
  const [latestNewsObject, setLatestNews] = useState([])
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    fetch(req)
        .then((response) => response.json())
        .then((result) => {
          const latestNews = result.articles.slice(result.articles.length - 14, -6);
          setData(result.articles)
          setLatestNews(latestNews);

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
    return <div>Loading...</div>; // You can replace this with a loading indicator or message
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
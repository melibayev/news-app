import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestNews from '../components/latestNews/LatestNews'
import Loader from '../components/shared/Loader'

import styles from './NewsDetailPage.module.scss'

const NewsDetailPage = () => {
  const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=D7F4m4gqhnMZuhWQlLGGFfwUGllLzCin'
  const req = new Request(url);
  const pageUrl = useParams();
  const [data, setData] = useState([])
  const [latestNewsObject, setLatestNews] = useState([])
  const [newsDetail, setNewsDetail] = useState(null);
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(req)
        const result = await response.json()
        const latestNews = result.results.slice(result.results.length - 14, -6);
        setData(result.results)
        setLatestNews(latestNews);
      } catch(error){
        console.log(error);
      }
    }
    
    fetchNews()
  }, [pageUrl]);
  useEffect(() => {
    const filteredNews = data.filter((el) => el.id == pageUrl.id);
    if (filteredNews.length > 0) {
      setNewsDetail(filteredNews[0]);
    }
  }, [data, pageUrl.id]);

  console.log(newsDetail);
  if (!newsDetail) {
    return <Loader />; 
  }
  const {media, updated, title, source, id, abstract, byline} = newsDetail
  const img = media[0]['media-metadata'][2].url
  
  return (
    <Fragment>
      <Header />
      <section id={styles.about}>
        <div className="container">
          <div className={styles.about}>
            <h1>{title}</h1>
            <h4>{abstract}</h4>
            <img src={img} alt="" />
            <p>{byline}</p>
            <p>{source}</p>
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
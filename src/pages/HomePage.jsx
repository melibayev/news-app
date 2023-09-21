import React, { Fragment, useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from 'react-router-dom';
import { useApiData } from '../components/context/ApiDataContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

import HomeNewsCard from '../components/homeNewsCard/HomeNewsCard';
import LatestNews from '../components/latestNews/LatestNews';
import PopularNewsCard from '../components/popularNewsCard/PopularNewsCard';
import RecommendedNews from '../components/recommendedNews/RecommendedNews';
import Loader from '../components/shared/Loader';

import styles from './HomePage.module.scss';

const HomePage = () => {
  // const [data, setData] = useState([])
  const [popularNewsObject, setPopularNews] = useState([])
  const [homeNewsObject, setHomeNews] = useState([])
  const [latestNewsObject, setLatestNews] = useState([])
  const [recommendedNewsObject, setRecommendedNews] = useState([])
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=43021f4e5ff342d1a21062038a9adbe5'
  const req = new Request(url);
  
  const { updateApiDataArrived } = useApiData();
  const { apiDataArrived } = useApiData();

  useEffect(() => {
    fetch(req)
      .then((response) => response.json())
      .then((result) => {
        if (result.articles && result.articles.length > 0) {
          const popularNews = result.articles.slice(13, 18);
          const homeNews = result.articles.slice(9, 11);
          const latestNews = result.articles.slice(
            result.articles.length - 14,
            -6
          );
          const recommendedNews = result.articles.slice(16, 26);
          setPopularNews(popularNews);
          setHomeNews(homeNews);
          setLatestNews(latestNews);
          setRecommendedNews(recommendedNews);
          updateApiDataArrived(true);
        } else {
          console.log("No articles found in the response.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2,
        swipeable: true,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 535, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    if (apiDataArrived === false) {
      return <Loader />
    }else {
      return (
        <Fragment>
          <Header />
            <section id={styles.home}>
              <div className="container">
                <div className={styles.home}>
                  <div className={styles.home_left}>
                    <p>Innovation 2 Hours ago</p>
                    <h1>Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock</h1>
                    <div className={styles.home_news}>
                      {homeNewsObject.map((card) => (
                        <HomeNewsCard key={card.source.id} {...card}/>
                      ))}
                    </div>
                  </div>
                  <div className={styles.home_right}>
                    <div className={styles.home_popularlist_table}>
                        <h3>Popular this week</h3>
                        {popularNewsObject.map((card) => (
                        <PopularNewsCard key={card.source.id} {...card} />
                        ))}
                    </div>
                  </div>
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
    
            <section id={styles.recommend_post}>
              <div className="container">
                <h1>Recommended For You</h1>
                <div className={`${styles.recommend_posts} carousel-container`}>
                  <Carousel infinite autoPlay autoPlaySpeed={3000} keyBoardControl pauseOnHover responsive={responsive}>
                    {recommendedNewsObject.map((card) => (
                      <RecommendedNews {...card}/>
                      ))}
                  </Carousel>
                </div>
              </div>
            </section>
            <Footer />
        </Fragment>
      )
    }
  
}

export default HomePage
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './RecommendedNews.module.scss';

const RecommendedNews = ({urlToImage, publishedAt, author, title, source}) => {
  return (
    <NavLink to={`/news-detail/${author}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={urlToImage} alt="" />
                <p>{source.name}</p>
            </div>
            
            <div className={styles.card__description}>
                <h4>{title}</h4>
                <p>{author}</p>
            </div>
        </div>
    </NavLink>
  )
}

export default RecommendedNews
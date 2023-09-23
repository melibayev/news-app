import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LatestNews.module.scss'

const LatestNews = ({media, updated, title, source, id}) => {
  const img = media[0]['media-metadata'][2].url
  return (
    <NavLink to={`/news-detail/${id}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={img} alt="" />
                <p>{source}</p>
            </div>
            
            <div className={styles.card__description}>
                <h4>{title}</h4>
            </div>
        </div>
    </NavLink>
  )
}

export default LatestNews
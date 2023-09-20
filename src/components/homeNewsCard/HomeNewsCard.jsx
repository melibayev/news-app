import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './HomeNewsCard.module.scss';

const HomeNewsCard = ({author, urlToImage, title}) => {
  return (
    <NavLink to={`/news-detail/${author}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={urlToImage} alt="" />
            </div>
            <div className={styles.card__description}>
                <h4>{title}</h4>
            </div>
        </div>
    </NavLink>
  )
}

export default HomeNewsCard
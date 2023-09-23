import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './HomeNewsCard.module.scss';

const HomeNewsCard = ({media, updated, title, source, id}) => {
  let img

  if (media === false || media.length == 0) {
    img = 'https://i.stack.imgur.com/y9DpT.jpg'
  }else {
    img = media[0]['media-metadata'][2].url
  }
  return (
    <NavLink to={`/news-detail/${id}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.card__description}>
                <h4>{title}</h4>
            </div>
        </div>
    </NavLink>
  )
}

export default HomeNewsCard
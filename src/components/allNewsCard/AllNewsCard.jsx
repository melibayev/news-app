import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './AllNewsCard.module.scss';

const AllNewsCard = ({media, updated, title, source, abstract, byline, id}) => {
  let img
  if (media === false || media.length == 0) {
    img = 'https://i.stack.imgur.com/y9DpT.jpg'
  } else {
    img = media[0]['media-metadata'][2].url
  }
  return (
    <NavLink to={`/news-detail/${id}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={img ? img : ''} alt="" />
            </div>
            <div className={styles.card__description}>
                <h1>{title}</h1>
                <h5>{byline}</h5>
                <span>{source}</span>
                <p>{abstract}</p>
            </div>
        </div>
    </NavLink>
  )
}

export default AllNewsCard
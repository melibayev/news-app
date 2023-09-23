import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './PopularNewsCard.module.scss';

const Popular_news_card = ({media, updated, title, source, id}) => {
    let img = media[0]['media-metadata'][2].url
    // if (media === false) {
    //     console.log(media);
    // }
    // console.log(id, media); 
    if (media === false || media[0]['media-metadata'] === false || media.length === 0) {
        img = 'https://i.stack.imgur.com/y9DpT.jpg'
      }
    return (
    <NavLink to={`/news-detail/${id}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.card__description}>
                {/* <p>{timeDifferenceHours} Hours ago</p> */}
                <h4>{title}</h4>
            </div>
        </div>
    </NavLink>
  )
}

export default Popular_news_card
import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './PopularNewsCard.module.scss';

const Popular_news_card = ({urlToImage, publishedAt, title, author}) => {
    const currentTime = new Date();
    const time = publishedAt.split('T')[1].slice(0, -1);
    const timeDate = new Date();
    const timeParts = time.split(":");
    timeDate.setHours(timeParts[0]);
    timeDate.setMinutes(timeParts[1]);
    timeDate.setSeconds(timeParts[2]);
    const timeDifferenceMs = timeDate - currentTime;
    let timeDifferenceHours = Math.round(Math.abs(timeDifferenceMs / (1000 * 60 * 60)));
    if(timeDifferenceHours <= '1') timeDifferenceHours = '2'
    return (
    <NavLink to={`/news-detail/${author}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={urlToImage} alt="" />
            </div>
            <div className={styles.card__description}>
                <p>{timeDifferenceHours} Hours ago</p>
                <h4>{title}</h4>
            </div>
        </div>
    </NavLink>
  )
}

export default Popular_news_card
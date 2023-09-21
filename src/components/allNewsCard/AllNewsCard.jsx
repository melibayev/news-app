import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './AllNewsCard.module.scss';

const AllNewsCard = ({urlToImage, url, description, author, title, source}) => {
  // const httpsPattern = /^https:\/\//;
  // const isLink = httpsPattern.test(author);
  return (
    <NavLink to={`${author !== '' ? `/news-detail/${author}` : url}`}>
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={urlToImage} alt="" />
            </div>
            <div className={styles.card__description}>
                <h1>{title}</h1>
                <span>{author}</span>
                <p>{description}</p>
            </div>
        </div>
    </NavLink>
  )
}

export default AllNewsCard
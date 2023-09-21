import React, { Fragment } from 'react'
import styles from './Loader.module.scss'
const Loader = () => {
  return (
    <Fragment>
      <div id={styles.loader}>
      <div id={styles.shadow}></div>
      <div id={styles.box}></div>
      </div>
    </Fragment>
    )
}

export default Loader
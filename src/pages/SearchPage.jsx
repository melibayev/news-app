import React, { Fragment, useEffect, useState } from 'react'
import AllNewsCard from '../components/allNewsCard/AllNewsCard'
import { useKeyword } from '../components/context/KeywordContext'
import Footer from '../components/Footer'
import Header from '../components/Header'

import styles from './SearchPage.module.scss'

const SearchPage = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { keyword } = useKeyword();
    const API_KEY = '95fe2b66ff6b4e32a03344e5a3acd39d';
    const PAGE_SIZE = 3;

    useEffect(() => {
        async function fetchNews() {
          try {
            const response = await fetch(
              `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&page=${currentPage}&q=${keyword}`
            );
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setArticles(data.articles);
            setTotalPages(Math.ceil(data.totalResults / PAGE_SIZE));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchNews();
    }, [currentPage, keyword]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    
    console.log(articles);

    return (
    <Fragment>
        <Header />

        <section id={styles.news}>
            <div className="container">
                <h1 className={styles.news_title}>News</h1>
                <div className={styles.news_list}>
                    {articles.map((article, index) => (
                    <AllNewsCard key={index} {...article} />
                    ))}
                </div>
            
                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? `${styles.active}` : ''}>
                        {index + 1}
                    </button>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </Fragment>
  )
}

export default SearchPage
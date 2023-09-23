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
    const API_KEY = 'D7F4m4gqhnMZuhWQlLGGFfwUGllLzCin';
    const DISPLAY_PER_PAGE = 4;
    useEffect(() => {
      async function fetchNews() {
        try {
          const response = await fetch(
            `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
          );
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          
          const filteredArticles = data.results.filter(article =>
            article.title.toLowerCase().includes(keyword.toLowerCase())
            );
          setTotalPages(data.num_results / DISPLAY_PER_PAGE)
          const startIndex = (currentPage - 1) * DISPLAY_PER_PAGE;
          const endIndex = startIndex + DISPLAY_PER_PAGE;
          if (keyword.length > 0) {
            setTotalPages(Math.ceil(filteredArticles.length / DISPLAY_PER_PAGE));
            setArticles(filteredArticles.slice(startIndex, endIndex));
            } else {
            setArticles(data.results.slice(startIndex, endIndex))
          }

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchNews();
      window.scrollTo(0, 0);
    }, [currentPage, keyword]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    

    return (
    <Fragment>
        <Header />
        <section id={styles.news}>
            <div className="container">
                <h1 className={styles.news_title}>News</h1>
                <div className={styles.news_list}>
                  { articles.map((article) => (
                    <AllNewsCard key={article.id} {...article} />
                    )) }
                    {articles.length === 0 ? <p className={styles.not_found}>No Results Found</p> : null}
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
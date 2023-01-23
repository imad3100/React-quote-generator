import React, { useState, useEffect } from 'react';
import '../styles/css/News.css'; // import css file

function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?q=${searchQuery}&category=${selectedCategory}&apiKey=b4111cf5702d487d959231b72f7cc5de`)
      .then(response => response.json())
      .then(data => {
        setNewsData(data.articles);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [searchQuery, selectedCategory]);

 
  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="news-container">
      <div className="search-container">
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} className="search-input" />
        <select value={selectedCategory} onChange={handleCategoryChange} className="search-select">
          <option value="all">All</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      {isLoading ? 
        <p className="loading-text">Loading...</p>
       : (
          
        <div className="articles-container">
          { newsData? newsData.map((article, index) => (
            <div key={index} className="article-card">
              <img src={article.urlToImage} alt={article.title} className="article-image" />
              <div className="article-info">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">Read More</a>
              </div>
            </div>
          )):'' }
        </div>
      )}
    </div>)
}export default News
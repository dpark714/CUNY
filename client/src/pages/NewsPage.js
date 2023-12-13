import React from 'react';
import './style/NewsPage.css';
import NavBar from "../components/NavBar.js";

function News() {
  // Manually entered news articles
  const articles = [
    {
      title: "CUNY Opens New Tech Center",
      content: "The City University of New York has announced the opening of a new technology center...",
      author: "Jane Doe",
      date: "2023-12-13"
    },
    // ... other articles
  ];

  return (
    <div className="news-container">
      <NavBar />
      {articles.map((article, index) => (
        <article key={index} className="news-article">
          <h2 className="news-title">{article.title}</h2>
          <p className="news-content">{article.content}</p>
          <div className="news-meta">
            <span className="news-author">{article.author}</span>
            <time className="news-date">{article.date}</time>
          </div>
        </article>
      ))}
    </div>
  );
}

export default News;
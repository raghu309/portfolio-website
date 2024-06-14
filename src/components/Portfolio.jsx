import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Projects</h2>
        <div className="portfolio-container">
          <div
            onClick={() => {
              window.open('https://github.com/raghu309/blog-frontent', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/blog.png)",
              backgroundSize: "cover",
              cursor: 'pointer',
            }}
            className="card"
          >
            <div className="card-text">
              <h4>Full Stack Blog App</h4>
            </div>
          </div>
          <div
            onClick={() => {
              window.open('https://github.com/raghu309/movie_mania?tab=readme-ov-file', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/moviemania.png)",
              backgroundSize: "cover",
              cursor: 'pointer',
            }}
            className="card"
          >
            <div className="card-text">
              <h4>Movie Mania</h4>
            </div>
          </div>
        </div>
        <div className="portfolio-container">
          <div
            onClick={() => {
              window.open('https://github.com/raghu309/ToDoList', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/todo.png)",
              backgroundSize: "cover",
              cursor: 'pointer'
            }}
            className="card"
          >
            <div className="card-text">
              <h4>ToDo List</h4>
            </div>
          </div>
          
          <div
            onClick={() => {
              window.open('https://github.com/raghu309/BankChurnDataset/blob/main/RandomForest.ipynb', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/bankchurn.png)",
              backgroundSize: "cover",
              cursor: 'pointer'
            }}
            className="card"
          >
            <div className="card-text">
              <h4>Bank Churn Prediction</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

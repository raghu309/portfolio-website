import React from 'react';

export default function Profiles() {
  return (
    <section id="profiles">
      <div className="center">
        <h2>Profiles</h2>
        <div className="profiles-container">
          <div
            onClick={() => {
              window.open('https://leetcode.com/u/raghu30/', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/lc.jpg)",
              backgroundSize: "cover",
              cursor: 'pointer',
            }}
            className="card"
          >
            <div className="card-text">
              <h4>Leetcode</h4>
              <div>Guardian on Leetcode</div>
            </div>
          </div>
          <div
            onClick={() => {
              window.open('https://codeforces.com/profile/raghu3', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/cf.jpg)",
              backgroundSize: "cover",
              cursor: 'pointer'
            }}
            className="card"
          >
            <div className="card-text">
              <h4>Codeforces</h4>
              <div>Expert on Codeforces</div>
            </div>
          </div>
          <div
            onClick={() => {
              window.open('https://www.kaggle.com/raghu33', '_blank', 'noopener,noreferrer');
            }}
            style={{
              backgroundImage: "url(/img/kg.png)",
              backgroundSize: "cover",
              cursor: 'pointer'
            }}
            className="card"
          >
            <div className="card-text">
              <h4>Kaggle</h4>
              <div>Competitions Contributor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

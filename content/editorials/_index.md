+++
title="Editorials"
weight = 20
+++

# Editorials


<div class="card">
  <a href="https://example.com/article" target="_blank">
    <div class="card-image">
      <img src="https://via.placeholder.com/300x200" alt="Example Article Title">
    </div>
    <div class="card-body">
      <div class="card-category">World News</div>
      <h2 class="card-title">Example Article Title</h2>
      <div class="card-meta">
        <span class="card-date">Feb 15, 2025</span> | <span class="card-author">by Jane Doe</span>
      </div>
      <p class="card-summary">
        This is the first sentence of the article which gives a brief preview of the content...
      </p>
      <div class="card-readmore">Read More</div>
    </div>
  </a>
</div>

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 10px;
    font-family: Arial, sans-serif;
    text-decoration: none;
    color: inherit;
    width: 100%;
    max-width: 300px;
  }
  .card a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .card-image img {
    width: 100%;
    display: block;
  }
  .card-body {
    padding: 15px;
  }
  .card-category {
    font-size: 0.85em;
    color: #888;
    margin-bottom: 5px;
  }
  .card-title {
    font-size: 1.2em;
    margin: 0 0 10px;
  }
  .card-meta {
    font-size: 0.8em;
    color: #aaa;
    margin-bottom: 10px;
  }
  .card-summary {
    font-size: 0.9em;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  .card-readmore {
    font-size: 0.9em;
    color: #007BFF;
    text-align: right;
  }

  /* Desktop: Two cards per row */
  @media (min-width: 768px) {
    .card {
      width: calc(50% - 20px);
      max-width: none;
    }
  }
</style>





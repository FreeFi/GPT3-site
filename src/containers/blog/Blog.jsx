import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Многое происходит, <br /> Мы ведем блог об этом.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 и Open  AI это будущее. Давайте изучим, как это?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Сентябрь 26, 2021" text="GPT-3 и Open  AI это будущее. Давайте изучим, как это?" />
        <Article imgUrl={blog03} date="Сентябрь 26, 2021" text="GPT-3 и Open  AI это будущее. Давайте изучим, как это?" />
        <Article imgUrl={blog04} date="Сентябрь 26, 2021" text="GPT-3 и Open  AI это будущее. Давайте изучим, как это?" />
        <Article imgUrl={blog05} date="Сентябрь 26, 2021" text="GPT-3 и Open  AI это будущее. Давайте изучим, как это?" />
      </div>
    </div>
  </div>
);

export default Blog;

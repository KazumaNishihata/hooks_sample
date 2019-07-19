import React from 'react';
import ArticleList  from '../components/ArticleList'
import { useArticle } from '../hooks/useArticle'

function Top() {
  const {fetchArticle} = useArticle()

  return (
    <div>
      <button onClick={fetchArticle}>再読込</button>
      <ArticleList />
    </div>
  );
}

export default Top;

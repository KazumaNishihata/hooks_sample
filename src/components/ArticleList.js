import React, {useEffect} from 'react'
import { useArticle } from '../hooks/useArticle'

const ArticleList = () => {
  const {
    isLoading,
    articles,
    fetchArticle
  } = useArticle()

  useEffect(()=>{
    fetchArticle()
  },[fetchArticle])

  if(isLoading){
    return <div>Loading...</div>
  }
  return <ul>
    {articles.map(article => (
      <li key={article.id}>{article.title.rendered}</li>
    ))}
    </ul>
}

export default ArticleList
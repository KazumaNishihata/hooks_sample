import  {useCallback} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setArticles,fetchArticles } from "../actions/article"

export const useArticle = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.article.isLoading)
  const articles = useSelector(state => state.article.articles)

  const fetchArticle = useCallback(async () => {

      dispatch(fetchArticles())
      const res =  await fetch('https://www.to-r.net/wp-json/wp/v2/posts?_embed&page=1&per_page=12')
                        .then( res => res.json() )
      dispatch(setArticles(res))

  },[dispatch])

  return {
    isLoading,
    articles,
    fetchArticle
  }

}
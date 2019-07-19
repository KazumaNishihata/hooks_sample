
export function fetchArticles() {
  return {
    type: "FETCH_ARTICLES"
  };
}
export function setArticles(articles) {
  return {
    type: "SET_ARTICLES",
    payload: {
      articles
    }
  };
}
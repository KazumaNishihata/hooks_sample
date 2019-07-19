export const initialState = {
  isLoading:false,
  articles:[]
}

export const article = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_ARTICLES":
        return {
          ...state,
          isLoading: true
        }
    case "SET_ARTICLES":
      return {
        isLoading: false,
        articles: action.payload.articles
      }
    default:
      return state
  }
}
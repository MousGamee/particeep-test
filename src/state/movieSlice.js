import { createSlice } from '@reduxjs/toolkit'
import { MOVIES } from './constants'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesdata: [],
    likes: [],
    dislikes: [],
    filter: { category: 'tous' }
  },
  reducers: {
    setMovieData(state, action) {
      state.moviesdata = action.payload
    },

    deleteMovieData(state, action) {
      const movie = action.payload
      state.moviesdata = state.moviesdata.filter(item => item.id != movie.id)
    },

    likeMovie(state, action) {
      console.log(state.likes)
      const movie = action.payload
      if (state.likes.includes(movie.id)) {
        state.likes = state.likes.filter(item => item != movie.id)
        state.moviesdata = state.moviesdata.map(item => {
          if (item.id === movie.id) {
            item.likes--
          }
          return item
        })
      }

      if (!state.likes.includes(movie.id)) {
        state.likes.push(movie.id)
        state.moviesdata = state.moviesdata.map(item => {
          if (item.id === movie.id) {
            item.likes++
          }
          return item
        })
      }
      if (state.dislikes.includes(movie.id)) {
        state.dislikes = state.dislikes.filter(item => item != movie.id)
        state.moviesdata = state.moviesdata.map(item => {
          if (item.id === movie.id) {
            item.dislikes--
          }
          return item
        })
      }
    },

    dislikeMovie(state, action) {
      const movie = action.payload
      if (!state.dislikes.includes(movie.id)) {
        state.dislikes.push(movie.id)
        state.moviesdata = state.moviesdata.map(item => {
          if (item.id === movie.id) {
            item.dislikes++
          }
          return item
        })
      }
      if (state.likes.includes(movie.id)) {
        state.likes = state.likes.filter(item => item !== movie.id)
        state.moviesdata = state.moviesdata.map(item => {
          if (item.id === movie.id) {
            item.likes--

          }
          return item
        })
      }
    },

    setCategory(state, action) {
      const category = action.payload
      state.filter.category = category
    }
  },
})

export const { setMovieData, likeMovie, dislikeMovie, deleteMovieData, setCategory } = movieSlice.actions


export const getAllMovies = (state) => {
  if (state.movies.filter.category !== 'tous') {
    return state.movies.moviesdata.filter(item => item.category == state.movies.filter.category)
  }
  return state.movies.moviesdata
}

export const getAllMovieCategories = (state) => {
  const category = []
  state.movies.moviesdata.forEach(item => {
    if (category.indexOf(item.category) == -1) {
      category.push(item.category)
    }
  })
  return category
}

export const getCurrentFilter = (state) => {
  return state.movies.filter.category
}
export default movieSlice.reducer


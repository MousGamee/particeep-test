import { movies$ } from '../movies'
import { setMovieData } from './movieSlice'

export const loadAllMovie = () => {
    return async (dispatch) => {
        const response = await movies$
        dispatch(setMovieData(response))
    }
} 
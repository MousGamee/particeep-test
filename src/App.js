import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import Filter from './component/Filter';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, deleteMovieData, likeMovie, dislikeMovie } from './state/movieSlice'
import { loadAllMovie } from './state/moviesActions';


function App() {

  const movies = useSelector(getAllMovies)
  const dispatch = useDispatch()

  // pagination
  const [pageNumber, setPageNumber] = useState(0)
  const [moviePerPage, setMoviePerPage] = useState(4)
  const pageVisted = pageNumber * moviePerPage

  const pageCount = Math.ceil(movies.length / moviePerPage)

  // change the page based on the selected one
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  // delete a movie
  const deleteMovie = (movie) => {
    dispatch(deleteMovieData(movie))
  }

  //toggle likes
  const toggleLiked = (movie) => {
    dispatch(likeMovie(movie))
  }

  //toggle disliked
  const toggleDisliked = (movie) => {
    dispatch(dislikeMovie(movie))

  }
  // display all the movies
  const displayMovies = () => {
    return movies.slice(pageVisted, pageVisted + moviePerPage)
      .map(item => {
        return (
          <Card
            key={item.id}
            movie={item}
            deleteMovie={deleteMovie}
            toggleLiked={toggleLiked}
            toggleDisliked={toggleDisliked}
          />
        )
      })
  }

// get the movie when the app started
  useEffect(() => {
    dispatch(loadAllMovie())
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <Filter />
        <select
          value={moviePerPage}
          onChange={(e) => setMoviePerPage(e.target.value)}
        >
          <option value={4}>4 movies</option>
          <option value={8}>8 movies</option>
          <option value={12}>12 movies</option>
        </select>
      </div>

      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} layout className='movies'>
        {displayMovies()}
      </motion.div>
      <ReactPaginate
        previousLabel='previous'
        nextLabel='next'
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName='paginationBttns'
        disabledClassName='paginationDisabled'
        activeClassName='paginationActive '
      />
    </div>
  );
}

export default App;

import React from 'react'
import { motion } from 'framer-motion'
import {
    AiFillLike,
    AiFillDislike,
    AiOutlineDislike,
    AiOutlineLike
} from 'react-icons/ai'
import { useSelector } from 'react-redux'


const Card = ({ movie, deleteMovie, toggleLiked, toggleDisliked }) => {

    const allLikes = useSelector(state => state.movies.likes)
    const allDislikes = useSelector(state => state.movies.dislikes)

    return (
        <motion.div layout className='card'>
            <h2>{movie.title}</h2>
            <img src={movie.img} />
            <div className="wrap-button">
                <button className='button' onClick={() => deleteMovie(movie)}>Delete</button>
            </div>
            <div className='likes'>
                <div className='like-items'>
                    {allLikes.includes(movie.id) ? (<AiFillLike size={27} onClick={() => toggleLiked(movie)} />)
                        : (<AiOutlineLike size={27} onClick={() => toggleLiked(movie)}/>)}
                    <span>{movie.likes}</span>
                </div>
                <div className='like-items'>
                    {allDislikes.includes(movie.id) ? (<AiFillDislike size={27} onClick={() => toggleDisliked(movie)}/>) : (<AiOutlineDislike size={27} onClick={() => toggleDisliked(movie)} />)}
                    <span>{movie.dislikes}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
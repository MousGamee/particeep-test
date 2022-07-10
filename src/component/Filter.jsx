import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovieCategories, getCurrentFilter, setCategory } from '../state/movieSlice'


const Filter = () => {

    const categories = useSelector(getAllMovieCategories)
    const currentFilter = useSelector(getCurrentFilter)
    const [currentCategory, setCurrentCategory] = useState('tous')
    const dispatch = useDispatch()

    const setCatgegorie = (category) => {
        dispatch(setCategory(category))
        console.log(category)
        setCurrentCategory(category)
    }

    console.log('categories => ', categories)
    console.log('currentFilter => ', currentFilter)
    console.log('currentCategory => ', currentCategory)
    return (
        <div className='filter-container'>
            <button className={currentCategory === 'tous' ? 'active' : ''} onClick={() => setCatgegorie('tous')}>Tous</button>
            {
                categories.map((filter, index) => {

                    return (
                        <button className={filter === currentFilter ? 'active' : ''} key={index} onClick={() => setCatgegorie(filter)}>{filter}</button>
                    )
                })
            }
        </div>
    )
}

export default Filter
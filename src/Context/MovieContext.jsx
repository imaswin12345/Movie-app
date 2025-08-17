import { createContext,useEffect,useContext,useEffect, useState } from "react";


const MoviesContext = createContext()

export const userMovieContext = ()=> useContext()

export const MovieProvider = ({children}) => {


    const [favorites,setFavorites] = useState([])

    useEffect(()=>{
      
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs)) 

    },[])

    useEffect(()=>{
      
        localStorage.setItem('favorites',JSON.stringify(favorites))

    },[favorites])
    

    const addToFavorites = (movie)=>{

         setFavorites(prev => [...prev,movie])
    }

    const removeFromFavorites = (movieId) => {
        
    }

    return <MoviesContext.Provider>
        {children}
    </MoviesContext.Provider>

}
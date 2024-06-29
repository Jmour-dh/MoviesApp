import React from 'react'
import { useParams } from 'react-router-dom'

const Movie: React.FC = () => {
  const { id } = useParams()
  console.log('id',id);
  
  return (
    <div>Movie</div>
  )
}

export default Movie
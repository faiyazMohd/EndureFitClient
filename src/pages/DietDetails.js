import React from 'react'
import { useParams } from 'react-router-dom';

const DietDetails = () => {
    const { dietUrl } = useParams();
    console.log(dietUrl);
    return (
    <div>
      
    </div>
  )
}

export default DietDetails

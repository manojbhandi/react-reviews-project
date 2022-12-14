import React , {useState} from 'react';
import people from './data' 
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Review = ()=>{

    const [index, setIndex] = useState(0);
    const { name, job, image,  text } = people[index];

    const checkNumber = (number)=>{
        if(number < 0) return people.length-1;
        if(number > people.length -1) return 0;
        return number;
    }
    const prevImage = ()=>{
        setIndex(checkNumber(index -1));
    }
    const nextImage = ()=>{
        setIndex(checkNumber(index  + 1));
    }
    
    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'> {name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevImage}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextImage}>
                    <FaChevronRight/>
                </button>
            </div>
            {/* <button className="random-btn">Surprise me</button> */}

        </article>
    )
}

export default Review;
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [numRatings, setNumRatings] = useState(0);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const star = i <= rating ? solidStar : emptyStar;
        stars.push(<FontAwesomeIcon key={i} icon={star} onClick={() => {
            setRating(i);
            setNumRatings(prevNumRatings => prevNumRatings + 1);
        }} />);
    }

    return (
        <div>
            {stars}
            <p>{numRatings} {numRatings === 1 ? "rating" : "ratings"}</p>
        </div>
    )
}
export default StarRating;

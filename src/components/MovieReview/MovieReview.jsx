import { useEffect, useState} from "react"
import { useParams} from 'react-router-dom';
import { getReviews } from "services/api";
import Loading from "components/Loader/Loader";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    useEffect(() => {
        (async function fetchData() {
          try {
            setIsloading(true);
            const data = await getReviews(movieId);
            setReviews(data.results)
          } catch (err) {
            console.log(err.message);
          } finally {
            setIsloading(false)
          }
        })();
      }, [movieId]);
    return (
        <>
        {isLoading && <div><Loading/></div>}
        {reviews.map(({author, content, id}) => (
            <div key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
            </div>
        ))}
        </>
        
    )
}
export default Reviews;
import '../static/css/card.css'
import { useNavigate, Link } from 'react-router-dom';

const Card = ({product}) => {
  const nav = useNavigate();

  return(
    <div className="card">
      <img className="image" src="../../src/static/images/Hillbilly_Poster.png"/>
      <div className="info">
        <Link to="/" className="title">
          { product.title }
        </Link>
        <div className="description">
          { product.description }
        </div>
      </div>
    </div>
  )
}

export default Card;

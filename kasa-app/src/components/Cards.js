import { Link } from 'react-router-dom'
import '../styles/Cards.sass'
import galleryItems from '../assets/gallery.json'

const Cards = () => {

  return (
    <div className="cards">
      {galleryItems.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/logement/${item.id}`}>
            <img src={item.cover} className="cardImg" alt={item.title} />
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Cards
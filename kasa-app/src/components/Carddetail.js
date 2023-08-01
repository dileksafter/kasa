import galleryItems from "../assets/gallery"
// import Carrousel from "./Carrousel";
// import Title from "./Title";
// import Location from "./Location";
// import Tags from "./Tags";
// import Host from "./Host";
import Rate from "./Rate";
import Collapse from "./Collapse";
import { useParams } from "react-router-dom"

const Carddetail = () => {

  const { id } = useParams()
  const targetLogement = galleryItems.find((item) => item.id === id)

  return (
    <div className="carddetails">
      <div className="carrousel">
        {/* <Carrousel carrousel={targetLogement.carrousel} /> */}
      </div>

      <div className="details">

        <div className="metadata">
          {/* <Title title={targetLogement.title} />
          <Location location={targetLogement.location} />
          <Tags tags={targetLogement.tags} /> */}

        </div>
        <div className="hostdata">
          {/* <Host host={targetLogement.host} /> */}
          <Rate rating={targetLogement.rating} />
        </div>
      </div>
      <div className="collapses">
      <Collapse title="Description" content={targetLogement.description} />
      <Collapse title="Équipements" content={JSON.stringify( targetLogement.equipments)} />
      </div>
    </div>
  );
};

export default Carddetail;
import { Image } from "react-bootstrap";
import '../Banner/Banner.css'
import Image1 from "../../assets/media/images/cupom-v2.svg"
import Image2 from "../../assets/media/images/frete-v2.svg"
import Image3 from "../../assets/media/images/logo.svg"
import Image4 from "../../assets/media/images/pix-v3.svg"
import Image5 from "../../assets/media/images/retira-v2.svg"

const Banner = () => {

  /*constante com imagens do banner*/  
  const images = [
    { id: 1, imgSource: Image1, label: "Image 1" },
    { id: 2, imgSource: Image2, label: "Image 2" },
    { id: 3, imgSource: Image3, label: "Image 3" },
    { id: 4, imgSource: Image4, label: "Image 4" },
    { id: 5, imgSource: Image5, label: "Image 5" },
  ];

  return (
    /*div com os imagens*/  
    <div className="banner-container">
        {/* Map que passa pelas imagens e ás reproduz a partir dos objetos da constante */}
      {images.map(({ id, imgSource, label }) => (
        <div key={id} className="image-wrapper">
          <Image src={imgSource} alt={label}  />
        </div>
      ))}
    </div>
  );
};

export default Banner;

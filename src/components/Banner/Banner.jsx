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
    { id: 1, imgSource: 'https://placehold.co/270x35?font=roboto', label: "Image" },
    { id: 2, imgSource: 'https://placehold.co/270x35?font=roboto', label: "Image" },
    { id: 3, imgSource: 'https://placehold.co/270x35?font=roboto', label: "Image" },
    { id: 4, imgSource: 'https://placehold.co/270x35?font=roboto', label: "Image" },
    { id: 5, imgSource: 'https://placehold.co/270x35?font=roboto', label: "Image" },

  ];

  return (
    /*div com os imagens*/  
    <div className="d-flex justify-content-around align-items-center flex-nowrap w-100 overflow-hidden">
      {images.map(({ id, imgSource, label }) => (
        <div key={id} className="image-wrapper d-flex justify-content-center align-items-center p-1">
          <Image src={imgSource} alt={label} className="img-fluid" />
        </div>
      ))}
    </div>
  );
};

export default Banner;

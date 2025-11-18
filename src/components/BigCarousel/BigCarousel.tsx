import "./BigCarousel.css";
import img1 from "../../assets/images/character1.jpg";
import img2 from "../../assets/images/hero-bg.jpg";
import img3 from "../../assets/images/character1.jpg";


const slides = [img1, img2, img3];


const BigCarousel = () => {
return (
<section className="big-carousel">
{slides.map((img, i) => (
<div key={i} className="slide">
<img src={img} />
<div className="slide-info">
<h3>Actualización {i + 1}</h3>
<p>Nuevas aventuras te esperan.</p>
</div>
</div>
))}
</section>
);
};


export default BigCarousel;
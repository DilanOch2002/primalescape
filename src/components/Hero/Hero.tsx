import "./Hero.css";
import heroBg from "../../assets/images/hero-bg.jpg";


const Hero = () => {
return (
<section className="hero">
<img src={heroBg} className="hero-img" />


<div className="hero-content">
<h1>PRIMAL ESCAPE</h1>
<p>Sobrevive • Evoluciona • Domina</p>
<button>Jugar Ahora</button>
</div>
</section>
);
};


export default Hero;
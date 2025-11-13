import './Hero.css';
import videoBg from '../../assets/videos/intro.mp4';

const Hero = () => {
  return (
    <section className="hero-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>PRIMAL ESCAPE</h1>
        <p>Sobrevive. Evoluciona. Escapa.</p>
        <button>Entrar</button>
      </div>
    </section>
  );
};

export default Hero;

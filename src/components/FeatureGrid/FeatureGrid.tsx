import "./FeatureGrid.css";
import img1 from "../../assets/images/hero-bg.jpg";
import img2 from "../../assets/images/character1.jpg";
import img3 from "../../assets/images/hero-bg.jpg";
import img4 from "../../assets/images/character1.jpg";


const features = [
{ img: img1, title: "Explora Mundos" },
{ img: img2, title: "Crea Estrategias" },
{ img: img3, title: "Combate Épico" },
{ img: img4, title: "Supervivencia Pura" }
];


const FeatureGrid = () => {
return (
<section className="feature-grid">
{features.map((f, i) => (
<div key={i} className="feature-card">
<img src={f.img} />
<h4>{f.title}</h4>
</div>
))}
</section>
);
};


export default FeatureGrid;
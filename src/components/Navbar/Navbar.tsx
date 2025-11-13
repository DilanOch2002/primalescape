import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PRIMAL ESCAPE</div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Historia</li>
        <li>Galería</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;

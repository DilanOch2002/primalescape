import "./MainMenu.css";

const MainMenu = () => {
  return (
    <div className="menu-container">
      <h1 className="title">PRIMAL ESCAPE</h1>

      <div className="btn-group">
        <button className="btn">Start Game</button>
        <button className="btn">Options</button>
        <button className="btn">Exit</button>
      </div>
    </div>
  );
};

export default MainMenu;

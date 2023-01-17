import "./UpNavBar.css";
import Rappi_logo from "../../assets/Rappi_logo.png";

export const UpNavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="Menu-Box">
        <h3>pegar aqui</h3>
      </div>
      <div className="Logo-container">
        <img src={Rappi_logo} alt="logo" className="logo" />
      </div>

      <div className="Icons-Containers">
        <button>
          <i class="fa-solid fa-user"></i>
        </button>
      </div>

      <div className="Icons-Containers">
        <button>
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

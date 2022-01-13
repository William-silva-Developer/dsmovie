import {ReactComponent as GitIcon} from "assets/img/github.svg";
import "./style.css";
function Navbar(){
    return (
        <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/WilliamSilva-spring">
           <div className="dsmovie-contact-container">
             <GitIcon />
             <p className="dsmovie-contact-link">/WilliamSilva</p>
           </div>
          </a>
          
          
        </div>
      </nav>
    </header>
    );
}

export default Navbar;
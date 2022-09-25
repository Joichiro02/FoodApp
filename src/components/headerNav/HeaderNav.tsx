import logo from "../../assets/images/Icon@2x.png";
import "./styles.scss";

const HeaderNav = () => {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <span className="skipBtn">Skip</span>
        </header>
    )
}

export default HeaderNav;
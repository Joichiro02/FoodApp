import {menu, profile, arrowDown} from "../../assets/images";
import "./styles.scss";

const HeaderNav2 = () => {
    return(
        <header className="headerNav">
            <img className="menu" src={menu} alt="" />
            <div className="title">
                <section className="textTop">Delivery to <img className="arrowDown" src={arrowDown} alt="" /></section>
                <section className="textBottom">lekki phase 1, Estate</section>
            </div>
            <div className="profileContent">
                <img className="profile" src={profile} alt="" />
            </div>
        </header>
    )
}

export default HeaderNav2;
import {useState } from "react";
import { useNavigate} from "react-router-dom";
import logo from "../../assets/images/Icon@2x.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import HeaderNav from "../headerNav/HeaderNav";
import "./styles.scss"

const Entry = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    if(loading){
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        return(
            <div className="logoContainer">
                <img src={logo} alt="" />
            </div>
        )
    }
    
    return(
        <div className="entryContainer">
            <HeaderNav/>
            <p className="description">Order from your favourite stores or vendors</p>
            <div className="sliderImagesContainer">
                <div className="sliderImages">
                    <img src={image1} alt=""/>
                    <img src={image2} alt=""/>
                    <img src={image1} alt=""/>
                </div> 
            </div>
            <div className="pagination">
                <span className="page active"></span>
                <span className="page"></span>
                <span className="page"></span>
            </div>
            <section className="buttons">
                <button className="createBtn" onClick={() => navigate("/register")}>Create an account</button>
                <button className="loginBtn" onClick={() => navigate("/login")}>login</button>
            </section>
        </div>
    )
}

export default Entry;
import HeaderNav2 from "../../components/headerNav2/HeaderNav2";
import {burger} from "../../assets/images"
import "./styles.scss"

const Details = () => {
    return(
        <div className="detailsContainer">
            <HeaderNav2/>
            <div className="imageContent">
                <img src={burger} alt="" />
            </div>
        </div>
    )
}

export default Details;
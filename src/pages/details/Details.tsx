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
            <section className="countContent">
                <span className="minusBtn">-</span>
                <span className="foodCount">2</span>
                <span className="plusBtn">+</span>
            </section>
            <section className="titleContent">
                <h2 className="title">Big boys Cheese burger</h2>
                <div className="subtitleContent">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>
            <section className="descriptionContent">
                Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped 
                <span className="more">more</span>
            </section>
            <section className="toppingsContent">
                <h4 className="title">Toppings for you</h4>
                
            </section>
        </div>
    )
}

export default Details;
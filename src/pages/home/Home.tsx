import HeaderNav2 from "../../components/headerNav2/HeaderNav2";
import {food1, food2, food3, food4} from "../../assets/images";
import "./styles.scss"

const imageArr = [
    {image: food1, name: "pizza"},
    {image: food2, name: "burger"},
    {image: food3, name: "sausage"},
    {image: food4, name: "samosa"},
];

const Home = () => {
    return (
        <div className="home">
            <HeaderNav2/>
            <h1 className="title">Enjoy Delicious food</h1>
            <div className="foodContainer">
                <div className="foodSlider">
                    {
                        imageArr.map(item=> (
                            <section key={item.name} className="food">
                                <span className="foodCont">
                                    <img className="foodImage" src={item.image} alt="" />
                                    <span className="foodName">{item.name}</span>
                                </span>
                            </section>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
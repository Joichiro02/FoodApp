import HeaderNav2 from "../../components/headerNav2/HeaderNav2";
import {food1, food2, food3, food4, burger, star, heart} from "../../assets/images";
import "./styles.scss"

const imageArr = [
    {image: food1, name: "pizza"},
    {image: food2, name: "burger"},
    {image: food3, name: "sausage"},
    {image: food4, name: "samosa"},
];

const listArr = [
    {
        image: burger,
        name: "Big cheese burger",
        description: "No 10 opp lekki phase 1 bridge in sangotedo estate",
        rate: 4,
        star: star,
        heart: heart
    },
    {
        image: burger,
        name: "Big cheese burger",
        description: "No 10 opp lekki phase 1 bridge in sangotedo estate",
        rate: 4,
        star: star,
        heart: heart
    },
    {
        image: burger,
        name: "Big cheese burger",
        description: "No 10 opp lekki phase 1 bridge in sangotedo estate",
        rate: 4,
        star: star,
        heart: heart
    }
]

const Home = () => {
    return (
        <div className="home">
            <HeaderNav2/>
            <h1 className="title">Enjoy Delicious food</h1>
            <div className="foodCategoryContainer">
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
            <div className="foodListContainer">
                <header className="header">
                    <h4 className="leftText">Popular restaurants</h4>
                    <h6 className="rightText">View all(29)</h6>
                </header>
                <div className="foodItemContainer">
                    <section className="foodItemBody">
                        {listArr.map((food, index) => (
                            <article className="foodItem" key={index}>
                                <img className="foodImage" src={food.image} alt="" />
                                <h4 className="foodTitle">{food.name}</h4>
                                <h6 className="foodSubtitle">{food.description}</h6>
                                <div className="foodRatingBody">
                                    <span className="leftSide">
                                        <img className="starIcon" src={food.star} alt="" />
                                        <span className="starCount">{food.rate}+</span>
                                    </span>
                                    <img className="heartIcon" src={food.heart} alt="" />
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
            <footer className="footerNav"></footer>
        </div>
    )
}

export default Home;
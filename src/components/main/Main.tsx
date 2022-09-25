import { useEffect, useRef } from "react";
import "./styles.scss";

const menu = ['drink', "snacks", "sushi", "bread", "dinner"];

const Main = () => {
    const foodRef = useRef<HTMLDivElement[] | any>([]);
    const categoryRef = useRef<HTMLDivElement[] | any>([]);
    
    const handleClick = (index:number) => {
        foodRef.current[index].scrollIntoView({behavior: "smooth"});
        for(let i = 0; i < categoryRef.current.length; i++){
            if(i === index){
                categoryRef.current[i].classList.add("active");
            }else{
                categoryRef.current[i].classList.remove("active");
            }
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entry => {
            if(entry[0].isIntersecting){
                const actives = document.querySelectorAll(".foodCategory");
                for(let i = 0; i < actives.length; i++){
                    if(actives[i].textContent === entry[0].target.textContent){
                        actives[i].classList.add("active");
                    }
                    else{
                        actives[i].classList.remove("active");
                    }
                }
            }
        }, {
            root: document.querySelector(".contentContainer"),
            rootMargin: "0% 0% -99% 0%",
            threshold: 0.001,
        })

        for(let category of foodRef.current){
            observer.observe(category)
        }
    }, [])

    return(
        <div className="main">
            <div className="sidebar">
                {menu.map((item, index) => (
                    <div ref={el => categoryRef.current[index] = el} key={index} className="foodCategory" onClick={() => handleClick(index)}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="contentContainer">
                {menu.map((item, index) => (
                    <div ref={el => foodRef.current[index] = el} key={index} className="foodCategoryContainer">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;
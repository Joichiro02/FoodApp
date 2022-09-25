import HeaderNav from "../../components/headerNav/HeaderNav";
import "./styles.scss"


const Login = () => {
    return(
        <div className="loginContainer">
            <HeaderNav />
            <div className="description">
                <h1 className="title">Login to your account</h1>
                <p className="subtitle">Good to see you again, enter your details below to continue ordering.</p>
            </div>
            <form className="formContainer">
                <section className="emailSection">
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder="Enter email"/>
                </section>
                <section className="passwordSection">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder="Enter password"/>
                </section>
            </form>
            <section className="buttons">
                <button className="createBtn" >Create an account</button>
                <button className="loginBtn" >Login to my account</button>
            </section>
        </div>
    )
}

export default Login;
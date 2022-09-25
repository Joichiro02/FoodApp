import HeaderNav from "../../components/headerNav/HeaderNav";
import "./styles.scss"


const Register = () => {
    return(
        <div className="registerContainer">
            <HeaderNav />
            <div className="description">
                <h1 className="title">Create an account</h1>
                <p className="subtitle">Welcome friend, enter your details so lets get started in ordering food.</p>
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
                <section className="confirmPasswordSection">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" placeholder="Confirm Password"/>
                </section>
            </form>
            <section className="buttons">
                <button className="createBtn" >Create an account</button>
                <button className="loginBtn" >Login to my account</button>
            </section>
        </div>
    )
}

export default Register;
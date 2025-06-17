import "../styles/loginPage.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LogingPage() {
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const navigate = useNavigate()
    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username !== "" && credentials.password !== "") {
            sendCredentials(credentials);
        }
    };

    const sendCredentials = async (userCreds) => {
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCreds),
                //
                credentials: 'include'
//
            });
            if (!response.ok) {
                throw new Error(response.error);
            }

            const result = await response.text();
            console.log("Successfully,got response: " + result)
            navigate("/dashboard");
        } catch (err) {
            let errorMessageEl = document.getElementById("error-message");
            let h4_el = document.createElement("h4");
            h4_el.textContent = "User is not signed up";
            if(errorMessageEl.children.length === 0){
                errorMessageEl.appendChild(h4_el);
            }
            console.log("Error upon credentials sending: ", err);
        }
    }


    return (

        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials.username}
                           onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={credentials.password}
                           onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox" name="remember-me"/> Remember me
                    </label>
                </div>
                <button id="submitBtnId" type="submit">Login</button>
            </form>
            <div className="signUp_div">
                <p className={"ordinary_p1"} >Don't have an account?</p>
                <a href="/regitration" className="ordinary_a">Sign up here</a>
            </div>


            <div id="error-message" className="error">
            </div>
        </div>
    )
}

export default LogingPage;
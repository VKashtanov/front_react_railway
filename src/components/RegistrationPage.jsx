import {useState} from "react";


const RegistrationPage = () => {

    const [registerationData, setRegisterationData] = useState({
        username: '', password: '',
        firstname: '', lastname: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (registerationData.username !== "" && registerationData.password !== "" && registerationData.firstname !== "" && registerationData.lastname !== "") {
            sendCredentials(registerationData);
        }
    };


    const sendCredentials = (userCreds) => {
        const backendURL = import.meta.env.VITE_BACKEND_URL;
        console.log(backendURL)
        fetch(backendURL+'/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCreds),
            credentials: 'include'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.error);
                }
                return response.text();
            })
            .then((result) => {
                console.log("server_response:" + result)
                createInfoBlock(result);
                // console.log(result)
            })
            .catch((err) => {
                console.log("There was an error sending credentials..." + err);
            });

    }

    const createInfoBlock = (response) => {
        const regHeaderDiv = document.querySelector(".registerHeaderBlock");
        if(regHeaderDiv.querySelector(".info_header")){
          regHeaderDiv.querySelector(".info_header").remove();
        }
            let element = document.createElement("h4");
            const regContainer = document.querySelectorAll(".form-group");
            element.className = "info_header";
            response === "REGISTERED" ? element.innerText = "Successful" : element.innerText = "Such username already exists";
            if (element.innerText === "Successful") {
                element.style.color = "green";
                regContainer.forEach(item => {
                    if (item.children[1].tagName === "INPUT") {
                        let elemt = item.children[1];
                        elemt.value = "";
                    }
                })
            } else if (element.innerText === "Such username already exists") {
                element.style.color = "red";
            }
            const registerHeaderBlockEl = document.querySelector('.registerHeaderBlock');
            if (!document.querySelector(".info_header")) {
                registerHeaderBlockEl.appendChild(element);
            } else {
                console.log("exist")

        }
    }


    const handleChange = (event) => {
        const {name, value} = event.target;
        setRegisterationData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="login-container">
            <div className="registerHeaderBlock">
                <h2>Registration</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={registerationData.username}
                           onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={registerationData.password}
                           onChange={handleChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" value={registerationData.firstname}
                           onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" value={registerationData.lastname}
                           onChange={handleChange} required/>
                </div>
                <button id="submitBtnId" type="submit">Register</button>
            </form>

            <div className="signUp_div">
                <p className={"ordinary_p1"}>Have an account? </p>
                <a href="/login" className="ordinary_a">Sign in</a>
            </div>

            <div id="error-message" className="error">
            </div>
        </div>
    )
}
export default RegistrationPage;
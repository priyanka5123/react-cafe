import { useState } from 'react';
import PropTypes from "prop-types";
import styles from './Greeting.module.css';

function Greeting({ initialName = "John Doe", customMessage = "Hello" }) {
    const [name, setName] = useState(initialName);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [users] = useState(["Alice", "Bob", "Charlie"]);

    const changeName = () => {
        setName("Jane Doe");
    };
    const handleLogInClick = () => {
        setIsLoggedin(true);
    };
    const handleLogOutClick = () => {
        setIsLoggedin(false);
        setName(initialName)
    };

    return (
        <div>
            <p className={styles.greeting}>
                {isLoggedin ?name: customMessage}
            </p>  
            {!isLoggedin ? (
            <button onClick={handleLogInClick}>Log In</button>

            ):(<button onClick={handleLogOutClick}>Log Out</button>
            )}       
            <p className={styles.greeting}>
                Welcome, {name} to the world of React
                <ul>
                    {users.map((user,index) =>(
                        <li key={index}>{user}</li>
                    ))} 
                </ul>
            </p>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}
Greeting.propTypes ={
    initialName: PropTypes.string,
    customMessage: PropTypes.string,

}

export default Greeting;

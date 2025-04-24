import './index.css'
import {useEffect, useState} from "react";
import UserCard from "./card.jsx";

function ProfileFinder() {
    const [username, setUsername] = useState('jantokoci');
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    async function fetchGithubUserData() {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();

            if(data){
                setLoading(false);
                setUserData(data);
                setUsername('');
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return(
    <div className="github-profile-container">
        <div className="input-wrapper">
            <input name="search" type="text" placeholder="Search for a GitHub user" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <UserCard user={userData}/> : null
        }
    </div>
    );
}

export default ProfileFinder;
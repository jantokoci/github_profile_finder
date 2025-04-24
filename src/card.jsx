
function UserCard({user}){
    const {avatar_url, login, name, followers, public_repos, created_at} = user;

    const createdDate = new Date(created_at);

    return(
        <div className="card">
            <div>
                <img src={avatar_url} className="card-image" alt="avatar" />
            </div>
            <div>
                <a className="card-title" href={`https://github.com/${login}`}>{name || login}</a>
                <p className={"card-text"}>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {month: "short"})} ${createdDate.getFullYear()}`}</p>
            </div>
            <div>
                <p className={"card-text"}>Public repos: {public_repos}</p>
                <p className={"card-text"}>Followers: {followers}</p>
            </div>
        </div>
    );
}

export default UserCard;
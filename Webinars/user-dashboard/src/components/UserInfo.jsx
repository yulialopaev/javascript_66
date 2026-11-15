function UserInfo({user}) {
    return (
        <div className={"user-info"}>
            <h2>Здравствуйте, {user.name}!</h2>
            <p>Электронная почта: {user.email}</p>
        </div>
    )
}

export default UserInfo;
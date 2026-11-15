const root = ReactDOM.createRoot(document.getElementById('root'));

const Student = ({name, age}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>age: {age ?? "unknown"}</p>
        </div>
    )
}

root.render(
    <>
        <Student name={"John Doe"} age={20}/>
        <Student name={"Peter Pen"} age={30}/>
        <Student name={"Marry Poppins"}/>
    </>
)
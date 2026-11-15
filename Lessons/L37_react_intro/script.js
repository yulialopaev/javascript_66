const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
// подключили реактовскую библиотеку

const hello = <h1>Наш учебный центр</h1>;

const header = <div>
    <h1>Учебный центр</h1>
    <br/>
    <hr/>
    <img src={"qqq.jpeg"} alt="Photo"/>
    <p>Добро пожаловать</p>
</div>;

const a = 10;
const b = 20;
const college = "TelRan"

const address = {
    city: "Tel-Aviv",
    street: "Ben Gurion",
    number: 123
}
const age = 15;

const myStyle = {
    color: "green",
    fontSize: "30px"
}

const fragment = <>
    <h1 style={{color: "red"}}>Наш учебный центр {college.toUpperCase()}</h1>
    <p style={{color: "blue", fontSize: "50px"}}>Добро пожаловать, сумма = {a + b}</p>
    <p>Город: {address.city}</p>
    <p>Улица: {address.street}</p>
    <p style={myStyle}>Возраст: {age}</p>
    <p>{age >= 18 ? "Adult" : "Child"}</p>
</>

const studentName = <p>John Doe</p>
// const studentNameElement = <h1>Hello, {studentName}!</h1>;




root.render(fragment);
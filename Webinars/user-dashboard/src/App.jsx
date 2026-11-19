import './App.css'
import UserInfo from "./components/UserInfo.jsx";
import {user} from "./data/user.js";
import SubscriptionInfo from "./components/SubscriptionInfo.jsx";
import {subscription} from "./data/subscription.js";
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";
import Header from "./components/Header.jsx";


function App() {


    return (
        <div className={"main"}>
            <Header/>
            <UserInfo user={user}/>
            <SubscriptionInfo subscription={subscription}/>
            <DeviceList initialDevices={initialDevices}/>
        </div>
    )
}

export default App

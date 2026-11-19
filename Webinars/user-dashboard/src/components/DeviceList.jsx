import DeviceCard from "./DeviceCard.jsx";
import {useState} from "react";

function DeviceList({initialDevices}) {
    const [devices, setDevices] = useState(initialDevices);
    const [deviceName, setDeviceName] = useState("");
    const [type, setType] = useState("");
    const [addDeviceMessage, setAddDeviceMessage] = useState("");
    const [deleteDeviceMessage, setDeleteDeviceMessage] = useState("");

    function addDevice(name, type) {
        const trimmedName = name.trim();

        if (!trimmedName) {
            return setAddDeviceMessage("Введите имя устройства");
        }

        const newDevice = {
            id: crypto.randomUUID(),
            name: trimmedName,
            type
        }

        const newDevices = [...devices, newDevice];
        setDevices(newDevices);
        setDeviceName("")
        setType("")
        setAddDeviceMessage("")
    }

    function deleteDevice(id) {
        const filteredDevices = devices.filter(device => device.id !== id);
        setDevices(filteredDevices);
        if (filteredDevices.length === 0) {
            setDeleteDeviceMessage("У вас пока нет добавленных устройств");
        }
    }

    return (
        <div className="dash-box">
            <h2>Мои устройства: {devices.length}</h2>
            <div className={"device-list"}>
                {devices.map(device => (
                    <div className={"device-card"} key={device.id}>
                        <DeviceCard device={device}/>
                        <button className="delete-button" onClick={() => deleteDevice(device.id)}>Delete</button>
                    </div>
                ))}
                <p>{deleteDeviceMessage}</p>
            </div>

            <div className="add-device">
                <h4>Create Device</h4>
                <form onSubmit={(e) => {
                    addDevice(deviceName, type)
                    e.preventDefault()
                }}>
                    <label htmlFor="name">Device Name: </label>
                    <input type="text" id="name" placeholder={"My phone"}
                           value={deviceName}
                           onChange={(e) =>
                               setDeviceName(e.target.value)}/>
                    <label htmlFor="device-type">Device Type: </label>
                    <select id={"device-type"}
                            value={type}
                            onChange={(e) => setType(e.target.value)}>
                        <option value="">Choose type</option>
                        <option value="Windows">Windows</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                    </select>
                    <button className="add-button" type="submit">Add device</button>
                    <p>{addDeviceMessage}</p>
                </form>
            </div>
        </div>
    )
}

export default DeviceList;
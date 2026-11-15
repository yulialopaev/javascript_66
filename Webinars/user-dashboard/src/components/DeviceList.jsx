import DeviceCard from "./DeviceCard.jsx";

function DeviceList({devices}) {
    return (
        <div className="dash-box">
            <h2>Мои устройства: {devices.length}</h2>
            <div className={"device-list"}>
                {devices.map(device => (
                    <DeviceCard key={device.id} device={device}/>
                ))}
            </div>
        </div>
    )
}

export default DeviceList;
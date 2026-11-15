function SubscriptionInfo({subscription}) {
    const statusClass = subscription.isActive
        ? "status active" : "status inactive";

    return (
        <div className={"subscription-info dash-box"}>
            <h2>Моя подписка</h2>
            <p>Дата окончания: {subscription.expiresAt}</p>
            <span className={statusClass}>{subscription.isActive ? "Активна" : "Неактивна"}</span>
        </div>
    )
}

export default SubscriptionInfo;
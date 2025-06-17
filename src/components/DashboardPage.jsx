import "../styles/dashboard.css"


const DashboardPage = () => {
    return(
        <div className="dashboard-page">
            <div className="dashboard-container">
                <div className="left_part">
                    <div className="user_profile_info">
                        <h3>User_info</h3>
                    </div>
                </div>
                <div className="right_part">
                   <div className="statistics_block">
                       <div className="monitoring_info">
                           <h2> statistics</h2>
                       </div>
                       <div className="date_and_time_info">
                           <h2>Tuesday 9th June</h2>
                       </div>

                   </div>
                    <div className="stations_dashboard">
                        <div className="stations group_1">
                            <div className="station" id={'stationId_1'}>1</div>
                            <div className="station" id={'stationId_2'}>2</div>
                            <div className="station" id={'stationId_3'}>3</div>
                            <div className="station" id={'stationId_4'}>4</div>
                            <div className="station" id={'stationId_5'}>5</div>
                        </div>
                        <div className="stations group_2">
                            <div className="station" id={'stationId_6'}>6</div>
                            <div className="station" id={'stationId_7'}>7</div>
                            <div className="station" id={'stationId_8'}>8</div>
                            <div className="station" id={'stationId_9'}>9</div>
                            <div className="station" id={'stationId_10'}>10</div>
                        </div>
                        <div className="stations group_3">
                            <div className="station" id={'stationId_11'}>11</div>
                            <div className="station" id={'stationId_12'}>12</div>
                            <div className="station" id={'stationId_13'}>13</div>
                            <div className="station" id={'stationId_14'}>14</div>
                            <div className="station" id={'stationId_15'}>15</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardPage;
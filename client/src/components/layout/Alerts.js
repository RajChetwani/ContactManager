import React from 'react'
import AlertContext from '../../context/alert/alertContext'
import { useContext } from 'react'

export const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const { alerts } = alertContext;
    return (
        alerts.length > 0 && alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type} mx-auto`} style={{width:'500px'}}>
                <i className="fa fa-info-circle"></i> {alert.msg}
            </div>
        ))
    )
}

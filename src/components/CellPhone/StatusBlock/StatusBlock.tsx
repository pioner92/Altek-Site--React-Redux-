import React from 'react';
import {useStore} from "effector-react";
import {$callDirection, $driver, $statusNumber} from "./models";
import {$isConnect} from "../models";
import {$isVisibleDirection} from "./models/models";
import {ConnectedTimerCounter} from "./ConnectedTimerCounter";
import {IsAdmin} from "../../Validate/isAdmin";
import {phoneDataType} from "../../../utils/appCall/app/callTypes";
import {$inputValueCellPhone} from "../CellPhoneInput/models";

declare const window: {
    arrPhones: Array<phoneDataType>
    is_admin: boolean
    number: string
}

export const StatusBlock = () => {
    const isConnect = useStore($isConnect)
    const statusNumber = useStore($statusNumber)
    const isVisibleDirection = useStore($isVisibleDirection)
    const callDirection = useStore($callDirection)
    const driver = useStore($driver)
    const driverNumber = driver?.driver_number

    return (
        <div style={{minHeight: 30}} className="cellphone-info-box" id="cellphone-info-box">
            <div className="cellphone-info-box__status">
                {isVisibleDirection && <span className="incomming">{callDirection} ◉</span>}
                {isConnect && <ConnectedTimerCounter/>}
            </div>
            <div className="cellphone-info-box__member">
                <div className="cellphone-info-box__member-name">
                    <span>{driver?.driver_name}</span>
                </div>
                <div className="cellphone-info-box__member-phone">
                    <IsAdmin flag={true}>
                        {driverNumber ?
                            <span>{driverNumber}</span>
                            : <span>{statusNumber}</span>
                        }
                    </IsAdmin>
                    <IsAdmin flag={false}>
                        {!driverNumber &&
                        <span>{statusNumber}</span>
                        }
                    </IsAdmin>
                </div>
                <div className="cellphone-info-box__member-meta">
                    <span>{driver?.vehicle_id}</span>
                </div>
            </div>
        </div>
    );
};

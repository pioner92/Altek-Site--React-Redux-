import React, {useState} from 'react';
import {ItemActionRightMenu} from "./ItemActionRightMenu/ItemActionRightMenu";
import {Avatar} from "./Avatar";
import {CSSTransition} from "react-transition-group";
import {useStore} from "effector-react";
import {$isVisibleEditHistoryMenu} from "../../EditMenu/models/models";
import {CheckBox} from "./CheckBox/CheckBox";
import {$selectedHistoryItems, addHistoryItemToArray, deleteHistoryItemFromArray} from "../models/models";
import {historyType} from "../../models/models";
import {$callApp} from "../../../models";
import {callEvent} from "../../../models/models";


type propsType = {
    data:historyType
}

export const HistoryListItem: React.FC<propsType> = ({ data: {date, status, direction, driver_name, duration, id,link,number}}) => {

    const isVisibleEditHistoryMenu = useStore($isVisibleEditHistoryMenu)
    const selectedHistoryItems = useStore($selectedHistoryItems)
    const isChecked = selectedHistoryItems.includes(id)
    const appCall = useStore($callApp)

    const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        !isChecked ? deleteHistoryItemFromArray(id):addHistoryItemToArray(id);
    }
    const onDoubleClick = ()=>{
        callEvent(number)
    }

    return (
        <div  className="cellphone-list__item">
            <CSSTransition
                in={isVisibleEditHistoryMenu}
                timeout={{
                    enter: 500,
                    exit: 200,
                }}
                classNames='call-history-checkbox'
                mountOnEnter
                unmountOnExit
            >
                <CheckBox callback={onChangeCheckBox} checked={isChecked}/>
            </CSSTransition>

            <Avatar {...{onDoubleClick}}/>
            <div className="cellphone-list__item_body">
                <div className="cellphone-list__item_name">
                    <div onDoubleClick={onDoubleClick} className={`title ${status === 'Missed call' ? 'red' : ''}`}>
                        <span>{driver_name || 'Unknown'}</span>
                    </div>
                    <div className="subtitle">
                        <span>{direction || 'unknown'} ({duration || 0})</span>
                    </div>
                </div>
                <ItemActionRightMenu id={id} link={link} date={date}/>
            </div>
        </div>
    );
};

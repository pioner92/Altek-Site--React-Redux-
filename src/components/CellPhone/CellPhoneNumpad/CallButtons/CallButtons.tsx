import React from 'react';
import accept_call from "../../../../static/icons/accpet-call.svg";
import decline_call from "../../../../static/icons/decline-call.svg";
import back from '../../../../static/icons/back-cellphone.svg'
import {callEvent, declineEvent} from "../../models/models";
import {useStore} from "effector-react";
import {$inputValueCellPhone, setInputValueCellPhone} from "../../CellPhoneDriverInput/models";
import {$isVisibleAcceptButton, $isVisibleBackButton, $isVisibleDeclineButton, setIsVisibleBackButton,} from "./models";
import {setIsVisibleKeypad} from "../models/models";

export const CallButtons = () => {

    const inputValue = useStore($inputValueCellPhone)
    const isVisibleAcceptButton = useStore($isVisibleAcceptButton)
    const isVisibleDeclineButton = useStore($isVisibleDeclineButton)
    const isVisibleBackButton = useStore($isVisibleBackButton)

    const onClickAccept = () => {
        if (inputValue.length === 10) {
            const value = '+1' + inputValue
            setInputValueCellPhone(value)
            callEvent(value)
        } else {
            callEvent(inputValue)
        }
    }

    const onClickDecline = () => {
        declineEvent()
    }

    const onClickBack = () => {
        setIsVisibleKeypad(false)
        setIsVisibleBackButton(false)
    }

    return (
        <div className="number-action-buttons">
            {isVisibleBackButton &&
            <div className="number-action-buttons__left">
                <div onClick={onClickBack} className="number-action-button backBtn">
                    <img src={back} alt=""/>
                </div>
            </div>
            }

            <div className={`number-action-buttons__right ${isVisibleBackButton ? 'justify-content-start' : ''}`}>
                {isVisibleAcceptButton &&
                <div onClick={onClickAccept} className="number-action-button accteptBtn">
                    <img src={accept_call} alt=""/>
                </div>
                }
                {isVisibleDeclineButton &&
                <div onClick={onClickDecline} className="number-action-button declineBtn">
                    <img src={decline_call} alt=""/>
                </div>
                }
            </div>
        </div>
    );
};

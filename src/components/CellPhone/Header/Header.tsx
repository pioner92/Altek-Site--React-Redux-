import React from 'react';
import phone_back from "../../../static/icons/phone-back.svg";
import {$selectedBottomButtonIndex, setSelectedBottomButtonIndex} from "../BottomMenu/models/models";
import {useStore} from "effector-react";

export const Header: React.FC = () => {

    const selectedIndex = useStore($selectedBottomButtonIndex)

    const onClickBack = () => {
        setSelectedBottomButtonIndex(0)
    }

    const titleGenerate = () => {
        switch (selectedIndex) {
            case 0:
                return null;
            case 1:
                return 'History'
            case 2:
                return 'Send a fax'
            case 3:
                return 'Chat'
        }
    }

    if (selectedIndex !== 0) {
        return (
            <div className="cellphone-page-header">
                <div className="cellphone-page-backBtn" onClick={onClickBack}>
                    <img src={phone_back} alt=''/>
                </div>
                <span className="cellphone-page-header__title">{titleGenerate()}</span>
            </div>
        );
    } else {
        return null
    }
};


import React from 'react';

type propsType = {
    onDoubleClick:()=>void
}

export const Avatar:React.FC<propsType> = ({onDoubleClick}) => {


    return (
        <div onDoubleClick={onDoubleClick} className="cellphone-list__item_avatar">
            <img src="https://image.freepik.com/free-photo/happy-man-with-newspaper_23-2147694656.jpg" alt=""/>
        </div>
    );
};

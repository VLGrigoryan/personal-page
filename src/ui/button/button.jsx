import clsx from 'clsx';
import React  from 'react';
import './button.css'; 

 

export const Button  = ({
    children,
    type = 'primary',
    size = 'medium',
    onClick,
    htmlType,
    extraClass = '',
    ...rest
}) => {
    const className = clsx(
        'button',
        {
            [`button_type_${type}`]: type,
        },
        {
            [`button_size_${size}`]: size,
        },
        extraClass
    );

    return (
        <button type={htmlType} onClick={onClick} className={className} {...rest}>
            {children}
        </button>
    );
};
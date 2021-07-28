import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['danger', 'success', 'primary', 'secondary', 'warning', 'info', 'light', 'dark']
    const randomcolors = colors[Math.floor(Math.random() * 8)]
    const myclass = 'text-' + randomcolors

    return (props) => {
        return (
            <div className={myclass}>
                <WrappedComponent {...props}/>
            </div>
        );
    }


}

export default Rainbow;
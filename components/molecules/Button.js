import React from 'react';

const Button = ({ children, type }) => {
    return (
        <>
            <button className={`button-${type}`}>{children}</button>

            <style jsx>{`
            button{
                padding: 10px 20px;
                border-radius: 32px;
                border: none;
                margin-top: 24px;
                display: flex;
                text-transform: uppercase;
                
            }
                .button-primary{
                    font-size: 1rem;
                    color: var(--white);
                    font-weight: 500;

                    background: rgb(255,141,114);
                    background: linear-gradient(119deg, rgba(255,141,114,1) 0%, rgba(225,78,202,1) 100%); 
                    
                }
                .button-primary:hover{
                    cursor: pointer;
                    transform: translateY(-3px);
                    transition: ease-in-out 0.3s;
                    box-shadow: 1px 14px 24px -2px rgba(0,0,0,0.31);
                    -webkit-box-shadow: 1px 14px 24px -2px rgba(0,0,0,0.31);
                    -moz-box-shadow: 1px 14px 24px -2px rgba(0,0,0,0.31);
                }
            `}</style>
        </>
    );
}

Button.defaultProps = {
    type: "primary",
}

export default Button;
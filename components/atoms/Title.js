import React from 'react';

const Title = ({ children, color, size, weight, isCentered, isMarginless }) => {
    return (
        <>
            <h1 className={`principal color-${color} size-${size} font-${weight} ${isCentered ? "is-centered" : ""
                } ${isMarginless ? "is-marginless" : ""}`}>
                {children}
            </h1>
            <style jsx>{`
                .principal{
                    
                    
                    margin: 0;
                    padding: 12px 0;
                }

                .color-primary {
                    color: var(--medWhite);
                }

                .color-secondary {
                color: var(--black);
                }

                .principal :global(strong){
                    color: var(--gray);
                }
                .size-lg{
                    font-size: 3.25rem;
                    line-height: 1;
                }
                .size-md{
                    font-size: 1.75rem;
                    line-height: 1.2;
                }
                .size-sm{
                    font-size: 1rem;
                }
                .size-xs{
                    font-size: 0.9rem;
                }
                .font-bold{
                    font-weight: 700;
                }
                .font-regular{
                    font-weight: 300;
                }
                .is-centered {
                text-align: center;
                }
                .is-marginless {
                margin: 0;
                padding: 0 0 10px 0;
                
                }
            `}</style>
        </>
    );
}

Title.defaultProps = {
    size: "lg",
    color: "primary",
    weight: "bold"
}

export default Title;
import React from 'react';

const Paragraph = ({ children, size, color, isMarginless, isCentered }) => {
    return (
        <>
            <p
                className={`paragraph size-${size} color-${color} ${isMarginless ? "is-marginless" : ""
                    } ${isCentered ? "is-centered" : ""
                    } `}
            >
                {children}
            </p>
            <style jsx>{`
                .paragraph {
                /* font-family: "Lato", sans-serif; */
                font-size: 1rem;
                line-height: 1.5;
                margin-bottom: 20px;
                }

                .color-primary {
                color: var(--black);
                }

                .color-secondary {
                color: var(--lightGray);
                }

                .color-regular{
                    color: var(--white);
                    font-weight: 300;
                }

                .paragraph :global(strong){
                    color: var(--orange);
                }

                .size-md {
                font-size: 1rem;
                }

                .size-sm {
                font-size: 0.75rem;
                }

                .is-centered {
                text-align: center;
                }

                .is-marginless {
                margin-bottom: 0;
                margin-top: 0;
                }
            `}</style>
        </>
    );
}

Paragraph.defaultProps = {
    size: "md",
    color: 'primary'
};

export default Paragraph;
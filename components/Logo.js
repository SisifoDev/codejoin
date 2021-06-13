import React from 'react';

const Logo = () => {
    return (
        <>
            <img className="logo" src="/logos/CodeJoin-Black.svg" />
            <style jsx>{`
                .logo{
                    width: 100%;
                    max-width: 180px;
                }
            `}</style>
        </>
    );
}

export default Logo;
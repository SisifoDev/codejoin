import PropTypes from "prop-types";

const sizes = {
    lg: 60,
    md: 30,
    sm: 18,
};

const Icon = ({ size, name }) => {
    return (
        <>
            <img
                src={`/icons/${name}.svg`}
                style={{ width: sizes[size], height: sizes[size] }}
                className="icon"
            />
            <style jsx>{`
        .icon {
        }
      `}</style>
        </>
    );
};

Icon.defaultProps = {
    size: "md",
};

export default Icon;
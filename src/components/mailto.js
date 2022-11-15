import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='  e.preventDefault();'
            onClick={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;
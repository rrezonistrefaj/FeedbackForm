import React from "react";
import { Link } from "react-router-dom";
// import { ReactDOM } from "react";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;










// function ButtonMailto({ email, subject, body, ...props }) {
//     return (
//       <button><a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
//         {props.children}
//       </a>
//       </button>
//     );
//   }
  
//   ReactDOM.render(
//     <ButtonMailto email="mail@mailto.com" subject="Hello" body="Hello world!">
//       Mail me!
//     </ButtonMailto>,
//     document.getElementById("root")
//   );
//   export default ButtonMailto
// const ButtonMailto = ({ mailto, label ,onClick}) => {
//     return (
//         <Link
//             onClick={(e) => {
//                 e.preventDefault();
//                 window.location.href = mailto;
//             }}
//         >
//             {label}
//         </Link>
//     );
// };

// export default ButtonMailto;
import React from "react";
function Toast({text}){
  return(
    <div className="toast">
      <p className="text">{text}</p>
    </div>
  )
}
export default Toast;
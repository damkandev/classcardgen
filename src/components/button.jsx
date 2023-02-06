import React from "react";
function Button({action}){
  return (
    <button className="submit" onClick={action}>Submit</button>
  )
}
export default Button;
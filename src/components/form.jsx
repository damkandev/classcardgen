import React from "react";

function Panel(){
  return (
    <div className="form">
      <p className="label">Title</p>
      <input type="text" id="title" placeholder="A curious title"/>
      <p className="label">Description</p>
      <textarea type="text" id="description" placeholder="The courses should have an interesting description, complex but not so complex with some touches of sarcasm to be funny."/>
      <p className="label">Teacher</p>
      <input type="text" id="teacher" placeholder="Don John"/>
      <p className="label">Certificate</p>
      <input type="text" id="certificate" placeholder="True or False"/>
      <p className="label">Thumbnail</p>
      <input type="text" id="thumbnail" placeholder="https://example.org/image.png"/>
    </div>
  )
}

export default Panel;
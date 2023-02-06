import React from "react";

function Panel(){
  return (
    <div className="form">
      <p className="label">Title</p>
      <input type="text" id="title" placeholder="Un titulo curioso"/>
      <p className="label">Description</p>
      <textarea type="text" id="description" placeholder="Los cursos deben tener una descripción interesante, compleja pero no tanto con algunos toques de sarcasmo para causar gracia."/>
      <p className="label">Teacher</p>
      <input type="text" id="teacher" placeholder="Don Miguel"/>
      <p className="label">Certificate</p>
      <input type="text" id="certificate" placeholder="True o False"/>
      <p className="label">Thumbnail</p>
      <input type="text" id="thumbnail" placeholder="https://example.org/image.png"/>
    </div>
  )
}

export default Panel;
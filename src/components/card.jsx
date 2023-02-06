import React from "react";
import Icon from '@mdi/react'
import { mdiStar, mdiNote } from '@mdi/js'
function Card({title, description, teacher, certificate}){
  return (
    <div className="card">
      <img src={require('../images/example.png')} alt="" className="card-thumbnail" />
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <div className="card-info">
        <p className="card-teacher"><Icon path={mdiStar} size={0.7}/> {teacher}</p>
        <p className={certificate ? 'card-cert-display' : 'card-cert-hide'}><Icon path={mdiNote} size={0.7}/>{certificate} Certificate</p>
      </div>
    </div>
  )
}

export default Card;
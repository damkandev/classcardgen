import {useState} from 'react';
import './App.css';
import Card from './components/card';
import Button from './components/button';
import Toast from './components/toast';

function App() {
  let [title, setTitle] = useState("A curious title");
  let [desc, setDesc] = useState("The courses should have an interesting description, complex but not so complex with some touches of sarcasm to be funny.");
  let [teacher, setTeacher] = useState("Don John");
  let [certificate, setCertificate] = useState(true)
  let [thumbnail, setThumbnail] = useState("https://picsum.photos/306/176")

  return (
    <div className="container">
      <div className="left">
        <div className="form">
          <p className="label">Title</p>
          <input tabIndex={0} onChange={() => {
            let element = document.getElementById("title")
            let text = element.value
            setTitle(text)
          }} type="text" id="title" placeholder="A curious title"/>
          <p className="label">Description</p>
          <textarea tabIndex={0} onChange={() => {
            let element = document.getElementById("description")
            let text = element.value
            setDesc(text)
          }} type="text" id="description" placeholder="The courses should have an interesting description, complex but not so complex with some touches of sarcasm to be funny."/>
          <p className="label">Teacher</p>
          <input tabIndex={0} onChange={() => {
            let element = document.getElementById("teacher")
            let text = element.value
            setTeacher(text)
          }} type="text" id="teacher" placeholder="Don John"/>
          <p className="label">Certificate</p>
          <input onChange={() => {
            let element = document.getElementById("certificate")
            let text = (element.value === 'true')
            setCertificate(text)            
          }} type="text" id="certificate" placeholder="True or False"/>
          <p className="label">Thumbnail</p>
          <input onChange={() => {
            let element = document.getElementById("thumbnail")
            let text = element.value
            setThumbnail(text)
          }} type="text" id="thumbnail" placeholder="https://picsum.photos/1080/720"/>
        </div>
      </div>
      <div className="right">
        <Card title={title} description={desc} teacher={teacher} certificate={certificate} thumbnail={thumbnail}/>
        <Button/>
        <Toast className="" text="Successfully uploaded ☁️ the card!"/>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import Panel from './components/form'
import Card from './components/card'
import Button from './components/button'
import Toast from './components/toast';

function submit(){
  console.log("Dou")
}

function App() {
  return (
    <div className="container">
      <div className="left">
        <Panel /> 
      </div>
      <div className="right">
        <Card title="Un titulo curioso" description="Los cursos deben tener una descripción interesante, compleja pero no tanto con algunos toques de sarcasmo para causar gracia." teacher="Don Miguel" certificate={true}/>
        <Button action={submit}/>
        <Toast className="" text="¡Se ha subido correctamente ☁️ la card!"/>
      </div>
      
    </div>
  );
}

export default App;

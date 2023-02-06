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
        <Card title="A curious title" description="The courses should have an interesting description, complex but not so complex with some touches of sarcasm to be funny." teacher="Don John" certificate={true}/>
        <Button action={submit}/>
        <Toast className="" text="Successfully uploaded ☁️ the card!"/>
      </div>
    </div>
  );
}

export default App;

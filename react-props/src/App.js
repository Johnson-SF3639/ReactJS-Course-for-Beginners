import './App.css';

function App(props) {
  return (
    <div className='app'>
      <h1>Welcome {props.message}</h1>
      <p><strong>Cheese Name :</strong> {props.cheese.name} </p>
      <p><strong>Cheese Smell Factor :</strong> {props.cheese.smellFactor} </p>
      <p><strong>Cheese Price :</strong> {props.cheese.price} </p>
    </div>
  );
}

export default App;

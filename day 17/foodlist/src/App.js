import './App.css';
import List from './lists/list';

function App() {
  const data = [
    { name: 'Pizza', cal: 56 },
    { name: 'Burger', cal: 63 },
    { name: 'Coke', cal: 34},
    { name: 'Brownie', cal: 40},
    { name: 'Fried Rice', cal: 84},
    { name: 'Momos', cal: 97},
    { name: 'Cake', cal: 20}
  ]
  return (
    <div className='container'>
   
      <h1 className='list'>Calorie List</h1>
      <div className='cal-list'>
        <List data={ data } />
      </div>
    </div>
  );
}

export default App;
import ExpenseItem from './components/ExpenseItem';

function App() {
  // es un estandar que los componentes empiecen con mayus
  // porque React toma a los que empiezan con minus como etiquetas de html
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

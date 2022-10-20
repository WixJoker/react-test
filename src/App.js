import Counter from "./components/Counter";
import Modal from './components/Modal';

const App = () => {
  return (
    <div>
      <Counter initialValue={10} />
      <Modal />
    </div>
  );
};

export default App;

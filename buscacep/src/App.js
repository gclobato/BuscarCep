import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title"> Consultar CEP </h1>
     
      <div className="containerInput">
        <input type="text"placeholder="Digite seu cep"/>

      <button className="buttonSearch">
        <FiSearch size={25} color="#FFF"/> 
      </button>
    </div>

      <main className="main">
       <h2>Cep: 77000000</h2>

       <span> Rua Teste</span>
       <span> Complememento : Residencial Apolo</span>
        <span> Zona Norte</span>
        <span> São Paulo - SP</span>

      </main>
      
    </div>
  );
}

export default App;

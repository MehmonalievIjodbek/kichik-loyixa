import './App.css';
import products from './propsProducts';
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

function App() {
    return (
        <div className="App">
            <SearchBar/>
            <ProductTable data={products}/>

        </div>
    );
}

export default App;

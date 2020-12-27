import React, {useState} from 'react';
import './app.scss';
import Search from '../Search/search.js';
import Filter from '../Filter/filter.js';
import ItemCard from '../ItemCard/itemCard.js';

function App() {
  const [checkedItems, setCheckedItems] = useState({});
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app">
      <div className="appForm">
        <h1>Marketplace</h1>
        <form>
          <Search setSearchText={setSearchText}/>
          <Filter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
        </form>
      </div>
      <div class="appItemCard">
        <ItemCard searchText={searchText} checkedItems={checkedItems} />
      </div>
    </div>
  )
}

export default App;

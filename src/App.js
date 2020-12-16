import logo from './logo.svg';
import './App.css';
import { react, useState } from 'react';
import { Container, Button, Toolbar, IconButton, AppBar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';



export default function App() {
  // useState = rendender lifetime
  const [x, setX] = useState(0);
  const [list, setList] = useState(["1", "2"]);
  const [products, setProducts] = useState([Products]);
  const stuff = "yikes";
  var sht;

  function addToList() {
    setList(() => [...list, stuff]);
  } 

  return (
    <Container maxWidth="sm">
      <AppBar>
        <Toolbar>
          <div id="menu-items">
            <h1><span>🦝</span> Postershop</h1>
            {x}
            <IconButton edge="end" onClick={() => setX(x + 1)}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton aria-label="add" onClick={() => addToList()}>
              <AddIcon />
            </IconButton>
            <ul>
              <li>
                {list.map((text) => (<h1>{text} </h1>))}
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <div>
      {products}
      </div>

    </Container >
  );
}


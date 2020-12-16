import './App.css';
import { react, useState } from 'react';
import { Container, Button, Toolbar, IconButton, AppBar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';



export default function App() {
  // useState = rendender lifetime

  const [x, setX] = useState(0);
  const [list, setList] = useState([]);
  //const [products, setProducts] = useState([p]);

  /*function addToList() {
    setList(() => [...list, stuff]);
  } 
*/
  return (
    <Container maxWidth="sm">
      <AppBar>
        <Toolbar>
          <div id="menu-items">
            <h1><span>🦝</span> Postershop</h1>
            <IconButton edge="end" onClick={() => setX(x + 1)}>
              <ShoppingCartIcon />
            </IconButton>
            
          </div>
        </Toolbar>
      </AppBar>
      <div>
      </div>

    </Container >
  );
}


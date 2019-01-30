'use strict';

const ColorSelection = (type) => {
  switch(type) {
    case 'unisex':
      return "black";
    case 'male':
      return "blue";
    case 'female':
      return "orange";
  }
}

const App = ({items}) => (
  <main>
    {items.map(item => {
      const color = ColorSelection(item.type);
      return <Item color={color} item={item}/>
    })}
  </main>
);
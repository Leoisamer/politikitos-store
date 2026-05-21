import Item from './Item';


function ItemList({ productos }) {
  return (
    <div 
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      >
      {productos.map((producto) => (
        <Item
          key={producto.id}
          {...producto}
        />
          )
        )
      }
    </div>

  );
}

export default ItemList;
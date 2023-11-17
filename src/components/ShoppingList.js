const products = [
  {
    title: "garage",
    isFruit: false,
    id: 1,
  },
  {
    title: "Ip5",
    isFruit: false,
    id: 2,
  },
  {
    title: "apple",
    isFruit: true,
    id: 3,
  },
];

function addProduct() {
    
}



export default function ShoppingList() {
  const listItems = products.map((product) => {
    return (
      <li key={product.id} style={{ color: product.isFruit ? "red" : "white" }}>
        {product.title}
      </li>
    );
  });
  return (
    <>
      <ul>{listItems}</ul>
      <input type="text"></input>
      <button type="button" onClick={addProduct()}>Add</button>
    </>
  );
}

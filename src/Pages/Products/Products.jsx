import { useLoaderData } from "react-router-dom"
import Card from "../../Components/Card.jsx/Card";

const Products = () => {
  const data = useLoaderData();
  console.log(data.products);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 ml-3">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.products.map(product => <Card key={product.id} product={product}></Card>)}
      </div>
    </div>
  )
}

export default Products

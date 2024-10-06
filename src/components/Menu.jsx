import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";
import { useGetAllProductsQuery } from "../product/productApi";
import ProductCard from "../product/ProductCard";

const locations = [
  {
    name: 'Patan Durbar Square',
    img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Patan Durbar Square'
  },
  // Add more locations here as needed
];

const Menu = () => {

  const { isLoading, error, data } = useGetAllProductsQuery();

  return (
    <>
      <div className="flex flex-col items-center mx-4 min-h-[600px]">
        <h1 className="text-5xl md:text-3xl font-bold my-4">Menu</h1>
        <p className="text-gray-700 text-2xl md:text-xl text-center mb-10">
          While most of the food in our menu changes from kitchen to kitchen and <br /> from cook to cook, what remains the same is out product from the bakery.
        </p>

        <div className="p-8 grid grid-cols-3 md:grid-cols-1  gap-6 bg-pink-50">
          {data && data.map((product) => {
            return <ProductCard key={product._id} product={product} />
          })}
        </div>

      </div>


    </>
  )
}
export default Menu
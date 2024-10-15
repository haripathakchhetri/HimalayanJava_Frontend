import { useParams } from "react-router"
import { useGetProductByIdQuery } from "./productApi";
import { imageUrl } from "../app/constants/spi_urls";
import AddCart from "../cart/AddCart";
import { useState } from "react";

const ProductDetail = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { id } = useParams();
  const { isLoading, data, error } = useGetProductByIdQuery(id);


  if (isLoading) {
    return <h1>Loading....</h1>
  }


  console.log(data);

  return (
    <>

      <div className='grid grid-cols-3 p-4 items-start gap-20'>


        <div className="image">
          <img className='w-full' src={`${imageUrl}${data.image}`} alt="" />
          {data && <AddCart onClick={() => {
            if (user && !user?.isAdmin) {
              handleOpen();
            } else {
              nav('/login');
            }
          }} product={data} />}


        </div>





      </div>

    </>
  )
}
export default ProductDetail
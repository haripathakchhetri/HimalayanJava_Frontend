import { useParams } from "react-router"
import { useGetProductByIdQuery } from "./productApi";
import { imageUrl } from "../app/constants/spi_urls";
import AddCart from "../cart/AddCart";

const ProductDetail = () => {

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
          {data && <AddCart product={data} />}


        </div>





      </div>

    </>
  )
}
export default ProductDetail
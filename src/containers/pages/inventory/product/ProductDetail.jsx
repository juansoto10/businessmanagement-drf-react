import LoadingCard from "components/loaders/LoadingCard"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { get_product } from "redux/actions/products"
import Product from "components/inventory/product/Product"
// import { useState } from 'react'
/* import { redirect } from 'react-router-dom' */
// import axios from 'axios'

function ProductDetail({
  get_product,
  product,
}) {

  const params = useParams()
  const slug = params.slug
  
  useEffect(() => {
    get_product(slug)
  }, [])

  // const [selectedChoice, setSelectedChoice] = useState('');

  // const onSubmit = async (e) => {
  //   const config = {
  //     headers: {
  //       'Accept': 'application/json'
  //     },
  //     choice: selectedChoice
  //   };

  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.patch(`${process.env.REACT_APP_API_URL}/api/products/${slug}`, config);
  
      
  //     console.log(response.data);
  //     window.location.href = `/products/question/${slug}/results`;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <FullWidthLayout>
      {
        product ?

        <div className="relative flex flex-col justify-center items-center pt-12 pb-4 px-5 bg-white overflow-hidden md:h-100">

          <Product data={product} />

          <div className="flex items-center justify-around text-base sm:text-lg md:text-xl mt-10 md:mt-14 w-3/4">

            <Link
              to={`/`}
              className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
            >
              Home 
            </Link>

            <Link
              to={`/products`}
              className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
            >
              Back
            </Link>

          </div>

        </div>

        :
        
        <LoadingCard />
      } 
    </FullWidthLayout>
  )
}

const mapStateToProps = state => ({
  product: state.products.product,
  // choices: state.products.choices
})

export default connect(mapStateToProps, {
  get_product
})(ProductDetail)

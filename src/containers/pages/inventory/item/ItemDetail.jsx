import LoadingCard from "components/loaders/LoadingCard"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_item } from "redux/actions/items"

import Item from "components/inventory/item/Item"
import { Link } from "react-router-dom"
// import { useState } from 'react'
/* import { redirect } from 'react-router-dom' */
// import axios from 'axios';

function ItemDetail({
  get_item,
  item,
}) {

  const params = useParams()
  const slug = params.slug
  
  useEffect(() => {
    get_item(slug)
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
  //     const response = await axios.patch(`${process.env.REACT_APP_API_URL}/api/items/${slug}`, config);
  
      
  //     console.log(response.data);
  //     window.location.href = `/items/question/${slug}/results`;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <FullWidthLayout>
      {
        item ?
        <div className="relative flex flex-col justify-center items-center pt-12 pb-4 px-5 bg-white overflow-hidden md:h-100">

          <Item data={item} />

          <div className="flex items-center justify-around text-base sm:text-lg md:text-xl mt-10 md:mt-14 w-3/4">

            <Link
              to={`/`}
              className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
            >
              Home 
            </Link>

            <Link
              to={`/items`}
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
  item: state.items.item,
  // choices: state.items.choices
})

export default connect(mapStateToProps, {
  get_item
})(ItemDetail)

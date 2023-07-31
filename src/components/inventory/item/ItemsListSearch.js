import LoadingCard from "components/loaders/LoadingCard"
import SmallSetPagination from "components/pagination/SmallSetPagination"
// import { useEffect } from "react"
import { connect } from "react-redux"
import ItemCard from "./ItemCard"
import { Link } from "react-router-dom"

function ItemsList({
  items_list,
  get_items_list_page,
  filtered_items,
  count
}) {
    
  return (
    <div>
      {
        items_list ?
          filtered_items.length > 0 ?
          <>
            <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
              <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
              </div>
              <div className="relative max-w-7xl mx-auto"> 
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                  {
                    items_list.map(item => (
                      <ItemCard data={item} />
                    ))
                  }
                </div>
                
                <SmallSetPagination 
                  get_items_list_page={get_items_list_page} 
                  items_list={items_list} 
                  count={count}
                />
              </div>
            </div>
          </>

          :
          <div className="w-full p-8 h-1/2 flex flex-col justify-center items-center mb-[14rem]">
            <LoadingCard />

            <p className="text-purple text-2xl sm:text-4xl mt-16 mb-8">
              No related items found
            </p>

            <Link
              to={`/items/`}
              className="w-3/4 s:w-2/4 sm:w-fit my-6 px-6 py-2 h-fit uppercase text-lg sm:text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-6 md:leading-11 hover:bg-purple hover:text-white text-center"
            >
              Go back to Items
            </Link>
          </div>
        :
          <div className="w-full p-8 h-1/2 flex flex-col justify-center items-center mb-[14rem]">
            <LoadingCard />

            <p className="text-purple text-4xl mt-16 mb-8">
              No related items found
            </p>

            <Link
              to={`/items/`}
              className="w-min md:w-1/4 my-6 px-6 py-2 h-fit uppercase text-lg sm:text-xl font-semibold tracking-wider border-2 border-black bg-teal-400 text-black items-center leading-6 md:leading-11 hover:bg-purple hover:text-white text-center"
            >
              Go back to Items
            </Link>
          </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.items.count,
  filtered_items: state.items.filtered_items
})

export default connect(mapStateToProps, {
})(ItemsList)

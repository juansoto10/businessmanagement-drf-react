import LoadingCard from "components/loaders/LoadingCard"
// import SmallSetPagination from "components/pagination/SmallSetPagination"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ItemCategoryCard from "./ItemCategoryCard"


const ItemCategoriesList = ({
  categories,
}) => {
    
  return (
    <div>
      {
        categories ?
        <>
          <div className="relative bg-white pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8 md:min-h-nice">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                  categories.map(category => (
                    <ItemCategoryCard key={category.id} data={category} />
                  ))
                }
              </div>

              {/* <SmallSetPagination 
                get_items_list_page={get_items_list_page} 
                items_list={items_list}
                count={count}
              /> */}

              <div className="flex items-center justify-around text-base sm:text-lg md:text-xl mt-10 md:mt-14 w-full">

                {/* <Link
                  to={`/`}
                  className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
                >
                  Home 
                </Link> */}

                <Link
                  to={`/`}
                  className="px-1 underline underline-offset-[8px] hover:text-white hover:bg-black transition-colors duration-300"
                >
                  Back
                </Link>

              </div>

            </div>
          </div>
        </>

        :
        <LoadingCard/>
      }
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
})(ItemCategoriesList)

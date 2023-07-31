import LoadingCard from "components/loaders/LoadingCard"
// import SmallSetPagination from "components/pagination/SmallSetPagination"
import { connect } from "react-redux"
import CategoryCard from "./CategoryCard"


const ProductCategoriesList = ({
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
                    <CategoryCard key={category.id} data={category} />
                  ))
                }
              </div>

              {/* <SmallSetPagination 
                get_products_list_page={get_products_list_page} 
                products_list={products_list}
                count={count}
              /> */}

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
})(ProductCategoriesList)

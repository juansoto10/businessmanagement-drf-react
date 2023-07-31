// import ItemsList from "components/items/ItemsList"
import CategoryProductsList from "components/inventory/product/CategoryProductsList"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import { get_products_list_category, get_products_list_category_page } from "redux/actions/products"


const CategoryProducts = ({
  get_products_list_category,
  products_list, 
  count, 
  get_products_list_category_page
}) => {

  const params = useParams()
  const category_id = params.category_id

  useEffect(() => {
    get_products_list_category(category_id)
  }, [])

  return (
    <FullWidthLayout>
      <CategoryProductsList get_products_list_page={get_products_list_category_page} products_list={products_list} category_id={category_id}/>
    </FullWidthLayout>
  )

}


const mapStateToProps = state => ({
  products_list: state.products.products_list_category,
  count: state.products.count
})


export default connect(mapStateToProps, {
  get_products_list_category,
  get_products_list_category_page
})(CategoryProducts)

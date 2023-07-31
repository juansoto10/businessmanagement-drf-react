// import ItemsList from "components/items/ItemsList"
import CategoryItemsList from "components/inventory/item/CategoryItemsList"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import { get_items_list_category, get_items_list_category_page } from "redux/actions/items"


const CategoryItems = ({
  get_items_list_category,
  items_list, 
  count, 
  get_items_list_category_page
}) => {

  const params = useParams()
  const category_id = params.category_id

  useEffect(() => {
    get_items_list_category(category_id)
  }, [])

  return (
    <FullWidthLayout>
      <CategoryItemsList get_items_list_page={get_items_list_category_page} items_list={items_list} category_id={category_id}/>
    </FullWidthLayout>
  )

}


const mapStateToProps = state => ({
  items_list: state.items.items_list_category,
  count: state.items.count
})


export default connect(mapStateToProps, {
  get_items_list_category,
  get_items_list_category_page
})(CategoryItems)

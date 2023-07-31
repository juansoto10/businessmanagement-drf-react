import ItemCategoriesList from "components/category/item_category/ItemCategoriesList"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect, useCallback } from "react"
import { connect } from "react-redux"
import { get_item_categories } from "redux/actions/itemCategories"


const ItemCategories = ({
  get_item_categories,
  // get_items_categories_page,
  categories
}) => {

  const memoizedGetItemCategoriesList = useCallback(get_item_categories, [])

  useEffect(() => {
    memoizedGetItemCategoriesList()
  }, [memoizedGetItemCategoriesList])


  return (
    <FullWidthLayout>
      {/* <Header /> */}
      {/* <ItemsCategories /> */}
      <ItemCategoriesList get_item_categories={get_item_categories} categories={categories} />
    </FullWidthLayout>
  )

}
  
const mapStateToProps = state => ({
  categories: state.itemCategories.item_categories,
})

export default connect(mapStateToProps, {
  get_item_categories,
})(ItemCategories)

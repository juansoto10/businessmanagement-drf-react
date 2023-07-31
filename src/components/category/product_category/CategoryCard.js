import { Link } from "react-router-dom"


const CategoryCard = (data) => {

  let category = data && data.data

  return (
    <>
      <Link to={`/products/categories/${category.id}`} className="block mt-2">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheglobalstardom.com%2Fwp-content%2Fuploads%2F2021%2F09%2FSulem-Calderon.jpg&f=1&nofb=1&ipt=dbf270244cb774e1551e8a6b75950209cf75f4e21260b6b9b8b5da441cbaa867&ipo=images`} alt="category thumbnail" />
          </div>
          <div className="flex-1 bg-white py-3 px-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-xl font-semibold   text-gray-900">{category.name}</p>
            </div>
          </div>
        </div>
      </Link>
        
      
    </>  
  )

}


export default CategoryCard
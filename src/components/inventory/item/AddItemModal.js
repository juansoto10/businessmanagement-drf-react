import { useState } from "react";
import axios from "axios";
import { get_item_categories } from "redux/actions/itemCategories";


const AddItemModal = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    units: '',
    current_price: '',
    is_new: false,
    category: '',
    purchase_date: '',
    exp_date: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('URL_DEL_BACKEND/items/', {
        item: formData
      });

      console.log('Item created:', response.data);
      // Reset the form or show a success message
    } catch (error) {
      console.error('Error creating item:', error);
      // Handle error, show error message, etc.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Slug</label>
          <input type="text" name="slug" value={formData.slug} onChange={handleChange} />
        </div>

        <div>
          <label>Units</label>
          <input type="number" name="units" value={formData.units} onChange={handleChange} />
        </div>

        <div>
          <label>Price</label>
          <input type="number" name="current_price" value={formData.current_price} onChange={handleChange} />
        </div>

        <div>
          <label>New</label>
          <input type="checkbox" name="is_new" checked={formData.is_new} onChange={() => setFormData((prevData) => ({ ...prevData, is_new: !prevData.is_new }))} />
        </div>

        {/* Implementar selección de categoría */}
        <div>
          <label>Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>

        {/* Implementar configuración de thumbnail */}

        <div>
          <label>Purchase Date</label>
          <input type="date" name="purchase_date" value={formData.purchase_date} onChange={handleChange} />
        </div>

        <div>
          <label>Expiration Date</label>
          <input type="date" name="exp_date" value={formData.exp_date} onChange={handleChange} />
        </div>

        <button type="submit">Create Item</button>
      </form>
    </div>
  )
}
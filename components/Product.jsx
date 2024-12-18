
import PropTypes from 'prop-types';
export default function Product({ product }) {
     const {title,image, price,description,category } = product
    return(
        <div className="py-4 flex">
          <img className="size-14 rounded-full" style={{minWidth:'56px'}} src={image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        // <div>
        //     <h4>{title}</h4>
        //     <p></p>
        //     <p>{category}</p>
        //     <p>{price}</p>
        // </div>
    )
}

Product.propTypes  = {
    product: PropTypes.object.isRequired
};
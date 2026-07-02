// pages/ProductDetails/ProductDetails.jsx

import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">
        محصول شماره {id}
      </h1>
    </div>
  );
}

export default ProductDetails;
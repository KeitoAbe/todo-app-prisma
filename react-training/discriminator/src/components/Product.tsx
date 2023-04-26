import { Product } from "../models/Product";

type Props = {
  product: Product;
};

const Product = ({ product }: Props) => {
  return (
    <div>
      <p>商品名： {product.name}</p>
      <p>価格: {product.price}</p>
      {product.category === "fruit" && <p>糖度: {product.sugerContent}</p>}
    </div>
  );
};

export default Product;

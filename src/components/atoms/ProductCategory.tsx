import YellowIcon from "@/assets/icons/YellowIcon";
import styles from "../../styles/atoms/ProductCategory.module.scss"

interface ProductCategoryProps {
    text?: React.ReactNode;
  }

const ProductCategory: React.FC<ProductCategoryProps> = ({text}) => {
  return (
    <div className={styles.productCategory}>
      <YellowIcon />
      <h1>{text}</h1>
    </div>
  );
};

export default ProductCategory;

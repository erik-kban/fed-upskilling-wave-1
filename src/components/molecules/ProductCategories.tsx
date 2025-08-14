import ProductCategory from "../atoms/ProductCategory";
import styles from "../../styles/molecules/ProductCategories.module.scss";

const ProductCategories = () => {
  const categories = [
    "CAR CARE & CLEANING",
    "ACCESSORIES & SEAT COVERS",
    "BATTERIES & ELECTRICAL",
    "IN CAR TECH",
    "TOOLS & GARAGE",
    "TOOLBOXES, SHELVING & STORAGE",
    "OILS, FLUIDS & FILTERS",
    "SPARE PARTS",
    "4WD & RECOVERY",
    "CARAVAN, CAMPING & TRAILER",
    "PAINT & PANEL",
    "TOYS, GIFTING & APPAREL",
    "TYRES",
  ];

  return (
    <div className={styles.productCategories}>
      <h1 className={`${styles["productCategories__sectionHeader"]}`}>SHOP BY CATEGORY</h1>
      <div className={`${styles["productCategories__list"]}`}>
        {categories.map((category) => (
          <ProductCategory text={category} key={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;

import Header from "@/components/organisms/Header/Header";
import Carousel from "@/components/molecules/Carousel/Carousel";
import SignInRegister from "@/components/organisms/SignInRegister";
import ProductCategories from "@/components/molecules/ProductCategories";
import PopularBrandSection from "@/components/molecules/PopularBrandSection/PopularBrandSection";
import JoinSca from "@/components/molecules/JoinSCA/JoinSca";
import Footer from "@/components/molecules/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel
        images={[
          "/CarouselAssets/1.jpg",
          "/CarouselAssets/2.jpg",
          "/CarouselAssets/3.jpg",
        ]}
      />
      <SignInRegister />
      <ProductCategories />
      <PopularBrandSection amount={10} />
      <JoinSca/>
      <Footer/>
    </div>
  );
}

// import Image from "next/image";
// import styles from "./page.module.css";
import Carousel from "@/components/molecules/Carousel/Carousel";

export default function Home() {
  return (
   <Carousel images={['/CarouselAssets/1.jpg', '/CarouselAssets/2.jpg', '/CarouselAssets/3.jpg'  ]}></Carousel>
  );
}

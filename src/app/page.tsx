// import Image from "next/image";
// import styles from "./page.module.css";
import JoinSca from "@/components/molecules/JoinSCA/JoinSca";

export default function Home() {
  return (
    <>
    {/* <Carousel images={['/CarouselAssets/1.jpg', '/CarouselAssets/2.jpg', '/CarouselAssets/3.jpg'  ]}></Carousel>
    <Header /> */}
    {/* <RegisterCard />
    <JoinCard title="Tailored Pricing" subTitle="We can tailor your pricing" paragraph="We're cheaper or we'll beat it" link={<CustomLink text="Get your tailored pricing"/>}/> */}
    <JoinSca />
    </>
   
  );
}

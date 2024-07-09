
import Container from "@/components/Container";
import Header from "@/components/Header";
import image1 from '@/assets/interview-final.jpg'
import image2 from '@/assets/learning-final.jpg'
import image3 from '@/assets/networking-final.jpg'
import image4 from '@/assets/features-final.jpg'
import image5 from '@/assets/archives-final.jpg'
import image6 from '@/assets/learningLeaps-final.jpg'
import image7 from '@/assets/qna-final.jpg'
import ImageLoader from "@/components/loaders/ImageLoader";
import { Suspense } from "react";
import HeaderLoader from "@/components/loaders/HeaderLoader";
export default function Home() {
  return (
    <>
      <Suspense fallback={<HeaderLoader />}>
        <Header />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image1} />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image2} />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image3} />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image4} />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image5} />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image6} />
      </Suspense>
      <Suspense fallback={<ImageLoader />}>
        <Container image={image7} />
      </Suspense>
    </>
  );
}

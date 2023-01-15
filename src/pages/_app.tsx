import LoaderContextWrapper from "@/context/LoaderContext";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import '@/styles/app.scss'; 
const Loader = dynamic(()=>import( "@/components/Loader"),{ssr:false})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderContextWrapper>
      <Loader show message="Site under construction!"/>
      <Component {...pageProps} />
    </LoaderContextWrapper>
  );
}

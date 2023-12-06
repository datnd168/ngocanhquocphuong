import BankAccount from "@/components/weddingTemplate/v1/BankAccount";
import Banner from "@/components/weddingTemplate/v1/Banner";
import Foreword from "@/components/weddingTemplate/v1/Foreword";
import Memory from "@/components/weddingTemplate/v1/Memory";
import Nav from "@/components/weddingTemplate/v1/Nav";
import Timeline from "@/components/weddingTemplate/v1/Timeline";
import WeddingEvent from "@/components/weddingTemplate/v1/WeddingEvent";
import Footer from "@/components/weddingTemplate/v1/Footer";
import Head from "next/head";
import FloatingMusic from "@/components/audio";
// import AttendForm from "@/components/weddingTemplate/v1/AttendForm";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFC0CB]">
      {/* <head>
        <meta
          property="og:image"
          content="https://ngocanhquocphuong.vercel.app/assets/img9.jpg"
        />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:width" content="800" />
      </head> */}
      <Head>
        <meta
          property="og:image"
          content="https://ngocanhquocphuong.vercel.app/assets/img9.jpg"
        />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:width" content="800" />
      </Head>
      <Nav />
      <Banner />
      <Foreword />
      <WeddingEvent />
      {/* <Timeline /> */}
      <Memory />
      {/* <BankAccount /> */}
      {/* <AttendForm /> */}
      <Footer />
      {/* <FloatingMusic /> */}
    </div>
  );
}

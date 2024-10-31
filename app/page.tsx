import Footer from "@/components/Footer";
import Grid1 from "@/components/Physio";
import Grid2 from "@/components/Achieving_Optimal";
import Grid3 from "@/components/Best_Services";
import Grid4 from "@/components/Easy_Step";
import Grid5 from "@/components/Testimonials";
import Grid6 from "@/components/Experience";
import Grid7 from "@/components/Grid7";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full m-auto ">
      <Grid1 />
      <Grid2 />
      <Grid3 />
      <Grid4 />
      <Grid5 />
      <Grid6 />
    </main>
  );
}

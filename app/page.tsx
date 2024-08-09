"use client"
import Factbocks from "./components/factbocks";
import { MyParticles } from "./components/myparticles";

export default function Home() {
  return (
    <div>
      <MyParticles></MyParticles>
      <main className="bg-black h-screen">

        <Factbocks />
      </main>
    </div>
  );
}

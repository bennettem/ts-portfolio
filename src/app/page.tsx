import Image from "next/image";
import OpeningScreen from "./components/OpeningScreen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello</h1>
      <OpeningScreen />
    </main>
  );
}

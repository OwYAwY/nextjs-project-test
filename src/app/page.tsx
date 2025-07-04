"use client";
import WelcomeScreen from "./components/screens/welcomeScreen";
import SecondScreen from "./components/screens/secondScreen";
import ThirdScreen from "./components/screens/thirdScreen";

export default function Home() {
  return (
    <main className="flex flex-col gap-[150px]">
      <WelcomeScreen />
      <SecondScreen />
      <ThirdScreen />
    </main>
  );
}

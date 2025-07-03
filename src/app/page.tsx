"use client";
import WelcomeScreen from "./components/screens/welcomeScreen";
import SecondScreen from "./components/screens/secondScreen";
export default function Home() {
  return (
    <main>
      <WelcomeScreen />
      <SecondScreen />
      <WelcomeScreen />
    </main>
  );
}

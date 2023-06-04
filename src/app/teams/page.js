import { P1, P2 } from "@/components/text/Paragraphs";

export default function Teams() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="p-5 bg-[rgba(1,1,1,0.5)]">
        <P1>Get Started</P1>
        <P2>
          Welcome to MVP! <br /> Your journey begins here.
        </P2>
        <P2 className="w-full h-full rounded-xl p-2">Begin</P2>
      </div>
    </div>
  );
}

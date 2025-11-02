import Image from "next/image";
import { calculateTimeUntilGraduation } from "@/lib/date";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  const { years, months, days } = calculateTimeUntilGraduation();

  return (
    <div className="notion-card  min-h-screen bg-base-bg">
      <div className="flex flex-row items-center justify-between mb-6 w-full ">
        <div>
          <h1 className="card-title">hi i'm ka'ren ✌️</h1>
          <p>Computer Engineering and Science @ USC</p>
          <p>
            Graduating in {years} year {months} months {days} days
          </p>
        </div>
        <Image
          src="/me.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="avatar"
        />
      </div>
      <div>
        <div className="flex flex-col gap-2 w-full">
          <p className="card-text">
            I love building things that blend hardware and software that make
            people’s lives better. I’m interested in mathematics, AI/ML,
            distributed systems, big code, robotics, investing (crypto &
            kalshi), and risking my life for bursts of adrenaline.
          </p>
          <h2 className="font-semibold">Currently working on</h2>
          <ul className="list-disc list-inside card-text pl-8">
            <li>building a startup at lavalab</li>
            <li>researching LLM interpretability</li>
            <li>algorithmic trading </li>
            <li>mentoring future Armenian engineers and scientists</li>
          </ul>
          <h2 className="font-semibold">Projects</h2>
          {/* <ImageSlider /> */}
        </div>
      </div>
      <div className="">
        <div>Content list</div>
        <div>Current</div>
        <div>Past</div>
      </div>
    </div>
  );
}

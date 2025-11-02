import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-base-bg">
      {/* Background banner */}
      <div className="absolute z-10 inset-x-0 top-0 h-1/4 bg-[url('/banner.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/40" />
      <div className="notion-card">
        <Image
          src="/me.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="avatar"
        />

        <h1 className="card-title">hi i'm ka'ren ✌️</h1>
        <div>
          <p className="card-text">
            1 serving of Computer Engineering and Science @ USC, with a side of
            Cybersecurity Cooking at high heat for 2 more years (May 27
            graduation).
          </p>
          <p className="card-text">
            I love building things that blend hardware and software that make
            people’s lives better. I’m interested in mathematics, AI/ML,
            distributed systems, big code, robotics, investing (crypto &
            kalshi), and risking my life for bursts of adrenaline.
          </p>
        </div>
        <div className="card-sections">
          <div>Content list</div>
          <div>Current</div>
          <div>Past</div>
        </div>
      </div>
    </div>
  );
}

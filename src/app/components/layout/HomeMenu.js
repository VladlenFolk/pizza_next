import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className="h-48 relative">
      <div>
        <Image
          src={"/salad1.png"}
          layout={"fill"}
          objectFit="contain"
          alt="salad"
        />
      </div>
      <div>
        <Image
          src={"/salad2.png"}
          layout={"fill"}
          objectFit="contain"
          alt="salad"
        />
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
    </section>
  );
}

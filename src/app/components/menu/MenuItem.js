import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <Image width={242} height={240} src="/pizza.png" alt="pizza" />
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <button className=" mt-4 bg-primary text-white rounden-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}

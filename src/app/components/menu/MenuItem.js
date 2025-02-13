import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
      <Image width={100} height={100} src="/pizza.png" alt="pizza" className="max-h-auto max-h-24 block mx-auto"/>
      </div>
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

import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="space-y-2 hidden lg:block">
    <div className="flex justify-center space-x-2 w-full">
      <Image
        src="/image/Shiatsu/shiatsu1.jpeg"
        width={200}
        height={200}
        alt="image"
        className="object-cover rounded-lg"
      />
      <Image
        src="/image/ChiNeiTsang/chineitsang1.jpeg"
        width={300}
        height={200}
        alt="image"
        className="object-cover rounded-lg"
      />
    </div>
    <div className="flex justify-center space-x-2">
      <Image
        src="/image/ReflexologieCraintFacial/craintfacial1.jpeg"
        width={300}
        height={200}
        alt="image"
        className="object-cover rounded-lg"
      />
      <Image
        src="/image/Shiatsu/shiatsu3.jpeg"
        width={200}
        height={200}
        alt="image"
        className="object-cover rounded-lg"
      />
    </div>
  </div>
  )
}
export default ImageGrid
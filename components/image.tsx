import NextImage from "next/image"

interface ImageProps {
  alt: string
  src: string | any
  width?: number
  height?: number
}

const CustomImage = ({ src, width, height, alt }: ImageProps): JSX.Element => (
  <div className="overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
    <NextImage
      className="transition duration-500 align-middle border-none max-w-full h-auto rounded-lg transform hover:-translate-y-1 hover:scale-110 cover"
      objectFit="cover"
      width={width || 300}
      height={height || 500}
      src={src}
      alt={alt || "image"}
    />
  </div>
)

export default CustomImage

import {clsx} from 'clsx'
import Image from 'next/image'
function ImageContainer({image, imageAlt, isBig,width, height}) {
  return (
    <div className="mb-8 l:mb-0 w-full l:w-[50%] max-w-full flex justify-center">
      <Image
        width={width}
        height={height}
        src={image}
        alt={imageAlt}
        className={clsx(
          isBig ? "w-full h-full l:w-[80%] l:h-auto"
                : 'w-[80%] h-[80%] l:h-auto')}
      />
    </div>
  );
}

export default ImageContainer;
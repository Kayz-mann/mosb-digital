import Image from "next/image";
import Marquee from "react-fast-marquee";

const SponsorSlider = ({ images }: any) => {
  return (
    <div
      style={{
        height: "20vh",
        background: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Marquee>
        {images.map(
          (
            image: string,
            index: number // Update type of index to number
          ) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Sponsor ${index}`}
                width={200} // Adjust width as needed
                height={150} // Adjust height as needed
                objectFit="contain"
                className="mx-2"
              />
            </div>
          )
        )}
      </Marquee>
    </div>
  );
};

export default SponsorSlider;

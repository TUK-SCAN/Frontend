import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

interface BannerProps {
  type: 1 | 2 | 3;
}

const Banner = ({ type }: BannerProps) => {
  return (
    <div className="flex h-[200px] w-full items-center justify-center bg-blue-primary text-white">
      {type === 1 && <Banner1 />}
      {type === 2 && <Banner2 />}
      {type === 3 && <Banner3 />}
    </div>
  );
};

export default Banner;

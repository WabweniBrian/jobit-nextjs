import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex-col min-h-screen text-center flex-center-center">
      <div className="-mt-20 image-wrapper">
        <Image
          src="/404.png"
          alt="404 image"
          layout="fill"
          className="mx-auto !relative !object-contain !h-[350px] !w-[350px]"
        />
      </div>
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
    </div>
  );
};

export default PageNotFound;

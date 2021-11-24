export default function HeroImage({
  imageSrc,
  imageAlt,
  textReview,
  textUser,
}) {
  return (
    <div className="relative" style={{ width: 369, height: 440 }}>
      <div
        className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
        style={{ width: 324, height: 374 }}
      />
      <div className="absolute w-full h-full -mb-8 -ml-8 shadow-xl">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12 -mb-4 shadow-xl">
        <p className="text-gray-900 text-base">{textReview}</p>
        <p className="text-gray-600 text-sm">{textUser}</p>
      </div>
    </div>
  );
}

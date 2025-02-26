export default function EventCardSkeleton() {
  return (
    <div className="flex flex-col w-80 h-96 border-2 border-solid border-white bg-black group rounded-md gap-4 ">
      <div className="skeleton w-full aspect-video"></div>
      <div className="flex flex-col p-4 gap-3">
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-14"></div>
        <div className="skeleton h-4 w-ful"></div>
      </div>
    </div>
  );
}

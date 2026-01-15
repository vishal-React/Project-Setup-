import confuseBoy from "@/assets/sadBoy-removebg-preview.png";

const NotFound = () => {
  return (
    <div
      className="relative h-dvh w-dvw grid p-14 select-none"
      style={{
        background: `
          radial-gradient(at top left, #5f8a9a, transparent 60%),
          radial-gradient(at top right, #bad5cc, transparent 60%),
          radial-gradient(at bottom left, #4d7484, transparent 60%),
          radial-gradient(at bottom right, #adbeab, transparent 60%)
        `,
        backgroundColor: "#adbeab",
      }}
    >
      {/* BIG 404 behind everything */}
      <h1 className="p-14 pl-24 absolute inset-0 text-[15rem] md:text-[30rem] font-extrabold text-white/50 flex justify-center z-0 drop-shadow-lg text-center tracking-wider">
        404
      </h1>

      {/* Centered Image */}
      <div className="flex justify-center z-10">
        <img
          src={confuseBoy}
          alt="Sad Boy 404"
          className="h-[70vh] object-fill drop-shadow-xl "
          draggable="false"
        />
      </div>

      {/* Message & Button */}
      <div className="flex flex-col gap-4 items-center justify-center z-10">
        <div>
          <h1 className="text-6xl font-bold text-white drop-shadow-lg text-center">
            Oh No!
          </h1>
          <p className="text-xl text-white/80 drop-shadow-md text-center">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <button
          className=" cursor-pointer
                      px-10 py-2
                      text-2xl
                      rounded-2xl
                      bg-white/20
                      backdrop-blur-md
                      border border-white/30
                      text-white
                      shadow-lg
                      hover:bg-white/30
                      hover:scale-105
                      transition-all
                      duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

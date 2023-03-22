import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`/watch/${movieId}`)}>
      <div className="bg-white rounded-md py-1 md:py-2 px-1 md:px-2 md:pr-3 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition">
        <BsFillPlayFill size={25} className="mr-1" /> Play
      </div>
    </button>
  );
};

export default PlayButton;

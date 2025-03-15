import { AspectRatio, Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error || !trailers) throw error;

  const latest = trailers.results[0];

  return latest ? (
    <AspectRatio maxWidth="2xl" ratio={16 / 9}>
      <video src={latest.data["480"]} poster={latest.preview} controls />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;

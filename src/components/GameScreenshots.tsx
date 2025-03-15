import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  console.log(screenshots);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} padding="10px">
      {screenshots?.results.map((s) => (
        <Image key={s.id} src={s.image} borderRadius="10px" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

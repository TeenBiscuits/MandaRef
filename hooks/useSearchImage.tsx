import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { FC } from "react";

interface UseInditexProps {
  query: string;
}

export const useSearchImage: FC<UseInditexProps> = ({ query }) => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const token = "TOKEN_GOES_HERE";
      const response = await fetch(
        `https://api.inditex.com/pubvsearch/products?query=${query}&page=1&perPage=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return await response.json();
    },
  });

  return {
    data,
    error,
    isPending,
  };
};

import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface UseInditexProps {
  image: string;
}

export const useSearchImage: FC<UseInditexProps> = ({
  image,
  page,
  pageSize,
}) => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData", image, page, pageSize],
    queryFn: async () => {
      const token = "TOKEN_GOES_HERE";

      const url = `https://api.inditex.com/pubvsearch/products?image=${image}&page=${page}&perPage=${pageSize}`;
      console.log(url);
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return await response.json();
    },
  });

  return {
    data,
    error,
    isPending,
  };
};

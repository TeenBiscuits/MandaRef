import { Brands } from "@/enums/brands.type";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { ClothesInfo } from "../components/ClotheCard";

export enum InditexBrand {
  lefties = "lefties",
  massimo_dutti = "massimo_dutti",
  oysho = "oysho",
  pull_and_bear = "pull_and_bear",
  stradivarius = "stradivarius",
  zara = "zara",
  zara_home = "zara_home",
}

interface UseInditexProps {
  query: string;
  brand: Brands;
  page: number;
  pageSize: number;
}

interface QueryResult {
  isPending: any;
  error: any;
  data: ClothesInfo[];
  isFetching: any;
}

// FUNCIÓN EN DESUSO SE DEBE HARDCODEAR EL TOKEN A LA HORA DE ENSEÑAR
// EL FUNCIONAMIENTO DE ESTA APP.
const fetchOAuthToken = async () => {
  const response = await fetch(
    "https://auth.inditex.com:443/openam/oauth2/itxid/itxidmp/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!,
        scope: "technology.catalog.read",
      }).toString(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch OAuth token");
  }

  const data = await response.json();
  return data.id_token;
};

export const useSearchText: FC<UseInditexProps> = ({
  query,
  brand,
  page,
  pageSize,
}): QueryResult => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData", query, brand, page, pageSize],
    queryFn: async () => {
      // ID TOKEN HARDCODED
      const token = "TOKEN_GOES_HERE";

      const queryTrim = query.trim();
      const url = `https://api.inditex.com/searchpmpa/products?query=${queryTrim}&brand=${brand}&page=${page}&perPage=${pageSize}`;
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

  return { isPending, error, data, isFetching };
};

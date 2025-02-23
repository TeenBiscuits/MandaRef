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
    },
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
      const token =
        "eyJ0eXAiOiJKV1QiLCJraWQiOiJZMjZSVjltUFc3dkc0bWF4NU80bDBBd2NpSVE9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiOFhwX092OWFLaC1JOC12SFg3M3V3QSIsInN1YiI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdWRpdFRyYWNraW5nSWQiOiJiYzE4MjA4Mi01OWZjLTQ5NjItYjllNC0xMjIwODg4NjEwZTEtMTI2MTU0OTc2IiwiY3VzdG9tIjp7ImNvbnN1bWVyT3JnSWQiOiJwYWJsb3BvcnRhczAwX2dtYWlsLmNvbSIsIm1hcmtldHBsYWNlQ29kZSI6Im9wZW4tZGV2ZWxvcGVyLXBvcnRhbCIsIm1hcmtldHBsYWNlQXBwSWQiOiI1ODNkM2ExZS1jZjE0LTQwMWItOGI1Zi0yMjkzNzA0M2JlMzMifSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmluZGl0ZXguY29tOjQ0My9vcGVuYW0vb2F1dGgyL2l0eGlkL2l0eGlkbXAiLCJ0b2tlbk5hbWUiOiJpZF90b2tlbiIsInVzZXJJZCI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdWQiOiJvYXV0aC1ta3BsYWNlLW9hdXRoaXJtbnZrZ3JnaGVlbmNxb2tjcHJvcHJvIiwiaWRlbnRpdHlUeXBlIjoic2VydmljZSIsImF6cCI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdXRoX3RpbWUiOjE3NDAyNzU4MTIsInNjb3BlIjoibWFya2V0IHRlY2hub2xvZ3kuY2F0YWxvZy5yZWFkIG9wZW5pZCIsInJlYWxtIjoiL2l0eGlkL2l0eGlkbXAiLCJ1c2VyVHlwZSI6ImV4dGVybmFsIiwiZXhwIjoxNzQwMjc5NDEyLCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTc0MDI3NTgxMiwiYXV0aExldmVsIjoiMSJ9.M1Xb79skqZmwYKXbjszOQ1DYb67NjZH8K2fhs3cEaVbZM8EeYr0Fb0EPRrXaonvF4FYe1lezDlJ11rtwoONvWeF71JVkV_x5sLXLHE4uAnzCJUlQ4uRWW4CuNFpmTS9B3ni8bBAlrO0iymuGFqmri8EprBCiqc4HFT8iA-TUCwkBumXdICstVGpQlvmb5yFTXRsgBCOxQ2HaImyvH4kITr73bTwgakLTLILa_zUKQCF_S8pHxNGmCB85B8-NmhQWmQlvhN2kRYJrEU9ksbxjip96fhidZoZZSkmXYmP58T_qMQbupQ83GZzwhb6U9KNar0x8KHVM1xjgbDSsK1UkwA";

      const queryTrim = query.trim();
      const url = `https://api.inditex.com/searchpmpa/products?query=${queryTrim}&brand=${brand}&page=${page}&perPage=${pageSize}`;
      console.log(url);
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    },
  });

  return { isPending, error, data, isFetching };
};

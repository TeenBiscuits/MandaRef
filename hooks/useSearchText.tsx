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
        "eyJ0eXAiOiJKV1QiLCJraWQiOiJZMjZSVjltUFc3dkc0bWF4NU80bDBBd2NpSVE9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiMmRxY3VQcjZkLVBUbHJhYTVJUDNIUSIsInN1YiI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdWRpdFRyYWNraW5nSWQiOiJhOTEwMzY2ZC01ZWM5LTQ5ZWMtYTU5Mi1mZDc1Y2M4N2M2NDYtMTI4MzA5MTg3IiwiY3VzdG9tIjp7ImNvbnN1bWVyT3JnSWQiOiJwYWJsb3BvcnRhczAwX2dtYWlsLmNvbSIsIm1hcmtldHBsYWNlQ29kZSI6Im9wZW4tZGV2ZWxvcGVyLXBvcnRhbCIsIm1hcmtldHBsYWNlQXBwSWQiOiI1ODNkM2ExZS1jZjE0LTQwMWItOGI1Zi0yMjkzNzA0M2JlMzMifSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmluZGl0ZXguY29tOjQ0My9vcGVuYW0vb2F1dGgyL2l0eGlkL2l0eGlkbXAiLCJ0b2tlbk5hbWUiOiJpZF90b2tlbiIsInVzZXJJZCI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdWQiOiJvYXV0aC1ta3BsYWNlLW9hdXRoaXJtbnZrZ3JnaGVlbmNxb2tjcHJvcHJvIiwiaWRlbnRpdHlUeXBlIjoic2VydmljZSIsImF6cCI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdXRoX3RpbWUiOjE3NDAzMTA2MTksInNjb3BlIjoibWFya2V0IHRlY2hub2xvZ3kuY2F0YWxvZy5yZWFkIG9wZW5pZCIsInJlYWxtIjoiL2l0eGlkL2l0eGlkbXAiLCJ1c2VyVHlwZSI6ImV4dGVybmFsIiwiZXhwIjoxNzQwMzE0MjE5LCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTc0MDMxMDYxOSwiYXV0aExldmVsIjoiMSJ9.qxrH7xN50TMpRXs1K7xpDm-3tjLGU0Aq-jnIet7w3HcA5OlXuf_8JVUvTPVnTR4QWeKd80NCDlx9sP2028-OJ1SgXM_Xhe6jW3EHQzLTfMorhEDw_XGRixg2ygyKYUKdvYWYxSSN1O-C40vma9uqTtF21zaMsT1646ThgPpGgSeJNDPaD6-rSqMJkzsAzmNIsWVInGX929Vd_Xh2T8IugoP1Uan03kfKBlL9ZXI2JFySoE3SSd_FDpzzgDj-c-kPOd6T6N6DOjqYhRcpEtIy0ZC7GSpjyklBZXfDFRo1meT8FraNY_gPllMPpNkl5r4EFB0JLtlAuthbjOyM8T34YA";
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

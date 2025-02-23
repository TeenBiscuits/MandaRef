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
        "eyJ0eXAiOiJKV1QiLCJraWQiOiJZMjZSVjltUFc3dkc0bWF4NU80bDBBd2NpSVE9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiMEYycTlyX0lIVDhucXg5Z1lRcGV4dyIsInN1YiI6Im9hdXRoLW1rcHNib3gtb2F1dGh5dmltb212dm9id25kdnpkdGFzbmJ4cHJvIiwiYXVkaXRUcmFja2luZ0lkIjoiYmMxODIwODItNTlmYy00OTYyLWI5ZTQtMTIyMDg4ODYxMGUxLTEyNzkyMjQxOCIsImN1c3RvbSI6eyJjb25zdW1lck9yZ0lkIjoiYW5kcmVzcmMzNDVfZ21haWwuY29tIiwibWFya2V0cGxhY2VDb2RlIjoib3Blbi1kZXZlbG9wZXItcG9ydGFsIiwibWFya2V0cGxhY2VBcHBJZCI6ImJlMjU0YTNmLTk4ZjgtNDBiNS1hM2Q2LTRkZGE3YzdjMTI5ZSJ9LCJpc3MiOiJodHRwczovL2F1dGguaW5kaXRleC5jb206NDQzL29wZW5hbS9vYXV0aDIvaXR4aWQvaXR4aWRtcC9zYW5kYm94IiwidG9rZW5OYW1lIjoiaWRfdG9rZW4iLCJ1c2VySWQiOiJvYXV0aC1ta3BzYm94LW9hdXRoeXZpbW9tdnZvYnduZHZ6ZHRhc25ieHBybyIsImF1ZCI6Im9hdXRoLW1rcHNib3gtb2F1dGh5dmltb212dm9id25kdnpkdGFzbmJ4cHJvIiwiaWRlbnRpdHlUeXBlIjoic2VydmljZSIsImF6cCI6Im9hdXRoLW1rcHNib3gtb2F1dGh5dmltb212dm9id25kdnpkdGFzbmJ4cHJvIiwiYXV0aF90aW1lIjoxNzQwMzA4NTkxLCJzY29wZSI6Im1hcmtldCB0ZWNobm9sb2d5LmNhdGFsb2cucmVhZCBvcGVuaWQiLCJyZWFsbSI6Ii9pdHhpZC9pdHhpZG1wL3NhbmRib3giLCJ1c2VyVHlwZSI6ImV4dGVybmFsIiwiZXhwIjoxNzQwMzEyMTkzLCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTc0MDMwODU5MSwiYXV0aExldmVsIjoiMSJ9.dmQNB4uNUW5gkaeh1zAaNYf2U_WY8XxCGCtWwWzEZlyQQauojKqJ-AsrbbPeiQfrC8bTPqimnj_Tjcsa5pPaKJVwBYaCOwo8gEPh6Ome0F5fABM6TtBB_L5fdLU6MIRkgyqTWK4cyswqBSBmXU9zr-LBi0ArRki5RpD9mFkSgO5Z1xr3cDfkXm_JgnHUkxaDqVtEzAdNK4jtYUDFiONeL7UUMa1qPJalJQaj1jheWyCIOUOTtloIpIyI7L8i7hHSKm0LQmpA6ucnzehnAXf5D0xr2YlGcxIl2F71xrsxkIj2Kb6xu8oi90eiQoVmUdNhwlqNPs4tC9-d774e1QrWsg";

      const queryTrim = query.trim();
      const url = `https://api-sandbox.inditex.com/searchpmpa-sandbox/products?query=${queryTrim}&brand=${brand}&page=${page}&perPage=${pageSize}`;
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

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
      const token =
        "eyJ0eXAiOiJKV1QiLCJraWQiOiJZMjZSVjltUFc3dkc0bWF4NU80bDBBd2NpSVE9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiNzFra0hRS0p6dWs3TGd3MnZOcTVSdyIsInN1YiI6Im9hdXRoLW1rcHNib3gtb2F1dGh5dmltb212dm9id25kdnpkdGFzbmJ4cHJvIiwiYXVkaXRUcmFja2luZ0lkIjoiYTkxMDM2NmQtNWVjOS00OWVjLWE1OTItZmQ3NWNjODdjNjQ2LTEyNjY2MDQ1NyIsImN1c3RvbSI6eyJjb25zdW1lck9yZ0lkIjoiYW5kcmVzcmMzNDVfZ21haWwuY29tIiwibWFya2V0cGxhY2VDb2RlIjoib3Blbi1kZXZlbG9wZXItcG9ydGFsIiwibWFya2V0cGxhY2VBcHBJZCI6ImJlMjU0YTNmLTk4ZjgtNDBiNS1hM2Q2LTRkZGE3YzdjMTI5ZSJ9LCJpc3MiOiJodHRwczovL2F1dGguaW5kaXRleC5jb206NDQzL29wZW5hbS9vYXV0aDIvaXR4aWQvaXR4aWRtcC9zYW5kYm94IiwidG9rZW5OYW1lIjoiaWRfdG9rZW4iLCJ1c2VySWQiOiJvYXV0aC1ta3BzYm94LW9hdXRoeXZpbW9tdnZvYnduZHZ6ZHRhc25ieHBybyIsImF1ZCI6Im9hdXRoLW1rcHNib3gtb2F1dGh5dmltb212dm9id25kdnpkdGFzbmJ4cHJvIiwiaWRlbnRpdHlUeXBlIjoic2VydmljZSIsImF6cCI6Im9hdXRoLW1rcHNib3gtb2F1dGh5dmltb212dm9id25kdnpkdGFzbmJ4cHJvIiwiYXV0aF90aW1lIjoxNzQwMjgyNTgxLCJzY29wZSI6Im1hcmtldCB0ZWNobm9sb2d5LmNhdGFsb2cucmVhZCBvcGVuaWQiLCJyZWFsbSI6Ii9pdHhpZC9pdHhpZG1wL3NhbmRib3giLCJ1c2VyVHlwZSI6ImV4dGVybmFsIiwiZXhwIjoxNzQwMjg2MTgzLCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTc0MDI4MjU4MSwiYXV0aExldmVsIjoiMSJ9.fmLhdd2V5bIANEPF0_RtiTmJp2YVgsXoG2aQ7GPYxm9NyidnXI-HzW_6q-WAfkNVj9xaDwnwJYi74Kpx-dlCGAYOxdNTTxIiV16R6FnktZXeiKppygzqwZADhxjlheM45iKqoZKzLVf9pAAkBqOFZITfj0SuFgS8VOfWSEH4ia11IzryCCtDbFOZiNEhPVfX5q5aRT2C0skA5pL-2YSZrnSJZLICy3nJbDXttjwvpE-gIqLFjvxYT53jdhmWxf0NLcvQ2LXtlNYUFLOyGmfpQejABrTP94Zh7CGrXMeLqES6IlVAujMiTAEBw3binjNghG4_bGxliimnr84Otm_BEQ";
      const url = `https://api-sandbox.inditex.com/pubvsearch-sandbox/products?image=${image}&page=${page}&perPage=${pageSize}`;
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

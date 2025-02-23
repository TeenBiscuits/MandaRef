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
        "eyJ0eXAiOiJKV1QiLCJraWQiOiJZMjZSVjltUFc3dkc0bWF4NU80bDBBd2NpSVE9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiMmRxY3VQcjZkLVBUbHJhYTVJUDNIUSIsInN1YiI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdWRpdFRyYWNraW5nSWQiOiJhOTEwMzY2ZC01ZWM5LTQ5ZWMtYTU5Mi1mZDc1Y2M4N2M2NDYtMTI4MzA5MTg3IiwiY3VzdG9tIjp7ImNvbnN1bWVyT3JnSWQiOiJwYWJsb3BvcnRhczAwX2dtYWlsLmNvbSIsIm1hcmtldHBsYWNlQ29kZSI6Im9wZW4tZGV2ZWxvcGVyLXBvcnRhbCIsIm1hcmtldHBsYWNlQXBwSWQiOiI1ODNkM2ExZS1jZjE0LTQwMWItOGI1Zi0yMjkzNzA0M2JlMzMifSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmluZGl0ZXguY29tOjQ0My9vcGVuYW0vb2F1dGgyL2l0eGlkL2l0eGlkbXAiLCJ0b2tlbk5hbWUiOiJpZF90b2tlbiIsInVzZXJJZCI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdWQiOiJvYXV0aC1ta3BsYWNlLW9hdXRoaXJtbnZrZ3JnaGVlbmNxb2tjcHJvcHJvIiwiaWRlbnRpdHlUeXBlIjoic2VydmljZSIsImF6cCI6Im9hdXRoLW1rcGxhY2Utb2F1dGhpcm1udmtncmdoZWVuY3Fva2Nwcm9wcm8iLCJhdXRoX3RpbWUiOjE3NDAzMTA2MTksInNjb3BlIjoibWFya2V0IHRlY2hub2xvZ3kuY2F0YWxvZy5yZWFkIG9wZW5pZCIsInJlYWxtIjoiL2l0eGlkL2l0eGlkbXAiLCJ1c2VyVHlwZSI6ImV4dGVybmFsIiwiZXhwIjoxNzQwMzE0MjE5LCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTc0MDMxMDYxOSwiYXV0aExldmVsIjoiMSJ9.qxrH7xN50TMpRXs1K7xpDm-3tjLGU0Aq-jnIet7w3HcA5OlXuf_8JVUvTPVnTR4QWeKd80NCDlx9sP2028-OJ1SgXM_Xhe6jW3EHQzLTfMorhEDw_XGRixg2ygyKYUKdvYWYxSSN1O-C40vma9uqTtF21zaMsT1646ThgPpGgSeJNDPaD6-rSqMJkzsAzmNIsWVInGX929Vd_Xh2T8IugoP1Uan03kfKBlL9ZXI2JFySoE3SSd_FDpzzgDj-c-kPOd6T6N6DOjqYhRcpEtIy0ZC7GSpjyklBZXfDFRo1meT8FraNY_gPllMPpNkl5r4EFB0JLtlAuthbjOyM8T34YA";
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

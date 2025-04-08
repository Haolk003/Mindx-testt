import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useTeachers() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/api/teachers",
    fetcher
  );

  return {
    teachers: data || [],
    isLoading,
    isError: error,
  };
}

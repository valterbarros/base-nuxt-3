import { useQuery } from "@tanstack/vue-query";

export function fetchT() {
  const { isLoading }  = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      return 'test';
    },
    staleTime: 1000,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,

    initialDataUpdatedAt: 0,
    initialData: ''
  });

  return { isLoading };
}

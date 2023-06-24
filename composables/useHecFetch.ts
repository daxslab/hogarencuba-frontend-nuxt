export const useHecFetch: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()
    return useFetch(request, {
        baseURL: config.public.HEC_API_HOST,
        headers: {
            "Accept": "application/json",
        },
        ...opts
    })
}
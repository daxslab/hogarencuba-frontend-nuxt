// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            HEC_API_HOST: process.env.HEC_API_HOST,
        }
    },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        public: {
            HEC_API_HOST: process.env.HEC_API_HOST,
        }
    },
    modules: [
        '@invictus.codes/nuxt-vuetify'
    ],
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },

        moduleOptions: {
            /* nuxt-vuetify module options */
            treeshaking: true,
            useIconCDN: true,

            /* vite-plugin-vuetify options */
            styles: true,
            autoImport: true,
        }
    }
})

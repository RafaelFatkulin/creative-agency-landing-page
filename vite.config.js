import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
    base: '/creative-agency-landing-page/',
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ]
        }
    }
})
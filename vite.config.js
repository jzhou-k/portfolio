import { defineConfig } from "vite";
import path from 'path';


export default defineConfig({
    base: "/portfolio/", 
    build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            about: path.resolve(__dirname, 'projects/projects.html')
          }
        }
      }
})


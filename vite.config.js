import { defineConfig } from "vite";
import path from 'path';


export default defineConfig({
    base: "/portfolio/", 
    build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            project: path.resolve(__dirname, 'projects/projects.html'),
            about: path.resolve(__dirname,'about.html'),
            playground: path.resolve(__dirname, 'playground.html'),
            arts: path.resolve(__dirname, 'illustrations/art.html'), 

          }
        }
      }
})


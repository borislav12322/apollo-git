import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), viteTsconfigPaths()],
  }
})

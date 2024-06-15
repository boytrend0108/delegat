import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/boytrend0108/',
  plugins: [vue(), svgLoader()],
  server: {
    allowedHosts: 'all',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './public'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/utils/variables.scss";
          @import "@/assets/styles/utils/mixins/mixins.scss";
          @import "@/assets/styles/utils/mixins/msg_mixins.scss";
          @import "@/assets/styles/utils/mixins/flags.scss";
          @import "@/assets/styles/utils/mixins/buttons.scss";
        `,
      },
    },
  },
});

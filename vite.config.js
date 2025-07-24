import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      {
        find: 'Root/package.json',
        replacement: fileURLToPath(new URL('./package.json', import.meta.url)),
      },
      {
        find: 'Root/tailwind.config.js',
        replacement: fileURLToPath(new URL('./tailwind.config.js', import.meta.url)),
      },

      {
        find: 'Api',
        replacement: fileURLToPath(new URL('./src/process/api', import.meta.url)),
      },
      {
        find: 'Helpers',
        replacement: fileURLToPath(new URL('./src/process/helpers', import.meta.url)),
      },
      {
        find: 'Hooks',
        replacement: fileURLToPath(new URL('./src/process/hooks', import.meta.url)),
      },
      {
        find: 'Locales',
        replacement: fileURLToPath(new URL('./src/process/locales', import.meta.url)),
      },
      {
        find: 'Reducers',
        replacement: fileURLToPath(new URL('./src/process/reducers', import.meta.url)),
      },
      {
        find: 'Redux',
        replacement: fileURLToPath(new URL('./src/process/redux', import.meta.url)),
      },
      {
        find: 'Repositories',
        replacement: fileURLToPath(
          new URL('./src/process/repositories', import.meta.url),
        ),
      },
      {
        find: 'Routes',
        replacement: fileURLToPath(new URL('./src/process/routes', import.meta.url)),
      },
      {
        find: 'Sagas',
        replacement: fileURLToPath(new URL('./src/process/sagas', import.meta.url)),
      },
      {
        find: 'Constants',
        replacement: fileURLToPath(new URL('./src/process/constants', import.meta.url)),
      },
      {
        find: 'Images',
        replacement: fileURLToPath(new URL('./src/show/assets/images', import.meta.url)),
      },
      {
        find: 'Icons',
        replacement: fileURLToPath(new URL('./src/show/assets/icons', import.meta.url)),
      },
      {
        find: 'Theme',
        replacement: fileURLToPath(new URL('./src/show/assets/theme', import.meta.url)),
      },
      {
        find: 'Components',
        replacement: fileURLToPath(new URL('./src/show/components', import.meta.url)),
      },
      {
        find: 'Containers',
        replacement: fileURLToPath(new URL('./src/show/containers', import.meta.url)),
      },
      {
        find: 'Navigator',
        replacement: fileURLToPath(new URL('./src/show/navigator', import.meta.url)),
      },
      {
        find: 'Pages',
        replacement: fileURLToPath(new URL('./src/show/pages', import.meta.url)),
      },
    ],
  },
});

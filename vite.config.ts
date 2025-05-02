import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'BistroBeast - Restaurant Management System',
          short_name: 'BistroBeast',
          description: 'Comprehensive restaurant management system',
          theme_color: '#3b82f6',
          background_color: '#ffffff',
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        strategies: 'injectManifest',
        srcDir: 'public',
        filename: 'sw.js',
        injectRegister: 'auto',
        injectManifest: {
          injectionPoint: undefined
        },
        devOptions: {
          enabled: true,
          type: 'module'
        }
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz'
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      host: true,
      port: 3002,
    },
    preview: {
      port: 3002,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            ui: ['lucide-react', 'react-hot-toast'],
            charts: ['recharts'],
          },
        },
      },
      sourcemap: mode !== 'production',
      chunkSizeWarningLimit: 1000,
      reportCompressedSize: true
    },
    define: {
      'process.env': {},
    },
  };

  // Add bundle analyzer in analyze mode
  if (mode === 'analyze') {
    config.plugins.push(
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true
      })
    );
  }

  return config;
});
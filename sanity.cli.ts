import { defineCliConfig } from 'sanity/cli'
import path from 'path'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '93fxasct',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  vite: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, './src'),
        },
      },
    }
  },
})
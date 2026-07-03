import { cpSync, createReadStream, existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function artifactsPlugin(): Plugin {
  const artifactsDir = resolve(__dirname, 'artifacts')

  return {
    name: 'artifacts',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/artifacts/')) {
          next()
          return
        }

        const filePath = resolve(artifactsDir, req.url.slice('/artifacts/'.length))

        if (!filePath.startsWith(artifactsDir) || !existsSync(filePath)) {
          next()
          return
        }

        const { size } = statSync(filePath)
        res.setHeader('Content-Length', size)
        createReadStream(filePath).pipe(res)
      })
    },
    closeBundle() {
      const dest = resolve(__dirname, 'dist/artifacts')
      if (existsSync(artifactsDir)) {
        cpSync(artifactsDir, dest, { recursive: true })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), artifactsPlugin()],
})

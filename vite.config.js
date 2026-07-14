import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { access, copyFile, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

async function exists(path) {
  try {
    await access(path)
    return true
  } catch (error) {
    if (error.code === 'ENOENT') return false
    throw error
  }
}

function sitesOutput() {
  let root = ''

  return {
    name: 'sites-output',
    apply: 'build',
    configResolved(config) {
      root = config.root
    },
    async closeBundle() {
      const dist = resolve(root, 'dist')
      const server = resolve(dist, 'server')
      const metadata = resolve(dist, '.openai')
      const hosting = resolve(root, '.openai', 'hosting.json')

      await mkdir(server, { recursive: true })
      await copyFile(resolve(root, 'worker', 'index.js'), resolve(server, 'index.js'))
      await rm(metadata, { recursive: true, force: true })

      if (await exists(hosting)) {
        await mkdir(metadata, { recursive: true })
        await copyFile(hosting, resolve(metadata, 'hosting.json'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitesOutput()],
})

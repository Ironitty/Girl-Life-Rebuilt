import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { defineConfig } from 'vite'

import { readFileSync, writeFileSync, copyFileSync, appendFileSync } from 'fs'
import { join } from 'path'

const templatePath = join(__dirname, 'index.src.html')

const debugLogPlugin = {
  name: 'debug-log',
  configureServer(server: any) {
    server.middlewares.use('/__debug', (req: any, res: any) => {
      if (req.method !== 'POST') { res.end(); return }
      let body = ''
      req.on('data', (c: any) => { body += c })
      req.on('end', () => {
        const filePath = join(__dirname, 'debug-log.txt')
        appendFileSync(filePath, body + '\n')
        const lines = readFileSync(filePath, 'utf-8').trim().split('\n')
        if (lines.length > 20) writeFileSync(filePath, lines.slice(-20).join('\n') + '\n')
        res.end('ok')
      })
    })
  },
}

const firefoxFileProtocolFix = {
  name: 'firefox-file-protocol-fix',
  enforce: 'post' as const,
  buildStart() {
    copyFileSync(templatePath, join(__dirname, 'index.html'))
  },
  writeBundle() {
    const distHtml = join(__dirname, 'dist', 'index.html')
    const html = readFileSync(distHtml, 'utf-8')
    const fixed = html.replace(/<script type="module" crossorigin>/g, '<script>')
    writeFileSync(distHtml, fixed)
    copyFileSync(distHtml, join(__dirname, 'index.html'))
  },
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile(), debugLogPlugin, firefoxFileProtocolFix],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
  },
  server: {
    watch: {
      ignored: ['**/images/**', '**/sound/**'],
    },
  },
})

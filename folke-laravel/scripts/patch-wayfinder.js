import fs from 'node:fs'
import path from 'node:path'

const files = [
  'node_modules/@laravel/vite-plugin-wayfinder/dist/index.mjs',
  'node_modules/@laravel/vite-plugin-wayfinder/dist/index.cjs',
]

for (const file of files) {
  const resolved = path.resolve(file)

  if (!fs.existsSync(resolved)) {
    continue
  }

  let content = fs.readFileSync(resolved, 'utf8')

  const updated = content.replaceAll(
    'args.push("--with-form");',
    ''
  )

  if (content !== updated) {
    fs.writeFileSync(resolved, updated)
    console.log(`Patched ${file}`)
  } else {
    console.log(`No patch needed for ${file}`)
  }
}
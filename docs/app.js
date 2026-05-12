
import { createApiReference } from './node_modules/@scalar/api-reference/dist/index.mjs'

const isLocal = window.location.hostname === 'localhost'

createApiReference('#app', {
  url: isLocal
    ? 'http://localhost:8080/v3/api-docs'
    : './openapi.json',

  theme: 'default',
  layout: 'modern',
  darkMode: true,
})

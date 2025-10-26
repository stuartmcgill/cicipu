module.exports = {
  apps: [
    {
      name: 'cicipu-main',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: process.env
    }
  ]
}

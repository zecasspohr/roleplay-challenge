
(async () => {
  const PORT = 5000
  const app = (await import('./config/app')).default
  app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))
})()

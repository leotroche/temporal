const { PORT } = process.env

export const ENV = {
  PORT: Number(PORT) || 3000,
}

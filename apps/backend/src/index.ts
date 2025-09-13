import { ENV } from '@/config/environment'
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true,
})

fastify.get('/', async function handler(_request, _reply) {
  return { message: 'Hello, World!' }
})

try {
  await fastify.listen({ port: ENV.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

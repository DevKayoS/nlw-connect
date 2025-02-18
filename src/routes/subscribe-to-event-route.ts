import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const subscriberToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscribers',
    {
      schema: {
        summary: 'Subscribes someone to the event',
        tags: ['Subscriton'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      return reply.status(201).send({
        name,
        email,
      })
    }
  )
}

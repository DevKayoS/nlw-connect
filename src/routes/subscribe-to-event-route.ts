import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { subscribeToEvent } from '../functions/subscrib-to-event'

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
                        status: z.boolean(),
                        msg: z.string(),
                        subscribe: z.object({
                            id: z.string().uuid(),
                            name: z.string(),
                            email: z.string().email(),
                            createdAt: z.date(),
                        }),
                    }),
                },
            },
        },
        async (request, reply) => {
            const { name, email } = request.body

            const subscribe = await subscribeToEvent({ name, email })

            return reply.status(201).send(subscribe)
        }
    )
}

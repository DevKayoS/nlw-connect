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
                    referrer: z.string().nullish(),
                }),
                response: {
                    201: z.object({
                        subscriberId: z.string(),
                    }),
                },
            },
        },
        async (request, reply) => {
            const { name, email, referrer } = request.body

            const subscribe = await subscribeToEvent({
                name,
                email,
                referrerId: referrer,
            })

            return reply.status(201).send(subscribe)
        }
    )
}

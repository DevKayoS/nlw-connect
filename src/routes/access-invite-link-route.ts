import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { env } from '../env'
import { accessInviteLink } from '../functions/access-invite-link'
import { redis } from '../redis/client'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
    app.get(
        '/invite/:subscriberId',
        {
            schema: {
                summary: 'Access invite link and redirect user',
                tags: ['Referral'],
                params: z.object({
                    subscriberId: z.string(),
                }),
                response: {
                    302: z.null(),
                },
            },
        },
        async (request, reply) => {
            const { subscriberId } = request.params

            await accessInviteLink({ subscriberId })

            const redirect = new URL(env.WEB_URL)

            redirect.searchParams.set('referrer', subscriberId)

            return reply.redirect(redirect.toString(), 302)
        }
    )
}

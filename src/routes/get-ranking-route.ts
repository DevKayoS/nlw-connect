import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getRank } from '../functions/get-ranking'
import { getSubscriberRankingPosition } from '../functions/get-subscriber-ranking-position'

export const getRankingRoute: FastifyPluginAsyncZod = async app => {
    app.get(
        '/ranking',
        {
            schema: {
                summary: 'Get ranking',
                tags: ['Referral'],
                response: {
                    200: z.object({
                        ranking: z.array(
                            z.object({
                                id: z.string().uuid(),
                                name: z.string(),
                                score: z.number(),
                            })
                        ),
                    }),
                },
            },
        },
        async request => {
            const { rankingWithScore } = await getRank()

            console.log(rankingWithScore)

            return {
                ranking: rankingWithScore,
            }
        }
    )
}

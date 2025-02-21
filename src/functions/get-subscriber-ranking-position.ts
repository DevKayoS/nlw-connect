import { redis } from '../redis/client'

interface GetSubscriberRankingPositionParams {
    subscriberId: string
}
/*
    vai retorar a quantidade de clicks que o link de um inscrito possui
*/
export async function getSubscriberRankingPosition({
    subscriberId,
}: GetSubscriberRankingPositionParams) {
    const rank = await redis.zrevrank('referral:ranking', subscriberId)

    if (rank === null) {
        return { position: null }
    }

    return { position: rank + 1 }
}

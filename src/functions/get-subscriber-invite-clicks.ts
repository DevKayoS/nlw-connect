import { redis } from '../redis/client'

interface GetSubscribersInviteClicksParams {
    subscriberId: string
}
/*
    vai retorar a quantidade de clicks que o link de um inscrito possui
*/
export async function getSubscribersInviteClicks({
    subscriberId,
}: GetSubscribersInviteClicksParams) {
    const count = await redis.hget('referral:access-count', subscriberId)
    return {
        count: count ? Number.parseInt(count) : 0,
    }
}

import { redis } from '../redis/client'

interface GetSubscribersInvitesCountParams {
    subscriberId: string
}
/*
    vai retorar a quantidade de clicks que o link de um inscrito possui
*/
export async function getSubscribersInvitesCount({
    subscriberId,
}: GetSubscribersInvitesCountParams) {
    const count = await redis.zscore('referral:ranking', subscriberId)
    return {
        count: count ? Number.parseInt(count) : 0,
    }
}

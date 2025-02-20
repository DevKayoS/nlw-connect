import { redis } from '../redis/client'

interface AccessInviteLinkParams {
    subscriberId: string
}
/*
    Toda vez que essa funcao for chamada o subscriberId vai ser incrementado 1 
    ex: chamou a funcao 1 vez { d18ca6f6-ec35-48cf-8efe-2a51f27d6ae0: 1}
    chamou a funcao 2 vez { d18ca6f6-ec35-48cf-8efe-2a51f27d6ae0: 2}...
*/
export async function accessInviteLink({
    subscriberId,
}: AccessInviteLinkParams) {
    await redis.hincrby('referral:access-count', subscriberId, 1)
}

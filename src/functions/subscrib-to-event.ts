import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubscribeToEventParams {
    name: string
    email: string
    referrerId: string | null
}

/*
    vai salvar no banco de dados a inscricao
*/

export async function subscribeToEvent({
    name,
    email,
    referrerId,
}: SubscribeToEventParams) {
    const subscribers = await db
        .select()
        .from(subscriptions)
        .where(eq(subscriptions.email, email))

    if (subscribers.length > 0) {
        return {
            subscriberId: subscribers[0].id,
        }
    }

    const result = await db
        .insert(subscriptions)
        .values({
            name,
            email,
        })
        .returning()

    if (referrerId) {
        /*
            referrerId = usuario que INDICOU
            essa logica esta fazendo que o usuario que indicou receba mais um ponto no sistema de indicacao no ranking
        */
        await redis.zincrby('referral:ranking', 1, referrerId)
    }

    const subscriberId = result[0].id

    return {
        subscriberId,
    }
}

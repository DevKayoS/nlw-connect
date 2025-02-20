import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'

interface SubscribeToEventParams {
    name: string
    email: string
}

export async function subscribeToEvent({
    name,
    email,
}: SubscribeToEventParams) {
    const result = await db
        .insert(subscriptions)
        .values({
            name,
            email,
        })
        .returning()

    return {
        status: true,
        msg: 'Inscricao realizada com sucesso!',
        subscribe: result[0],
    }
}

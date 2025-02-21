import {
  db
} from "./chunk-IPRMYGTO.mjs";
import {
  subscriptions
} from "./chunk-5OAAD53O.mjs";
import {
  redis
} from "./chunk-QHGJDJIS.mjs";

// src/functions/subscrib-to-event.ts
import { eq } from "drizzle-orm";
async function subscribeToEvent({
  name,
  email,
  referrerId
}) {
  const subscribers = await db.select().from(subscriptions).where(eq(subscriptions.email, email));
  if (subscribers.length > 0) {
    return {
      subscriberId: subscribers[0].id
    };
  }
  const result = await db.insert(subscriptions).values({
    name,
    email
  }).returning();
  if (referrerId) {
    await redis.zincrby("referral:ranking", 1, referrerId);
  }
  const subscriberId = result[0].id;
  return {
    subscriberId
  };
}

export {
  subscribeToEvent
};

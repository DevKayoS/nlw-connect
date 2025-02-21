import {
  redis
} from "./chunk-QHGJDJIS.mjs";

// src/functions/get-subscriber-invites-count.ts
async function getSubscribersInvitesCount({
  subscriberId
}) {
  const count = await redis.zscore("referral:ranking", subscriberId);
  return {
    count: count ? Number.parseInt(count) : 0
  };
}

export {
  getSubscribersInvitesCount
};

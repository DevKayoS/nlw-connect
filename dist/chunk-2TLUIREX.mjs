import {
  getSubscribersInvitesCount
} from "./chunk-2GW7FLV7.mjs";

// src/routes/get-subscriber-invites-count-route.ts
import z from "zod";
var getSubscriberInvitesCountRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invite clicks count",
        tags: ["Referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            count: z.number()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscribersInvitesCount({
        subscriberId
      });
      return {
        count
      };
    }
  );
};

export {
  getSubscriberInvitesCountRoute
};

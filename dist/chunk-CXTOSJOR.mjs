import {
  subscribeToEvent
} from "./chunk-G5VWJ5DK.mjs";

// src/routes/subscribe-to-event-route.ts
import z from "zod";
var subscriberToEventRoute = async (app) => {
  app.post(
    "/subscribers",
    {
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["Subscriton"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish()
        }),
        response: {
          201: z.object({
            subscriberId: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;
      const subscribe = await subscribeToEvent({
        name,
        email,
        referrerId: referrer
      });
      return reply.status(201).send(subscribe);
    }
  );
};

export {
  subscriberToEventRoute
};

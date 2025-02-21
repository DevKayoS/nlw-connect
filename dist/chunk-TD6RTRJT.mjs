import {
  getRank
} from "./chunk-BX3CUING.mjs";

// src/routes/get-ranking-route.ts
import z from "zod";
var getRankingRoute = async (app) => {
  app.get(
    "/ranking",
    {
      schema: {
        summary: "Get ranking",
        tags: ["Referral"],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                score: z.number()
              })
            )
          })
        }
      }
    },
    async (request) => {
      const { rankingWithScore } = await getRank();
      console.log(rankingWithScore);
      return {
        ranking: rankingWithScore
      };
    }
  );
};

export {
  getRankingRoute
};

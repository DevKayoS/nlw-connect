import {
  env
} from "./chunk-K3UWI67F.mjs";

// src/redis/client.ts
import { Redis } from "ioredis";
var redis = new Redis(env.REDIS_URL);

export {
  redis
};

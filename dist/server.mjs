import {
  accessInviteLinkRoute
} from "./chunk-P4FWUVDP.mjs";
import {
  getRankingRoute
} from "./chunk-TD6RTRJT.mjs";
import {
  getSubscriberInviteClicksRoute
} from "./chunk-HDI5UMLJ.mjs";
import {
  getSubscriberInvitesCountRoute
} from "./chunk-2TLUIREX.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-22WSM4XQ.mjs";
import {
  subscriberToEventRoute
} from "./chunk-CXTOSJOR.mjs";
import "./chunk-G5VWJ5DK.mjs";
import "./chunk-P43JECHZ.mjs";
import "./chunk-BX3CUING.mjs";
import "./chunk-IPRMYGTO.mjs";
import "./chunk-5OAAD53O.mjs";
import "./chunk-KTRIMD37.mjs";
import "./chunk-2GW7FLV7.mjs";
import "./chunk-J3JRT42J.mjs";
import "./chunk-QHGJDJIS.mjs";
import {
  env
} from "./chunk-K3UWI67F.mjs";

// src/server.ts
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW Connect",
      version: "0.0.1"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscriberToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInvitesCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);
app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running! \u2714\u2714");
});

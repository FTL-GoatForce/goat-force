// import Redis from "ioredis";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
// const redis = new Redis()

// redis.on("connect", () => {
//   console.log("redis connected");
// });
// redis.on("error", (e) => {
//   console.log("Error", e);
// });

export default redis;

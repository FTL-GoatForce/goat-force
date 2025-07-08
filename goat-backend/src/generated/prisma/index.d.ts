
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Deals
 * 
 */
export type Deals = $Result.DefaultSelection<Prisma.$DealsPayload>
/**
 * Model Participants
 * 
 */
export type Participants = $Result.DefaultSelection<Prisma.$ParticipantsPayload>
/**
 * Model Risks
 * 
 */
export type Risks = $Result.DefaultSelection<Prisma.$RisksPayload>
/**
 * Model ActivityMetrics
 * 
 */
export type ActivityMetrics = $Result.DefaultSelection<Prisma.$ActivityMetricsPayload>
/**
 * Model AiRecommendation
 * 
 */
export type AiRecommendation = $Result.DefaultSelection<Prisma.$AiRecommendationPayload>
/**
 * Model FollowUp
 * 
 */
export type FollowUp = $Result.DefaultSelection<Prisma.$FollowUpPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model ConversationHistory
 * 
 */
export type ConversationHistory = $Result.DefaultSelection<Prisma.$ConversationHistoryPayload>
/**
 * Model DealInsights
 * 
 */
export type DealInsights = $Result.DefaultSelection<Prisma.$DealInsightsPayload>
/**
 * Model RiskExplanation
 * 
 */
export type RiskExplanation = $Result.DefaultSelection<Prisma.$RiskExplanationPayload>
/**
 * Model Personality
 * 
 */
export type Personality = $Result.DefaultSelection<Prisma.$PersonalityPayload>
/**
 * Model Timeline
 * 
 */
export type Timeline = $Result.DefaultSelection<Prisma.$TimelinePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Deals
 * const deals = await prisma.deals.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Deals
   * const deals = await prisma.deals.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.deals`: Exposes CRUD operations for the **Deals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deals
    * const deals = await prisma.deals.findMany()
    * ```
    */
  get deals(): Prisma.DealsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participants`: Exposes CRUD operations for the **Participants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participants.findMany()
    * ```
    */
  get participants(): Prisma.ParticipantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.risks`: Exposes CRUD operations for the **Risks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Risks
    * const risks = await prisma.risks.findMany()
    * ```
    */
  get risks(): Prisma.RisksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityMetrics`: Exposes CRUD operations for the **ActivityMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityMetrics
    * const activityMetrics = await prisma.activityMetrics.findMany()
    * ```
    */
  get activityMetrics(): Prisma.ActivityMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiRecommendation`: Exposes CRUD operations for the **AiRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiRecommendations
    * const aiRecommendations = await prisma.aiRecommendation.findMany()
    * ```
    */
  get aiRecommendation(): Prisma.AiRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followUp`: Exposes CRUD operations for the **FollowUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowUps
    * const followUps = await prisma.followUp.findMany()
    * ```
    */
  get followUp(): Prisma.FollowUpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationHistory`: Exposes CRUD operations for the **ConversationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationHistories
    * const conversationHistories = await prisma.conversationHistory.findMany()
    * ```
    */
  get conversationHistory(): Prisma.ConversationHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealInsights`: Exposes CRUD operations for the **DealInsights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealInsights
    * const dealInsights = await prisma.dealInsights.findMany()
    * ```
    */
  get dealInsights(): Prisma.DealInsightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskExplanation`: Exposes CRUD operations for the **RiskExplanation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskExplanations
    * const riskExplanations = await prisma.riskExplanation.findMany()
    * ```
    */
  get riskExplanation(): Prisma.RiskExplanationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personality`: Exposes CRUD operations for the **Personality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personalities
    * const personalities = await prisma.personality.findMany()
    * ```
    */
  get personality(): Prisma.PersonalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.TimelineDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Deals: 'Deals',
    Participants: 'Participants',
    Risks: 'Risks',
    ActivityMetrics: 'ActivityMetrics',
    AiRecommendation: 'AiRecommendation',
    FollowUp: 'FollowUp',
    Tags: 'Tags',
    ConversationHistory: 'ConversationHistory',
    DealInsights: 'DealInsights',
    RiskExplanation: 'RiskExplanation',
    Personality: 'Personality',
    Timeline: 'Timeline'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "deals" | "participants" | "risks" | "activityMetrics" | "aiRecommendation" | "followUp" | "tags" | "conversationHistory" | "dealInsights" | "riskExplanation" | "personality" | "timeline"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Deals: {
        payload: Prisma.$DealsPayload<ExtArgs>
        fields: Prisma.DealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>
          }
          findFirst: {
            args: Prisma.DealsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>
          }
          findMany: {
            args: Prisma.DealsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>[]
          }
          create: {
            args: Prisma.DealsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>
          }
          createMany: {
            args: Prisma.DealsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>[]
          }
          delete: {
            args: Prisma.DealsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>
          }
          update: {
            args: Prisma.DealsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>
          }
          deleteMany: {
            args: Prisma.DealsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>[]
          }
          upsert: {
            args: Prisma.DealsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealsPayload>
          }
          aggregate: {
            args: Prisma.DealsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeals>
          }
          groupBy: {
            args: Prisma.DealsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealsCountArgs<ExtArgs>
            result: $Utils.Optional<DealsCountAggregateOutputType> | number
          }
        }
      }
      Participants: {
        payload: Prisma.$ParticipantsPayload<ExtArgs>
        fields: Prisma.ParticipantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          findFirst: {
            args: Prisma.ParticipantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          findMany: {
            args: Prisma.ParticipantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          create: {
            args: Prisma.ParticipantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          createMany: {
            args: Prisma.ParticipantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          delete: {
            args: Prisma.ParticipantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          update: {
            args: Prisma.ParticipantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          aggregate: {
            args: Prisma.ParticipantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipants>
          }
          groupBy: {
            args: Prisma.ParticipantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantsCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsCountAggregateOutputType> | number
          }
        }
      }
      Risks: {
        payload: Prisma.$RisksPayload<ExtArgs>
        fields: Prisma.RisksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RisksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RisksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>
          }
          findFirst: {
            args: Prisma.RisksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RisksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>
          }
          findMany: {
            args: Prisma.RisksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>[]
          }
          create: {
            args: Prisma.RisksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>
          }
          createMany: {
            args: Prisma.RisksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RisksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>[]
          }
          delete: {
            args: Prisma.RisksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>
          }
          update: {
            args: Prisma.RisksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>
          }
          deleteMany: {
            args: Prisma.RisksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RisksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RisksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>[]
          }
          upsert: {
            args: Prisma.RisksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RisksPayload>
          }
          aggregate: {
            args: Prisma.RisksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRisks>
          }
          groupBy: {
            args: Prisma.RisksGroupByArgs<ExtArgs>
            result: $Utils.Optional<RisksGroupByOutputType>[]
          }
          count: {
            args: Prisma.RisksCountArgs<ExtArgs>
            result: $Utils.Optional<RisksCountAggregateOutputType> | number
          }
        }
      }
      ActivityMetrics: {
        payload: Prisma.$ActivityMetricsPayload<ExtArgs>
        fields: Prisma.ActivityMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>
          }
          findFirst: {
            args: Prisma.ActivityMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>
          }
          findMany: {
            args: Prisma.ActivityMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>[]
          }
          create: {
            args: Prisma.ActivityMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>
          }
          createMany: {
            args: Prisma.ActivityMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>[]
          }
          delete: {
            args: Prisma.ActivityMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>
          }
          update: {
            args: Prisma.ActivityMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>
          }
          deleteMany: {
            args: Prisma.ActivityMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>[]
          }
          upsert: {
            args: Prisma.ActivityMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityMetricsPayload>
          }
          aggregate: {
            args: Prisma.ActivityMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityMetrics>
          }
          groupBy: {
            args: Prisma.ActivityMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityMetricsCountAggregateOutputType> | number
          }
        }
      }
      AiRecommendation: {
        payload: Prisma.$AiRecommendationPayload<ExtArgs>
        fields: Prisma.AiRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>
          }
          findFirst: {
            args: Prisma.AiRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>
          }
          findMany: {
            args: Prisma.AiRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>[]
          }
          create: {
            args: Prisma.AiRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>
          }
          createMany: {
            args: Prisma.AiRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>[]
          }
          delete: {
            args: Prisma.AiRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>
          }
          update: {
            args: Prisma.AiRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.AiRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.AiRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRecommendationPayload>
          }
          aggregate: {
            args: Prisma.AiRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiRecommendation>
          }
          groupBy: {
            args: Prisma.AiRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<AiRecommendationCountAggregateOutputType> | number
          }
        }
      }
      FollowUp: {
        payload: Prisma.$FollowUpPayload<ExtArgs>
        fields: Prisma.FollowUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowUpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowUpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          findFirst: {
            args: Prisma.FollowUpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowUpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          findMany: {
            args: Prisma.FollowUpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          create: {
            args: Prisma.FollowUpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          createMany: {
            args: Prisma.FollowUpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowUpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          delete: {
            args: Prisma.FollowUpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          update: {
            args: Prisma.FollowUpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          deleteMany: {
            args: Prisma.FollowUpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          aggregate: {
            args: Prisma.FollowUpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowUp>
          }
          groupBy: {
            args: Prisma.FollowUpGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowUpCountArgs<ExtArgs>
            result: $Utils.Optional<FollowUpCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      ConversationHistory: {
        payload: Prisma.$ConversationHistoryPayload<ExtArgs>
        fields: Prisma.ConversationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>
          }
          findFirst: {
            args: Prisma.ConversationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>
          }
          findMany: {
            args: Prisma.ConversationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>[]
          }
          create: {
            args: Prisma.ConversationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>
          }
          createMany: {
            args: Prisma.ConversationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>[]
          }
          delete: {
            args: Prisma.ConversationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>
          }
          update: {
            args: Prisma.ConversationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ConversationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ConversationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationHistoryPayload>
          }
          aggregate: {
            args: Prisma.ConversationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationHistory>
          }
          groupBy: {
            args: Prisma.ConversationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationHistoryCountAggregateOutputType> | number
          }
        }
      }
      DealInsights: {
        payload: Prisma.$DealInsightsPayload<ExtArgs>
        fields: Prisma.DealInsightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealInsightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealInsightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>
          }
          findFirst: {
            args: Prisma.DealInsightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealInsightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>
          }
          findMany: {
            args: Prisma.DealInsightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>[]
          }
          create: {
            args: Prisma.DealInsightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>
          }
          createMany: {
            args: Prisma.DealInsightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealInsightsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>[]
          }
          delete: {
            args: Prisma.DealInsightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>
          }
          update: {
            args: Prisma.DealInsightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>
          }
          deleteMany: {
            args: Prisma.DealInsightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealInsightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealInsightsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>[]
          }
          upsert: {
            args: Prisma.DealInsightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealInsightsPayload>
          }
          aggregate: {
            args: Prisma.DealInsightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealInsights>
          }
          groupBy: {
            args: Prisma.DealInsightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealInsightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealInsightsCountArgs<ExtArgs>
            result: $Utils.Optional<DealInsightsCountAggregateOutputType> | number
          }
        }
      }
      RiskExplanation: {
        payload: Prisma.$RiskExplanationPayload<ExtArgs>
        fields: Prisma.RiskExplanationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskExplanationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskExplanationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>
          }
          findFirst: {
            args: Prisma.RiskExplanationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskExplanationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>
          }
          findMany: {
            args: Prisma.RiskExplanationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>[]
          }
          create: {
            args: Prisma.RiskExplanationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>
          }
          createMany: {
            args: Prisma.RiskExplanationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskExplanationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>[]
          }
          delete: {
            args: Prisma.RiskExplanationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>
          }
          update: {
            args: Prisma.RiskExplanationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>
          }
          deleteMany: {
            args: Prisma.RiskExplanationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskExplanationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskExplanationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>[]
          }
          upsert: {
            args: Prisma.RiskExplanationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskExplanationPayload>
          }
          aggregate: {
            args: Prisma.RiskExplanationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskExplanation>
          }
          groupBy: {
            args: Prisma.RiskExplanationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskExplanationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskExplanationCountArgs<ExtArgs>
            result: $Utils.Optional<RiskExplanationCountAggregateOutputType> | number
          }
        }
      }
      Personality: {
        payload: Prisma.$PersonalityPayload<ExtArgs>
        fields: Prisma.PersonalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          findFirst: {
            args: Prisma.PersonalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          findMany: {
            args: Prisma.PersonalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>[]
          }
          create: {
            args: Prisma.PersonalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          createMany: {
            args: Prisma.PersonalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>[]
          }
          delete: {
            args: Prisma.PersonalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          update: {
            args: Prisma.PersonalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          deleteMany: {
            args: Prisma.PersonalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>[]
          }
          upsert: {
            args: Prisma.PersonalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          aggregate: {
            args: Prisma.PersonalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonality>
          }
          groupBy: {
            args: Prisma.PersonalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalityCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalityCountAggregateOutputType> | number
          }
        }
      }
      Timeline: {
        payload: Prisma.$TimelinePayload<ExtArgs>
        fields: Prisma.TimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findFirst: {
            args: Prisma.TimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findMany: {
            args: Prisma.TimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          create: {
            args: Prisma.TimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          createMany: {
            args: Prisma.TimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          delete: {
            args: Prisma.TimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          update: {
            args: Prisma.TimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          deleteMany: {
            args: Prisma.TimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimelineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          upsert: {
            args: Prisma.TimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          aggregate: {
            args: Prisma.TimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeline>
          }
          groupBy: {
            args: Prisma.TimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    deals?: DealsOmit
    participants?: ParticipantsOmit
    risks?: RisksOmit
    activityMetrics?: ActivityMetricsOmit
    aiRecommendation?: AiRecommendationOmit
    followUp?: FollowUpOmit
    tags?: TagsOmit
    conversationHistory?: ConversationHistoryOmit
    dealInsights?: DealInsightsOmit
    riskExplanation?: RiskExplanationOmit
    personality?: PersonalityOmit
    timeline?: TimelineOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DealsCountOutputType
   */

  export type DealsCountOutputType = {
    participants: number
    risks: number
    activities_metrics: number
    ai_recommendations: number
    follow_ups: number
    tags: number
    conversation_history: number
    deal_insights: number
  }

  export type DealsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | DealsCountOutputTypeCountParticipantsArgs
    risks?: boolean | DealsCountOutputTypeCountRisksArgs
    activities_metrics?: boolean | DealsCountOutputTypeCountActivities_metricsArgs
    ai_recommendations?: boolean | DealsCountOutputTypeCountAi_recommendationsArgs
    follow_ups?: boolean | DealsCountOutputTypeCountFollow_upsArgs
    tags?: boolean | DealsCountOutputTypeCountTagsArgs
    conversation_history?: boolean | DealsCountOutputTypeCountConversation_historyArgs
    deal_insights?: boolean | DealsCountOutputTypeCountDeal_insightsArgs
  }

  // Custom InputTypes
  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealsCountOutputType
     */
    select?: DealsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountRisksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RisksWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountActivities_metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityMetricsWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountAi_recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiRecommendationWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountFollow_upsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountConversation_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationHistoryWhereInput
  }

  /**
   * DealsCountOutputType without action
   */
  export type DealsCountOutputTypeCountDeal_insightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealInsightsWhereInput
  }


  /**
   * Count Type ParticipantsCountOutputType
   */

  export type ParticipantsCountOutputType = {
    personality: number
  }

  export type ParticipantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personality?: boolean | ParticipantsCountOutputTypeCountPersonalityArgs
  }

  // Custom InputTypes
  /**
   * ParticipantsCountOutputType without action
   */
  export type ParticipantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantsCountOutputType
     */
    select?: ParticipantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantsCountOutputType without action
   */
  export type ParticipantsCountOutputTypeCountPersonalityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalityWhereInput
  }


  /**
   * Count Type RisksCountOutputType
   */

  export type RisksCountOutputType = {
    risk_explanation: number
  }

  export type RisksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    risk_explanation?: boolean | RisksCountOutputTypeCountRisk_explanationArgs
  }

  // Custom InputTypes
  /**
   * RisksCountOutputType without action
   */
  export type RisksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RisksCountOutputType
     */
    select?: RisksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RisksCountOutputType without action
   */
  export type RisksCountOutputTypeCountRisk_explanationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskExplanationWhereInput
  }


  /**
   * Count Type ActivityMetricsCountOutputType
   */

  export type ActivityMetricsCountOutputType = {
    timeline: number
  }

  export type ActivityMetricsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | ActivityMetricsCountOutputTypeCountTimelineArgs
  }

  // Custom InputTypes
  /**
   * ActivityMetricsCountOutputType without action
   */
  export type ActivityMetricsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetricsCountOutputType
     */
    select?: ActivityMetricsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityMetricsCountOutputType without action
   */
  export type ActivityMetricsCountOutputTypeCountTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Deals
   */

  export type AggregateDeals = {
    _count: DealsCountAggregateOutputType | null
    _avg: DealsAvgAggregateOutputType | null
    _sum: DealsSumAggregateOutputType | null
    _min: DealsMinAggregateOutputType | null
    _max: DealsMaxAggregateOutputType | null
  }

  export type DealsAvgAggregateOutputType = {
    id: number | null
    deal_amount: number | null
  }

  export type DealsSumAggregateOutputType = {
    id: number | null
    deal_amount: number | null
  }

  export type DealsMinAggregateOutputType = {
    id: number | null
    deal_name: string | null
    company_name: string | null
    stage: string | null
    status: string | null
    deal_amount: number | null
    expected_close_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DealsMaxAggregateOutputType = {
    id: number | null
    deal_name: string | null
    company_name: string | null
    stage: string | null
    status: string | null
    deal_amount: number | null
    expected_close_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DealsCountAggregateOutputType = {
    id: number
    deal_name: number
    company_name: number
    stage: number
    status: number
    deal_amount: number
    expected_close_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DealsAvgAggregateInputType = {
    id?: true
    deal_amount?: true
  }

  export type DealsSumAggregateInputType = {
    id?: true
    deal_amount?: true
  }

  export type DealsMinAggregateInputType = {
    id?: true
    deal_name?: true
    company_name?: true
    stage?: true
    status?: true
    deal_amount?: true
    expected_close_date?: true
    created_at?: true
    updated_at?: true
  }

  export type DealsMaxAggregateInputType = {
    id?: true
    deal_name?: true
    company_name?: true
    stage?: true
    status?: true
    deal_amount?: true
    expected_close_date?: true
    created_at?: true
    updated_at?: true
  }

  export type DealsCountAggregateInputType = {
    id?: true
    deal_name?: true
    company_name?: true
    stage?: true
    status?: true
    deal_amount?: true
    expected_close_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deals to aggregate.
     */
    where?: DealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealsOrderByWithRelationInput | DealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deals
    **/
    _count?: true | DealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealsMaxAggregateInputType
  }

  export type GetDealsAggregateType<T extends DealsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeals[P]>
      : GetScalarType<T[P], AggregateDeals[P]>
  }




  export type DealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealsWhereInput
    orderBy?: DealsOrderByWithAggregationInput | DealsOrderByWithAggregationInput[]
    by: DealsScalarFieldEnum[] | DealsScalarFieldEnum
    having?: DealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealsCountAggregateInputType | true
    _avg?: DealsAvgAggregateInputType
    _sum?: DealsSumAggregateInputType
    _min?: DealsMinAggregateInputType
    _max?: DealsMaxAggregateInputType
  }

  export type DealsGroupByOutputType = {
    id: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date
    created_at: Date
    updated_at: Date
    _count: DealsCountAggregateOutputType | null
    _avg: DealsAvgAggregateOutputType | null
    _sum: DealsSumAggregateOutputType | null
    _min: DealsMinAggregateOutputType | null
    _max: DealsMaxAggregateOutputType | null
  }

  type GetDealsGroupByPayload<T extends DealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealsGroupByOutputType[P]>
            : GetScalarType<T[P], DealsGroupByOutputType[P]>
        }
      >
    >


  export type DealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_name?: boolean
    company_name?: boolean
    stage?: boolean
    status?: boolean
    deal_amount?: boolean
    expected_close_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    participants?: boolean | Deals$participantsArgs<ExtArgs>
    risks?: boolean | Deals$risksArgs<ExtArgs>
    activities_metrics?: boolean | Deals$activities_metricsArgs<ExtArgs>
    ai_recommendations?: boolean | Deals$ai_recommendationsArgs<ExtArgs>
    follow_ups?: boolean | Deals$follow_upsArgs<ExtArgs>
    tags?: boolean | Deals$tagsArgs<ExtArgs>
    conversation_history?: boolean | Deals$conversation_historyArgs<ExtArgs>
    deal_insights?: boolean | Deals$deal_insightsArgs<ExtArgs>
    _count?: boolean | DealsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deals"]>

  export type DealsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_name?: boolean
    company_name?: boolean
    stage?: boolean
    status?: boolean
    deal_amount?: boolean
    expected_close_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["deals"]>

  export type DealsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_name?: boolean
    company_name?: boolean
    stage?: boolean
    status?: boolean
    deal_amount?: boolean
    expected_close_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["deals"]>

  export type DealsSelectScalar = {
    id?: boolean
    deal_name?: boolean
    company_name?: boolean
    stage?: boolean
    status?: boolean
    deal_amount?: boolean
    expected_close_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DealsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_name" | "company_name" | "stage" | "status" | "deal_amount" | "expected_close_date" | "created_at" | "updated_at", ExtArgs["result"]["deals"]>
  export type DealsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Deals$participantsArgs<ExtArgs>
    risks?: boolean | Deals$risksArgs<ExtArgs>
    activities_metrics?: boolean | Deals$activities_metricsArgs<ExtArgs>
    ai_recommendations?: boolean | Deals$ai_recommendationsArgs<ExtArgs>
    follow_ups?: boolean | Deals$follow_upsArgs<ExtArgs>
    tags?: boolean | Deals$tagsArgs<ExtArgs>
    conversation_history?: boolean | Deals$conversation_historyArgs<ExtArgs>
    deal_insights?: boolean | Deals$deal_insightsArgs<ExtArgs>
    _count?: boolean | DealsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DealsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deals"
    objects: {
      participants: Prisma.$ParticipantsPayload<ExtArgs>[]
      risks: Prisma.$RisksPayload<ExtArgs>[]
      activities_metrics: Prisma.$ActivityMetricsPayload<ExtArgs>[]
      ai_recommendations: Prisma.$AiRecommendationPayload<ExtArgs>[]
      follow_ups: Prisma.$FollowUpPayload<ExtArgs>[]
      tags: Prisma.$TagsPayload<ExtArgs>[]
      conversation_history: Prisma.$ConversationHistoryPayload<ExtArgs>[]
      deal_insights: Prisma.$DealInsightsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_name: string
      company_name: string
      stage: string
      status: string
      deal_amount: number
      expected_close_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["deals"]>
    composites: {}
  }

  type DealsGetPayload<S extends boolean | null | undefined | DealsDefaultArgs> = $Result.GetResult<Prisma.$DealsPayload, S>

  type DealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealsCountAggregateInputType | true
    }

  export interface DealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deals'], meta: { name: 'Deals' } }
    /**
     * Find zero or one Deals that matches the filter.
     * @param {DealsFindUniqueArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealsFindUniqueArgs>(args: SelectSubset<T, DealsFindUniqueArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealsFindUniqueOrThrowArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealsFindUniqueOrThrowArgs>(args: SelectSubset<T, DealsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsFindFirstArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealsFindFirstArgs>(args?: SelectSubset<T, DealsFindFirstArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsFindFirstOrThrowArgs} args - Arguments to find a Deals
     * @example
     * // Get one Deals
     * const deals = await prisma.deals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealsFindFirstOrThrowArgs>(args?: SelectSubset<T, DealsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deals
     * const deals = await prisma.deals.findMany()
     * 
     * // Get first 10 Deals
     * const deals = await prisma.deals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealsWithIdOnly = await prisma.deals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealsFindManyArgs>(args?: SelectSubset<T, DealsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deals.
     * @param {DealsCreateArgs} args - Arguments to create a Deals.
     * @example
     * // Create one Deals
     * const Deals = await prisma.deals.create({
     *   data: {
     *     // ... data to create a Deals
     *   }
     * })
     * 
     */
    create<T extends DealsCreateArgs>(args: SelectSubset<T, DealsCreateArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deals.
     * @param {DealsCreateManyArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deals = await prisma.deals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealsCreateManyArgs>(args?: SelectSubset<T, DealsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deals and returns the data saved in the database.
     * @param {DealsCreateManyAndReturnArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deals = await prisma.deals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deals and only return the `id`
     * const dealsWithIdOnly = await prisma.deals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealsCreateManyAndReturnArgs>(args?: SelectSubset<T, DealsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deals.
     * @param {DealsDeleteArgs} args - Arguments to delete one Deals.
     * @example
     * // Delete one Deals
     * const Deals = await prisma.deals.delete({
     *   where: {
     *     // ... filter to delete one Deals
     *   }
     * })
     * 
     */
    delete<T extends DealsDeleteArgs>(args: SelectSubset<T, DealsDeleteArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deals.
     * @param {DealsUpdateArgs} args - Arguments to update one Deals.
     * @example
     * // Update one Deals
     * const deals = await prisma.deals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealsUpdateArgs>(args: SelectSubset<T, DealsUpdateArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deals.
     * @param {DealsDeleteManyArgs} args - Arguments to filter Deals to delete.
     * @example
     * // Delete a few Deals
     * const { count } = await prisma.deals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealsDeleteManyArgs>(args?: SelectSubset<T, DealsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deals
     * const deals = await prisma.deals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealsUpdateManyArgs>(args: SelectSubset<T, DealsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals and returns the data updated in the database.
     * @param {DealsUpdateManyAndReturnArgs} args - Arguments to update many Deals.
     * @example
     * // Update many Deals
     * const deals = await prisma.deals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deals and only return the `id`
     * const dealsWithIdOnly = await prisma.deals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealsUpdateManyAndReturnArgs>(args: SelectSubset<T, DealsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deals.
     * @param {DealsUpsertArgs} args - Arguments to update or create a Deals.
     * @example
     * // Update or create a Deals
     * const deals = await prisma.deals.upsert({
     *   create: {
     *     // ... data to create a Deals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deals we want to update
     *   }
     * })
     */
    upsert<T extends DealsUpsertArgs>(args: SelectSubset<T, DealsUpsertArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsCountArgs} args - Arguments to filter Deals to count.
     * @example
     * // Count the number of Deals
     * const count = await prisma.deals.count({
     *   where: {
     *     // ... the filter for the Deals we want to count
     *   }
     * })
    **/
    count<T extends DealsCountArgs>(
      args?: Subset<T, DealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealsAggregateArgs>(args: Subset<T, DealsAggregateArgs>): Prisma.PrismaPromise<GetDealsAggregateType<T>>

    /**
     * Group by Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealsGroupByArgs['orderBy'] }
        : { orderBy?: DealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deals model
   */
  readonly fields: DealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Deals$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Deals$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    risks<T extends Deals$risksArgs<ExtArgs> = {}>(args?: Subset<T, Deals$risksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities_metrics<T extends Deals$activities_metricsArgs<ExtArgs> = {}>(args?: Subset<T, Deals$activities_metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ai_recommendations<T extends Deals$ai_recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Deals$ai_recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follow_ups<T extends Deals$follow_upsArgs<ExtArgs> = {}>(args?: Subset<T, Deals$follow_upsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Deals$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Deals$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversation_history<T extends Deals$conversation_historyArgs<ExtArgs> = {}>(args?: Subset<T, Deals$conversation_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deal_insights<T extends Deals$deal_insightsArgs<ExtArgs> = {}>(args?: Subset<T, Deals$deal_insightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deals model
   */
  interface DealsFieldRefs {
    readonly id: FieldRef<"Deals", 'Int'>
    readonly deal_name: FieldRef<"Deals", 'String'>
    readonly company_name: FieldRef<"Deals", 'String'>
    readonly stage: FieldRef<"Deals", 'String'>
    readonly status: FieldRef<"Deals", 'String'>
    readonly deal_amount: FieldRef<"Deals", 'Float'>
    readonly expected_close_date: FieldRef<"Deals", 'DateTime'>
    readonly created_at: FieldRef<"Deals", 'DateTime'>
    readonly updated_at: FieldRef<"Deals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deals findUnique
   */
  export type DealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where: DealsWhereUniqueInput
  }

  /**
   * Deals findUniqueOrThrow
   */
  export type DealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where: DealsWhereUniqueInput
  }

  /**
   * Deals findFirst
   */
  export type DealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where?: DealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealsOrderByWithRelationInput | DealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deals.
     */
    cursor?: DealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deals.
     */
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * Deals findFirstOrThrow
   */
  export type DealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where?: DealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealsOrderByWithRelationInput | DealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deals.
     */
    cursor?: DealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deals.
     */
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * Deals findMany
   */
  export type DealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where?: DealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealsOrderByWithRelationInput | DealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deals.
     */
    cursor?: DealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    distinct?: DealsScalarFieldEnum | DealsScalarFieldEnum[]
  }

  /**
   * Deals create
   */
  export type DealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * The data needed to create a Deals.
     */
    data: XOR<DealsCreateInput, DealsUncheckedCreateInput>
  }

  /**
   * Deals createMany
   */
  export type DealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deals.
     */
    data: DealsCreateManyInput | DealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deals createManyAndReturn
   */
  export type DealsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * The data used to create many Deals.
     */
    data: DealsCreateManyInput | DealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deals update
   */
  export type DealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * The data needed to update a Deals.
     */
    data: XOR<DealsUpdateInput, DealsUncheckedUpdateInput>
    /**
     * Choose, which Deals to update.
     */
    where: DealsWhereUniqueInput
  }

  /**
   * Deals updateMany
   */
  export type DealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deals.
     */
    data: XOR<DealsUpdateManyMutationInput, DealsUncheckedUpdateManyInput>
    /**
     * Filter which Deals to update
     */
    where?: DealsWhereInput
    /**
     * Limit how many Deals to update.
     */
    limit?: number
  }

  /**
   * Deals updateManyAndReturn
   */
  export type DealsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * The data used to update Deals.
     */
    data: XOR<DealsUpdateManyMutationInput, DealsUncheckedUpdateManyInput>
    /**
     * Filter which Deals to update
     */
    where?: DealsWhereInput
    /**
     * Limit how many Deals to update.
     */
    limit?: number
  }

  /**
   * Deals upsert
   */
  export type DealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * The filter to search for the Deals to update in case it exists.
     */
    where: DealsWhereUniqueInput
    /**
     * In case the Deals found by the `where` argument doesn't exist, create a new Deals with this data.
     */
    create: XOR<DealsCreateInput, DealsUncheckedCreateInput>
    /**
     * In case the Deals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealsUpdateInput, DealsUncheckedUpdateInput>
  }

  /**
   * Deals delete
   */
  export type DealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
    /**
     * Filter which Deals to delete.
     */
    where: DealsWhereUniqueInput
  }

  /**
   * Deals deleteMany
   */
  export type DealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deals to delete
     */
    where?: DealsWhereInput
    /**
     * Limit how many Deals to delete.
     */
    limit?: number
  }

  /**
   * Deals.participants
   */
  export type Deals$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    cursor?: ParticipantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Deals.risks
   */
  export type Deals$risksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    where?: RisksWhereInput
    orderBy?: RisksOrderByWithRelationInput | RisksOrderByWithRelationInput[]
    cursor?: RisksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RisksScalarFieldEnum | RisksScalarFieldEnum[]
  }

  /**
   * Deals.activities_metrics
   */
  export type Deals$activities_metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    where?: ActivityMetricsWhereInput
    orderBy?: ActivityMetricsOrderByWithRelationInput | ActivityMetricsOrderByWithRelationInput[]
    cursor?: ActivityMetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityMetricsScalarFieldEnum | ActivityMetricsScalarFieldEnum[]
  }

  /**
   * Deals.ai_recommendations
   */
  export type Deals$ai_recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    where?: AiRecommendationWhereInput
    orderBy?: AiRecommendationOrderByWithRelationInput | AiRecommendationOrderByWithRelationInput[]
    cursor?: AiRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiRecommendationScalarFieldEnum | AiRecommendationScalarFieldEnum[]
  }

  /**
   * Deals.follow_ups
   */
  export type Deals$follow_upsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    cursor?: FollowUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * Deals.tags
   */
  export type Deals$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    cursor?: TagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Deals.conversation_history
   */
  export type Deals$conversation_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    where?: ConversationHistoryWhereInput
    orderBy?: ConversationHistoryOrderByWithRelationInput | ConversationHistoryOrderByWithRelationInput[]
    cursor?: ConversationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationHistoryScalarFieldEnum | ConversationHistoryScalarFieldEnum[]
  }

  /**
   * Deals.deal_insights
   */
  export type Deals$deal_insightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    where?: DealInsightsWhereInput
    orderBy?: DealInsightsOrderByWithRelationInput | DealInsightsOrderByWithRelationInput[]
    cursor?: DealInsightsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealInsightsScalarFieldEnum | DealInsightsScalarFieldEnum[]
  }

  /**
   * Deals without action
   */
  export type DealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deals
     */
    select?: DealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deals
     */
    omit?: DealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealsInclude<ExtArgs> | null
  }


  /**
   * Model Participants
   */

  export type AggregateParticipants = {
    _count: ParticipantsCountAggregateOutputType | null
    _avg: ParticipantsAvgAggregateOutputType | null
    _sum: ParticipantsSumAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  export type ParticipantsAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
    communication_score: number | null
  }

  export type ParticipantsSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
    communication_score: number | null
  }

  export type ParticipantsMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    prospect_name: string | null
    email: string | null
    slack_id: string | null
    role: string | null
    sentiment: string | null
    communication_score: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParticipantsMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    prospect_name: string | null
    email: string | null
    slack_id: string | null
    role: string | null
    sentiment: string | null
    communication_score: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParticipantsCountAggregateOutputType = {
    id: number
    deal_id: number
    prospect_name: number
    email: number
    slack_id: number
    role: number
    sentiment: number
    communication_score: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ParticipantsAvgAggregateInputType = {
    id?: true
    deal_id?: true
    communication_score?: true
  }

  export type ParticipantsSumAggregateInputType = {
    id?: true
    deal_id?: true
    communication_score?: true
  }

  export type ParticipantsMinAggregateInputType = {
    id?: true
    deal_id?: true
    prospect_name?: true
    email?: true
    slack_id?: true
    role?: true
    sentiment?: true
    communication_score?: true
    created_at?: true
    updated_at?: true
  }

  export type ParticipantsMaxAggregateInputType = {
    id?: true
    deal_id?: true
    prospect_name?: true
    email?: true
    slack_id?: true
    role?: true
    sentiment?: true
    communication_score?: true
    created_at?: true
    updated_at?: true
  }

  export type ParticipantsCountAggregateInputType = {
    id?: true
    deal_id?: true
    prospect_name?: true
    email?: true
    slack_id?: true
    role?: true
    sentiment?: true
    communication_score?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ParticipantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to aggregate.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantsMaxAggregateInputType
  }

  export type GetParticipantsAggregateType<T extends ParticipantsAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipants[P]>
      : GetScalarType<T[P], AggregateParticipants[P]>
  }




  export type ParticipantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithAggregationInput | ParticipantsOrderByWithAggregationInput[]
    by: ParticipantsScalarFieldEnum[] | ParticipantsScalarFieldEnum
    having?: ParticipantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantsCountAggregateInputType | true
    _avg?: ParticipantsAvgAggregateInputType
    _sum?: ParticipantsSumAggregateInputType
    _min?: ParticipantsMinAggregateInputType
    _max?: ParticipantsMaxAggregateInputType
  }

  export type ParticipantsGroupByOutputType = {
    id: number
    deal_id: number
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at: Date
    updated_at: Date
    _count: ParticipantsCountAggregateOutputType | null
    _avg: ParticipantsAvgAggregateOutputType | null
    _sum: ParticipantsSumAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  type GetParticipantsGroupByPayload<T extends ParticipantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    prospect_name?: boolean
    email?: boolean
    slack_id?: boolean
    role?: boolean
    sentiment?: boolean
    communication_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
    personality?: boolean | Participants$personalityArgs<ExtArgs>
    _count?: boolean | ParticipantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    prospect_name?: boolean
    email?: boolean
    slack_id?: boolean
    role?: boolean
    sentiment?: boolean
    communication_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    prospect_name?: boolean
    email?: boolean
    slack_id?: boolean
    role?: boolean
    sentiment?: boolean
    communication_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectScalar = {
    id?: boolean
    deal_id?: boolean
    prospect_name?: boolean
    email?: boolean
    slack_id?: boolean
    role?: boolean
    sentiment?: boolean
    communication_score?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ParticipantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "prospect_name" | "email" | "slack_id" | "role" | "sentiment" | "communication_score" | "created_at" | "updated_at", ExtArgs["result"]["participants"]>
  export type ParticipantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
    personality?: boolean | Participants$personalityArgs<ExtArgs>
    _count?: boolean | ParticipantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type ParticipantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $ParticipantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participants"
    objects: {
      deal: Prisma.$DealsPayload<ExtArgs>
      personality: Prisma.$PersonalityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      prospect_name: string
      email: string
      slack_id: string
      role: string
      sentiment: string
      communication_score: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["participants"]>
    composites: {}
  }

  type ParticipantsGetPayload<S extends boolean | null | undefined | ParticipantsDefaultArgs> = $Result.GetResult<Prisma.$ParticipantsPayload, S>

  type ParticipantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantsCountAggregateInputType | true
    }

  export interface ParticipantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participants'], meta: { name: 'Participants' } }
    /**
     * Find zero or one Participants that matches the filter.
     * @param {ParticipantsFindUniqueArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantsFindUniqueArgs>(args: SelectSubset<T, ParticipantsFindUniqueArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantsFindUniqueOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindFirstArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantsFindFirstArgs>(args?: SelectSubset<T, ParticipantsFindFirstArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindFirstOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participants.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantsWithIdOnly = await prisma.participants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantsFindManyArgs>(args?: SelectSubset<T, ParticipantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participants.
     * @param {ParticipantsCreateArgs} args - Arguments to create a Participants.
     * @example
     * // Create one Participants
     * const Participants = await prisma.participants.create({
     *   data: {
     *     // ... data to create a Participants
     *   }
     * })
     * 
     */
    create<T extends ParticipantsCreateArgs>(args: SelectSubset<T, ParticipantsCreateArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantsCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantsCreateManyArgs>(args?: SelectSubset<T, ParticipantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantsCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantsWithIdOnly = await prisma.participants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participants.
     * @param {ParticipantsDeleteArgs} args - Arguments to delete one Participants.
     * @example
     * // Delete one Participants
     * const Participants = await prisma.participants.delete({
     *   where: {
     *     // ... filter to delete one Participants
     *   }
     * })
     * 
     */
    delete<T extends ParticipantsDeleteArgs>(args: SelectSubset<T, ParticipantsDeleteArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participants.
     * @param {ParticipantsUpdateArgs} args - Arguments to update one Participants.
     * @example
     * // Update one Participants
     * const participants = await prisma.participants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantsUpdateArgs>(args: SelectSubset<T, ParticipantsUpdateArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantsDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantsDeleteManyArgs>(args?: SelectSubset<T, ParticipantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantsUpdateManyArgs>(args: SelectSubset<T, ParticipantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantsUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantsWithIdOnly = await prisma.participants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantsUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participants.
     * @param {ParticipantsUpsertArgs} args - Arguments to update or create a Participants.
     * @example
     * // Update or create a Participants
     * const participants = await prisma.participants.upsert({
     *   create: {
     *     // ... data to create a Participants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participants we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantsUpsertArgs>(args: SelectSubset<T, ParticipantsUpsertArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participants.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantsCountArgs>(
      args?: Subset<T, ParticipantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantsAggregateArgs>(args: Subset<T, ParticipantsAggregateArgs>): Prisma.PrismaPromise<GetParticipantsAggregateType<T>>

    /**
     * Group by Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantsGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participants model
   */
  readonly fields: ParticipantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personality<T extends Participants$personalityArgs<ExtArgs> = {}>(args?: Subset<T, Participants$personalityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participants model
   */
  interface ParticipantsFieldRefs {
    readonly id: FieldRef<"Participants", 'Int'>
    readonly deal_id: FieldRef<"Participants", 'Int'>
    readonly prospect_name: FieldRef<"Participants", 'String'>
    readonly email: FieldRef<"Participants", 'String'>
    readonly slack_id: FieldRef<"Participants", 'String'>
    readonly role: FieldRef<"Participants", 'String'>
    readonly sentiment: FieldRef<"Participants", 'String'>
    readonly communication_score: FieldRef<"Participants", 'Float'>
    readonly created_at: FieldRef<"Participants", 'DateTime'>
    readonly updated_at: FieldRef<"Participants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participants findUnique
   */
  export type ParticipantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants findUniqueOrThrow
   */
  export type ParticipantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants findFirst
   */
  export type ParticipantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants findFirstOrThrow
   */
  export type ParticipantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants findMany
   */
  export type ParticipantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants create
   */
  export type ParticipantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Participants.
     */
    data: XOR<ParticipantsCreateInput, ParticipantsUncheckedCreateInput>
  }

  /**
   * Participants createMany
   */
  export type ParticipantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantsCreateManyInput | ParticipantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participants createManyAndReturn
   */
  export type ParticipantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantsCreateManyInput | ParticipantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participants update
   */
  export type ParticipantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Participants.
     */
    data: XOR<ParticipantsUpdateInput, ParticipantsUncheckedUpdateInput>
    /**
     * Choose, which Participants to update.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants updateMany
   */
  export type ParticipantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participants updateManyAndReturn
   */
  export type ParticipantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participants upsert
   */
  export type ParticipantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Participants to update in case it exists.
     */
    where: ParticipantsWhereUniqueInput
    /**
     * In case the Participants found by the `where` argument doesn't exist, create a new Participants with this data.
     */
    create: XOR<ParticipantsCreateInput, ParticipantsUncheckedCreateInput>
    /**
     * In case the Participants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantsUpdateInput, ParticipantsUncheckedUpdateInput>
  }

  /**
   * Participants delete
   */
  export type ParticipantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter which Participants to delete.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants deleteMany
   */
  export type ParticipantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participants.personality
   */
  export type Participants$personalityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    where?: PersonalityWhereInput
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    cursor?: PersonalityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Participants without action
   */
  export type ParticipantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
  }


  /**
   * Model Risks
   */

  export type AggregateRisks = {
    _count: RisksCountAggregateOutputType | null
    _avg: RisksAvgAggregateOutputType | null
    _sum: RisksSumAggregateOutputType | null
    _min: RisksMinAggregateOutputType | null
    _max: RisksMaxAggregateOutputType | null
  }

  export type RisksAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
    deal_risk_score: number | null
    churn_risk_score: number | null
    timeline_risk_score: number | null
    budget_risk_score: number | null
  }

  export type RisksSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
    deal_risk_score: number | null
    churn_risk_score: number | null
    timeline_risk_score: number | null
    budget_risk_score: number | null
  }

  export type RisksMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    deal_risk_score: number | null
    churn_risk_score: number | null
    timeline_risk_score: number | null
    budget_risk_score: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RisksMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    deal_risk_score: number | null
    churn_risk_score: number | null
    timeline_risk_score: number | null
    budget_risk_score: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RisksCountAggregateOutputType = {
    id: number
    deal_id: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RisksAvgAggregateInputType = {
    id?: true
    deal_id?: true
    deal_risk_score?: true
    churn_risk_score?: true
    timeline_risk_score?: true
    budget_risk_score?: true
  }

  export type RisksSumAggregateInputType = {
    id?: true
    deal_id?: true
    deal_risk_score?: true
    churn_risk_score?: true
    timeline_risk_score?: true
    budget_risk_score?: true
  }

  export type RisksMinAggregateInputType = {
    id?: true
    deal_id?: true
    deal_risk_score?: true
    churn_risk_score?: true
    timeline_risk_score?: true
    budget_risk_score?: true
    created_at?: true
    updated_at?: true
  }

  export type RisksMaxAggregateInputType = {
    id?: true
    deal_id?: true
    deal_risk_score?: true
    churn_risk_score?: true
    timeline_risk_score?: true
    budget_risk_score?: true
    created_at?: true
    updated_at?: true
  }

  export type RisksCountAggregateInputType = {
    id?: true
    deal_id?: true
    deal_risk_score?: true
    churn_risk_score?: true
    timeline_risk_score?: true
    budget_risk_score?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RisksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Risks to aggregate.
     */
    where?: RisksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Risks to fetch.
     */
    orderBy?: RisksOrderByWithRelationInput | RisksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RisksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Risks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Risks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Risks
    **/
    _count?: true | RisksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RisksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RisksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RisksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RisksMaxAggregateInputType
  }

  export type GetRisksAggregateType<T extends RisksAggregateArgs> = {
        [P in keyof T & keyof AggregateRisks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRisks[P]>
      : GetScalarType<T[P], AggregateRisks[P]>
  }




  export type RisksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RisksWhereInput
    orderBy?: RisksOrderByWithAggregationInput | RisksOrderByWithAggregationInput[]
    by: RisksScalarFieldEnum[] | RisksScalarFieldEnum
    having?: RisksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RisksCountAggregateInputType | true
    _avg?: RisksAvgAggregateInputType
    _sum?: RisksSumAggregateInputType
    _min?: RisksMinAggregateInputType
    _max?: RisksMaxAggregateInputType
  }

  export type RisksGroupByOutputType = {
    id: number
    deal_id: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at: Date
    updated_at: Date
    _count: RisksCountAggregateOutputType | null
    _avg: RisksAvgAggregateOutputType | null
    _sum: RisksSumAggregateOutputType | null
    _min: RisksMinAggregateOutputType | null
    _max: RisksMaxAggregateOutputType | null
  }

  type GetRisksGroupByPayload<T extends RisksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RisksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RisksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RisksGroupByOutputType[P]>
            : GetScalarType<T[P], RisksGroupByOutputType[P]>
        }
      >
    >


  export type RisksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    deal_risk_score?: boolean
    churn_risk_score?: boolean
    timeline_risk_score?: boolean
    budget_risk_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    risk_explanation?: boolean | Risks$risk_explanationArgs<ExtArgs>
    deal?: boolean | DealsDefaultArgs<ExtArgs>
    _count?: boolean | RisksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["risks"]>

  export type RisksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    deal_risk_score?: boolean
    churn_risk_score?: boolean
    timeline_risk_score?: boolean
    budget_risk_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["risks"]>

  export type RisksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    deal_risk_score?: boolean
    churn_risk_score?: boolean
    timeline_risk_score?: boolean
    budget_risk_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["risks"]>

  export type RisksSelectScalar = {
    id?: boolean
    deal_id?: boolean
    deal_risk_score?: boolean
    churn_risk_score?: boolean
    timeline_risk_score?: boolean
    budget_risk_score?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RisksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "deal_risk_score" | "churn_risk_score" | "timeline_risk_score" | "budget_risk_score" | "created_at" | "updated_at", ExtArgs["result"]["risks"]>
  export type RisksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    risk_explanation?: boolean | Risks$risk_explanationArgs<ExtArgs>
    deal?: boolean | DealsDefaultArgs<ExtArgs>
    _count?: boolean | RisksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RisksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type RisksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $RisksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Risks"
    objects: {
      risk_explanation: Prisma.$RiskExplanationPayload<ExtArgs>[]
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      deal_risk_score: number
      churn_risk_score: number
      timeline_risk_score: number
      budget_risk_score: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["risks"]>
    composites: {}
  }

  type RisksGetPayload<S extends boolean | null | undefined | RisksDefaultArgs> = $Result.GetResult<Prisma.$RisksPayload, S>

  type RisksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RisksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RisksCountAggregateInputType | true
    }

  export interface RisksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Risks'], meta: { name: 'Risks' } }
    /**
     * Find zero or one Risks that matches the filter.
     * @param {RisksFindUniqueArgs} args - Arguments to find a Risks
     * @example
     * // Get one Risks
     * const risks = await prisma.risks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RisksFindUniqueArgs>(args: SelectSubset<T, RisksFindUniqueArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Risks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RisksFindUniqueOrThrowArgs} args - Arguments to find a Risks
     * @example
     * // Get one Risks
     * const risks = await prisma.risks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RisksFindUniqueOrThrowArgs>(args: SelectSubset<T, RisksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Risks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksFindFirstArgs} args - Arguments to find a Risks
     * @example
     * // Get one Risks
     * const risks = await prisma.risks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RisksFindFirstArgs>(args?: SelectSubset<T, RisksFindFirstArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Risks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksFindFirstOrThrowArgs} args - Arguments to find a Risks
     * @example
     * // Get one Risks
     * const risks = await prisma.risks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RisksFindFirstOrThrowArgs>(args?: SelectSubset<T, RisksFindFirstOrThrowArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Risks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Risks
     * const risks = await prisma.risks.findMany()
     * 
     * // Get first 10 Risks
     * const risks = await prisma.risks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const risksWithIdOnly = await prisma.risks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RisksFindManyArgs>(args?: SelectSubset<T, RisksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Risks.
     * @param {RisksCreateArgs} args - Arguments to create a Risks.
     * @example
     * // Create one Risks
     * const Risks = await prisma.risks.create({
     *   data: {
     *     // ... data to create a Risks
     *   }
     * })
     * 
     */
    create<T extends RisksCreateArgs>(args: SelectSubset<T, RisksCreateArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Risks.
     * @param {RisksCreateManyArgs} args - Arguments to create many Risks.
     * @example
     * // Create many Risks
     * const risks = await prisma.risks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RisksCreateManyArgs>(args?: SelectSubset<T, RisksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Risks and returns the data saved in the database.
     * @param {RisksCreateManyAndReturnArgs} args - Arguments to create many Risks.
     * @example
     * // Create many Risks
     * const risks = await prisma.risks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Risks and only return the `id`
     * const risksWithIdOnly = await prisma.risks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RisksCreateManyAndReturnArgs>(args?: SelectSubset<T, RisksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Risks.
     * @param {RisksDeleteArgs} args - Arguments to delete one Risks.
     * @example
     * // Delete one Risks
     * const Risks = await prisma.risks.delete({
     *   where: {
     *     // ... filter to delete one Risks
     *   }
     * })
     * 
     */
    delete<T extends RisksDeleteArgs>(args: SelectSubset<T, RisksDeleteArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Risks.
     * @param {RisksUpdateArgs} args - Arguments to update one Risks.
     * @example
     * // Update one Risks
     * const risks = await prisma.risks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RisksUpdateArgs>(args: SelectSubset<T, RisksUpdateArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Risks.
     * @param {RisksDeleteManyArgs} args - Arguments to filter Risks to delete.
     * @example
     * // Delete a few Risks
     * const { count } = await prisma.risks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RisksDeleteManyArgs>(args?: SelectSubset<T, RisksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Risks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Risks
     * const risks = await prisma.risks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RisksUpdateManyArgs>(args: SelectSubset<T, RisksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Risks and returns the data updated in the database.
     * @param {RisksUpdateManyAndReturnArgs} args - Arguments to update many Risks.
     * @example
     * // Update many Risks
     * const risks = await prisma.risks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Risks and only return the `id`
     * const risksWithIdOnly = await prisma.risks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RisksUpdateManyAndReturnArgs>(args: SelectSubset<T, RisksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Risks.
     * @param {RisksUpsertArgs} args - Arguments to update or create a Risks.
     * @example
     * // Update or create a Risks
     * const risks = await prisma.risks.upsert({
     *   create: {
     *     // ... data to create a Risks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Risks we want to update
     *   }
     * })
     */
    upsert<T extends RisksUpsertArgs>(args: SelectSubset<T, RisksUpsertArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Risks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksCountArgs} args - Arguments to filter Risks to count.
     * @example
     * // Count the number of Risks
     * const count = await prisma.risks.count({
     *   where: {
     *     // ... the filter for the Risks we want to count
     *   }
     * })
    **/
    count<T extends RisksCountArgs>(
      args?: Subset<T, RisksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RisksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Risks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RisksAggregateArgs>(args: Subset<T, RisksAggregateArgs>): Prisma.PrismaPromise<GetRisksAggregateType<T>>

    /**
     * Group by Risks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RisksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RisksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RisksGroupByArgs['orderBy'] }
        : { orderBy?: RisksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RisksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRisksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Risks model
   */
  readonly fields: RisksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Risks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RisksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    risk_explanation<T extends Risks$risk_explanationArgs<ExtArgs> = {}>(args?: Subset<T, Risks$risk_explanationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Risks model
   */
  interface RisksFieldRefs {
    readonly id: FieldRef<"Risks", 'Int'>
    readonly deal_id: FieldRef<"Risks", 'Int'>
    readonly deal_risk_score: FieldRef<"Risks", 'Float'>
    readonly churn_risk_score: FieldRef<"Risks", 'Float'>
    readonly timeline_risk_score: FieldRef<"Risks", 'Float'>
    readonly budget_risk_score: FieldRef<"Risks", 'Float'>
    readonly created_at: FieldRef<"Risks", 'DateTime'>
    readonly updated_at: FieldRef<"Risks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Risks findUnique
   */
  export type RisksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * Filter, which Risks to fetch.
     */
    where: RisksWhereUniqueInput
  }

  /**
   * Risks findUniqueOrThrow
   */
  export type RisksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * Filter, which Risks to fetch.
     */
    where: RisksWhereUniqueInput
  }

  /**
   * Risks findFirst
   */
  export type RisksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * Filter, which Risks to fetch.
     */
    where?: RisksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Risks to fetch.
     */
    orderBy?: RisksOrderByWithRelationInput | RisksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Risks.
     */
    cursor?: RisksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Risks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Risks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Risks.
     */
    distinct?: RisksScalarFieldEnum | RisksScalarFieldEnum[]
  }

  /**
   * Risks findFirstOrThrow
   */
  export type RisksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * Filter, which Risks to fetch.
     */
    where?: RisksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Risks to fetch.
     */
    orderBy?: RisksOrderByWithRelationInput | RisksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Risks.
     */
    cursor?: RisksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Risks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Risks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Risks.
     */
    distinct?: RisksScalarFieldEnum | RisksScalarFieldEnum[]
  }

  /**
   * Risks findMany
   */
  export type RisksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * Filter, which Risks to fetch.
     */
    where?: RisksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Risks to fetch.
     */
    orderBy?: RisksOrderByWithRelationInput | RisksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Risks.
     */
    cursor?: RisksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Risks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Risks.
     */
    skip?: number
    distinct?: RisksScalarFieldEnum | RisksScalarFieldEnum[]
  }

  /**
   * Risks create
   */
  export type RisksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * The data needed to create a Risks.
     */
    data: XOR<RisksCreateInput, RisksUncheckedCreateInput>
  }

  /**
   * Risks createMany
   */
  export type RisksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Risks.
     */
    data: RisksCreateManyInput | RisksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Risks createManyAndReturn
   */
  export type RisksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * The data used to create many Risks.
     */
    data: RisksCreateManyInput | RisksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Risks update
   */
  export type RisksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * The data needed to update a Risks.
     */
    data: XOR<RisksUpdateInput, RisksUncheckedUpdateInput>
    /**
     * Choose, which Risks to update.
     */
    where: RisksWhereUniqueInput
  }

  /**
   * Risks updateMany
   */
  export type RisksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Risks.
     */
    data: XOR<RisksUpdateManyMutationInput, RisksUncheckedUpdateManyInput>
    /**
     * Filter which Risks to update
     */
    where?: RisksWhereInput
    /**
     * Limit how many Risks to update.
     */
    limit?: number
  }

  /**
   * Risks updateManyAndReturn
   */
  export type RisksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * The data used to update Risks.
     */
    data: XOR<RisksUpdateManyMutationInput, RisksUncheckedUpdateManyInput>
    /**
     * Filter which Risks to update
     */
    where?: RisksWhereInput
    /**
     * Limit how many Risks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Risks upsert
   */
  export type RisksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * The filter to search for the Risks to update in case it exists.
     */
    where: RisksWhereUniqueInput
    /**
     * In case the Risks found by the `where` argument doesn't exist, create a new Risks with this data.
     */
    create: XOR<RisksCreateInput, RisksUncheckedCreateInput>
    /**
     * In case the Risks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RisksUpdateInput, RisksUncheckedUpdateInput>
  }

  /**
   * Risks delete
   */
  export type RisksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
    /**
     * Filter which Risks to delete.
     */
    where: RisksWhereUniqueInput
  }

  /**
   * Risks deleteMany
   */
  export type RisksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Risks to delete
     */
    where?: RisksWhereInput
    /**
     * Limit how many Risks to delete.
     */
    limit?: number
  }

  /**
   * Risks.risk_explanation
   */
  export type Risks$risk_explanationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    where?: RiskExplanationWhereInput
    orderBy?: RiskExplanationOrderByWithRelationInput | RiskExplanationOrderByWithRelationInput[]
    cursor?: RiskExplanationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskExplanationScalarFieldEnum | RiskExplanationScalarFieldEnum[]
  }

  /**
   * Risks without action
   */
  export type RisksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Risks
     */
    select?: RisksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Risks
     */
    omit?: RisksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RisksInclude<ExtArgs> | null
  }


  /**
   * Model ActivityMetrics
   */

  export type AggregateActivityMetrics = {
    _count: ActivityMetricsCountAggregateOutputType | null
    _avg: ActivityMetricsAvgAggregateOutputType | null
    _sum: ActivityMetricsSumAggregateOutputType | null
    _min: ActivityMetricsMinAggregateOutputType | null
    _max: ActivityMetricsMaxAggregateOutputType | null
  }

  export type ActivityMetricsAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
    message_count: number | null
    prospect_response_time: number | null
  }

  export type ActivityMetricsSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
    message_count: number | null
    prospect_response_time: number | null
  }

  export type ActivityMetricsMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    message_count: number | null
    prospect_response_time: number | null
    engagement_trend: string | null
    last_communication_source: string | null
    last_communication_summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityMetricsMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    message_count: number | null
    prospect_response_time: number | null
    engagement_trend: string | null
    last_communication_source: string | null
    last_communication_summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityMetricsCountAggregateOutputType = {
    id: number
    deal_id: number
    message_count: number
    prospect_response_time: number
    engagement_trend: number
    last_communication_source: number
    last_communication_summary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ActivityMetricsAvgAggregateInputType = {
    id?: true
    deal_id?: true
    message_count?: true
    prospect_response_time?: true
  }

  export type ActivityMetricsSumAggregateInputType = {
    id?: true
    deal_id?: true
    message_count?: true
    prospect_response_time?: true
  }

  export type ActivityMetricsMinAggregateInputType = {
    id?: true
    deal_id?: true
    message_count?: true
    prospect_response_time?: true
    engagement_trend?: true
    last_communication_source?: true
    last_communication_summary?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivityMetricsMaxAggregateInputType = {
    id?: true
    deal_id?: true
    message_count?: true
    prospect_response_time?: true
    engagement_trend?: true
    last_communication_source?: true
    last_communication_summary?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivityMetricsCountAggregateInputType = {
    id?: true
    deal_id?: true
    message_count?: true
    prospect_response_time?: true
    engagement_trend?: true
    last_communication_source?: true
    last_communication_summary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ActivityMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityMetrics to aggregate.
     */
    where?: ActivityMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMetrics to fetch.
     */
    orderBy?: ActivityMetricsOrderByWithRelationInput | ActivityMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityMetrics
    **/
    _count?: true | ActivityMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMetricsMaxAggregateInputType
  }

  export type GetActivityMetricsAggregateType<T extends ActivityMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityMetrics[P]>
      : GetScalarType<T[P], AggregateActivityMetrics[P]>
  }




  export type ActivityMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityMetricsWhereInput
    orderBy?: ActivityMetricsOrderByWithAggregationInput | ActivityMetricsOrderByWithAggregationInput[]
    by: ActivityMetricsScalarFieldEnum[] | ActivityMetricsScalarFieldEnum
    having?: ActivityMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityMetricsCountAggregateInputType | true
    _avg?: ActivityMetricsAvgAggregateInputType
    _sum?: ActivityMetricsSumAggregateInputType
    _min?: ActivityMetricsMinAggregateInputType
    _max?: ActivityMetricsMaxAggregateInputType
  }

  export type ActivityMetricsGroupByOutputType = {
    id: number
    deal_id: number
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at: Date
    updated_at: Date
    _count: ActivityMetricsCountAggregateOutputType | null
    _avg: ActivityMetricsAvgAggregateOutputType | null
    _sum: ActivityMetricsSumAggregateOutputType | null
    _min: ActivityMetricsMinAggregateOutputType | null
    _max: ActivityMetricsMaxAggregateOutputType | null
  }

  type GetActivityMetricsGroupByPayload<T extends ActivityMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityMetricsGroupByOutputType[P]>
        }
      >
    >


  export type ActivityMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    message_count?: boolean
    prospect_response_time?: boolean
    engagement_trend?: boolean
    last_communication_source?: boolean
    last_communication_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    timeline?: boolean | ActivityMetrics$timelineArgs<ExtArgs>
    deal?: boolean | DealsDefaultArgs<ExtArgs>
    _count?: boolean | ActivityMetricsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityMetrics"]>

  export type ActivityMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    message_count?: boolean
    prospect_response_time?: boolean
    engagement_trend?: boolean
    last_communication_source?: boolean
    last_communication_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityMetrics"]>

  export type ActivityMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    message_count?: boolean
    prospect_response_time?: boolean
    engagement_trend?: boolean
    last_communication_source?: boolean
    last_communication_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityMetrics"]>

  export type ActivityMetricsSelectScalar = {
    id?: boolean
    deal_id?: boolean
    message_count?: boolean
    prospect_response_time?: boolean
    engagement_trend?: boolean
    last_communication_source?: boolean
    last_communication_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ActivityMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "message_count" | "prospect_response_time" | "engagement_trend" | "last_communication_source" | "last_communication_summary" | "created_at" | "updated_at", ExtArgs["result"]["activityMetrics"]>
  export type ActivityMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | ActivityMetrics$timelineArgs<ExtArgs>
    deal?: boolean | DealsDefaultArgs<ExtArgs>
    _count?: boolean | ActivityMetricsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type ActivityMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $ActivityMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityMetrics"
    objects: {
      timeline: Prisma.$TimelinePayload<ExtArgs>[]
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      message_count: number
      prospect_response_time: number
      engagement_trend: string
      last_communication_source: string
      last_communication_summary: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["activityMetrics"]>
    composites: {}
  }

  type ActivityMetricsGetPayload<S extends boolean | null | undefined | ActivityMetricsDefaultArgs> = $Result.GetResult<Prisma.$ActivityMetricsPayload, S>

  type ActivityMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityMetricsCountAggregateInputType | true
    }

  export interface ActivityMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityMetrics'], meta: { name: 'ActivityMetrics' } }
    /**
     * Find zero or one ActivityMetrics that matches the filter.
     * @param {ActivityMetricsFindUniqueArgs} args - Arguments to find a ActivityMetrics
     * @example
     * // Get one ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityMetricsFindUniqueArgs>(args: SelectSubset<T, ActivityMetricsFindUniqueArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityMetricsFindUniqueOrThrowArgs} args - Arguments to find a ActivityMetrics
     * @example
     * // Get one ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsFindFirstArgs} args - Arguments to find a ActivityMetrics
     * @example
     * // Get one ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityMetricsFindFirstArgs>(args?: SelectSubset<T, ActivityMetricsFindFirstArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsFindFirstOrThrowArgs} args - Arguments to find a ActivityMetrics
     * @example
     * // Get one ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.findMany()
     * 
     * // Get first 10 ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityMetricsWithIdOnly = await prisma.activityMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityMetricsFindManyArgs>(args?: SelectSubset<T, ActivityMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityMetrics.
     * @param {ActivityMetricsCreateArgs} args - Arguments to create a ActivityMetrics.
     * @example
     * // Create one ActivityMetrics
     * const ActivityMetrics = await prisma.activityMetrics.create({
     *   data: {
     *     // ... data to create a ActivityMetrics
     *   }
     * })
     * 
     */
    create<T extends ActivityMetricsCreateArgs>(args: SelectSubset<T, ActivityMetricsCreateArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityMetrics.
     * @param {ActivityMetricsCreateManyArgs} args - Arguments to create many ActivityMetrics.
     * @example
     * // Create many ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityMetricsCreateManyArgs>(args?: SelectSubset<T, ActivityMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityMetrics and returns the data saved in the database.
     * @param {ActivityMetricsCreateManyAndReturnArgs} args - Arguments to create many ActivityMetrics.
     * @example
     * // Create many ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityMetrics and only return the `id`
     * const activityMetricsWithIdOnly = await prisma.activityMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityMetrics.
     * @param {ActivityMetricsDeleteArgs} args - Arguments to delete one ActivityMetrics.
     * @example
     * // Delete one ActivityMetrics
     * const ActivityMetrics = await prisma.activityMetrics.delete({
     *   where: {
     *     // ... filter to delete one ActivityMetrics
     *   }
     * })
     * 
     */
    delete<T extends ActivityMetricsDeleteArgs>(args: SelectSubset<T, ActivityMetricsDeleteArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityMetrics.
     * @param {ActivityMetricsUpdateArgs} args - Arguments to update one ActivityMetrics.
     * @example
     * // Update one ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityMetricsUpdateArgs>(args: SelectSubset<T, ActivityMetricsUpdateArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityMetrics.
     * @param {ActivityMetricsDeleteManyArgs} args - Arguments to filter ActivityMetrics to delete.
     * @example
     * // Delete a few ActivityMetrics
     * const { count } = await prisma.activityMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityMetricsDeleteManyArgs>(args?: SelectSubset<T, ActivityMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityMetricsUpdateManyArgs>(args: SelectSubset<T, ActivityMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityMetrics and returns the data updated in the database.
     * @param {ActivityMetricsUpdateManyAndReturnArgs} args - Arguments to update many ActivityMetrics.
     * @example
     * // Update many ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityMetrics and only return the `id`
     * const activityMetricsWithIdOnly = await prisma.activityMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityMetrics.
     * @param {ActivityMetricsUpsertArgs} args - Arguments to update or create a ActivityMetrics.
     * @example
     * // Update or create a ActivityMetrics
     * const activityMetrics = await prisma.activityMetrics.upsert({
     *   create: {
     *     // ... data to create a ActivityMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityMetrics we want to update
     *   }
     * })
     */
    upsert<T extends ActivityMetricsUpsertArgs>(args: SelectSubset<T, ActivityMetricsUpsertArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsCountArgs} args - Arguments to filter ActivityMetrics to count.
     * @example
     * // Count the number of ActivityMetrics
     * const count = await prisma.activityMetrics.count({
     *   where: {
     *     // ... the filter for the ActivityMetrics we want to count
     *   }
     * })
    **/
    count<T extends ActivityMetricsCountArgs>(
      args?: Subset<T, ActivityMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityMetricsAggregateArgs>(args: Subset<T, ActivityMetricsAggregateArgs>): Prisma.PrismaPromise<GetActivityMetricsAggregateType<T>>

    /**
     * Group by ActivityMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityMetricsGroupByArgs['orderBy'] }
        : { orderBy?: ActivityMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityMetrics model
   */
  readonly fields: ActivityMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeline<T extends ActivityMetrics$timelineArgs<ExtArgs> = {}>(args?: Subset<T, ActivityMetrics$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityMetrics model
   */
  interface ActivityMetricsFieldRefs {
    readonly id: FieldRef<"ActivityMetrics", 'Int'>
    readonly deal_id: FieldRef<"ActivityMetrics", 'Int'>
    readonly message_count: FieldRef<"ActivityMetrics", 'Int'>
    readonly prospect_response_time: FieldRef<"ActivityMetrics", 'Float'>
    readonly engagement_trend: FieldRef<"ActivityMetrics", 'String'>
    readonly last_communication_source: FieldRef<"ActivityMetrics", 'String'>
    readonly last_communication_summary: FieldRef<"ActivityMetrics", 'String'>
    readonly created_at: FieldRef<"ActivityMetrics", 'DateTime'>
    readonly updated_at: FieldRef<"ActivityMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityMetrics findUnique
   */
  export type ActivityMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMetrics to fetch.
     */
    where: ActivityMetricsWhereUniqueInput
  }

  /**
   * ActivityMetrics findUniqueOrThrow
   */
  export type ActivityMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMetrics to fetch.
     */
    where: ActivityMetricsWhereUniqueInput
  }

  /**
   * ActivityMetrics findFirst
   */
  export type ActivityMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMetrics to fetch.
     */
    where?: ActivityMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMetrics to fetch.
     */
    orderBy?: ActivityMetricsOrderByWithRelationInput | ActivityMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityMetrics.
     */
    cursor?: ActivityMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityMetrics.
     */
    distinct?: ActivityMetricsScalarFieldEnum | ActivityMetricsScalarFieldEnum[]
  }

  /**
   * ActivityMetrics findFirstOrThrow
   */
  export type ActivityMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMetrics to fetch.
     */
    where?: ActivityMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMetrics to fetch.
     */
    orderBy?: ActivityMetricsOrderByWithRelationInput | ActivityMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityMetrics.
     */
    cursor?: ActivityMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityMetrics.
     */
    distinct?: ActivityMetricsScalarFieldEnum | ActivityMetricsScalarFieldEnum[]
  }

  /**
   * ActivityMetrics findMany
   */
  export type ActivityMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityMetrics to fetch.
     */
    where?: ActivityMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityMetrics to fetch.
     */
    orderBy?: ActivityMetricsOrderByWithRelationInput | ActivityMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityMetrics.
     */
    cursor?: ActivityMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityMetrics.
     */
    skip?: number
    distinct?: ActivityMetricsScalarFieldEnum | ActivityMetricsScalarFieldEnum[]
  }

  /**
   * ActivityMetrics create
   */
  export type ActivityMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityMetrics.
     */
    data: XOR<ActivityMetricsCreateInput, ActivityMetricsUncheckedCreateInput>
  }

  /**
   * ActivityMetrics createMany
   */
  export type ActivityMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityMetrics.
     */
    data: ActivityMetricsCreateManyInput | ActivityMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityMetrics createManyAndReturn
   */
  export type ActivityMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityMetrics.
     */
    data: ActivityMetricsCreateManyInput | ActivityMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityMetrics update
   */
  export type ActivityMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityMetrics.
     */
    data: XOR<ActivityMetricsUpdateInput, ActivityMetricsUncheckedUpdateInput>
    /**
     * Choose, which ActivityMetrics to update.
     */
    where: ActivityMetricsWhereUniqueInput
  }

  /**
   * ActivityMetrics updateMany
   */
  export type ActivityMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityMetrics.
     */
    data: XOR<ActivityMetricsUpdateManyMutationInput, ActivityMetricsUncheckedUpdateManyInput>
    /**
     * Filter which ActivityMetrics to update
     */
    where?: ActivityMetricsWhereInput
    /**
     * Limit how many ActivityMetrics to update.
     */
    limit?: number
  }

  /**
   * ActivityMetrics updateManyAndReturn
   */
  export type ActivityMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * The data used to update ActivityMetrics.
     */
    data: XOR<ActivityMetricsUpdateManyMutationInput, ActivityMetricsUncheckedUpdateManyInput>
    /**
     * Filter which ActivityMetrics to update
     */
    where?: ActivityMetricsWhereInput
    /**
     * Limit how many ActivityMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityMetrics upsert
   */
  export type ActivityMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityMetrics to update in case it exists.
     */
    where: ActivityMetricsWhereUniqueInput
    /**
     * In case the ActivityMetrics found by the `where` argument doesn't exist, create a new ActivityMetrics with this data.
     */
    create: XOR<ActivityMetricsCreateInput, ActivityMetricsUncheckedCreateInput>
    /**
     * In case the ActivityMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityMetricsUpdateInput, ActivityMetricsUncheckedUpdateInput>
  }

  /**
   * ActivityMetrics delete
   */
  export type ActivityMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
    /**
     * Filter which ActivityMetrics to delete.
     */
    where: ActivityMetricsWhereUniqueInput
  }

  /**
   * ActivityMetrics deleteMany
   */
  export type ActivityMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityMetrics to delete
     */
    where?: ActivityMetricsWhereInput
    /**
     * Limit how many ActivityMetrics to delete.
     */
    limit?: number
  }

  /**
   * ActivityMetrics.timeline
   */
  export type ActivityMetrics$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    cursor?: TimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * ActivityMetrics without action
   */
  export type ActivityMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityMetrics
     */
    select?: ActivityMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityMetrics
     */
    omit?: ActivityMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityMetricsInclude<ExtArgs> | null
  }


  /**
   * Model AiRecommendation
   */

  export type AggregateAiRecommendation = {
    _count: AiRecommendationCountAggregateOutputType | null
    _avg: AiRecommendationAvgAggregateOutputType | null
    _sum: AiRecommendationSumAggregateOutputType | null
    _min: AiRecommendationMinAggregateOutputType | null
    _max: AiRecommendationMaxAggregateOutputType | null
  }

  export type AiRecommendationAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type AiRecommendationSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type AiRecommendationMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    escalation_triggers: string | null
    deal_acceleration_tactics: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AiRecommendationMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    escalation_triggers: string | null
    deal_acceleration_tactics: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AiRecommendationCountAggregateOutputType = {
    id: number
    deal_id: number
    next_steps: number
    escalation_triggers: number
    deal_acceleration_tactics: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AiRecommendationAvgAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type AiRecommendationSumAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type AiRecommendationMinAggregateInputType = {
    id?: true
    deal_id?: true
    escalation_triggers?: true
    deal_acceleration_tactics?: true
    created_at?: true
    updated_at?: true
  }

  export type AiRecommendationMaxAggregateInputType = {
    id?: true
    deal_id?: true
    escalation_triggers?: true
    deal_acceleration_tactics?: true
    created_at?: true
    updated_at?: true
  }

  export type AiRecommendationCountAggregateInputType = {
    id?: true
    deal_id?: true
    next_steps?: true
    escalation_triggers?: true
    deal_acceleration_tactics?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AiRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiRecommendation to aggregate.
     */
    where?: AiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRecommendations to fetch.
     */
    orderBy?: AiRecommendationOrderByWithRelationInput | AiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiRecommendations
    **/
    _count?: true | AiRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiRecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiRecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiRecommendationMaxAggregateInputType
  }

  export type GetAiRecommendationAggregateType<T extends AiRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateAiRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiRecommendation[P]>
      : GetScalarType<T[P], AggregateAiRecommendation[P]>
  }




  export type AiRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiRecommendationWhereInput
    orderBy?: AiRecommendationOrderByWithAggregationInput | AiRecommendationOrderByWithAggregationInput[]
    by: AiRecommendationScalarFieldEnum[] | AiRecommendationScalarFieldEnum
    having?: AiRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiRecommendationCountAggregateInputType | true
    _avg?: AiRecommendationAvgAggregateInputType
    _sum?: AiRecommendationSumAggregateInputType
    _min?: AiRecommendationMinAggregateInputType
    _max?: AiRecommendationMaxAggregateInputType
  }

  export type AiRecommendationGroupByOutputType = {
    id: number
    deal_id: number
    next_steps: string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at: Date
    updated_at: Date
    _count: AiRecommendationCountAggregateOutputType | null
    _avg: AiRecommendationAvgAggregateOutputType | null
    _sum: AiRecommendationSumAggregateOutputType | null
    _min: AiRecommendationMinAggregateOutputType | null
    _max: AiRecommendationMaxAggregateOutputType | null
  }

  type GetAiRecommendationGroupByPayload<T extends AiRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], AiRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type AiRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    next_steps?: boolean
    escalation_triggers?: boolean
    deal_acceleration_tactics?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiRecommendation"]>

  export type AiRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    next_steps?: boolean
    escalation_triggers?: boolean
    deal_acceleration_tactics?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiRecommendation"]>

  export type AiRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    next_steps?: boolean
    escalation_triggers?: boolean
    deal_acceleration_tactics?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiRecommendation"]>

  export type AiRecommendationSelectScalar = {
    id?: boolean
    deal_id?: boolean
    next_steps?: boolean
    escalation_triggers?: boolean
    deal_acceleration_tactics?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AiRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "next_steps" | "escalation_triggers" | "deal_acceleration_tactics" | "created_at" | "updated_at", ExtArgs["result"]["aiRecommendation"]>
  export type AiRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type AiRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type AiRecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $AiRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiRecommendation"
    objects: {
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      next_steps: string[]
      escalation_triggers: string
      deal_acceleration_tactics: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["aiRecommendation"]>
    composites: {}
  }

  type AiRecommendationGetPayload<S extends boolean | null | undefined | AiRecommendationDefaultArgs> = $Result.GetResult<Prisma.$AiRecommendationPayload, S>

  type AiRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiRecommendationCountAggregateInputType | true
    }

  export interface AiRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiRecommendation'], meta: { name: 'AiRecommendation' } }
    /**
     * Find zero or one AiRecommendation that matches the filter.
     * @param {AiRecommendationFindUniqueArgs} args - Arguments to find a AiRecommendation
     * @example
     * // Get one AiRecommendation
     * const aiRecommendation = await prisma.aiRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiRecommendationFindUniqueArgs>(args: SelectSubset<T, AiRecommendationFindUniqueArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiRecommendationFindUniqueOrThrowArgs} args - Arguments to find a AiRecommendation
     * @example
     * // Get one AiRecommendation
     * const aiRecommendation = await prisma.aiRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, AiRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationFindFirstArgs} args - Arguments to find a AiRecommendation
     * @example
     * // Get one AiRecommendation
     * const aiRecommendation = await prisma.aiRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiRecommendationFindFirstArgs>(args?: SelectSubset<T, AiRecommendationFindFirstArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationFindFirstOrThrowArgs} args - Arguments to find a AiRecommendation
     * @example
     * // Get one AiRecommendation
     * const aiRecommendation = await prisma.aiRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, AiRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiRecommendations
     * const aiRecommendations = await prisma.aiRecommendation.findMany()
     * 
     * // Get first 10 AiRecommendations
     * const aiRecommendations = await prisma.aiRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiRecommendationWithIdOnly = await prisma.aiRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiRecommendationFindManyArgs>(args?: SelectSubset<T, AiRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiRecommendation.
     * @param {AiRecommendationCreateArgs} args - Arguments to create a AiRecommendation.
     * @example
     * // Create one AiRecommendation
     * const AiRecommendation = await prisma.aiRecommendation.create({
     *   data: {
     *     // ... data to create a AiRecommendation
     *   }
     * })
     * 
     */
    create<T extends AiRecommendationCreateArgs>(args: SelectSubset<T, AiRecommendationCreateArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiRecommendations.
     * @param {AiRecommendationCreateManyArgs} args - Arguments to create many AiRecommendations.
     * @example
     * // Create many AiRecommendations
     * const aiRecommendation = await prisma.aiRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiRecommendationCreateManyArgs>(args?: SelectSubset<T, AiRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiRecommendations and returns the data saved in the database.
     * @param {AiRecommendationCreateManyAndReturnArgs} args - Arguments to create many AiRecommendations.
     * @example
     * // Create many AiRecommendations
     * const aiRecommendation = await prisma.aiRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiRecommendations and only return the `id`
     * const aiRecommendationWithIdOnly = await prisma.aiRecommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, AiRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiRecommendation.
     * @param {AiRecommendationDeleteArgs} args - Arguments to delete one AiRecommendation.
     * @example
     * // Delete one AiRecommendation
     * const AiRecommendation = await prisma.aiRecommendation.delete({
     *   where: {
     *     // ... filter to delete one AiRecommendation
     *   }
     * })
     * 
     */
    delete<T extends AiRecommendationDeleteArgs>(args: SelectSubset<T, AiRecommendationDeleteArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiRecommendation.
     * @param {AiRecommendationUpdateArgs} args - Arguments to update one AiRecommendation.
     * @example
     * // Update one AiRecommendation
     * const aiRecommendation = await prisma.aiRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiRecommendationUpdateArgs>(args: SelectSubset<T, AiRecommendationUpdateArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiRecommendations.
     * @param {AiRecommendationDeleteManyArgs} args - Arguments to filter AiRecommendations to delete.
     * @example
     * // Delete a few AiRecommendations
     * const { count } = await prisma.aiRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiRecommendationDeleteManyArgs>(args?: SelectSubset<T, AiRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiRecommendations
     * const aiRecommendation = await prisma.aiRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiRecommendationUpdateManyArgs>(args: SelectSubset<T, AiRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiRecommendations and returns the data updated in the database.
     * @param {AiRecommendationUpdateManyAndReturnArgs} args - Arguments to update many AiRecommendations.
     * @example
     * // Update many AiRecommendations
     * const aiRecommendation = await prisma.aiRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiRecommendations and only return the `id`
     * const aiRecommendationWithIdOnly = await prisma.aiRecommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, AiRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiRecommendation.
     * @param {AiRecommendationUpsertArgs} args - Arguments to update or create a AiRecommendation.
     * @example
     * // Update or create a AiRecommendation
     * const aiRecommendation = await prisma.aiRecommendation.upsert({
     *   create: {
     *     // ... data to create a AiRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends AiRecommendationUpsertArgs>(args: SelectSubset<T, AiRecommendationUpsertArgs<ExtArgs>>): Prisma__AiRecommendationClient<$Result.GetResult<Prisma.$AiRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationCountArgs} args - Arguments to filter AiRecommendations to count.
     * @example
     * // Count the number of AiRecommendations
     * const count = await prisma.aiRecommendation.count({
     *   where: {
     *     // ... the filter for the AiRecommendations we want to count
     *   }
     * })
    **/
    count<T extends AiRecommendationCountArgs>(
      args?: Subset<T, AiRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiRecommendationAggregateArgs>(args: Subset<T, AiRecommendationAggregateArgs>): Prisma.PrismaPromise<GetAiRecommendationAggregateType<T>>

    /**
     * Group by AiRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: AiRecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiRecommendation model
   */
  readonly fields: AiRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiRecommendation model
   */
  interface AiRecommendationFieldRefs {
    readonly id: FieldRef<"AiRecommendation", 'Int'>
    readonly deal_id: FieldRef<"AiRecommendation", 'Int'>
    readonly next_steps: FieldRef<"AiRecommendation", 'String[]'>
    readonly escalation_triggers: FieldRef<"AiRecommendation", 'String'>
    readonly deal_acceleration_tactics: FieldRef<"AiRecommendation", 'String'>
    readonly created_at: FieldRef<"AiRecommendation", 'DateTime'>
    readonly updated_at: FieldRef<"AiRecommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiRecommendation findUnique
   */
  export type AiRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AiRecommendation to fetch.
     */
    where: AiRecommendationWhereUniqueInput
  }

  /**
   * AiRecommendation findUniqueOrThrow
   */
  export type AiRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AiRecommendation to fetch.
     */
    where: AiRecommendationWhereUniqueInput
  }

  /**
   * AiRecommendation findFirst
   */
  export type AiRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AiRecommendation to fetch.
     */
    where?: AiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRecommendations to fetch.
     */
    orderBy?: AiRecommendationOrderByWithRelationInput | AiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiRecommendations.
     */
    cursor?: AiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiRecommendations.
     */
    distinct?: AiRecommendationScalarFieldEnum | AiRecommendationScalarFieldEnum[]
  }

  /**
   * AiRecommendation findFirstOrThrow
   */
  export type AiRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AiRecommendation to fetch.
     */
    where?: AiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRecommendations to fetch.
     */
    orderBy?: AiRecommendationOrderByWithRelationInput | AiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiRecommendations.
     */
    cursor?: AiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiRecommendations.
     */
    distinct?: AiRecommendationScalarFieldEnum | AiRecommendationScalarFieldEnum[]
  }

  /**
   * AiRecommendation findMany
   */
  export type AiRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which AiRecommendations to fetch.
     */
    where?: AiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRecommendations to fetch.
     */
    orderBy?: AiRecommendationOrderByWithRelationInput | AiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiRecommendations.
     */
    cursor?: AiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRecommendations.
     */
    skip?: number
    distinct?: AiRecommendationScalarFieldEnum | AiRecommendationScalarFieldEnum[]
  }

  /**
   * AiRecommendation create
   */
  export type AiRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a AiRecommendation.
     */
    data: XOR<AiRecommendationCreateInput, AiRecommendationUncheckedCreateInput>
  }

  /**
   * AiRecommendation createMany
   */
  export type AiRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiRecommendations.
     */
    data: AiRecommendationCreateManyInput | AiRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiRecommendation createManyAndReturn
   */
  export type AiRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many AiRecommendations.
     */
    data: AiRecommendationCreateManyInput | AiRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiRecommendation update
   */
  export type AiRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a AiRecommendation.
     */
    data: XOR<AiRecommendationUpdateInput, AiRecommendationUncheckedUpdateInput>
    /**
     * Choose, which AiRecommendation to update.
     */
    where: AiRecommendationWhereUniqueInput
  }

  /**
   * AiRecommendation updateMany
   */
  export type AiRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiRecommendations.
     */
    data: XOR<AiRecommendationUpdateManyMutationInput, AiRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which AiRecommendations to update
     */
    where?: AiRecommendationWhereInput
    /**
     * Limit how many AiRecommendations to update.
     */
    limit?: number
  }

  /**
   * AiRecommendation updateManyAndReturn
   */
  export type AiRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update AiRecommendations.
     */
    data: XOR<AiRecommendationUpdateManyMutationInput, AiRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which AiRecommendations to update
     */
    where?: AiRecommendationWhereInput
    /**
     * Limit how many AiRecommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiRecommendation upsert
   */
  export type AiRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the AiRecommendation to update in case it exists.
     */
    where: AiRecommendationWhereUniqueInput
    /**
     * In case the AiRecommendation found by the `where` argument doesn't exist, create a new AiRecommendation with this data.
     */
    create: XOR<AiRecommendationCreateInput, AiRecommendationUncheckedCreateInput>
    /**
     * In case the AiRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiRecommendationUpdateInput, AiRecommendationUncheckedUpdateInput>
  }

  /**
   * AiRecommendation delete
   */
  export type AiRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
    /**
     * Filter which AiRecommendation to delete.
     */
    where: AiRecommendationWhereUniqueInput
  }

  /**
   * AiRecommendation deleteMany
   */
  export type AiRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiRecommendations to delete
     */
    where?: AiRecommendationWhereInput
    /**
     * Limit how many AiRecommendations to delete.
     */
    limit?: number
  }

  /**
   * AiRecommendation without action
   */
  export type AiRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRecommendation
     */
    select?: AiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRecommendation
     */
    omit?: AiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRecommendationInclude<ExtArgs> | null
  }


  /**
   * Model FollowUp
   */

  export type AggregateFollowUp = {
    _count: FollowUpCountAggregateOutputType | null
    _avg: FollowUpAvgAggregateOutputType | null
    _sum: FollowUpSumAggregateOutputType | null
    _min: FollowUpMinAggregateOutputType | null
    _max: FollowUpMaxAggregateOutputType | null
  }

  export type FollowUpAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type FollowUpSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type FollowUpMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    communication_type: string | null
    contact_address: string | null
    subject: string | null
    body: string | null
    message_id: string | null
    scheduled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FollowUpMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    communication_type: string | null
    contact_address: string | null
    subject: string | null
    body: string | null
    message_id: string | null
    scheduled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FollowUpCountAggregateOutputType = {
    id: number
    deal_id: number
    communication_type: number
    contact_address: number
    subject: number
    body: number
    message_id: number
    scheduled_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FollowUpAvgAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type FollowUpSumAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type FollowUpMinAggregateInputType = {
    id?: true
    deal_id?: true
    communication_type?: true
    contact_address?: true
    subject?: true
    body?: true
    message_id?: true
    scheduled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type FollowUpMaxAggregateInputType = {
    id?: true
    deal_id?: true
    communication_type?: true
    contact_address?: true
    subject?: true
    body?: true
    message_id?: true
    scheduled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type FollowUpCountAggregateInputType = {
    id?: true
    deal_id?: true
    communication_type?: true
    contact_address?: true
    subject?: true
    body?: true
    message_id?: true
    scheduled_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FollowUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUp to aggregate.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowUps
    **/
    _count?: true | FollowUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowUpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowUpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowUpMaxAggregateInputType
  }

  export type GetFollowUpAggregateType<T extends FollowUpAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowUp[P]>
      : GetScalarType<T[P], AggregateFollowUp[P]>
  }




  export type FollowUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithAggregationInput | FollowUpOrderByWithAggregationInput[]
    by: FollowUpScalarFieldEnum[] | FollowUpScalarFieldEnum
    having?: FollowUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowUpCountAggregateInputType | true
    _avg?: FollowUpAvgAggregateInputType
    _sum?: FollowUpSumAggregateInputType
    _min?: FollowUpMinAggregateInputType
    _max?: FollowUpMaxAggregateInputType
  }

  export type FollowUpGroupByOutputType = {
    id: number
    deal_id: number
    communication_type: string
    contact_address: string
    subject: string | null
    body: string | null
    message_id: string | null
    scheduled_at: Date | null
    created_at: Date
    updated_at: Date
    _count: FollowUpCountAggregateOutputType | null
    _avg: FollowUpAvgAggregateOutputType | null
    _sum: FollowUpSumAggregateOutputType | null
    _min: FollowUpMinAggregateOutputType | null
    _max: FollowUpMaxAggregateOutputType | null
  }

  type GetFollowUpGroupByPayload<T extends FollowUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowUpGroupByOutputType[P]>
            : GetScalarType<T[P], FollowUpGroupByOutputType[P]>
        }
      >
    >


  export type FollowUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    communication_type?: boolean
    contact_address?: boolean
    subject?: boolean
    body?: boolean
    message_id?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    communication_type?: boolean
    contact_address?: boolean
    subject?: boolean
    body?: boolean
    message_id?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    communication_type?: boolean
    contact_address?: boolean
    subject?: boolean
    body?: boolean
    message_id?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectScalar = {
    id?: boolean
    deal_id?: boolean
    communication_type?: boolean
    contact_address?: boolean
    subject?: boolean
    body?: boolean
    message_id?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FollowUpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "communication_type" | "contact_address" | "subject" | "body" | "message_id" | "scheduled_at" | "created_at" | "updated_at", ExtArgs["result"]["followUp"]>
  export type FollowUpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type FollowUpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type FollowUpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $FollowUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowUp"
    objects: {
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      communication_type: string
      contact_address: string
      subject: string | null
      body: string | null
      message_id: string | null
      scheduled_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["followUp"]>
    composites: {}
  }

  type FollowUpGetPayload<S extends boolean | null | undefined | FollowUpDefaultArgs> = $Result.GetResult<Prisma.$FollowUpPayload, S>

  type FollowUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowUpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowUpCountAggregateInputType | true
    }

  export interface FollowUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowUp'], meta: { name: 'FollowUp' } }
    /**
     * Find zero or one FollowUp that matches the filter.
     * @param {FollowUpFindUniqueArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowUpFindUniqueArgs>(args: SelectSubset<T, FollowUpFindUniqueArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowUp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowUpFindUniqueOrThrowArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowUpFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowUpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindFirstArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowUpFindFirstArgs>(args?: SelectSubset<T, FollowUpFindFirstArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindFirstOrThrowArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowUpFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowUpFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowUps
     * const followUps = await prisma.followUp.findMany()
     * 
     * // Get first 10 FollowUps
     * const followUps = await prisma.followUp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followUpWithIdOnly = await prisma.followUp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowUpFindManyArgs>(args?: SelectSubset<T, FollowUpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowUp.
     * @param {FollowUpCreateArgs} args - Arguments to create a FollowUp.
     * @example
     * // Create one FollowUp
     * const FollowUp = await prisma.followUp.create({
     *   data: {
     *     // ... data to create a FollowUp
     *   }
     * })
     * 
     */
    create<T extends FollowUpCreateArgs>(args: SelectSubset<T, FollowUpCreateArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowUps.
     * @param {FollowUpCreateManyArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUp = await prisma.followUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowUpCreateManyArgs>(args?: SelectSubset<T, FollowUpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FollowUps and returns the data saved in the database.
     * @param {FollowUpCreateManyAndReturnArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUp = await prisma.followUp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FollowUps and only return the `id`
     * const followUpWithIdOnly = await prisma.followUp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowUpCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowUpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FollowUp.
     * @param {FollowUpDeleteArgs} args - Arguments to delete one FollowUp.
     * @example
     * // Delete one FollowUp
     * const FollowUp = await prisma.followUp.delete({
     *   where: {
     *     // ... filter to delete one FollowUp
     *   }
     * })
     * 
     */
    delete<T extends FollowUpDeleteArgs>(args: SelectSubset<T, FollowUpDeleteArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowUp.
     * @param {FollowUpUpdateArgs} args - Arguments to update one FollowUp.
     * @example
     * // Update one FollowUp
     * const followUp = await prisma.followUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpUpdateArgs>(args: SelectSubset<T, FollowUpUpdateArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowUps.
     * @param {FollowUpDeleteManyArgs} args - Arguments to filter FollowUps to delete.
     * @example
     * // Delete a few FollowUps
     * const { count } = await prisma.followUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowUpDeleteManyArgs>(args?: SelectSubset<T, FollowUpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowUps
     * const followUp = await prisma.followUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpUpdateManyArgs>(args: SelectSubset<T, FollowUpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowUps and returns the data updated in the database.
     * @param {FollowUpUpdateManyAndReturnArgs} args - Arguments to update many FollowUps.
     * @example
     * // Update many FollowUps
     * const followUp = await prisma.followUp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FollowUps and only return the `id`
     * const followUpWithIdOnly = await prisma.followUp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowUpUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FollowUp.
     * @param {FollowUpUpsertArgs} args - Arguments to update or create a FollowUp.
     * @example
     * // Update or create a FollowUp
     * const followUp = await prisma.followUp.upsert({
     *   create: {
     *     // ... data to create a FollowUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowUp we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpUpsertArgs>(args: SelectSubset<T, FollowUpUpsertArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpCountArgs} args - Arguments to filter FollowUps to count.
     * @example
     * // Count the number of FollowUps
     * const count = await prisma.followUp.count({
     *   where: {
     *     // ... the filter for the FollowUps we want to count
     *   }
     * })
    **/
    count<T extends FollowUpCountArgs>(
      args?: Subset<T, FollowUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowUpAggregateArgs>(args: Subset<T, FollowUpAggregateArgs>): Prisma.PrismaPromise<GetFollowUpAggregateType<T>>

    /**
     * Group by FollowUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowUpGroupByArgs['orderBy'] }
        : { orderBy?: FollowUpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowUp model
   */
  readonly fields: FollowUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FollowUp model
   */
  interface FollowUpFieldRefs {
    readonly id: FieldRef<"FollowUp", 'Int'>
    readonly deal_id: FieldRef<"FollowUp", 'Int'>
    readonly communication_type: FieldRef<"FollowUp", 'String'>
    readonly contact_address: FieldRef<"FollowUp", 'String'>
    readonly subject: FieldRef<"FollowUp", 'String'>
    readonly body: FieldRef<"FollowUp", 'String'>
    readonly message_id: FieldRef<"FollowUp", 'String'>
    readonly scheduled_at: FieldRef<"FollowUp", 'DateTime'>
    readonly created_at: FieldRef<"FollowUp", 'DateTime'>
    readonly updated_at: FieldRef<"FollowUp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FollowUp findUnique
   */
  export type FollowUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp findUniqueOrThrow
   */
  export type FollowUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp findFirst
   */
  export type FollowUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp findFirstOrThrow
   */
  export type FollowUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp findMany
   */
  export type FollowUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp create
   */
  export type FollowUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowUp.
     */
    data: XOR<FollowUpCreateInput, FollowUpUncheckedCreateInput>
  }

  /**
   * FollowUp createMany
   */
  export type FollowUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpCreateManyInput | FollowUpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FollowUp createManyAndReturn
   */
  export type FollowUpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpCreateManyInput | FollowUpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowUp update
   */
  export type FollowUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowUp.
     */
    data: XOR<FollowUpUpdateInput, FollowUpUncheckedUpdateInput>
    /**
     * Choose, which FollowUp to update.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp updateMany
   */
  export type FollowUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowUps.
     */
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyInput>
    /**
     * Filter which FollowUps to update
     */
    where?: FollowUpWhereInput
    /**
     * Limit how many FollowUps to update.
     */
    limit?: number
  }

  /**
   * FollowUp updateManyAndReturn
   */
  export type FollowUpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * The data used to update FollowUps.
     */
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyInput>
    /**
     * Filter which FollowUps to update
     */
    where?: FollowUpWhereInput
    /**
     * Limit how many FollowUps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowUp upsert
   */
  export type FollowUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowUp to update in case it exists.
     */
    where: FollowUpWhereUniqueInput
    /**
     * In case the FollowUp found by the `where` argument doesn't exist, create a new FollowUp with this data.
     */
    create: XOR<FollowUpCreateInput, FollowUpUncheckedCreateInput>
    /**
     * In case the FollowUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpUpdateInput, FollowUpUncheckedUpdateInput>
  }

  /**
   * FollowUp delete
   */
  export type FollowUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter which FollowUp to delete.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp deleteMany
   */
  export type FollowUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUps to delete
     */
    where?: FollowUpWhereInput
    /**
     * Limit how many FollowUps to delete.
     */
    limit?: number
  }

  /**
   * FollowUp without action
   */
  export type FollowUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowUp
     */
    omit?: FollowUpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
  }


  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    deal_id: number
    tag: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    deal_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    deal_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    deal_id?: true
    tag?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    deal_id: number
    tag: string[]
    created_at: Date
    updated_at: Date
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    deal_id?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "tag" | "created_at" | "updated_at", ExtArgs["result"]["tags"]>
  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type TagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type TagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      tag: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsFindUniqueArgs>(args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsFindFirstArgs>(args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagsFindManyArgs>(args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends TagsCreateArgs>(args: SelectSubset<T, TagsCreateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsCreateManyArgs>(args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagsCreateManyAndReturnArgs>(args?: SelectSubset<T, TagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends TagsDeleteArgs>(args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsUpdateArgs>(args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsDeleteManyArgs>(args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsUpdateManyArgs>(args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagsUpdateManyAndReturnArgs>(args: SelectSubset<T, TagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends TagsUpsertArgs>(args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tags model
   */
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'Int'>
    readonly deal_id: FieldRef<"Tags", 'Int'>
    readonly tag: FieldRef<"Tags", 'String[]'>
    readonly created_at: FieldRef<"Tags", 'DateTime'>
    readonly updated_at: FieldRef<"Tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationInput | TagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }

  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tags createManyAndReturn
   */
  export type TagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tags updateManyAndReturn
   */
  export type TagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }

  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tags
     */
    omit?: TagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
  }


  /**
   * Model ConversationHistory
   */

  export type AggregateConversationHistory = {
    _count: ConversationHistoryCountAggregateOutputType | null
    _avg: ConversationHistoryAvgAggregateOutputType | null
    _sum: ConversationHistorySumAggregateOutputType | null
    _min: ConversationHistoryMinAggregateOutputType | null
    _max: ConversationHistoryMaxAggregateOutputType | null
  }

  export type ConversationHistoryAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type ConversationHistorySumAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type ConversationHistoryMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    deal_summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConversationHistoryMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    deal_summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConversationHistoryCountAggregateOutputType = {
    id: number
    deal_id: number
    slack: number
    email: number
    deal_summary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ConversationHistoryAvgAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type ConversationHistorySumAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type ConversationHistoryMinAggregateInputType = {
    id?: true
    deal_id?: true
    deal_summary?: true
    created_at?: true
    updated_at?: true
  }

  export type ConversationHistoryMaxAggregateInputType = {
    id?: true
    deal_id?: true
    deal_summary?: true
    created_at?: true
    updated_at?: true
  }

  export type ConversationHistoryCountAggregateInputType = {
    id?: true
    deal_id?: true
    slack?: true
    email?: true
    deal_summary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ConversationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationHistory to aggregate.
     */
    where?: ConversationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationHistories to fetch.
     */
    orderBy?: ConversationHistoryOrderByWithRelationInput | ConversationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationHistories
    **/
    _count?: true | ConversationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationHistoryMaxAggregateInputType
  }

  export type GetConversationHistoryAggregateType<T extends ConversationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationHistory[P]>
      : GetScalarType<T[P], AggregateConversationHistory[P]>
  }




  export type ConversationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationHistoryWhereInput
    orderBy?: ConversationHistoryOrderByWithAggregationInput | ConversationHistoryOrderByWithAggregationInput[]
    by: ConversationHistoryScalarFieldEnum[] | ConversationHistoryScalarFieldEnum
    having?: ConversationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationHistoryCountAggregateInputType | true
    _avg?: ConversationHistoryAvgAggregateInputType
    _sum?: ConversationHistorySumAggregateInputType
    _min?: ConversationHistoryMinAggregateInputType
    _max?: ConversationHistoryMaxAggregateInputType
  }

  export type ConversationHistoryGroupByOutputType = {
    id: number
    deal_id: number
    slack: JsonValue
    email: JsonValue
    deal_summary: string
    created_at: Date
    updated_at: Date
    _count: ConversationHistoryCountAggregateOutputType | null
    _avg: ConversationHistoryAvgAggregateOutputType | null
    _sum: ConversationHistorySumAggregateOutputType | null
    _min: ConversationHistoryMinAggregateOutputType | null
    _max: ConversationHistoryMaxAggregateOutputType | null
  }

  type GetConversationHistoryGroupByPayload<T extends ConversationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ConversationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    slack?: boolean
    email?: boolean
    deal_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationHistory"]>

  export type ConversationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    slack?: boolean
    email?: boolean
    deal_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationHistory"]>

  export type ConversationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    slack?: boolean
    email?: boolean
    deal_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationHistory"]>

  export type ConversationHistorySelectScalar = {
    id?: boolean
    deal_id?: boolean
    slack?: boolean
    email?: boolean
    deal_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ConversationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "slack" | "email" | "deal_summary" | "created_at" | "updated_at", ExtArgs["result"]["conversationHistory"]>
  export type ConversationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type ConversationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type ConversationHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $ConversationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationHistory"
    objects: {
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      slack: Prisma.JsonValue
      email: Prisma.JsonValue
      deal_summary: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["conversationHistory"]>
    composites: {}
  }

  type ConversationHistoryGetPayload<S extends boolean | null | undefined | ConversationHistoryDefaultArgs> = $Result.GetResult<Prisma.$ConversationHistoryPayload, S>

  type ConversationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationHistoryCountAggregateInputType | true
    }

  export interface ConversationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationHistory'], meta: { name: 'ConversationHistory' } }
    /**
     * Find zero or one ConversationHistory that matches the filter.
     * @param {ConversationHistoryFindUniqueArgs} args - Arguments to find a ConversationHistory
     * @example
     * // Get one ConversationHistory
     * const conversationHistory = await prisma.conversationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationHistoryFindUniqueArgs>(args: SelectSubset<T, ConversationHistoryFindUniqueArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationHistoryFindUniqueOrThrowArgs} args - Arguments to find a ConversationHistory
     * @example
     * // Get one ConversationHistory
     * const conversationHistory = await prisma.conversationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryFindFirstArgs} args - Arguments to find a ConversationHistory
     * @example
     * // Get one ConversationHistory
     * const conversationHistory = await prisma.conversationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationHistoryFindFirstArgs>(args?: SelectSubset<T, ConversationHistoryFindFirstArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryFindFirstOrThrowArgs} args - Arguments to find a ConversationHistory
     * @example
     * // Get one ConversationHistory
     * const conversationHistory = await prisma.conversationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationHistories
     * const conversationHistories = await prisma.conversationHistory.findMany()
     * 
     * // Get first 10 ConversationHistories
     * const conversationHistories = await prisma.conversationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationHistoryWithIdOnly = await prisma.conversationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationHistoryFindManyArgs>(args?: SelectSubset<T, ConversationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationHistory.
     * @param {ConversationHistoryCreateArgs} args - Arguments to create a ConversationHistory.
     * @example
     * // Create one ConversationHistory
     * const ConversationHistory = await prisma.conversationHistory.create({
     *   data: {
     *     // ... data to create a ConversationHistory
     *   }
     * })
     * 
     */
    create<T extends ConversationHistoryCreateArgs>(args: SelectSubset<T, ConversationHistoryCreateArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationHistories.
     * @param {ConversationHistoryCreateManyArgs} args - Arguments to create many ConversationHistories.
     * @example
     * // Create many ConversationHistories
     * const conversationHistory = await prisma.conversationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationHistoryCreateManyArgs>(args?: SelectSubset<T, ConversationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversationHistories and returns the data saved in the database.
     * @param {ConversationHistoryCreateManyAndReturnArgs} args - Arguments to create many ConversationHistories.
     * @example
     * // Create many ConversationHistories
     * const conversationHistory = await prisma.conversationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversationHistories and only return the `id`
     * const conversationHistoryWithIdOnly = await prisma.conversationHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversationHistory.
     * @param {ConversationHistoryDeleteArgs} args - Arguments to delete one ConversationHistory.
     * @example
     * // Delete one ConversationHistory
     * const ConversationHistory = await prisma.conversationHistory.delete({
     *   where: {
     *     // ... filter to delete one ConversationHistory
     *   }
     * })
     * 
     */
    delete<T extends ConversationHistoryDeleteArgs>(args: SelectSubset<T, ConversationHistoryDeleteArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationHistory.
     * @param {ConversationHistoryUpdateArgs} args - Arguments to update one ConversationHistory.
     * @example
     * // Update one ConversationHistory
     * const conversationHistory = await prisma.conversationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationHistoryUpdateArgs>(args: SelectSubset<T, ConversationHistoryUpdateArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationHistories.
     * @param {ConversationHistoryDeleteManyArgs} args - Arguments to filter ConversationHistories to delete.
     * @example
     * // Delete a few ConversationHistories
     * const { count } = await prisma.conversationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationHistoryDeleteManyArgs>(args?: SelectSubset<T, ConversationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationHistories
     * const conversationHistory = await prisma.conversationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationHistoryUpdateManyArgs>(args: SelectSubset<T, ConversationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationHistories and returns the data updated in the database.
     * @param {ConversationHistoryUpdateManyAndReturnArgs} args - Arguments to update many ConversationHistories.
     * @example
     * // Update many ConversationHistories
     * const conversationHistory = await prisma.conversationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversationHistories and only return the `id`
     * const conversationHistoryWithIdOnly = await prisma.conversationHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversationHistory.
     * @param {ConversationHistoryUpsertArgs} args - Arguments to update or create a ConversationHistory.
     * @example
     * // Update or create a ConversationHistory
     * const conversationHistory = await prisma.conversationHistory.upsert({
     *   create: {
     *     // ... data to create a ConversationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationHistory we want to update
     *   }
     * })
     */
    upsert<T extends ConversationHistoryUpsertArgs>(args: SelectSubset<T, ConversationHistoryUpsertArgs<ExtArgs>>): Prisma__ConversationHistoryClient<$Result.GetResult<Prisma.$ConversationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryCountArgs} args - Arguments to filter ConversationHistories to count.
     * @example
     * // Count the number of ConversationHistories
     * const count = await prisma.conversationHistory.count({
     *   where: {
     *     // ... the filter for the ConversationHistories we want to count
     *   }
     * })
    **/
    count<T extends ConversationHistoryCountArgs>(
      args?: Subset<T, ConversationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationHistoryAggregateArgs>(args: Subset<T, ConversationHistoryAggregateArgs>): Prisma.PrismaPromise<GetConversationHistoryAggregateType<T>>

    /**
     * Group by ConversationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ConversationHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationHistory model
   */
  readonly fields: ConversationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversationHistory model
   */
  interface ConversationHistoryFieldRefs {
    readonly id: FieldRef<"ConversationHistory", 'Int'>
    readonly deal_id: FieldRef<"ConversationHistory", 'Int'>
    readonly slack: FieldRef<"ConversationHistory", 'Json'>
    readonly email: FieldRef<"ConversationHistory", 'Json'>
    readonly deal_summary: FieldRef<"ConversationHistory", 'String'>
    readonly created_at: FieldRef<"ConversationHistory", 'DateTime'>
    readonly updated_at: FieldRef<"ConversationHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversationHistory findUnique
   */
  export type ConversationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversationHistory to fetch.
     */
    where: ConversationHistoryWhereUniqueInput
  }

  /**
   * ConversationHistory findUniqueOrThrow
   */
  export type ConversationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversationHistory to fetch.
     */
    where: ConversationHistoryWhereUniqueInput
  }

  /**
   * ConversationHistory findFirst
   */
  export type ConversationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversationHistory to fetch.
     */
    where?: ConversationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationHistories to fetch.
     */
    orderBy?: ConversationHistoryOrderByWithRelationInput | ConversationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationHistories.
     */
    cursor?: ConversationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationHistories.
     */
    distinct?: ConversationHistoryScalarFieldEnum | ConversationHistoryScalarFieldEnum[]
  }

  /**
   * ConversationHistory findFirstOrThrow
   */
  export type ConversationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversationHistory to fetch.
     */
    where?: ConversationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationHistories to fetch.
     */
    orderBy?: ConversationHistoryOrderByWithRelationInput | ConversationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationHistories.
     */
    cursor?: ConversationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationHistories.
     */
    distinct?: ConversationHistoryScalarFieldEnum | ConversationHistoryScalarFieldEnum[]
  }

  /**
   * ConversationHistory findMany
   */
  export type ConversationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversationHistories to fetch.
     */
    where?: ConversationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationHistories to fetch.
     */
    orderBy?: ConversationHistoryOrderByWithRelationInput | ConversationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationHistories.
     */
    cursor?: ConversationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationHistories.
     */
    skip?: number
    distinct?: ConversationHistoryScalarFieldEnum | ConversationHistoryScalarFieldEnum[]
  }

  /**
   * ConversationHistory create
   */
  export type ConversationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationHistory.
     */
    data: XOR<ConversationHistoryCreateInput, ConversationHistoryUncheckedCreateInput>
  }

  /**
   * ConversationHistory createMany
   */
  export type ConversationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationHistories.
     */
    data: ConversationHistoryCreateManyInput | ConversationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationHistory createManyAndReturn
   */
  export type ConversationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ConversationHistories.
     */
    data: ConversationHistoryCreateManyInput | ConversationHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationHistory update
   */
  export type ConversationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationHistory.
     */
    data: XOR<ConversationHistoryUpdateInput, ConversationHistoryUncheckedUpdateInput>
    /**
     * Choose, which ConversationHistory to update.
     */
    where: ConversationHistoryWhereUniqueInput
  }

  /**
   * ConversationHistory updateMany
   */
  export type ConversationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationHistories.
     */
    data: XOR<ConversationHistoryUpdateManyMutationInput, ConversationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConversationHistories to update
     */
    where?: ConversationHistoryWhereInput
    /**
     * Limit how many ConversationHistories to update.
     */
    limit?: number
  }

  /**
   * ConversationHistory updateManyAndReturn
   */
  export type ConversationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ConversationHistories.
     */
    data: XOR<ConversationHistoryUpdateManyMutationInput, ConversationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConversationHistories to update
     */
    where?: ConversationHistoryWhereInput
    /**
     * Limit how many ConversationHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationHistory upsert
   */
  export type ConversationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationHistory to update in case it exists.
     */
    where: ConversationHistoryWhereUniqueInput
    /**
     * In case the ConversationHistory found by the `where` argument doesn't exist, create a new ConversationHistory with this data.
     */
    create: XOR<ConversationHistoryCreateInput, ConversationHistoryUncheckedCreateInput>
    /**
     * In case the ConversationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationHistoryUpdateInput, ConversationHistoryUncheckedUpdateInput>
  }

  /**
   * ConversationHistory delete
   */
  export type ConversationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
    /**
     * Filter which ConversationHistory to delete.
     */
    where: ConversationHistoryWhereUniqueInput
  }

  /**
   * ConversationHistory deleteMany
   */
  export type ConversationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationHistories to delete
     */
    where?: ConversationHistoryWhereInput
    /**
     * Limit how many ConversationHistories to delete.
     */
    limit?: number
  }

  /**
   * ConversationHistory without action
   */
  export type ConversationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationHistory
     */
    select?: ConversationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationHistory
     */
    omit?: ConversationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationHistoryInclude<ExtArgs> | null
  }


  /**
   * Model DealInsights
   */

  export type AggregateDealInsights = {
    _count: DealInsightsCountAggregateOutputType | null
    _avg: DealInsightsAvgAggregateOutputType | null
    _sum: DealInsightsSumAggregateOutputType | null
    _min: DealInsightsMinAggregateOutputType | null
    _max: DealInsightsMaxAggregateOutputType | null
  }

  export type DealInsightsAvgAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type DealInsightsSumAggregateOutputType = {
    id: number | null
    deal_id: number | null
  }

  export type DealInsightsMinAggregateOutputType = {
    id: number | null
    deal_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DealInsightsMaxAggregateOutputType = {
    id: number | null
    deal_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DealInsightsCountAggregateOutputType = {
    id: number
    deal_id: number
    kpi_insights: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DealInsightsAvgAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type DealInsightsSumAggregateInputType = {
    id?: true
    deal_id?: true
  }

  export type DealInsightsMinAggregateInputType = {
    id?: true
    deal_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DealInsightsMaxAggregateInputType = {
    id?: true
    deal_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DealInsightsCountAggregateInputType = {
    id?: true
    deal_id?: true
    kpi_insights?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DealInsightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealInsights to aggregate.
     */
    where?: DealInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealInsights to fetch.
     */
    orderBy?: DealInsightsOrderByWithRelationInput | DealInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealInsights
    **/
    _count?: true | DealInsightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealInsightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealInsightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealInsightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealInsightsMaxAggregateInputType
  }

  export type GetDealInsightsAggregateType<T extends DealInsightsAggregateArgs> = {
        [P in keyof T & keyof AggregateDealInsights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealInsights[P]>
      : GetScalarType<T[P], AggregateDealInsights[P]>
  }




  export type DealInsightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealInsightsWhereInput
    orderBy?: DealInsightsOrderByWithAggregationInput | DealInsightsOrderByWithAggregationInput[]
    by: DealInsightsScalarFieldEnum[] | DealInsightsScalarFieldEnum
    having?: DealInsightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealInsightsCountAggregateInputType | true
    _avg?: DealInsightsAvgAggregateInputType
    _sum?: DealInsightsSumAggregateInputType
    _min?: DealInsightsMinAggregateInputType
    _max?: DealInsightsMaxAggregateInputType
  }

  export type DealInsightsGroupByOutputType = {
    id: number
    deal_id: number
    kpi_insights: JsonValue
    created_at: Date
    updated_at: Date
    _count: DealInsightsCountAggregateOutputType | null
    _avg: DealInsightsAvgAggregateOutputType | null
    _sum: DealInsightsSumAggregateOutputType | null
    _min: DealInsightsMinAggregateOutputType | null
    _max: DealInsightsMaxAggregateOutputType | null
  }

  type GetDealInsightsGroupByPayload<T extends DealInsightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealInsightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealInsightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealInsightsGroupByOutputType[P]>
            : GetScalarType<T[P], DealInsightsGroupByOutputType[P]>
        }
      >
    >


  export type DealInsightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    kpi_insights?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealInsights"]>

  export type DealInsightsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    kpi_insights?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealInsights"]>

  export type DealInsightsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deal_id?: boolean
    kpi_insights?: boolean
    created_at?: boolean
    updated_at?: boolean
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealInsights"]>

  export type DealInsightsSelectScalar = {
    id?: boolean
    deal_id?: boolean
    kpi_insights?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DealInsightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deal_id" | "kpi_insights" | "created_at" | "updated_at", ExtArgs["result"]["dealInsights"]>
  export type DealInsightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type DealInsightsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }
  export type DealInsightsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealsDefaultArgs<ExtArgs>
  }

  export type $DealInsightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealInsights"
    objects: {
      deal: Prisma.$DealsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deal_id: number
      kpi_insights: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["dealInsights"]>
    composites: {}
  }

  type DealInsightsGetPayload<S extends boolean | null | undefined | DealInsightsDefaultArgs> = $Result.GetResult<Prisma.$DealInsightsPayload, S>

  type DealInsightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealInsightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealInsightsCountAggregateInputType | true
    }

  export interface DealInsightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealInsights'], meta: { name: 'DealInsights' } }
    /**
     * Find zero or one DealInsights that matches the filter.
     * @param {DealInsightsFindUniqueArgs} args - Arguments to find a DealInsights
     * @example
     * // Get one DealInsights
     * const dealInsights = await prisma.dealInsights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealInsightsFindUniqueArgs>(args: SelectSubset<T, DealInsightsFindUniqueArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DealInsights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealInsightsFindUniqueOrThrowArgs} args - Arguments to find a DealInsights
     * @example
     * // Get one DealInsights
     * const dealInsights = await prisma.dealInsights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealInsightsFindUniqueOrThrowArgs>(args: SelectSubset<T, DealInsightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsFindFirstArgs} args - Arguments to find a DealInsights
     * @example
     * // Get one DealInsights
     * const dealInsights = await prisma.dealInsights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealInsightsFindFirstArgs>(args?: SelectSubset<T, DealInsightsFindFirstArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealInsights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsFindFirstOrThrowArgs} args - Arguments to find a DealInsights
     * @example
     * // Get one DealInsights
     * const dealInsights = await prisma.dealInsights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealInsightsFindFirstOrThrowArgs>(args?: SelectSubset<T, DealInsightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DealInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealInsights
     * const dealInsights = await prisma.dealInsights.findMany()
     * 
     * // Get first 10 DealInsights
     * const dealInsights = await prisma.dealInsights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealInsightsWithIdOnly = await prisma.dealInsights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealInsightsFindManyArgs>(args?: SelectSubset<T, DealInsightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DealInsights.
     * @param {DealInsightsCreateArgs} args - Arguments to create a DealInsights.
     * @example
     * // Create one DealInsights
     * const DealInsights = await prisma.dealInsights.create({
     *   data: {
     *     // ... data to create a DealInsights
     *   }
     * })
     * 
     */
    create<T extends DealInsightsCreateArgs>(args: SelectSubset<T, DealInsightsCreateArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DealInsights.
     * @param {DealInsightsCreateManyArgs} args - Arguments to create many DealInsights.
     * @example
     * // Create many DealInsights
     * const dealInsights = await prisma.dealInsights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealInsightsCreateManyArgs>(args?: SelectSubset<T, DealInsightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealInsights and returns the data saved in the database.
     * @param {DealInsightsCreateManyAndReturnArgs} args - Arguments to create many DealInsights.
     * @example
     * // Create many DealInsights
     * const dealInsights = await prisma.dealInsights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealInsights and only return the `id`
     * const dealInsightsWithIdOnly = await prisma.dealInsights.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealInsightsCreateManyAndReturnArgs>(args?: SelectSubset<T, DealInsightsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DealInsights.
     * @param {DealInsightsDeleteArgs} args - Arguments to delete one DealInsights.
     * @example
     * // Delete one DealInsights
     * const DealInsights = await prisma.dealInsights.delete({
     *   where: {
     *     // ... filter to delete one DealInsights
     *   }
     * })
     * 
     */
    delete<T extends DealInsightsDeleteArgs>(args: SelectSubset<T, DealInsightsDeleteArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DealInsights.
     * @param {DealInsightsUpdateArgs} args - Arguments to update one DealInsights.
     * @example
     * // Update one DealInsights
     * const dealInsights = await prisma.dealInsights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealInsightsUpdateArgs>(args: SelectSubset<T, DealInsightsUpdateArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DealInsights.
     * @param {DealInsightsDeleteManyArgs} args - Arguments to filter DealInsights to delete.
     * @example
     * // Delete a few DealInsights
     * const { count } = await prisma.dealInsights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealInsightsDeleteManyArgs>(args?: SelectSubset<T, DealInsightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealInsights
     * const dealInsights = await prisma.dealInsights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealInsightsUpdateManyArgs>(args: SelectSubset<T, DealInsightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealInsights and returns the data updated in the database.
     * @param {DealInsightsUpdateManyAndReturnArgs} args - Arguments to update many DealInsights.
     * @example
     * // Update many DealInsights
     * const dealInsights = await prisma.dealInsights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DealInsights and only return the `id`
     * const dealInsightsWithIdOnly = await prisma.dealInsights.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealInsightsUpdateManyAndReturnArgs>(args: SelectSubset<T, DealInsightsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DealInsights.
     * @param {DealInsightsUpsertArgs} args - Arguments to update or create a DealInsights.
     * @example
     * // Update or create a DealInsights
     * const dealInsights = await prisma.dealInsights.upsert({
     *   create: {
     *     // ... data to create a DealInsights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealInsights we want to update
     *   }
     * })
     */
    upsert<T extends DealInsightsUpsertArgs>(args: SelectSubset<T, DealInsightsUpsertArgs<ExtArgs>>): Prisma__DealInsightsClient<$Result.GetResult<Prisma.$DealInsightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DealInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsCountArgs} args - Arguments to filter DealInsights to count.
     * @example
     * // Count the number of DealInsights
     * const count = await prisma.dealInsights.count({
     *   where: {
     *     // ... the filter for the DealInsights we want to count
     *   }
     * })
    **/
    count<T extends DealInsightsCountArgs>(
      args?: Subset<T, DealInsightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealInsightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealInsightsAggregateArgs>(args: Subset<T, DealInsightsAggregateArgs>): Prisma.PrismaPromise<GetDealInsightsAggregateType<T>>

    /**
     * Group by DealInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealInsightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealInsightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealInsightsGroupByArgs['orderBy'] }
        : { orderBy?: DealInsightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealInsightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealInsightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealInsights model
   */
  readonly fields: DealInsightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealInsights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealInsightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealsDefaultArgs<ExtArgs>>): Prisma__DealsClient<$Result.GetResult<Prisma.$DealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DealInsights model
   */
  interface DealInsightsFieldRefs {
    readonly id: FieldRef<"DealInsights", 'Int'>
    readonly deal_id: FieldRef<"DealInsights", 'Int'>
    readonly kpi_insights: FieldRef<"DealInsights", 'Json'>
    readonly created_at: FieldRef<"DealInsights", 'DateTime'>
    readonly updated_at: FieldRef<"DealInsights", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DealInsights findUnique
   */
  export type DealInsightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * Filter, which DealInsights to fetch.
     */
    where: DealInsightsWhereUniqueInput
  }

  /**
   * DealInsights findUniqueOrThrow
   */
  export type DealInsightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * Filter, which DealInsights to fetch.
     */
    where: DealInsightsWhereUniqueInput
  }

  /**
   * DealInsights findFirst
   */
  export type DealInsightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * Filter, which DealInsights to fetch.
     */
    where?: DealInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealInsights to fetch.
     */
    orderBy?: DealInsightsOrderByWithRelationInput | DealInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealInsights.
     */
    cursor?: DealInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealInsights.
     */
    distinct?: DealInsightsScalarFieldEnum | DealInsightsScalarFieldEnum[]
  }

  /**
   * DealInsights findFirstOrThrow
   */
  export type DealInsightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * Filter, which DealInsights to fetch.
     */
    where?: DealInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealInsights to fetch.
     */
    orderBy?: DealInsightsOrderByWithRelationInput | DealInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealInsights.
     */
    cursor?: DealInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealInsights.
     */
    distinct?: DealInsightsScalarFieldEnum | DealInsightsScalarFieldEnum[]
  }

  /**
   * DealInsights findMany
   */
  export type DealInsightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * Filter, which DealInsights to fetch.
     */
    where?: DealInsightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealInsights to fetch.
     */
    orderBy?: DealInsightsOrderByWithRelationInput | DealInsightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealInsights.
     */
    cursor?: DealInsightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealInsights.
     */
    skip?: number
    distinct?: DealInsightsScalarFieldEnum | DealInsightsScalarFieldEnum[]
  }

  /**
   * DealInsights create
   */
  export type DealInsightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * The data needed to create a DealInsights.
     */
    data: XOR<DealInsightsCreateInput, DealInsightsUncheckedCreateInput>
  }

  /**
   * DealInsights createMany
   */
  export type DealInsightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealInsights.
     */
    data: DealInsightsCreateManyInput | DealInsightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealInsights createManyAndReturn
   */
  export type DealInsightsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * The data used to create many DealInsights.
     */
    data: DealInsightsCreateManyInput | DealInsightsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealInsights update
   */
  export type DealInsightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * The data needed to update a DealInsights.
     */
    data: XOR<DealInsightsUpdateInput, DealInsightsUncheckedUpdateInput>
    /**
     * Choose, which DealInsights to update.
     */
    where: DealInsightsWhereUniqueInput
  }

  /**
   * DealInsights updateMany
   */
  export type DealInsightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealInsights.
     */
    data: XOR<DealInsightsUpdateManyMutationInput, DealInsightsUncheckedUpdateManyInput>
    /**
     * Filter which DealInsights to update
     */
    where?: DealInsightsWhereInput
    /**
     * Limit how many DealInsights to update.
     */
    limit?: number
  }

  /**
   * DealInsights updateManyAndReturn
   */
  export type DealInsightsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * The data used to update DealInsights.
     */
    data: XOR<DealInsightsUpdateManyMutationInput, DealInsightsUncheckedUpdateManyInput>
    /**
     * Filter which DealInsights to update
     */
    where?: DealInsightsWhereInput
    /**
     * Limit how many DealInsights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealInsights upsert
   */
  export type DealInsightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * The filter to search for the DealInsights to update in case it exists.
     */
    where: DealInsightsWhereUniqueInput
    /**
     * In case the DealInsights found by the `where` argument doesn't exist, create a new DealInsights with this data.
     */
    create: XOR<DealInsightsCreateInput, DealInsightsUncheckedCreateInput>
    /**
     * In case the DealInsights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealInsightsUpdateInput, DealInsightsUncheckedUpdateInput>
  }

  /**
   * DealInsights delete
   */
  export type DealInsightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
    /**
     * Filter which DealInsights to delete.
     */
    where: DealInsightsWhereUniqueInput
  }

  /**
   * DealInsights deleteMany
   */
  export type DealInsightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealInsights to delete
     */
    where?: DealInsightsWhereInput
    /**
     * Limit how many DealInsights to delete.
     */
    limit?: number
  }

  /**
   * DealInsights without action
   */
  export type DealInsightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealInsights
     */
    select?: DealInsightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealInsights
     */
    omit?: DealInsightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInsightsInclude<ExtArgs> | null
  }


  /**
   * Model RiskExplanation
   */

  export type AggregateRiskExplanation = {
    _count: RiskExplanationCountAggregateOutputType | null
    _avg: RiskExplanationAvgAggregateOutputType | null
    _sum: RiskExplanationSumAggregateOutputType | null
    _min: RiskExplanationMinAggregateOutputType | null
    _max: RiskExplanationMaxAggregateOutputType | null
  }

  export type RiskExplanationAvgAggregateOutputType = {
    id: number | null
    risk_id: number | null
  }

  export type RiskExplanationSumAggregateOutputType = {
    id: number | null
    risk_id: number | null
  }

  export type RiskExplanationMinAggregateOutputType = {
    id: number | null
    risk_id: number | null
    budget_risk_explanation: string | null
    timeline_risk_explanation: string | null
    churn_risk_explanation: string | null
    deal_risk_summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RiskExplanationMaxAggregateOutputType = {
    id: number | null
    risk_id: number | null
    budget_risk_explanation: string | null
    timeline_risk_explanation: string | null
    churn_risk_explanation: string | null
    deal_risk_summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RiskExplanationCountAggregateOutputType = {
    id: number
    risk_id: number
    budget_risk_explanation: number
    timeline_risk_explanation: number
    churn_risk_explanation: number
    deal_risk_summary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RiskExplanationAvgAggregateInputType = {
    id?: true
    risk_id?: true
  }

  export type RiskExplanationSumAggregateInputType = {
    id?: true
    risk_id?: true
  }

  export type RiskExplanationMinAggregateInputType = {
    id?: true
    risk_id?: true
    budget_risk_explanation?: true
    timeline_risk_explanation?: true
    churn_risk_explanation?: true
    deal_risk_summary?: true
    created_at?: true
    updated_at?: true
  }

  export type RiskExplanationMaxAggregateInputType = {
    id?: true
    risk_id?: true
    budget_risk_explanation?: true
    timeline_risk_explanation?: true
    churn_risk_explanation?: true
    deal_risk_summary?: true
    created_at?: true
    updated_at?: true
  }

  export type RiskExplanationCountAggregateInputType = {
    id?: true
    risk_id?: true
    budget_risk_explanation?: true
    timeline_risk_explanation?: true
    churn_risk_explanation?: true
    deal_risk_summary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RiskExplanationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskExplanation to aggregate.
     */
    where?: RiskExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskExplanations to fetch.
     */
    orderBy?: RiskExplanationOrderByWithRelationInput | RiskExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskExplanations
    **/
    _count?: true | RiskExplanationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskExplanationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskExplanationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskExplanationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskExplanationMaxAggregateInputType
  }

  export type GetRiskExplanationAggregateType<T extends RiskExplanationAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskExplanation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskExplanation[P]>
      : GetScalarType<T[P], AggregateRiskExplanation[P]>
  }




  export type RiskExplanationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskExplanationWhereInput
    orderBy?: RiskExplanationOrderByWithAggregationInput | RiskExplanationOrderByWithAggregationInput[]
    by: RiskExplanationScalarFieldEnum[] | RiskExplanationScalarFieldEnum
    having?: RiskExplanationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskExplanationCountAggregateInputType | true
    _avg?: RiskExplanationAvgAggregateInputType
    _sum?: RiskExplanationSumAggregateInputType
    _min?: RiskExplanationMinAggregateInputType
    _max?: RiskExplanationMaxAggregateInputType
  }

  export type RiskExplanationGroupByOutputType = {
    id: number
    risk_id: number
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at: Date
    updated_at: Date
    _count: RiskExplanationCountAggregateOutputType | null
    _avg: RiskExplanationAvgAggregateOutputType | null
    _sum: RiskExplanationSumAggregateOutputType | null
    _min: RiskExplanationMinAggregateOutputType | null
    _max: RiskExplanationMaxAggregateOutputType | null
  }

  type GetRiskExplanationGroupByPayload<T extends RiskExplanationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskExplanationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskExplanationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskExplanationGroupByOutputType[P]>
            : GetScalarType<T[P], RiskExplanationGroupByOutputType[P]>
        }
      >
    >


  export type RiskExplanationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    risk_id?: boolean
    budget_risk_explanation?: boolean
    timeline_risk_explanation?: boolean
    churn_risk_explanation?: boolean
    deal_risk_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    risk?: boolean | RisksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskExplanation"]>

  export type RiskExplanationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    risk_id?: boolean
    budget_risk_explanation?: boolean
    timeline_risk_explanation?: boolean
    churn_risk_explanation?: boolean
    deal_risk_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    risk?: boolean | RisksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskExplanation"]>

  export type RiskExplanationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    risk_id?: boolean
    budget_risk_explanation?: boolean
    timeline_risk_explanation?: boolean
    churn_risk_explanation?: boolean
    deal_risk_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    risk?: boolean | RisksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskExplanation"]>

  export type RiskExplanationSelectScalar = {
    id?: boolean
    risk_id?: boolean
    budget_risk_explanation?: boolean
    timeline_risk_explanation?: boolean
    churn_risk_explanation?: boolean
    deal_risk_summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RiskExplanationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "risk_id" | "budget_risk_explanation" | "timeline_risk_explanation" | "churn_risk_explanation" | "deal_risk_summary" | "created_at" | "updated_at", ExtArgs["result"]["riskExplanation"]>
  export type RiskExplanationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    risk?: boolean | RisksDefaultArgs<ExtArgs>
  }
  export type RiskExplanationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    risk?: boolean | RisksDefaultArgs<ExtArgs>
  }
  export type RiskExplanationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    risk?: boolean | RisksDefaultArgs<ExtArgs>
  }

  export type $RiskExplanationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskExplanation"
    objects: {
      risk: Prisma.$RisksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      risk_id: number
      budget_risk_explanation: string
      timeline_risk_explanation: string
      churn_risk_explanation: string
      deal_risk_summary: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["riskExplanation"]>
    composites: {}
  }

  type RiskExplanationGetPayload<S extends boolean | null | undefined | RiskExplanationDefaultArgs> = $Result.GetResult<Prisma.$RiskExplanationPayload, S>

  type RiskExplanationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskExplanationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskExplanationCountAggregateInputType | true
    }

  export interface RiskExplanationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskExplanation'], meta: { name: 'RiskExplanation' } }
    /**
     * Find zero or one RiskExplanation that matches the filter.
     * @param {RiskExplanationFindUniqueArgs} args - Arguments to find a RiskExplanation
     * @example
     * // Get one RiskExplanation
     * const riskExplanation = await prisma.riskExplanation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskExplanationFindUniqueArgs>(args: SelectSubset<T, RiskExplanationFindUniqueArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskExplanation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskExplanationFindUniqueOrThrowArgs} args - Arguments to find a RiskExplanation
     * @example
     * // Get one RiskExplanation
     * const riskExplanation = await prisma.riskExplanation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskExplanationFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskExplanationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskExplanation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationFindFirstArgs} args - Arguments to find a RiskExplanation
     * @example
     * // Get one RiskExplanation
     * const riskExplanation = await prisma.riskExplanation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskExplanationFindFirstArgs>(args?: SelectSubset<T, RiskExplanationFindFirstArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskExplanation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationFindFirstOrThrowArgs} args - Arguments to find a RiskExplanation
     * @example
     * // Get one RiskExplanation
     * const riskExplanation = await prisma.riskExplanation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskExplanationFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskExplanationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskExplanations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskExplanations
     * const riskExplanations = await prisma.riskExplanation.findMany()
     * 
     * // Get first 10 RiskExplanations
     * const riskExplanations = await prisma.riskExplanation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskExplanationWithIdOnly = await prisma.riskExplanation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskExplanationFindManyArgs>(args?: SelectSubset<T, RiskExplanationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskExplanation.
     * @param {RiskExplanationCreateArgs} args - Arguments to create a RiskExplanation.
     * @example
     * // Create one RiskExplanation
     * const RiskExplanation = await prisma.riskExplanation.create({
     *   data: {
     *     // ... data to create a RiskExplanation
     *   }
     * })
     * 
     */
    create<T extends RiskExplanationCreateArgs>(args: SelectSubset<T, RiskExplanationCreateArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskExplanations.
     * @param {RiskExplanationCreateManyArgs} args - Arguments to create many RiskExplanations.
     * @example
     * // Create many RiskExplanations
     * const riskExplanation = await prisma.riskExplanation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskExplanationCreateManyArgs>(args?: SelectSubset<T, RiskExplanationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskExplanations and returns the data saved in the database.
     * @param {RiskExplanationCreateManyAndReturnArgs} args - Arguments to create many RiskExplanations.
     * @example
     * // Create many RiskExplanations
     * const riskExplanation = await prisma.riskExplanation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskExplanations and only return the `id`
     * const riskExplanationWithIdOnly = await prisma.riskExplanation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskExplanationCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskExplanationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskExplanation.
     * @param {RiskExplanationDeleteArgs} args - Arguments to delete one RiskExplanation.
     * @example
     * // Delete one RiskExplanation
     * const RiskExplanation = await prisma.riskExplanation.delete({
     *   where: {
     *     // ... filter to delete one RiskExplanation
     *   }
     * })
     * 
     */
    delete<T extends RiskExplanationDeleteArgs>(args: SelectSubset<T, RiskExplanationDeleteArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskExplanation.
     * @param {RiskExplanationUpdateArgs} args - Arguments to update one RiskExplanation.
     * @example
     * // Update one RiskExplanation
     * const riskExplanation = await prisma.riskExplanation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskExplanationUpdateArgs>(args: SelectSubset<T, RiskExplanationUpdateArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskExplanations.
     * @param {RiskExplanationDeleteManyArgs} args - Arguments to filter RiskExplanations to delete.
     * @example
     * // Delete a few RiskExplanations
     * const { count } = await prisma.riskExplanation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskExplanationDeleteManyArgs>(args?: SelectSubset<T, RiskExplanationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskExplanations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskExplanations
     * const riskExplanation = await prisma.riskExplanation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskExplanationUpdateManyArgs>(args: SelectSubset<T, RiskExplanationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskExplanations and returns the data updated in the database.
     * @param {RiskExplanationUpdateManyAndReturnArgs} args - Arguments to update many RiskExplanations.
     * @example
     * // Update many RiskExplanations
     * const riskExplanation = await prisma.riskExplanation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskExplanations and only return the `id`
     * const riskExplanationWithIdOnly = await prisma.riskExplanation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskExplanationUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskExplanationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskExplanation.
     * @param {RiskExplanationUpsertArgs} args - Arguments to update or create a RiskExplanation.
     * @example
     * // Update or create a RiskExplanation
     * const riskExplanation = await prisma.riskExplanation.upsert({
     *   create: {
     *     // ... data to create a RiskExplanation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskExplanation we want to update
     *   }
     * })
     */
    upsert<T extends RiskExplanationUpsertArgs>(args: SelectSubset<T, RiskExplanationUpsertArgs<ExtArgs>>): Prisma__RiskExplanationClient<$Result.GetResult<Prisma.$RiskExplanationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskExplanations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationCountArgs} args - Arguments to filter RiskExplanations to count.
     * @example
     * // Count the number of RiskExplanations
     * const count = await prisma.riskExplanation.count({
     *   where: {
     *     // ... the filter for the RiskExplanations we want to count
     *   }
     * })
    **/
    count<T extends RiskExplanationCountArgs>(
      args?: Subset<T, RiskExplanationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskExplanationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskExplanation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskExplanationAggregateArgs>(args: Subset<T, RiskExplanationAggregateArgs>): Prisma.PrismaPromise<GetRiskExplanationAggregateType<T>>

    /**
     * Group by RiskExplanation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskExplanationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskExplanationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskExplanationGroupByArgs['orderBy'] }
        : { orderBy?: RiskExplanationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskExplanationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskExplanationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskExplanation model
   */
  readonly fields: RiskExplanationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskExplanation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskExplanationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    risk<T extends RisksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RisksDefaultArgs<ExtArgs>>): Prisma__RisksClient<$Result.GetResult<Prisma.$RisksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskExplanation model
   */
  interface RiskExplanationFieldRefs {
    readonly id: FieldRef<"RiskExplanation", 'Int'>
    readonly risk_id: FieldRef<"RiskExplanation", 'Int'>
    readonly budget_risk_explanation: FieldRef<"RiskExplanation", 'String'>
    readonly timeline_risk_explanation: FieldRef<"RiskExplanation", 'String'>
    readonly churn_risk_explanation: FieldRef<"RiskExplanation", 'String'>
    readonly deal_risk_summary: FieldRef<"RiskExplanation", 'String'>
    readonly created_at: FieldRef<"RiskExplanation", 'DateTime'>
    readonly updated_at: FieldRef<"RiskExplanation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskExplanation findUnique
   */
  export type RiskExplanationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * Filter, which RiskExplanation to fetch.
     */
    where: RiskExplanationWhereUniqueInput
  }

  /**
   * RiskExplanation findUniqueOrThrow
   */
  export type RiskExplanationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * Filter, which RiskExplanation to fetch.
     */
    where: RiskExplanationWhereUniqueInput
  }

  /**
   * RiskExplanation findFirst
   */
  export type RiskExplanationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * Filter, which RiskExplanation to fetch.
     */
    where?: RiskExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskExplanations to fetch.
     */
    orderBy?: RiskExplanationOrderByWithRelationInput | RiskExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskExplanations.
     */
    cursor?: RiskExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskExplanations.
     */
    distinct?: RiskExplanationScalarFieldEnum | RiskExplanationScalarFieldEnum[]
  }

  /**
   * RiskExplanation findFirstOrThrow
   */
  export type RiskExplanationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * Filter, which RiskExplanation to fetch.
     */
    where?: RiskExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskExplanations to fetch.
     */
    orderBy?: RiskExplanationOrderByWithRelationInput | RiskExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskExplanations.
     */
    cursor?: RiskExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskExplanations.
     */
    distinct?: RiskExplanationScalarFieldEnum | RiskExplanationScalarFieldEnum[]
  }

  /**
   * RiskExplanation findMany
   */
  export type RiskExplanationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * Filter, which RiskExplanations to fetch.
     */
    where?: RiskExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskExplanations to fetch.
     */
    orderBy?: RiskExplanationOrderByWithRelationInput | RiskExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskExplanations.
     */
    cursor?: RiskExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskExplanations.
     */
    skip?: number
    distinct?: RiskExplanationScalarFieldEnum | RiskExplanationScalarFieldEnum[]
  }

  /**
   * RiskExplanation create
   */
  export type RiskExplanationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskExplanation.
     */
    data: XOR<RiskExplanationCreateInput, RiskExplanationUncheckedCreateInput>
  }

  /**
   * RiskExplanation createMany
   */
  export type RiskExplanationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskExplanations.
     */
    data: RiskExplanationCreateManyInput | RiskExplanationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskExplanation createManyAndReturn
   */
  export type RiskExplanationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * The data used to create many RiskExplanations.
     */
    data: RiskExplanationCreateManyInput | RiskExplanationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskExplanation update
   */
  export type RiskExplanationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskExplanation.
     */
    data: XOR<RiskExplanationUpdateInput, RiskExplanationUncheckedUpdateInput>
    /**
     * Choose, which RiskExplanation to update.
     */
    where: RiskExplanationWhereUniqueInput
  }

  /**
   * RiskExplanation updateMany
   */
  export type RiskExplanationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskExplanations.
     */
    data: XOR<RiskExplanationUpdateManyMutationInput, RiskExplanationUncheckedUpdateManyInput>
    /**
     * Filter which RiskExplanations to update
     */
    where?: RiskExplanationWhereInput
    /**
     * Limit how many RiskExplanations to update.
     */
    limit?: number
  }

  /**
   * RiskExplanation updateManyAndReturn
   */
  export type RiskExplanationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * The data used to update RiskExplanations.
     */
    data: XOR<RiskExplanationUpdateManyMutationInput, RiskExplanationUncheckedUpdateManyInput>
    /**
     * Filter which RiskExplanations to update
     */
    where?: RiskExplanationWhereInput
    /**
     * Limit how many RiskExplanations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskExplanation upsert
   */
  export type RiskExplanationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskExplanation to update in case it exists.
     */
    where: RiskExplanationWhereUniqueInput
    /**
     * In case the RiskExplanation found by the `where` argument doesn't exist, create a new RiskExplanation with this data.
     */
    create: XOR<RiskExplanationCreateInput, RiskExplanationUncheckedCreateInput>
    /**
     * In case the RiskExplanation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskExplanationUpdateInput, RiskExplanationUncheckedUpdateInput>
  }

  /**
   * RiskExplanation delete
   */
  export type RiskExplanationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
    /**
     * Filter which RiskExplanation to delete.
     */
    where: RiskExplanationWhereUniqueInput
  }

  /**
   * RiskExplanation deleteMany
   */
  export type RiskExplanationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskExplanations to delete
     */
    where?: RiskExplanationWhereInput
    /**
     * Limit how many RiskExplanations to delete.
     */
    limit?: number
  }

  /**
   * RiskExplanation without action
   */
  export type RiskExplanationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskExplanation
     */
    select?: RiskExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskExplanation
     */
    omit?: RiskExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskExplanationInclude<ExtArgs> | null
  }


  /**
   * Model Personality
   */

  export type AggregatePersonality = {
    _count: PersonalityCountAggregateOutputType | null
    _avg: PersonalityAvgAggregateOutputType | null
    _sum: PersonalitySumAggregateOutputType | null
    _min: PersonalityMinAggregateOutputType | null
    _max: PersonalityMaxAggregateOutputType | null
  }

  export type PersonalityAvgAggregateOutputType = {
    id: number | null
    participant_id: number | null
  }

  export type PersonalitySumAggregateOutputType = {
    id: number | null
    participant_id: number | null
  }

  export type PersonalityMinAggregateOutputType = {
    id: number | null
    participant_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PersonalityMaxAggregateOutputType = {
    id: number | null
    participant_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PersonalityCountAggregateOutputType = {
    id: number
    participant_id: number
    personality_traits: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PersonalityAvgAggregateInputType = {
    id?: true
    participant_id?: true
  }

  export type PersonalitySumAggregateInputType = {
    id?: true
    participant_id?: true
  }

  export type PersonalityMinAggregateInputType = {
    id?: true
    participant_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PersonalityMaxAggregateInputType = {
    id?: true
    participant_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PersonalityCountAggregateInputType = {
    id?: true
    participant_id?: true
    personality_traits?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PersonalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personality to aggregate.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personalities
    **/
    _count?: true | PersonalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalityMaxAggregateInputType
  }

  export type GetPersonalityAggregateType<T extends PersonalityAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonality[P]>
      : GetScalarType<T[P], AggregatePersonality[P]>
  }




  export type PersonalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalityWhereInput
    orderBy?: PersonalityOrderByWithAggregationInput | PersonalityOrderByWithAggregationInput[]
    by: PersonalityScalarFieldEnum[] | PersonalityScalarFieldEnum
    having?: PersonalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalityCountAggregateInputType | true
    _avg?: PersonalityAvgAggregateInputType
    _sum?: PersonalitySumAggregateInputType
    _min?: PersonalityMinAggregateInputType
    _max?: PersonalityMaxAggregateInputType
  }

  export type PersonalityGroupByOutputType = {
    id: number
    participant_id: number
    personality_traits: JsonValue
    created_at: Date
    updated_at: Date
    _count: PersonalityCountAggregateOutputType | null
    _avg: PersonalityAvgAggregateOutputType | null
    _sum: PersonalitySumAggregateOutputType | null
    _min: PersonalityMinAggregateOutputType | null
    _max: PersonalityMaxAggregateOutputType | null
  }

  type GetPersonalityGroupByPayload<T extends PersonalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalityGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalityGroupByOutputType[P]>
        }
      >
    >


  export type PersonalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    personality_traits?: boolean
    created_at?: boolean
    updated_at?: boolean
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personality"]>

  export type PersonalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    personality_traits?: boolean
    created_at?: boolean
    updated_at?: boolean
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personality"]>

  export type PersonalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    personality_traits?: boolean
    created_at?: boolean
    updated_at?: boolean
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personality"]>

  export type PersonalitySelectScalar = {
    id?: boolean
    participant_id?: boolean
    personality_traits?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PersonalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participant_id" | "personality_traits" | "created_at" | "updated_at", ExtArgs["result"]["personality"]>
  export type PersonalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }
  export type PersonalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }
  export type PersonalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }

  export type $PersonalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personality"
    objects: {
      participant: Prisma.$ParticipantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participant_id: number
      personality_traits: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["personality"]>
    composites: {}
  }

  type PersonalityGetPayload<S extends boolean | null | undefined | PersonalityDefaultArgs> = $Result.GetResult<Prisma.$PersonalityPayload, S>

  type PersonalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalityCountAggregateInputType | true
    }

  export interface PersonalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personality'], meta: { name: 'Personality' } }
    /**
     * Find zero or one Personality that matches the filter.
     * @param {PersonalityFindUniqueArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalityFindUniqueArgs>(args: SelectSubset<T, PersonalityFindUniqueArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalityFindUniqueOrThrowArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalityFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityFindFirstArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalityFindFirstArgs>(args?: SelectSubset<T, PersonalityFindFirstArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityFindFirstOrThrowArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalityFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personalities
     * const personalities = await prisma.personality.findMany()
     * 
     * // Get first 10 Personalities
     * const personalities = await prisma.personality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalityWithIdOnly = await prisma.personality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalityFindManyArgs>(args?: SelectSubset<T, PersonalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personality.
     * @param {PersonalityCreateArgs} args - Arguments to create a Personality.
     * @example
     * // Create one Personality
     * const Personality = await prisma.personality.create({
     *   data: {
     *     // ... data to create a Personality
     *   }
     * })
     * 
     */
    create<T extends PersonalityCreateArgs>(args: SelectSubset<T, PersonalityCreateArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personalities.
     * @param {PersonalityCreateManyArgs} args - Arguments to create many Personalities.
     * @example
     * // Create many Personalities
     * const personality = await prisma.personality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalityCreateManyArgs>(args?: SelectSubset<T, PersonalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personalities and returns the data saved in the database.
     * @param {PersonalityCreateManyAndReturnArgs} args - Arguments to create many Personalities.
     * @example
     * // Create many Personalities
     * const personality = await prisma.personality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personalities and only return the `id`
     * const personalityWithIdOnly = await prisma.personality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalityCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personality.
     * @param {PersonalityDeleteArgs} args - Arguments to delete one Personality.
     * @example
     * // Delete one Personality
     * const Personality = await prisma.personality.delete({
     *   where: {
     *     // ... filter to delete one Personality
     *   }
     * })
     * 
     */
    delete<T extends PersonalityDeleteArgs>(args: SelectSubset<T, PersonalityDeleteArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personality.
     * @param {PersonalityUpdateArgs} args - Arguments to update one Personality.
     * @example
     * // Update one Personality
     * const personality = await prisma.personality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalityUpdateArgs>(args: SelectSubset<T, PersonalityUpdateArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personalities.
     * @param {PersonalityDeleteManyArgs} args - Arguments to filter Personalities to delete.
     * @example
     * // Delete a few Personalities
     * const { count } = await prisma.personality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalityDeleteManyArgs>(args?: SelectSubset<T, PersonalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personalities
     * const personality = await prisma.personality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalityUpdateManyArgs>(args: SelectSubset<T, PersonalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalities and returns the data updated in the database.
     * @param {PersonalityUpdateManyAndReturnArgs} args - Arguments to update many Personalities.
     * @example
     * // Update many Personalities
     * const personality = await prisma.personality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personalities and only return the `id`
     * const personalityWithIdOnly = await prisma.personality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalityUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personality.
     * @param {PersonalityUpsertArgs} args - Arguments to update or create a Personality.
     * @example
     * // Update or create a Personality
     * const personality = await prisma.personality.upsert({
     *   create: {
     *     // ... data to create a Personality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personality we want to update
     *   }
     * })
     */
    upsert<T extends PersonalityUpsertArgs>(args: SelectSubset<T, PersonalityUpsertArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityCountArgs} args - Arguments to filter Personalities to count.
     * @example
     * // Count the number of Personalities
     * const count = await prisma.personality.count({
     *   where: {
     *     // ... the filter for the Personalities we want to count
     *   }
     * })
    **/
    count<T extends PersonalityCountArgs>(
      args?: Subset<T, PersonalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalityAggregateArgs>(args: Subset<T, PersonalityAggregateArgs>): Prisma.PrismaPromise<GetPersonalityAggregateType<T>>

    /**
     * Group by Personality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalityGroupByArgs['orderBy'] }
        : { orderBy?: PersonalityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personality model
   */
  readonly fields: PersonalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantsDefaultArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Personality model
   */
  interface PersonalityFieldRefs {
    readonly id: FieldRef<"Personality", 'Int'>
    readonly participant_id: FieldRef<"Personality", 'Int'>
    readonly personality_traits: FieldRef<"Personality", 'Json'>
    readonly created_at: FieldRef<"Personality", 'DateTime'>
    readonly updated_at: FieldRef<"Personality", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Personality findUnique
   */
  export type PersonalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality findUniqueOrThrow
   */
  export type PersonalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality findFirst
   */
  export type PersonalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personalities.
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personalities.
     */
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Personality findFirstOrThrow
   */
  export type PersonalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personalities.
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personalities.
     */
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Personality findMany
   */
  export type PersonalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personalities to fetch.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personalities.
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Personality create
   */
  export type PersonalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Personality.
     */
    data: XOR<PersonalityCreateInput, PersonalityUncheckedCreateInput>
  }

  /**
   * Personality createMany
   */
  export type PersonalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personalities.
     */
    data: PersonalityCreateManyInput | PersonalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personality createManyAndReturn
   */
  export type PersonalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * The data used to create many Personalities.
     */
    data: PersonalityCreateManyInput | PersonalityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personality update
   */
  export type PersonalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Personality.
     */
    data: XOR<PersonalityUpdateInput, PersonalityUncheckedUpdateInput>
    /**
     * Choose, which Personality to update.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality updateMany
   */
  export type PersonalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personalities.
     */
    data: XOR<PersonalityUpdateManyMutationInput, PersonalityUncheckedUpdateManyInput>
    /**
     * Filter which Personalities to update
     */
    where?: PersonalityWhereInput
    /**
     * Limit how many Personalities to update.
     */
    limit?: number
  }

  /**
   * Personality updateManyAndReturn
   */
  export type PersonalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * The data used to update Personalities.
     */
    data: XOR<PersonalityUpdateManyMutationInput, PersonalityUncheckedUpdateManyInput>
    /**
     * Filter which Personalities to update
     */
    where?: PersonalityWhereInput
    /**
     * Limit how many Personalities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personality upsert
   */
  export type PersonalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Personality to update in case it exists.
     */
    where: PersonalityWhereUniqueInput
    /**
     * In case the Personality found by the `where` argument doesn't exist, create a new Personality with this data.
     */
    create: XOR<PersonalityCreateInput, PersonalityUncheckedCreateInput>
    /**
     * In case the Personality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalityUpdateInput, PersonalityUncheckedUpdateInput>
  }

  /**
   * Personality delete
   */
  export type PersonalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter which Personality to delete.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality deleteMany
   */
  export type PersonalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personalities to delete
     */
    where?: PersonalityWhereInput
    /**
     * Limit how many Personalities to delete.
     */
    limit?: number
  }

  /**
   * Personality without action
   */
  export type PersonalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
  }


  /**
   * Model Timeline
   */

  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _avg: TimelineAvgAggregateOutputType | null
    _sum: TimelineSumAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineAvgAggregateOutputType = {
    id: number | null
    activity_metrics_id: number | null
  }

  export type TimelineSumAggregateOutputType = {
    id: number | null
    activity_metrics_id: number | null
  }

  export type TimelineMinAggregateOutputType = {
    id: number | null
    activity_metrics_id: number | null
    event_date: Date | null
    event_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TimelineMaxAggregateOutputType = {
    id: number | null
    activity_metrics_id: number | null
    event_date: Date | null
    event_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TimelineCountAggregateOutputType = {
    id: number
    activity_metrics_id: number
    event_date: number
    event_type: number
    event_details: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TimelineAvgAggregateInputType = {
    id?: true
    activity_metrics_id?: true
  }

  export type TimelineSumAggregateInputType = {
    id?: true
    activity_metrics_id?: true
  }

  export type TimelineMinAggregateInputType = {
    id?: true
    activity_metrics_id?: true
    event_date?: true
    event_type?: true
    created_at?: true
    updated_at?: true
  }

  export type TimelineMaxAggregateInputType = {
    id?: true
    activity_metrics_id?: true
    event_date?: true
    event_type?: true
    created_at?: true
    updated_at?: true
  }

  export type TimelineCountAggregateInputType = {
    id?: true
    activity_metrics_id?: true
    event_date?: true
    event_type?: true
    event_details?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeline to aggregate.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithAggregationInput | TimelineOrderByWithAggregationInput[]
    by: TimelineScalarFieldEnum[] | TimelineScalarFieldEnum
    having?: TimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _avg?: TimelineAvgAggregateInputType
    _sum?: TimelineSumAggregateInputType
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }

  export type TimelineGroupByOutputType = {
    id: number
    activity_metrics_id: number
    event_date: Date
    event_type: string
    event_details: JsonValue
    created_at: Date
    updated_at: Date
    _count: TimelineCountAggregateOutputType | null
    _avg: TimelineAvgAggregateOutputType | null
    _sum: TimelineSumAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type TimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_metrics_id?: boolean
    event_date?: boolean
    event_type?: boolean
    event_details?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity_metrics?: boolean | ActivityMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_metrics_id?: boolean
    event_date?: boolean
    event_type?: boolean
    event_details?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity_metrics?: boolean | ActivityMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_metrics_id?: boolean
    event_date?: boolean
    event_type?: boolean
    event_details?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity_metrics?: boolean | ActivityMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectScalar = {
    id?: boolean
    activity_metrics_id?: boolean
    event_date?: boolean
    event_type?: boolean
    event_details?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TimelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activity_metrics_id" | "event_date" | "event_type" | "event_details" | "created_at" | "updated_at", ExtArgs["result"]["timeline"]>
  export type TimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_metrics?: boolean | ActivityMetricsDefaultArgs<ExtArgs>
  }
  export type TimelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_metrics?: boolean | ActivityMetricsDefaultArgs<ExtArgs>
  }
  export type TimelineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_metrics?: boolean | ActivityMetricsDefaultArgs<ExtArgs>
  }

  export type $TimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeline"
    objects: {
      activity_metrics: Prisma.$ActivityMetricsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activity_metrics_id: number
      event_date: Date
      event_type: string
      event_details: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["timeline"]>
    composites: {}
  }

  type TimelineGetPayload<S extends boolean | null | undefined | TimelineDefaultArgs> = $Result.GetResult<Prisma.$TimelinePayload, S>

  type TimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelineCountAggregateInputType | true
    }

  export interface TimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeline'], meta: { name: 'Timeline' } }
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {TimelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineFindUniqueArgs>(args: SelectSubset<T, TimelineFindUniqueArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineFindFirstArgs>(args?: SelectSubset<T, TimelineFindFirstArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineWithIdOnly = await prisma.timeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineFindManyArgs>(args?: SelectSubset<T, TimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timeline.
     * @param {TimelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
     */
    create<T extends TimelineCreateArgs>(args: SelectSubset<T, TimelineCreateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timelines.
     * @param {TimelineCreateManyArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineCreateManyArgs>(args?: SelectSubset<T, TimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timelines and returns the data saved in the database.
     * @param {TimelineCreateManyAndReturnArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timelines and only return the `id`
     * const timelineWithIdOnly = await prisma.timeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timeline.
     * @param {TimelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
     */
    delete<T extends TimelineDeleteArgs>(args: SelectSubset<T, TimelineDeleteArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timeline.
     * @param {TimelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineUpdateArgs>(args: SelectSubset<T, TimelineUpdateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timelines.
     * @param {TimelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineDeleteManyArgs>(args?: SelectSubset<T, TimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineUpdateManyArgs>(args: SelectSubset<T, TimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines and returns the data updated in the database.
     * @param {TimelineUpdateManyAndReturnArgs} args - Arguments to update many Timelines.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timelines and only return the `id`
     * const timelineWithIdOnly = await prisma.timeline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimelineUpdateManyAndReturnArgs>(args: SelectSubset<T, TimelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timeline.
     * @param {TimelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
     */
    upsert<T extends TimelineUpsertArgs>(args: SelectSubset<T, TimelineUpsertArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends TimelineCountArgs>(
      args?: Subset<T, TimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): Prisma.PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeline model
   */
  readonly fields: TimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity_metrics<T extends ActivityMetricsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityMetricsDefaultArgs<ExtArgs>>): Prisma__ActivityMetricsClient<$Result.GetResult<Prisma.$ActivityMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Timeline model
   */
  interface TimelineFieldRefs {
    readonly id: FieldRef<"Timeline", 'Int'>
    readonly activity_metrics_id: FieldRef<"Timeline", 'Int'>
    readonly event_date: FieldRef<"Timeline", 'DateTime'>
    readonly event_type: FieldRef<"Timeline", 'String'>
    readonly event_details: FieldRef<"Timeline", 'Json'>
    readonly created_at: FieldRef<"Timeline", 'DateTime'>
    readonly updated_at: FieldRef<"Timeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timeline findUnique
   */
  export type TimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findUniqueOrThrow
   */
  export type TimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findFirst
   */
  export type TimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findFirstOrThrow
   */
  export type TimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findMany
   */
  export type TimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timelines to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline create
   */
  export type TimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Timeline.
     */
    data: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
  }

  /**
   * Timeline createMany
   */
  export type TimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timeline createManyAndReturn
   */
  export type TimelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timeline update
   */
  export type TimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Timeline.
     */
    data: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
    /**
     * Choose, which Timeline to update.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline updateMany
   */
  export type TimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
    /**
     * Limit how many Timelines to update.
     */
    limit?: number
  }

  /**
   * Timeline updateManyAndReturn
   */
  export type TimelineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
    /**
     * Limit how many Timelines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timeline upsert
   */
  export type TimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Timeline to update in case it exists.
     */
    where: TimelineWhereUniqueInput
    /**
     * In case the Timeline found by the `where` argument doesn't exist, create a new Timeline with this data.
     */
    create: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
    /**
     * In case the Timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
  }

  /**
   * Timeline delete
   */
  export type TimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter which Timeline to delete.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline deleteMany
   */
  export type TimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timelines to delete
     */
    where?: TimelineWhereInput
    /**
     * Limit how many Timelines to delete.
     */
    limit?: number
  }

  /**
   * Timeline without action
   */
  export type TimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DealsScalarFieldEnum: {
    id: 'id',
    deal_name: 'deal_name',
    company_name: 'company_name',
    stage: 'stage',
    status: 'status',
    deal_amount: 'deal_amount',
    expected_close_date: 'expected_close_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DealsScalarFieldEnum = (typeof DealsScalarFieldEnum)[keyof typeof DealsScalarFieldEnum]


  export const ParticipantsScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    prospect_name: 'prospect_name',
    email: 'email',
    slack_id: 'slack_id',
    role: 'role',
    sentiment: 'sentiment',
    communication_score: 'communication_score',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ParticipantsScalarFieldEnum = (typeof ParticipantsScalarFieldEnum)[keyof typeof ParticipantsScalarFieldEnum]


  export const RisksScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    deal_risk_score: 'deal_risk_score',
    churn_risk_score: 'churn_risk_score',
    timeline_risk_score: 'timeline_risk_score',
    budget_risk_score: 'budget_risk_score',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RisksScalarFieldEnum = (typeof RisksScalarFieldEnum)[keyof typeof RisksScalarFieldEnum]


  export const ActivityMetricsScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    message_count: 'message_count',
    prospect_response_time: 'prospect_response_time',
    engagement_trend: 'engagement_trend',
    last_communication_source: 'last_communication_source',
    last_communication_summary: 'last_communication_summary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ActivityMetricsScalarFieldEnum = (typeof ActivityMetricsScalarFieldEnum)[keyof typeof ActivityMetricsScalarFieldEnum]


  export const AiRecommendationScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    next_steps: 'next_steps',
    escalation_triggers: 'escalation_triggers',
    deal_acceleration_tactics: 'deal_acceleration_tactics',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AiRecommendationScalarFieldEnum = (typeof AiRecommendationScalarFieldEnum)[keyof typeof AiRecommendationScalarFieldEnum]


  export const FollowUpScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    communication_type: 'communication_type',
    contact_address: 'contact_address',
    subject: 'subject',
    body: 'body',
    message_id: 'message_id',
    scheduled_at: 'scheduled_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FollowUpScalarFieldEnum = (typeof FollowUpScalarFieldEnum)[keyof typeof FollowUpScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    tag: 'tag',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const ConversationHistoryScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    slack: 'slack',
    email: 'email',
    deal_summary: 'deal_summary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ConversationHistoryScalarFieldEnum = (typeof ConversationHistoryScalarFieldEnum)[keyof typeof ConversationHistoryScalarFieldEnum]


  export const DealInsightsScalarFieldEnum: {
    id: 'id',
    deal_id: 'deal_id',
    kpi_insights: 'kpi_insights',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DealInsightsScalarFieldEnum = (typeof DealInsightsScalarFieldEnum)[keyof typeof DealInsightsScalarFieldEnum]


  export const RiskExplanationScalarFieldEnum: {
    id: 'id',
    risk_id: 'risk_id',
    budget_risk_explanation: 'budget_risk_explanation',
    timeline_risk_explanation: 'timeline_risk_explanation',
    churn_risk_explanation: 'churn_risk_explanation',
    deal_risk_summary: 'deal_risk_summary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RiskExplanationScalarFieldEnum = (typeof RiskExplanationScalarFieldEnum)[keyof typeof RiskExplanationScalarFieldEnum]


  export const PersonalityScalarFieldEnum: {
    id: 'id',
    participant_id: 'participant_id',
    personality_traits: 'personality_traits',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PersonalityScalarFieldEnum = (typeof PersonalityScalarFieldEnum)[keyof typeof PersonalityScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    id: 'id',
    activity_metrics_id: 'activity_metrics_id',
    event_date: 'event_date',
    event_type: 'event_type',
    event_details: 'event_details',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type DealsWhereInput = {
    AND?: DealsWhereInput | DealsWhereInput[]
    OR?: DealsWhereInput[]
    NOT?: DealsWhereInput | DealsWhereInput[]
    id?: IntFilter<"Deals"> | number
    deal_name?: StringFilter<"Deals"> | string
    company_name?: StringFilter<"Deals"> | string
    stage?: StringFilter<"Deals"> | string
    status?: StringFilter<"Deals"> | string
    deal_amount?: FloatFilter<"Deals"> | number
    expected_close_date?: DateTimeFilter<"Deals"> | Date | string
    created_at?: DateTimeFilter<"Deals"> | Date | string
    updated_at?: DateTimeFilter<"Deals"> | Date | string
    participants?: ParticipantsListRelationFilter
    risks?: RisksListRelationFilter
    activities_metrics?: ActivityMetricsListRelationFilter
    ai_recommendations?: AiRecommendationListRelationFilter
    follow_ups?: FollowUpListRelationFilter
    tags?: TagsListRelationFilter
    conversation_history?: ConversationHistoryListRelationFilter
    deal_insights?: DealInsightsListRelationFilter
  }

  export type DealsOrderByWithRelationInput = {
    id?: SortOrder
    deal_name?: SortOrder
    company_name?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    deal_amount?: SortOrder
    expected_close_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    participants?: ParticipantsOrderByRelationAggregateInput
    risks?: RisksOrderByRelationAggregateInput
    activities_metrics?: ActivityMetricsOrderByRelationAggregateInput
    ai_recommendations?: AiRecommendationOrderByRelationAggregateInput
    follow_ups?: FollowUpOrderByRelationAggregateInput
    tags?: TagsOrderByRelationAggregateInput
    conversation_history?: ConversationHistoryOrderByRelationAggregateInput
    deal_insights?: DealInsightsOrderByRelationAggregateInput
  }

  export type DealsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DealsWhereInput | DealsWhereInput[]
    OR?: DealsWhereInput[]
    NOT?: DealsWhereInput | DealsWhereInput[]
    deal_name?: StringFilter<"Deals"> | string
    company_name?: StringFilter<"Deals"> | string
    stage?: StringFilter<"Deals"> | string
    status?: StringFilter<"Deals"> | string
    deal_amount?: FloatFilter<"Deals"> | number
    expected_close_date?: DateTimeFilter<"Deals"> | Date | string
    created_at?: DateTimeFilter<"Deals"> | Date | string
    updated_at?: DateTimeFilter<"Deals"> | Date | string
    participants?: ParticipantsListRelationFilter
    risks?: RisksListRelationFilter
    activities_metrics?: ActivityMetricsListRelationFilter
    ai_recommendations?: AiRecommendationListRelationFilter
    follow_ups?: FollowUpListRelationFilter
    tags?: TagsListRelationFilter
    conversation_history?: ConversationHistoryListRelationFilter
    deal_insights?: DealInsightsListRelationFilter
  }, "id">

  export type DealsOrderByWithAggregationInput = {
    id?: SortOrder
    deal_name?: SortOrder
    company_name?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    deal_amount?: SortOrder
    expected_close_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DealsCountOrderByAggregateInput
    _avg?: DealsAvgOrderByAggregateInput
    _max?: DealsMaxOrderByAggregateInput
    _min?: DealsMinOrderByAggregateInput
    _sum?: DealsSumOrderByAggregateInput
  }

  export type DealsScalarWhereWithAggregatesInput = {
    AND?: DealsScalarWhereWithAggregatesInput | DealsScalarWhereWithAggregatesInput[]
    OR?: DealsScalarWhereWithAggregatesInput[]
    NOT?: DealsScalarWhereWithAggregatesInput | DealsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deals"> | number
    deal_name?: StringWithAggregatesFilter<"Deals"> | string
    company_name?: StringWithAggregatesFilter<"Deals"> | string
    stage?: StringWithAggregatesFilter<"Deals"> | string
    status?: StringWithAggregatesFilter<"Deals"> | string
    deal_amount?: FloatWithAggregatesFilter<"Deals"> | number
    expected_close_date?: DateTimeWithAggregatesFilter<"Deals"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Deals"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Deals"> | Date | string
  }

  export type ParticipantsWhereInput = {
    AND?: ParticipantsWhereInput | ParticipantsWhereInput[]
    OR?: ParticipantsWhereInput[]
    NOT?: ParticipantsWhereInput | ParticipantsWhereInput[]
    id?: IntFilter<"Participants"> | number
    deal_id?: IntFilter<"Participants"> | number
    prospect_name?: StringFilter<"Participants"> | string
    email?: StringFilter<"Participants"> | string
    slack_id?: StringFilter<"Participants"> | string
    role?: StringFilter<"Participants"> | string
    sentiment?: StringFilter<"Participants"> | string
    communication_score?: FloatFilter<"Participants"> | number
    created_at?: DateTimeFilter<"Participants"> | Date | string
    updated_at?: DateTimeFilter<"Participants"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
    personality?: PersonalityListRelationFilter
  }

  export type ParticipantsOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    prospect_name?: SortOrder
    email?: SortOrder
    slack_id?: SortOrder
    role?: SortOrder
    sentiment?: SortOrder
    communication_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deal?: DealsOrderByWithRelationInput
    personality?: PersonalityOrderByRelationAggregateInput
  }

  export type ParticipantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipantsWhereInput | ParticipantsWhereInput[]
    OR?: ParticipantsWhereInput[]
    NOT?: ParticipantsWhereInput | ParticipantsWhereInput[]
    deal_id?: IntFilter<"Participants"> | number
    prospect_name?: StringFilter<"Participants"> | string
    email?: StringFilter<"Participants"> | string
    slack_id?: StringFilter<"Participants"> | string
    role?: StringFilter<"Participants"> | string
    sentiment?: StringFilter<"Participants"> | string
    communication_score?: FloatFilter<"Participants"> | number
    created_at?: DateTimeFilter<"Participants"> | Date | string
    updated_at?: DateTimeFilter<"Participants"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
    personality?: PersonalityListRelationFilter
  }, "id">

  export type ParticipantsOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    prospect_name?: SortOrder
    email?: SortOrder
    slack_id?: SortOrder
    role?: SortOrder
    sentiment?: SortOrder
    communication_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ParticipantsCountOrderByAggregateInput
    _avg?: ParticipantsAvgOrderByAggregateInput
    _max?: ParticipantsMaxOrderByAggregateInput
    _min?: ParticipantsMinOrderByAggregateInput
    _sum?: ParticipantsSumOrderByAggregateInput
  }

  export type ParticipantsScalarWhereWithAggregatesInput = {
    AND?: ParticipantsScalarWhereWithAggregatesInput | ParticipantsScalarWhereWithAggregatesInput[]
    OR?: ParticipantsScalarWhereWithAggregatesInput[]
    NOT?: ParticipantsScalarWhereWithAggregatesInput | ParticipantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participants"> | number
    deal_id?: IntWithAggregatesFilter<"Participants"> | number
    prospect_name?: StringWithAggregatesFilter<"Participants"> | string
    email?: StringWithAggregatesFilter<"Participants"> | string
    slack_id?: StringWithAggregatesFilter<"Participants"> | string
    role?: StringWithAggregatesFilter<"Participants"> | string
    sentiment?: StringWithAggregatesFilter<"Participants"> | string
    communication_score?: FloatWithAggregatesFilter<"Participants"> | number
    created_at?: DateTimeWithAggregatesFilter<"Participants"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Participants"> | Date | string
  }

  export type RisksWhereInput = {
    AND?: RisksWhereInput | RisksWhereInput[]
    OR?: RisksWhereInput[]
    NOT?: RisksWhereInput | RisksWhereInput[]
    id?: IntFilter<"Risks"> | number
    deal_id?: IntFilter<"Risks"> | number
    deal_risk_score?: FloatFilter<"Risks"> | number
    churn_risk_score?: FloatFilter<"Risks"> | number
    timeline_risk_score?: FloatFilter<"Risks"> | number
    budget_risk_score?: FloatFilter<"Risks"> | number
    created_at?: DateTimeFilter<"Risks"> | Date | string
    updated_at?: DateTimeFilter<"Risks"> | Date | string
    risk_explanation?: RiskExplanationListRelationFilter
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type RisksOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    risk_explanation?: RiskExplanationOrderByRelationAggregateInput
    deal?: DealsOrderByWithRelationInput
  }

  export type RisksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RisksWhereInput | RisksWhereInput[]
    OR?: RisksWhereInput[]
    NOT?: RisksWhereInput | RisksWhereInput[]
    deal_id?: IntFilter<"Risks"> | number
    deal_risk_score?: FloatFilter<"Risks"> | number
    churn_risk_score?: FloatFilter<"Risks"> | number
    timeline_risk_score?: FloatFilter<"Risks"> | number
    budget_risk_score?: FloatFilter<"Risks"> | number
    created_at?: DateTimeFilter<"Risks"> | Date | string
    updated_at?: DateTimeFilter<"Risks"> | Date | string
    risk_explanation?: RiskExplanationListRelationFilter
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type RisksOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RisksCountOrderByAggregateInput
    _avg?: RisksAvgOrderByAggregateInput
    _max?: RisksMaxOrderByAggregateInput
    _min?: RisksMinOrderByAggregateInput
    _sum?: RisksSumOrderByAggregateInput
  }

  export type RisksScalarWhereWithAggregatesInput = {
    AND?: RisksScalarWhereWithAggregatesInput | RisksScalarWhereWithAggregatesInput[]
    OR?: RisksScalarWhereWithAggregatesInput[]
    NOT?: RisksScalarWhereWithAggregatesInput | RisksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Risks"> | number
    deal_id?: IntWithAggregatesFilter<"Risks"> | number
    deal_risk_score?: FloatWithAggregatesFilter<"Risks"> | number
    churn_risk_score?: FloatWithAggregatesFilter<"Risks"> | number
    timeline_risk_score?: FloatWithAggregatesFilter<"Risks"> | number
    budget_risk_score?: FloatWithAggregatesFilter<"Risks"> | number
    created_at?: DateTimeWithAggregatesFilter<"Risks"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Risks"> | Date | string
  }

  export type ActivityMetricsWhereInput = {
    AND?: ActivityMetricsWhereInput | ActivityMetricsWhereInput[]
    OR?: ActivityMetricsWhereInput[]
    NOT?: ActivityMetricsWhereInput | ActivityMetricsWhereInput[]
    id?: IntFilter<"ActivityMetrics"> | number
    deal_id?: IntFilter<"ActivityMetrics"> | number
    message_count?: IntFilter<"ActivityMetrics"> | number
    prospect_response_time?: FloatFilter<"ActivityMetrics"> | number
    engagement_trend?: StringFilter<"ActivityMetrics"> | string
    last_communication_source?: StringFilter<"ActivityMetrics"> | string
    last_communication_summary?: StringFilter<"ActivityMetrics"> | string
    created_at?: DateTimeFilter<"ActivityMetrics"> | Date | string
    updated_at?: DateTimeFilter<"ActivityMetrics"> | Date | string
    timeline?: TimelineListRelationFilter
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type ActivityMetricsOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
    engagement_trend?: SortOrder
    last_communication_source?: SortOrder
    last_communication_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    timeline?: TimelineOrderByRelationAggregateInput
    deal?: DealsOrderByWithRelationInput
  }

  export type ActivityMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityMetricsWhereInput | ActivityMetricsWhereInput[]
    OR?: ActivityMetricsWhereInput[]
    NOT?: ActivityMetricsWhereInput | ActivityMetricsWhereInput[]
    deal_id?: IntFilter<"ActivityMetrics"> | number
    message_count?: IntFilter<"ActivityMetrics"> | number
    prospect_response_time?: FloatFilter<"ActivityMetrics"> | number
    engagement_trend?: StringFilter<"ActivityMetrics"> | string
    last_communication_source?: StringFilter<"ActivityMetrics"> | string
    last_communication_summary?: StringFilter<"ActivityMetrics"> | string
    created_at?: DateTimeFilter<"ActivityMetrics"> | Date | string
    updated_at?: DateTimeFilter<"ActivityMetrics"> | Date | string
    timeline?: TimelineListRelationFilter
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type ActivityMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
    engagement_trend?: SortOrder
    last_communication_source?: SortOrder
    last_communication_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ActivityMetricsCountOrderByAggregateInput
    _avg?: ActivityMetricsAvgOrderByAggregateInput
    _max?: ActivityMetricsMaxOrderByAggregateInput
    _min?: ActivityMetricsMinOrderByAggregateInput
    _sum?: ActivityMetricsSumOrderByAggregateInput
  }

  export type ActivityMetricsScalarWhereWithAggregatesInput = {
    AND?: ActivityMetricsScalarWhereWithAggregatesInput | ActivityMetricsScalarWhereWithAggregatesInput[]
    OR?: ActivityMetricsScalarWhereWithAggregatesInput[]
    NOT?: ActivityMetricsScalarWhereWithAggregatesInput | ActivityMetricsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityMetrics"> | number
    deal_id?: IntWithAggregatesFilter<"ActivityMetrics"> | number
    message_count?: IntWithAggregatesFilter<"ActivityMetrics"> | number
    prospect_response_time?: FloatWithAggregatesFilter<"ActivityMetrics"> | number
    engagement_trend?: StringWithAggregatesFilter<"ActivityMetrics"> | string
    last_communication_source?: StringWithAggregatesFilter<"ActivityMetrics"> | string
    last_communication_summary?: StringWithAggregatesFilter<"ActivityMetrics"> | string
    created_at?: DateTimeWithAggregatesFilter<"ActivityMetrics"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ActivityMetrics"> | Date | string
  }

  export type AiRecommendationWhereInput = {
    AND?: AiRecommendationWhereInput | AiRecommendationWhereInput[]
    OR?: AiRecommendationWhereInput[]
    NOT?: AiRecommendationWhereInput | AiRecommendationWhereInput[]
    id?: IntFilter<"AiRecommendation"> | number
    deal_id?: IntFilter<"AiRecommendation"> | number
    next_steps?: StringNullableListFilter<"AiRecommendation">
    escalation_triggers?: StringFilter<"AiRecommendation"> | string
    deal_acceleration_tactics?: StringFilter<"AiRecommendation"> | string
    created_at?: DateTimeFilter<"AiRecommendation"> | Date | string
    updated_at?: DateTimeFilter<"AiRecommendation"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type AiRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    next_steps?: SortOrder
    escalation_triggers?: SortOrder
    deal_acceleration_tactics?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deal?: DealsOrderByWithRelationInput
  }

  export type AiRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AiRecommendationWhereInput | AiRecommendationWhereInput[]
    OR?: AiRecommendationWhereInput[]
    NOT?: AiRecommendationWhereInput | AiRecommendationWhereInput[]
    deal_id?: IntFilter<"AiRecommendation"> | number
    next_steps?: StringNullableListFilter<"AiRecommendation">
    escalation_triggers?: StringFilter<"AiRecommendation"> | string
    deal_acceleration_tactics?: StringFilter<"AiRecommendation"> | string
    created_at?: DateTimeFilter<"AiRecommendation"> | Date | string
    updated_at?: DateTimeFilter<"AiRecommendation"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type AiRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    next_steps?: SortOrder
    escalation_triggers?: SortOrder
    deal_acceleration_tactics?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AiRecommendationCountOrderByAggregateInput
    _avg?: AiRecommendationAvgOrderByAggregateInput
    _max?: AiRecommendationMaxOrderByAggregateInput
    _min?: AiRecommendationMinOrderByAggregateInput
    _sum?: AiRecommendationSumOrderByAggregateInput
  }

  export type AiRecommendationScalarWhereWithAggregatesInput = {
    AND?: AiRecommendationScalarWhereWithAggregatesInput | AiRecommendationScalarWhereWithAggregatesInput[]
    OR?: AiRecommendationScalarWhereWithAggregatesInput[]
    NOT?: AiRecommendationScalarWhereWithAggregatesInput | AiRecommendationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AiRecommendation"> | number
    deal_id?: IntWithAggregatesFilter<"AiRecommendation"> | number
    next_steps?: StringNullableListFilter<"AiRecommendation">
    escalation_triggers?: StringWithAggregatesFilter<"AiRecommendation"> | string
    deal_acceleration_tactics?: StringWithAggregatesFilter<"AiRecommendation"> | string
    created_at?: DateTimeWithAggregatesFilter<"AiRecommendation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AiRecommendation"> | Date | string
  }

  export type FollowUpWhereInput = {
    AND?: FollowUpWhereInput | FollowUpWhereInput[]
    OR?: FollowUpWhereInput[]
    NOT?: FollowUpWhereInput | FollowUpWhereInput[]
    id?: IntFilter<"FollowUp"> | number
    deal_id?: IntFilter<"FollowUp"> | number
    communication_type?: StringFilter<"FollowUp"> | string
    contact_address?: StringFilter<"FollowUp"> | string
    subject?: StringNullableFilter<"FollowUp"> | string | null
    body?: StringNullableFilter<"FollowUp"> | string | null
    message_id?: StringNullableFilter<"FollowUp"> | string | null
    scheduled_at?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    created_at?: DateTimeFilter<"FollowUp"> | Date | string
    updated_at?: DateTimeFilter<"FollowUp"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type FollowUpOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_type?: SortOrder
    contact_address?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    scheduled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deal?: DealsOrderByWithRelationInput
  }

  export type FollowUpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowUpWhereInput | FollowUpWhereInput[]
    OR?: FollowUpWhereInput[]
    NOT?: FollowUpWhereInput | FollowUpWhereInput[]
    deal_id?: IntFilter<"FollowUp"> | number
    communication_type?: StringFilter<"FollowUp"> | string
    contact_address?: StringFilter<"FollowUp"> | string
    subject?: StringNullableFilter<"FollowUp"> | string | null
    body?: StringNullableFilter<"FollowUp"> | string | null
    message_id?: StringNullableFilter<"FollowUp"> | string | null
    scheduled_at?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    created_at?: DateTimeFilter<"FollowUp"> | Date | string
    updated_at?: DateTimeFilter<"FollowUp"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type FollowUpOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_type?: SortOrder
    contact_address?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    scheduled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FollowUpCountOrderByAggregateInput
    _avg?: FollowUpAvgOrderByAggregateInput
    _max?: FollowUpMaxOrderByAggregateInput
    _min?: FollowUpMinOrderByAggregateInput
    _sum?: FollowUpSumOrderByAggregateInput
  }

  export type FollowUpScalarWhereWithAggregatesInput = {
    AND?: FollowUpScalarWhereWithAggregatesInput | FollowUpScalarWhereWithAggregatesInput[]
    OR?: FollowUpScalarWhereWithAggregatesInput[]
    NOT?: FollowUpScalarWhereWithAggregatesInput | FollowUpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FollowUp"> | number
    deal_id?: IntWithAggregatesFilter<"FollowUp"> | number
    communication_type?: StringWithAggregatesFilter<"FollowUp"> | string
    contact_address?: StringWithAggregatesFilter<"FollowUp"> | string
    subject?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    body?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    message_id?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    scheduled_at?: DateTimeNullableWithAggregatesFilter<"FollowUp"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"FollowUp"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FollowUp"> | Date | string
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: IntFilter<"Tags"> | number
    deal_id?: IntFilter<"Tags"> | number
    tag?: StringNullableListFilter<"Tags">
    created_at?: DateTimeFilter<"Tags"> | Date | string
    updated_at?: DateTimeFilter<"Tags"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type TagsOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deal?: DealsOrderByWithRelationInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    deal_id?: IntFilter<"Tags"> | number
    tag?: StringNullableListFilter<"Tags">
    created_at?: DateTimeFilter<"Tags"> | Date | string
    updated_at?: DateTimeFilter<"Tags"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _avg?: TagsAvgOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
    _sum?: TagsSumOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tags"> | number
    deal_id?: IntWithAggregatesFilter<"Tags"> | number
    tag?: StringNullableListFilter<"Tags">
    created_at?: DateTimeWithAggregatesFilter<"Tags"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tags"> | Date | string
  }

  export type ConversationHistoryWhereInput = {
    AND?: ConversationHistoryWhereInput | ConversationHistoryWhereInput[]
    OR?: ConversationHistoryWhereInput[]
    NOT?: ConversationHistoryWhereInput | ConversationHistoryWhereInput[]
    id?: IntFilter<"ConversationHistory"> | number
    deal_id?: IntFilter<"ConversationHistory"> | number
    slack?: JsonFilter<"ConversationHistory">
    email?: JsonFilter<"ConversationHistory">
    deal_summary?: StringFilter<"ConversationHistory"> | string
    created_at?: DateTimeFilter<"ConversationHistory"> | Date | string
    updated_at?: DateTimeFilter<"ConversationHistory"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type ConversationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    slack?: SortOrder
    email?: SortOrder
    deal_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deal?: DealsOrderByWithRelationInput
  }

  export type ConversationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationHistoryWhereInput | ConversationHistoryWhereInput[]
    OR?: ConversationHistoryWhereInput[]
    NOT?: ConversationHistoryWhereInput | ConversationHistoryWhereInput[]
    deal_id?: IntFilter<"ConversationHistory"> | number
    slack?: JsonFilter<"ConversationHistory">
    email?: JsonFilter<"ConversationHistory">
    deal_summary?: StringFilter<"ConversationHistory"> | string
    created_at?: DateTimeFilter<"ConversationHistory"> | Date | string
    updated_at?: DateTimeFilter<"ConversationHistory"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type ConversationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    slack?: SortOrder
    email?: SortOrder
    deal_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ConversationHistoryCountOrderByAggregateInput
    _avg?: ConversationHistoryAvgOrderByAggregateInput
    _max?: ConversationHistoryMaxOrderByAggregateInput
    _min?: ConversationHistoryMinOrderByAggregateInput
    _sum?: ConversationHistorySumOrderByAggregateInput
  }

  export type ConversationHistoryScalarWhereWithAggregatesInput = {
    AND?: ConversationHistoryScalarWhereWithAggregatesInput | ConversationHistoryScalarWhereWithAggregatesInput[]
    OR?: ConversationHistoryScalarWhereWithAggregatesInput[]
    NOT?: ConversationHistoryScalarWhereWithAggregatesInput | ConversationHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConversationHistory"> | number
    deal_id?: IntWithAggregatesFilter<"ConversationHistory"> | number
    slack?: JsonWithAggregatesFilter<"ConversationHistory">
    email?: JsonWithAggregatesFilter<"ConversationHistory">
    deal_summary?: StringWithAggregatesFilter<"ConversationHistory"> | string
    created_at?: DateTimeWithAggregatesFilter<"ConversationHistory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ConversationHistory"> | Date | string
  }

  export type DealInsightsWhereInput = {
    AND?: DealInsightsWhereInput | DealInsightsWhereInput[]
    OR?: DealInsightsWhereInput[]
    NOT?: DealInsightsWhereInput | DealInsightsWhereInput[]
    id?: IntFilter<"DealInsights"> | number
    deal_id?: IntFilter<"DealInsights"> | number
    kpi_insights?: JsonFilter<"DealInsights">
    created_at?: DateTimeFilter<"DealInsights"> | Date | string
    updated_at?: DateTimeFilter<"DealInsights"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }

  export type DealInsightsOrderByWithRelationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    kpi_insights?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deal?: DealsOrderByWithRelationInput
  }

  export type DealInsightsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DealInsightsWhereInput | DealInsightsWhereInput[]
    OR?: DealInsightsWhereInput[]
    NOT?: DealInsightsWhereInput | DealInsightsWhereInput[]
    deal_id?: IntFilter<"DealInsights"> | number
    kpi_insights?: JsonFilter<"DealInsights">
    created_at?: DateTimeFilter<"DealInsights"> | Date | string
    updated_at?: DateTimeFilter<"DealInsights"> | Date | string
    deal?: XOR<DealsScalarRelationFilter, DealsWhereInput>
  }, "id">

  export type DealInsightsOrderByWithAggregationInput = {
    id?: SortOrder
    deal_id?: SortOrder
    kpi_insights?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DealInsightsCountOrderByAggregateInput
    _avg?: DealInsightsAvgOrderByAggregateInput
    _max?: DealInsightsMaxOrderByAggregateInput
    _min?: DealInsightsMinOrderByAggregateInput
    _sum?: DealInsightsSumOrderByAggregateInput
  }

  export type DealInsightsScalarWhereWithAggregatesInput = {
    AND?: DealInsightsScalarWhereWithAggregatesInput | DealInsightsScalarWhereWithAggregatesInput[]
    OR?: DealInsightsScalarWhereWithAggregatesInput[]
    NOT?: DealInsightsScalarWhereWithAggregatesInput | DealInsightsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DealInsights"> | number
    deal_id?: IntWithAggregatesFilter<"DealInsights"> | number
    kpi_insights?: JsonWithAggregatesFilter<"DealInsights">
    created_at?: DateTimeWithAggregatesFilter<"DealInsights"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DealInsights"> | Date | string
  }

  export type RiskExplanationWhereInput = {
    AND?: RiskExplanationWhereInput | RiskExplanationWhereInput[]
    OR?: RiskExplanationWhereInput[]
    NOT?: RiskExplanationWhereInput | RiskExplanationWhereInput[]
    id?: IntFilter<"RiskExplanation"> | number
    risk_id?: IntFilter<"RiskExplanation"> | number
    budget_risk_explanation?: StringFilter<"RiskExplanation"> | string
    timeline_risk_explanation?: StringFilter<"RiskExplanation"> | string
    churn_risk_explanation?: StringFilter<"RiskExplanation"> | string
    deal_risk_summary?: StringFilter<"RiskExplanation"> | string
    created_at?: DateTimeFilter<"RiskExplanation"> | Date | string
    updated_at?: DateTimeFilter<"RiskExplanation"> | Date | string
    risk?: XOR<RisksScalarRelationFilter, RisksWhereInput>
  }

  export type RiskExplanationOrderByWithRelationInput = {
    id?: SortOrder
    risk_id?: SortOrder
    budget_risk_explanation?: SortOrder
    timeline_risk_explanation?: SortOrder
    churn_risk_explanation?: SortOrder
    deal_risk_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    risk?: RisksOrderByWithRelationInput
  }

  export type RiskExplanationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RiskExplanationWhereInput | RiskExplanationWhereInput[]
    OR?: RiskExplanationWhereInput[]
    NOT?: RiskExplanationWhereInput | RiskExplanationWhereInput[]
    risk_id?: IntFilter<"RiskExplanation"> | number
    budget_risk_explanation?: StringFilter<"RiskExplanation"> | string
    timeline_risk_explanation?: StringFilter<"RiskExplanation"> | string
    churn_risk_explanation?: StringFilter<"RiskExplanation"> | string
    deal_risk_summary?: StringFilter<"RiskExplanation"> | string
    created_at?: DateTimeFilter<"RiskExplanation"> | Date | string
    updated_at?: DateTimeFilter<"RiskExplanation"> | Date | string
    risk?: XOR<RisksScalarRelationFilter, RisksWhereInput>
  }, "id">

  export type RiskExplanationOrderByWithAggregationInput = {
    id?: SortOrder
    risk_id?: SortOrder
    budget_risk_explanation?: SortOrder
    timeline_risk_explanation?: SortOrder
    churn_risk_explanation?: SortOrder
    deal_risk_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RiskExplanationCountOrderByAggregateInput
    _avg?: RiskExplanationAvgOrderByAggregateInput
    _max?: RiskExplanationMaxOrderByAggregateInput
    _min?: RiskExplanationMinOrderByAggregateInput
    _sum?: RiskExplanationSumOrderByAggregateInput
  }

  export type RiskExplanationScalarWhereWithAggregatesInput = {
    AND?: RiskExplanationScalarWhereWithAggregatesInput | RiskExplanationScalarWhereWithAggregatesInput[]
    OR?: RiskExplanationScalarWhereWithAggregatesInput[]
    NOT?: RiskExplanationScalarWhereWithAggregatesInput | RiskExplanationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RiskExplanation"> | number
    risk_id?: IntWithAggregatesFilter<"RiskExplanation"> | number
    budget_risk_explanation?: StringWithAggregatesFilter<"RiskExplanation"> | string
    timeline_risk_explanation?: StringWithAggregatesFilter<"RiskExplanation"> | string
    churn_risk_explanation?: StringWithAggregatesFilter<"RiskExplanation"> | string
    deal_risk_summary?: StringWithAggregatesFilter<"RiskExplanation"> | string
    created_at?: DateTimeWithAggregatesFilter<"RiskExplanation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RiskExplanation"> | Date | string
  }

  export type PersonalityWhereInput = {
    AND?: PersonalityWhereInput | PersonalityWhereInput[]
    OR?: PersonalityWhereInput[]
    NOT?: PersonalityWhereInput | PersonalityWhereInput[]
    id?: IntFilter<"Personality"> | number
    participant_id?: IntFilter<"Personality"> | number
    personality_traits?: JsonFilter<"Personality">
    created_at?: DateTimeFilter<"Personality"> | Date | string
    updated_at?: DateTimeFilter<"Personality"> | Date | string
    participant?: XOR<ParticipantsScalarRelationFilter, ParticipantsWhereInput>
  }

  export type PersonalityOrderByWithRelationInput = {
    id?: SortOrder
    participant_id?: SortOrder
    personality_traits?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    participant?: ParticipantsOrderByWithRelationInput
  }

  export type PersonalityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PersonalityWhereInput | PersonalityWhereInput[]
    OR?: PersonalityWhereInput[]
    NOT?: PersonalityWhereInput | PersonalityWhereInput[]
    participant_id?: IntFilter<"Personality"> | number
    personality_traits?: JsonFilter<"Personality">
    created_at?: DateTimeFilter<"Personality"> | Date | string
    updated_at?: DateTimeFilter<"Personality"> | Date | string
    participant?: XOR<ParticipantsScalarRelationFilter, ParticipantsWhereInput>
  }, "id">

  export type PersonalityOrderByWithAggregationInput = {
    id?: SortOrder
    participant_id?: SortOrder
    personality_traits?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PersonalityCountOrderByAggregateInput
    _avg?: PersonalityAvgOrderByAggregateInput
    _max?: PersonalityMaxOrderByAggregateInput
    _min?: PersonalityMinOrderByAggregateInput
    _sum?: PersonalitySumOrderByAggregateInput
  }

  export type PersonalityScalarWhereWithAggregatesInput = {
    AND?: PersonalityScalarWhereWithAggregatesInput | PersonalityScalarWhereWithAggregatesInput[]
    OR?: PersonalityScalarWhereWithAggregatesInput[]
    NOT?: PersonalityScalarWhereWithAggregatesInput | PersonalityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Personality"> | number
    participant_id?: IntWithAggregatesFilter<"Personality"> | number
    personality_traits?: JsonWithAggregatesFilter<"Personality">
    created_at?: DateTimeWithAggregatesFilter<"Personality"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Personality"> | Date | string
  }

  export type TimelineWhereInput = {
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    id?: IntFilter<"Timeline"> | number
    activity_metrics_id?: IntFilter<"Timeline"> | number
    event_date?: DateTimeFilter<"Timeline"> | Date | string
    event_type?: StringFilter<"Timeline"> | string
    event_details?: JsonFilter<"Timeline">
    created_at?: DateTimeFilter<"Timeline"> | Date | string
    updated_at?: DateTimeFilter<"Timeline"> | Date | string
    activity_metrics?: XOR<ActivityMetricsScalarRelationFilter, ActivityMetricsWhereInput>
  }

  export type TimelineOrderByWithRelationInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    event_details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    activity_metrics?: ActivityMetricsOrderByWithRelationInput
  }

  export type TimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    activity_metrics_id?: IntFilter<"Timeline"> | number
    event_date?: DateTimeFilter<"Timeline"> | Date | string
    event_type?: StringFilter<"Timeline"> | string
    event_details?: JsonFilter<"Timeline">
    created_at?: DateTimeFilter<"Timeline"> | Date | string
    updated_at?: DateTimeFilter<"Timeline"> | Date | string
    activity_metrics?: XOR<ActivityMetricsScalarRelationFilter, ActivityMetricsWhereInput>
  }, "id">

  export type TimelineOrderByWithAggregationInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    event_details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TimelineCountOrderByAggregateInput
    _avg?: TimelineAvgOrderByAggregateInput
    _max?: TimelineMaxOrderByAggregateInput
    _min?: TimelineMinOrderByAggregateInput
    _sum?: TimelineSumOrderByAggregateInput
  }

  export type TimelineScalarWhereWithAggregatesInput = {
    AND?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    OR?: TimelineScalarWhereWithAggregatesInput[]
    NOT?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Timeline"> | number
    activity_metrics_id?: IntWithAggregatesFilter<"Timeline"> | number
    event_date?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
    event_type?: StringWithAggregatesFilter<"Timeline"> | string
    event_details?: JsonWithAggregatesFilter<"Timeline">
    created_at?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
  }

  export type DealsCreateInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsUpdateInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealsCreateManyInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DealsUpdateManyMutationInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsCreateInput = {
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutParticipantsInput
    personality?: PersonalityCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUncheckedCreateInput = {
    id?: number
    deal_id: number
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
    personality?: PersonalityUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUpdateInput = {
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutParticipantsNestedInput
    personality?: PersonalityUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    personality?: PersonalityUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsCreateManyInput = {
    id?: number
    deal_id: number
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParticipantsUpdateManyMutationInput = {
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RisksCreateInput = {
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
    risk_explanation?: RiskExplanationCreateNestedManyWithoutRiskInput
    deal: DealsCreateNestedOneWithoutRisksInput
  }

  export type RisksUncheckedCreateInput = {
    id?: number
    deal_id: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
    risk_explanation?: RiskExplanationUncheckedCreateNestedManyWithoutRiskInput
  }

  export type RisksUpdateInput = {
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risk_explanation?: RiskExplanationUpdateManyWithoutRiskNestedInput
    deal?: DealsUpdateOneRequiredWithoutRisksNestedInput
  }

  export type RisksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risk_explanation?: RiskExplanationUncheckedUpdateManyWithoutRiskNestedInput
  }

  export type RisksCreateManyInput = {
    id?: number
    deal_id: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RisksUpdateManyMutationInput = {
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RisksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMetricsCreateInput = {
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    timeline?: TimelineCreateNestedManyWithoutActivity_metricsInput
    deal: DealsCreateNestedOneWithoutActivities_metricsInput
  }

  export type ActivityMetricsUncheckedCreateInput = {
    id?: number
    deal_id: number
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    timeline?: TimelineUncheckedCreateNestedManyWithoutActivity_metricsInput
  }

  export type ActivityMetricsUpdateInput = {
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: TimelineUpdateManyWithoutActivity_metricsNestedInput
    deal?: DealsUpdateOneRequiredWithoutActivities_metricsNestedInput
  }

  export type ActivityMetricsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: TimelineUncheckedUpdateManyWithoutActivity_metricsNestedInput
  }

  export type ActivityMetricsCreateManyInput = {
    id?: number
    deal_id: number
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityMetricsUpdateManyMutationInput = {
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMetricsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRecommendationCreateInput = {
    next_steps?: AiRecommendationCreatenext_stepsInput | string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutAi_recommendationsInput
  }

  export type AiRecommendationUncheckedCreateInput = {
    id?: number
    deal_id: number
    next_steps?: AiRecommendationCreatenext_stepsInput | string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiRecommendationUpdateInput = {
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutAi_recommendationsNestedInput
  }

  export type AiRecommendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRecommendationCreateManyInput = {
    id?: number
    deal_id: number
    next_steps?: AiRecommendationCreatenext_stepsInput | string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiRecommendationUpdateManyMutationInput = {
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRecommendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpCreateInput = {
    communication_type: string
    contact_address: string
    subject?: string | null
    body?: string | null
    message_id?: string | null
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutFollow_upsInput
  }

  export type FollowUpUncheckedCreateInput = {
    id?: number
    deal_id: number
    communication_type: string
    contact_address: string
    subject?: string | null
    body?: string | null
    message_id?: string | null
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowUpUpdateInput = {
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutFollow_upsNestedInput
  }

  export type FollowUpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpCreateManyInput = {
    id?: number
    deal_id: number
    communication_type: string
    contact_address: string
    subject?: string | null
    body?: string | null
    message_id?: string | null
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowUpUpdateManyMutationInput = {
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsCreateInput = {
    tag?: TagsCreatetagInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id?: number
    deal_id: number
    tag?: TagsCreatetagInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TagsUpdateInput = {
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsCreateManyInput = {
    id?: number
    deal_id: number
    tag?: TagsCreatetagInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TagsUpdateManyMutationInput = {
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationHistoryCreateInput = {
    slack: JsonNullValueInput | InputJsonValue
    email: JsonNullValueInput | InputJsonValue
    deal_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutConversation_historyInput
  }

  export type ConversationHistoryUncheckedCreateInput = {
    id?: number
    deal_id: number
    slack: JsonNullValueInput | InputJsonValue
    email: JsonNullValueInput | InputJsonValue
    deal_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConversationHistoryUpdateInput = {
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutConversation_historyNestedInput
  }

  export type ConversationHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationHistoryCreateManyInput = {
    id?: number
    deal_id: number
    slack: JsonNullValueInput | InputJsonValue
    email: JsonNullValueInput | InputJsonValue
    deal_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConversationHistoryUpdateManyMutationInput = {
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealInsightsCreateInput = {
    kpi_insights: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutDeal_insightsInput
  }

  export type DealInsightsUncheckedCreateInput = {
    id?: number
    deal_id: number
    kpi_insights: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DealInsightsUpdateInput = {
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutDeal_insightsNestedInput
  }

  export type DealInsightsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealInsightsCreateManyInput = {
    id?: number
    deal_id: number
    kpi_insights: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DealInsightsUpdateManyMutationInput = {
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealInsightsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskExplanationCreateInput = {
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    risk: RisksCreateNestedOneWithoutRisk_explanationInput
  }

  export type RiskExplanationUncheckedCreateInput = {
    id?: number
    risk_id: number
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RiskExplanationUpdateInput = {
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risk?: RisksUpdateOneRequiredWithoutRisk_explanationNestedInput
  }

  export type RiskExplanationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    risk_id?: IntFieldUpdateOperationsInput | number
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskExplanationCreateManyInput = {
    id?: number
    risk_id: number
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RiskExplanationUpdateManyMutationInput = {
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskExplanationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    risk_id?: IntFieldUpdateOperationsInput | number
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityCreateInput = {
    personality_traits: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    participant: ParticipantsCreateNestedOneWithoutPersonalityInput
  }

  export type PersonalityUncheckedCreateInput = {
    id?: number
    participant_id: number
    personality_traits: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PersonalityUpdateInput = {
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantsUpdateOneRequiredWithoutPersonalityNestedInput
  }

  export type PersonalityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant_id?: IntFieldUpdateOperationsInput | number
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityCreateManyInput = {
    id?: number
    participant_id: number
    personality_traits: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PersonalityUpdateManyMutationInput = {
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant_id?: IntFieldUpdateOperationsInput | number
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineCreateInput = {
    event_date: Date | string
    event_type: string
    event_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activity_metrics: ActivityMetricsCreateNestedOneWithoutTimelineInput
  }

  export type TimelineUncheckedCreateInput = {
    id?: number
    activity_metrics_id: number
    event_date: Date | string
    event_type: string
    event_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TimelineUpdateInput = {
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activity_metrics?: ActivityMetricsUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type TimelineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_metrics_id?: IntFieldUpdateOperationsInput | number
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineCreateManyInput = {
    id?: number
    activity_metrics_id: number
    event_date: Date | string
    event_type: string
    event_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TimelineUpdateManyMutationInput = {
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_metrics_id?: IntFieldUpdateOperationsInput | number
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParticipantsListRelationFilter = {
    every?: ParticipantsWhereInput
    some?: ParticipantsWhereInput
    none?: ParticipantsWhereInput
  }

  export type RisksListRelationFilter = {
    every?: RisksWhereInput
    some?: RisksWhereInput
    none?: RisksWhereInput
  }

  export type ActivityMetricsListRelationFilter = {
    every?: ActivityMetricsWhereInput
    some?: ActivityMetricsWhereInput
    none?: ActivityMetricsWhereInput
  }

  export type AiRecommendationListRelationFilter = {
    every?: AiRecommendationWhereInput
    some?: AiRecommendationWhereInput
    none?: AiRecommendationWhereInput
  }

  export type FollowUpListRelationFilter = {
    every?: FollowUpWhereInput
    some?: FollowUpWhereInput
    none?: FollowUpWhereInput
  }

  export type TagsListRelationFilter = {
    every?: TagsWhereInput
    some?: TagsWhereInput
    none?: TagsWhereInput
  }

  export type ConversationHistoryListRelationFilter = {
    every?: ConversationHistoryWhereInput
    some?: ConversationHistoryWhereInput
    none?: ConversationHistoryWhereInput
  }

  export type DealInsightsListRelationFilter = {
    every?: DealInsightsWhereInput
    some?: DealInsightsWhereInput
    none?: DealInsightsWhereInput
  }

  export type ParticipantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RisksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityMetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowUpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealInsightsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealsCountOrderByAggregateInput = {
    id?: SortOrder
    deal_name?: SortOrder
    company_name?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    deal_amount?: SortOrder
    expected_close_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DealsAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_amount?: SortOrder
  }

  export type DealsMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_name?: SortOrder
    company_name?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    deal_amount?: SortOrder
    expected_close_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DealsMinOrderByAggregateInput = {
    id?: SortOrder
    deal_name?: SortOrder
    company_name?: SortOrder
    stage?: SortOrder
    status?: SortOrder
    deal_amount?: SortOrder
    expected_close_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DealsSumOrderByAggregateInput = {
    id?: SortOrder
    deal_amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DealsScalarRelationFilter = {
    is?: DealsWhereInput
    isNot?: DealsWhereInput
  }

  export type PersonalityListRelationFilter = {
    every?: PersonalityWhereInput
    some?: PersonalityWhereInput
    none?: PersonalityWhereInput
  }

  export type PersonalityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantsCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    prospect_name?: SortOrder
    email?: SortOrder
    slack_id?: SortOrder
    role?: SortOrder
    sentiment?: SortOrder
    communication_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ParticipantsAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_score?: SortOrder
  }

  export type ParticipantsMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    prospect_name?: SortOrder
    email?: SortOrder
    slack_id?: SortOrder
    role?: SortOrder
    sentiment?: SortOrder
    communication_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ParticipantsMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    prospect_name?: SortOrder
    email?: SortOrder
    slack_id?: SortOrder
    role?: SortOrder
    sentiment?: SortOrder
    communication_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ParticipantsSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_score?: SortOrder
  }

  export type RiskExplanationListRelationFilter = {
    every?: RiskExplanationWhereInput
    some?: RiskExplanationWhereInput
    none?: RiskExplanationWhereInput
  }

  export type RiskExplanationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RisksCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RisksAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
  }

  export type RisksMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RisksMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RisksSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_risk_score?: SortOrder
    churn_risk_score?: SortOrder
    timeline_risk_score?: SortOrder
    budget_risk_score?: SortOrder
  }

  export type TimelineListRelationFilter = {
    every?: TimelineWhereInput
    some?: TimelineWhereInput
    none?: TimelineWhereInput
  }

  export type TimelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
    engagement_trend?: SortOrder
    last_communication_source?: SortOrder
    last_communication_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityMetricsAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
  }

  export type ActivityMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
    engagement_trend?: SortOrder
    last_communication_source?: SortOrder
    last_communication_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
    engagement_trend?: SortOrder
    last_communication_source?: SortOrder
    last_communication_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ActivityMetricsSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    message_count?: SortOrder
    prospect_response_time?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AiRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    next_steps?: SortOrder
    escalation_triggers?: SortOrder
    deal_acceleration_tactics?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AiRecommendationAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type AiRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    escalation_triggers?: SortOrder
    deal_acceleration_tactics?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AiRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    escalation_triggers?: SortOrder
    deal_acceleration_tactics?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AiRecommendationSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FollowUpCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_type?: SortOrder
    contact_address?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    message_id?: SortOrder
    scheduled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FollowUpAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type FollowUpMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_type?: SortOrder
    contact_address?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    message_id?: SortOrder
    scheduled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FollowUpMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    communication_type?: SortOrder
    contact_address?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    message_id?: SortOrder
    scheduled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FollowUpSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TagsAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TagsSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConversationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    slack?: SortOrder
    email?: SortOrder
    deal_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConversationHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type ConversationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConversationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    deal_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConversationHistorySumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DealInsightsCountOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    kpi_insights?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DealInsightsAvgOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type DealInsightsMaxOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DealInsightsMinOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DealInsightsSumOrderByAggregateInput = {
    id?: SortOrder
    deal_id?: SortOrder
  }

  export type RisksScalarRelationFilter = {
    is?: RisksWhereInput
    isNot?: RisksWhereInput
  }

  export type RiskExplanationCountOrderByAggregateInput = {
    id?: SortOrder
    risk_id?: SortOrder
    budget_risk_explanation?: SortOrder
    timeline_risk_explanation?: SortOrder
    churn_risk_explanation?: SortOrder
    deal_risk_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RiskExplanationAvgOrderByAggregateInput = {
    id?: SortOrder
    risk_id?: SortOrder
  }

  export type RiskExplanationMaxOrderByAggregateInput = {
    id?: SortOrder
    risk_id?: SortOrder
    budget_risk_explanation?: SortOrder
    timeline_risk_explanation?: SortOrder
    churn_risk_explanation?: SortOrder
    deal_risk_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RiskExplanationMinOrderByAggregateInput = {
    id?: SortOrder
    risk_id?: SortOrder
    budget_risk_explanation?: SortOrder
    timeline_risk_explanation?: SortOrder
    churn_risk_explanation?: SortOrder
    deal_risk_summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RiskExplanationSumOrderByAggregateInput = {
    id?: SortOrder
    risk_id?: SortOrder
  }

  export type ParticipantsScalarRelationFilter = {
    is?: ParticipantsWhereInput
    isNot?: ParticipantsWhereInput
  }

  export type PersonalityCountOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    personality_traits?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalityAvgOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
  }

  export type PersonalityMaxOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalityMinOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalitySumOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
  }

  export type ActivityMetricsScalarRelationFilter = {
    is?: ActivityMetricsWhereInput
    isNot?: ActivityMetricsWhereInput
  }

  export type TimelineCountOrderByAggregateInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    event_details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TimelineAvgOrderByAggregateInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
  }

  export type TimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TimelineMinOrderByAggregateInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
    event_date?: SortOrder
    event_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TimelineSumOrderByAggregateInput = {
    id?: SortOrder
    activity_metrics_id?: SortOrder
  }

  export type ParticipantsCreateNestedManyWithoutDealInput = {
    create?: XOR<ParticipantsCreateWithoutDealInput, ParticipantsUncheckedCreateWithoutDealInput> | ParticipantsCreateWithoutDealInput[] | ParticipantsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutDealInput | ParticipantsCreateOrConnectWithoutDealInput[]
    createMany?: ParticipantsCreateManyDealInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type RisksCreateNestedManyWithoutDealInput = {
    create?: XOR<RisksCreateWithoutDealInput, RisksUncheckedCreateWithoutDealInput> | RisksCreateWithoutDealInput[] | RisksUncheckedCreateWithoutDealInput[]
    connectOrCreate?: RisksCreateOrConnectWithoutDealInput | RisksCreateOrConnectWithoutDealInput[]
    createMany?: RisksCreateManyDealInputEnvelope
    connect?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
  }

  export type ActivityMetricsCreateNestedManyWithoutDealInput = {
    create?: XOR<ActivityMetricsCreateWithoutDealInput, ActivityMetricsUncheckedCreateWithoutDealInput> | ActivityMetricsCreateWithoutDealInput[] | ActivityMetricsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityMetricsCreateOrConnectWithoutDealInput | ActivityMetricsCreateOrConnectWithoutDealInput[]
    createMany?: ActivityMetricsCreateManyDealInputEnvelope
    connect?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
  }

  export type AiRecommendationCreateNestedManyWithoutDealInput = {
    create?: XOR<AiRecommendationCreateWithoutDealInput, AiRecommendationUncheckedCreateWithoutDealInput> | AiRecommendationCreateWithoutDealInput[] | AiRecommendationUncheckedCreateWithoutDealInput[]
    connectOrCreate?: AiRecommendationCreateOrConnectWithoutDealInput | AiRecommendationCreateOrConnectWithoutDealInput[]
    createMany?: AiRecommendationCreateManyDealInputEnvelope
    connect?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
  }

  export type FollowUpCreateNestedManyWithoutDealInput = {
    create?: XOR<FollowUpCreateWithoutDealInput, FollowUpUncheckedCreateWithoutDealInput> | FollowUpCreateWithoutDealInput[] | FollowUpUncheckedCreateWithoutDealInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutDealInput | FollowUpCreateOrConnectWithoutDealInput[]
    createMany?: FollowUpCreateManyDealInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type TagsCreateNestedManyWithoutDealInput = {
    create?: XOR<TagsCreateWithoutDealInput, TagsUncheckedCreateWithoutDealInput> | TagsCreateWithoutDealInput[] | TagsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutDealInput | TagsCreateOrConnectWithoutDealInput[]
    createMany?: TagsCreateManyDealInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type ConversationHistoryCreateNestedManyWithoutDealInput = {
    create?: XOR<ConversationHistoryCreateWithoutDealInput, ConversationHistoryUncheckedCreateWithoutDealInput> | ConversationHistoryCreateWithoutDealInput[] | ConversationHistoryUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ConversationHistoryCreateOrConnectWithoutDealInput | ConversationHistoryCreateOrConnectWithoutDealInput[]
    createMany?: ConversationHistoryCreateManyDealInputEnvelope
    connect?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
  }

  export type DealInsightsCreateNestedManyWithoutDealInput = {
    create?: XOR<DealInsightsCreateWithoutDealInput, DealInsightsUncheckedCreateWithoutDealInput> | DealInsightsCreateWithoutDealInput[] | DealInsightsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealInsightsCreateOrConnectWithoutDealInput | DealInsightsCreateOrConnectWithoutDealInput[]
    createMany?: DealInsightsCreateManyDealInputEnvelope
    connect?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
  }

  export type ParticipantsUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<ParticipantsCreateWithoutDealInput, ParticipantsUncheckedCreateWithoutDealInput> | ParticipantsCreateWithoutDealInput[] | ParticipantsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutDealInput | ParticipantsCreateOrConnectWithoutDealInput[]
    createMany?: ParticipantsCreateManyDealInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type RisksUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<RisksCreateWithoutDealInput, RisksUncheckedCreateWithoutDealInput> | RisksCreateWithoutDealInput[] | RisksUncheckedCreateWithoutDealInput[]
    connectOrCreate?: RisksCreateOrConnectWithoutDealInput | RisksCreateOrConnectWithoutDealInput[]
    createMany?: RisksCreateManyDealInputEnvelope
    connect?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
  }

  export type ActivityMetricsUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<ActivityMetricsCreateWithoutDealInput, ActivityMetricsUncheckedCreateWithoutDealInput> | ActivityMetricsCreateWithoutDealInput[] | ActivityMetricsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityMetricsCreateOrConnectWithoutDealInput | ActivityMetricsCreateOrConnectWithoutDealInput[]
    createMany?: ActivityMetricsCreateManyDealInputEnvelope
    connect?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
  }

  export type AiRecommendationUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<AiRecommendationCreateWithoutDealInput, AiRecommendationUncheckedCreateWithoutDealInput> | AiRecommendationCreateWithoutDealInput[] | AiRecommendationUncheckedCreateWithoutDealInput[]
    connectOrCreate?: AiRecommendationCreateOrConnectWithoutDealInput | AiRecommendationCreateOrConnectWithoutDealInput[]
    createMany?: AiRecommendationCreateManyDealInputEnvelope
    connect?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
  }

  export type FollowUpUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<FollowUpCreateWithoutDealInput, FollowUpUncheckedCreateWithoutDealInput> | FollowUpCreateWithoutDealInput[] | FollowUpUncheckedCreateWithoutDealInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutDealInput | FollowUpCreateOrConnectWithoutDealInput[]
    createMany?: FollowUpCreateManyDealInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type TagsUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<TagsCreateWithoutDealInput, TagsUncheckedCreateWithoutDealInput> | TagsCreateWithoutDealInput[] | TagsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutDealInput | TagsCreateOrConnectWithoutDealInput[]
    createMany?: TagsCreateManyDealInputEnvelope
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
  }

  export type ConversationHistoryUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<ConversationHistoryCreateWithoutDealInput, ConversationHistoryUncheckedCreateWithoutDealInput> | ConversationHistoryCreateWithoutDealInput[] | ConversationHistoryUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ConversationHistoryCreateOrConnectWithoutDealInput | ConversationHistoryCreateOrConnectWithoutDealInput[]
    createMany?: ConversationHistoryCreateManyDealInputEnvelope
    connect?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
  }

  export type DealInsightsUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<DealInsightsCreateWithoutDealInput, DealInsightsUncheckedCreateWithoutDealInput> | DealInsightsCreateWithoutDealInput[] | DealInsightsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealInsightsCreateOrConnectWithoutDealInput | DealInsightsCreateOrConnectWithoutDealInput[]
    createMany?: DealInsightsCreateManyDealInputEnvelope
    connect?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParticipantsUpdateManyWithoutDealNestedInput = {
    create?: XOR<ParticipantsCreateWithoutDealInput, ParticipantsUncheckedCreateWithoutDealInput> | ParticipantsCreateWithoutDealInput[] | ParticipantsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutDealInput | ParticipantsCreateOrConnectWithoutDealInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutDealInput | ParticipantsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ParticipantsCreateManyDealInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutDealInput | ParticipantsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutDealInput | ParticipantsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type RisksUpdateManyWithoutDealNestedInput = {
    create?: XOR<RisksCreateWithoutDealInput, RisksUncheckedCreateWithoutDealInput> | RisksCreateWithoutDealInput[] | RisksUncheckedCreateWithoutDealInput[]
    connectOrCreate?: RisksCreateOrConnectWithoutDealInput | RisksCreateOrConnectWithoutDealInput[]
    upsert?: RisksUpsertWithWhereUniqueWithoutDealInput | RisksUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: RisksCreateManyDealInputEnvelope
    set?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    disconnect?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    delete?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    connect?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    update?: RisksUpdateWithWhereUniqueWithoutDealInput | RisksUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: RisksUpdateManyWithWhereWithoutDealInput | RisksUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: RisksScalarWhereInput | RisksScalarWhereInput[]
  }

  export type ActivityMetricsUpdateManyWithoutDealNestedInput = {
    create?: XOR<ActivityMetricsCreateWithoutDealInput, ActivityMetricsUncheckedCreateWithoutDealInput> | ActivityMetricsCreateWithoutDealInput[] | ActivityMetricsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityMetricsCreateOrConnectWithoutDealInput | ActivityMetricsCreateOrConnectWithoutDealInput[]
    upsert?: ActivityMetricsUpsertWithWhereUniqueWithoutDealInput | ActivityMetricsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ActivityMetricsCreateManyDealInputEnvelope
    set?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    disconnect?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    delete?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    connect?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    update?: ActivityMetricsUpdateWithWhereUniqueWithoutDealInput | ActivityMetricsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ActivityMetricsUpdateManyWithWhereWithoutDealInput | ActivityMetricsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ActivityMetricsScalarWhereInput | ActivityMetricsScalarWhereInput[]
  }

  export type AiRecommendationUpdateManyWithoutDealNestedInput = {
    create?: XOR<AiRecommendationCreateWithoutDealInput, AiRecommendationUncheckedCreateWithoutDealInput> | AiRecommendationCreateWithoutDealInput[] | AiRecommendationUncheckedCreateWithoutDealInput[]
    connectOrCreate?: AiRecommendationCreateOrConnectWithoutDealInput | AiRecommendationCreateOrConnectWithoutDealInput[]
    upsert?: AiRecommendationUpsertWithWhereUniqueWithoutDealInput | AiRecommendationUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: AiRecommendationCreateManyDealInputEnvelope
    set?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    disconnect?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    delete?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    connect?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    update?: AiRecommendationUpdateWithWhereUniqueWithoutDealInput | AiRecommendationUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: AiRecommendationUpdateManyWithWhereWithoutDealInput | AiRecommendationUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: AiRecommendationScalarWhereInput | AiRecommendationScalarWhereInput[]
  }

  export type FollowUpUpdateManyWithoutDealNestedInput = {
    create?: XOR<FollowUpCreateWithoutDealInput, FollowUpUncheckedCreateWithoutDealInput> | FollowUpCreateWithoutDealInput[] | FollowUpUncheckedCreateWithoutDealInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutDealInput | FollowUpCreateOrConnectWithoutDealInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutDealInput | FollowUpUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: FollowUpCreateManyDealInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutDealInput | FollowUpUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutDealInput | FollowUpUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type TagsUpdateManyWithoutDealNestedInput = {
    create?: XOR<TagsCreateWithoutDealInput, TagsUncheckedCreateWithoutDealInput> | TagsCreateWithoutDealInput[] | TagsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutDealInput | TagsCreateOrConnectWithoutDealInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutDealInput | TagsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: TagsCreateManyDealInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutDealInput | TagsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutDealInput | TagsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type ConversationHistoryUpdateManyWithoutDealNestedInput = {
    create?: XOR<ConversationHistoryCreateWithoutDealInput, ConversationHistoryUncheckedCreateWithoutDealInput> | ConversationHistoryCreateWithoutDealInput[] | ConversationHistoryUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ConversationHistoryCreateOrConnectWithoutDealInput | ConversationHistoryCreateOrConnectWithoutDealInput[]
    upsert?: ConversationHistoryUpsertWithWhereUniqueWithoutDealInput | ConversationHistoryUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ConversationHistoryCreateManyDealInputEnvelope
    set?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    disconnect?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    delete?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    connect?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    update?: ConversationHistoryUpdateWithWhereUniqueWithoutDealInput | ConversationHistoryUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ConversationHistoryUpdateManyWithWhereWithoutDealInput | ConversationHistoryUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ConversationHistoryScalarWhereInput | ConversationHistoryScalarWhereInput[]
  }

  export type DealInsightsUpdateManyWithoutDealNestedInput = {
    create?: XOR<DealInsightsCreateWithoutDealInput, DealInsightsUncheckedCreateWithoutDealInput> | DealInsightsCreateWithoutDealInput[] | DealInsightsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealInsightsCreateOrConnectWithoutDealInput | DealInsightsCreateOrConnectWithoutDealInput[]
    upsert?: DealInsightsUpsertWithWhereUniqueWithoutDealInput | DealInsightsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: DealInsightsCreateManyDealInputEnvelope
    set?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    disconnect?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    delete?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    connect?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    update?: DealInsightsUpdateWithWhereUniqueWithoutDealInput | DealInsightsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: DealInsightsUpdateManyWithWhereWithoutDealInput | DealInsightsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: DealInsightsScalarWhereInput | DealInsightsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipantsUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<ParticipantsCreateWithoutDealInput, ParticipantsUncheckedCreateWithoutDealInput> | ParticipantsCreateWithoutDealInput[] | ParticipantsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutDealInput | ParticipantsCreateOrConnectWithoutDealInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutDealInput | ParticipantsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ParticipantsCreateManyDealInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutDealInput | ParticipantsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutDealInput | ParticipantsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type RisksUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<RisksCreateWithoutDealInput, RisksUncheckedCreateWithoutDealInput> | RisksCreateWithoutDealInput[] | RisksUncheckedCreateWithoutDealInput[]
    connectOrCreate?: RisksCreateOrConnectWithoutDealInput | RisksCreateOrConnectWithoutDealInput[]
    upsert?: RisksUpsertWithWhereUniqueWithoutDealInput | RisksUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: RisksCreateManyDealInputEnvelope
    set?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    disconnect?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    delete?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    connect?: RisksWhereUniqueInput | RisksWhereUniqueInput[]
    update?: RisksUpdateWithWhereUniqueWithoutDealInput | RisksUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: RisksUpdateManyWithWhereWithoutDealInput | RisksUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: RisksScalarWhereInput | RisksScalarWhereInput[]
  }

  export type ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<ActivityMetricsCreateWithoutDealInput, ActivityMetricsUncheckedCreateWithoutDealInput> | ActivityMetricsCreateWithoutDealInput[] | ActivityMetricsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityMetricsCreateOrConnectWithoutDealInput | ActivityMetricsCreateOrConnectWithoutDealInput[]
    upsert?: ActivityMetricsUpsertWithWhereUniqueWithoutDealInput | ActivityMetricsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ActivityMetricsCreateManyDealInputEnvelope
    set?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    disconnect?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    delete?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    connect?: ActivityMetricsWhereUniqueInput | ActivityMetricsWhereUniqueInput[]
    update?: ActivityMetricsUpdateWithWhereUniqueWithoutDealInput | ActivityMetricsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ActivityMetricsUpdateManyWithWhereWithoutDealInput | ActivityMetricsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ActivityMetricsScalarWhereInput | ActivityMetricsScalarWhereInput[]
  }

  export type AiRecommendationUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<AiRecommendationCreateWithoutDealInput, AiRecommendationUncheckedCreateWithoutDealInput> | AiRecommendationCreateWithoutDealInput[] | AiRecommendationUncheckedCreateWithoutDealInput[]
    connectOrCreate?: AiRecommendationCreateOrConnectWithoutDealInput | AiRecommendationCreateOrConnectWithoutDealInput[]
    upsert?: AiRecommendationUpsertWithWhereUniqueWithoutDealInput | AiRecommendationUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: AiRecommendationCreateManyDealInputEnvelope
    set?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    disconnect?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    delete?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    connect?: AiRecommendationWhereUniqueInput | AiRecommendationWhereUniqueInput[]
    update?: AiRecommendationUpdateWithWhereUniqueWithoutDealInput | AiRecommendationUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: AiRecommendationUpdateManyWithWhereWithoutDealInput | AiRecommendationUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: AiRecommendationScalarWhereInput | AiRecommendationScalarWhereInput[]
  }

  export type FollowUpUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<FollowUpCreateWithoutDealInput, FollowUpUncheckedCreateWithoutDealInput> | FollowUpCreateWithoutDealInput[] | FollowUpUncheckedCreateWithoutDealInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutDealInput | FollowUpCreateOrConnectWithoutDealInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutDealInput | FollowUpUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: FollowUpCreateManyDealInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutDealInput | FollowUpUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutDealInput | FollowUpUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type TagsUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<TagsCreateWithoutDealInput, TagsUncheckedCreateWithoutDealInput> | TagsCreateWithoutDealInput[] | TagsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: TagsCreateOrConnectWithoutDealInput | TagsCreateOrConnectWithoutDealInput[]
    upsert?: TagsUpsertWithWhereUniqueWithoutDealInput | TagsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: TagsCreateManyDealInputEnvelope
    set?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    disconnect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    delete?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    connect?: TagsWhereUniqueInput | TagsWhereUniqueInput[]
    update?: TagsUpdateWithWhereUniqueWithoutDealInput | TagsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: TagsUpdateManyWithWhereWithoutDealInput | TagsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: TagsScalarWhereInput | TagsScalarWhereInput[]
  }

  export type ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<ConversationHistoryCreateWithoutDealInput, ConversationHistoryUncheckedCreateWithoutDealInput> | ConversationHistoryCreateWithoutDealInput[] | ConversationHistoryUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ConversationHistoryCreateOrConnectWithoutDealInput | ConversationHistoryCreateOrConnectWithoutDealInput[]
    upsert?: ConversationHistoryUpsertWithWhereUniqueWithoutDealInput | ConversationHistoryUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ConversationHistoryCreateManyDealInputEnvelope
    set?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    disconnect?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    delete?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    connect?: ConversationHistoryWhereUniqueInput | ConversationHistoryWhereUniqueInput[]
    update?: ConversationHistoryUpdateWithWhereUniqueWithoutDealInput | ConversationHistoryUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ConversationHistoryUpdateManyWithWhereWithoutDealInput | ConversationHistoryUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ConversationHistoryScalarWhereInput | ConversationHistoryScalarWhereInput[]
  }

  export type DealInsightsUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<DealInsightsCreateWithoutDealInput, DealInsightsUncheckedCreateWithoutDealInput> | DealInsightsCreateWithoutDealInput[] | DealInsightsUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealInsightsCreateOrConnectWithoutDealInput | DealInsightsCreateOrConnectWithoutDealInput[]
    upsert?: DealInsightsUpsertWithWhereUniqueWithoutDealInput | DealInsightsUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: DealInsightsCreateManyDealInputEnvelope
    set?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    disconnect?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    delete?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    connect?: DealInsightsWhereUniqueInput | DealInsightsWhereUniqueInput[]
    update?: DealInsightsUpdateWithWhereUniqueWithoutDealInput | DealInsightsUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: DealInsightsUpdateManyWithWhereWithoutDealInput | DealInsightsUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: DealInsightsScalarWhereInput | DealInsightsScalarWhereInput[]
  }

  export type DealsCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<DealsCreateWithoutParticipantsInput, DealsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutParticipantsInput
    connect?: DealsWhereUniqueInput
  }

  export type PersonalityCreateNestedManyWithoutParticipantInput = {
    create?: XOR<PersonalityCreateWithoutParticipantInput, PersonalityUncheckedCreateWithoutParticipantInput> | PersonalityCreateWithoutParticipantInput[] | PersonalityUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PersonalityCreateOrConnectWithoutParticipantInput | PersonalityCreateOrConnectWithoutParticipantInput[]
    createMany?: PersonalityCreateManyParticipantInputEnvelope
    connect?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
  }

  export type PersonalityUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<PersonalityCreateWithoutParticipantInput, PersonalityUncheckedCreateWithoutParticipantInput> | PersonalityCreateWithoutParticipantInput[] | PersonalityUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PersonalityCreateOrConnectWithoutParticipantInput | PersonalityCreateOrConnectWithoutParticipantInput[]
    createMany?: PersonalityCreateManyParticipantInputEnvelope
    connect?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
  }

  export type DealsUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<DealsCreateWithoutParticipantsInput, DealsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutParticipantsInput
    upsert?: DealsUpsertWithoutParticipantsInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutParticipantsInput, DealsUpdateWithoutParticipantsInput>, DealsUncheckedUpdateWithoutParticipantsInput>
  }

  export type PersonalityUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<PersonalityCreateWithoutParticipantInput, PersonalityUncheckedCreateWithoutParticipantInput> | PersonalityCreateWithoutParticipantInput[] | PersonalityUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PersonalityCreateOrConnectWithoutParticipantInput | PersonalityCreateOrConnectWithoutParticipantInput[]
    upsert?: PersonalityUpsertWithWhereUniqueWithoutParticipantInput | PersonalityUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: PersonalityCreateManyParticipantInputEnvelope
    set?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    disconnect?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    delete?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    connect?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    update?: PersonalityUpdateWithWhereUniqueWithoutParticipantInput | PersonalityUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: PersonalityUpdateManyWithWhereWithoutParticipantInput | PersonalityUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: PersonalityScalarWhereInput | PersonalityScalarWhereInput[]
  }

  export type PersonalityUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<PersonalityCreateWithoutParticipantInput, PersonalityUncheckedCreateWithoutParticipantInput> | PersonalityCreateWithoutParticipantInput[] | PersonalityUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PersonalityCreateOrConnectWithoutParticipantInput | PersonalityCreateOrConnectWithoutParticipantInput[]
    upsert?: PersonalityUpsertWithWhereUniqueWithoutParticipantInput | PersonalityUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: PersonalityCreateManyParticipantInputEnvelope
    set?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    disconnect?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    delete?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    connect?: PersonalityWhereUniqueInput | PersonalityWhereUniqueInput[]
    update?: PersonalityUpdateWithWhereUniqueWithoutParticipantInput | PersonalityUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: PersonalityUpdateManyWithWhereWithoutParticipantInput | PersonalityUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: PersonalityScalarWhereInput | PersonalityScalarWhereInput[]
  }

  export type RiskExplanationCreateNestedManyWithoutRiskInput = {
    create?: XOR<RiskExplanationCreateWithoutRiskInput, RiskExplanationUncheckedCreateWithoutRiskInput> | RiskExplanationCreateWithoutRiskInput[] | RiskExplanationUncheckedCreateWithoutRiskInput[]
    connectOrCreate?: RiskExplanationCreateOrConnectWithoutRiskInput | RiskExplanationCreateOrConnectWithoutRiskInput[]
    createMany?: RiskExplanationCreateManyRiskInputEnvelope
    connect?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
  }

  export type DealsCreateNestedOneWithoutRisksInput = {
    create?: XOR<DealsCreateWithoutRisksInput, DealsUncheckedCreateWithoutRisksInput>
    connectOrCreate?: DealsCreateOrConnectWithoutRisksInput
    connect?: DealsWhereUniqueInput
  }

  export type RiskExplanationUncheckedCreateNestedManyWithoutRiskInput = {
    create?: XOR<RiskExplanationCreateWithoutRiskInput, RiskExplanationUncheckedCreateWithoutRiskInput> | RiskExplanationCreateWithoutRiskInput[] | RiskExplanationUncheckedCreateWithoutRiskInput[]
    connectOrCreate?: RiskExplanationCreateOrConnectWithoutRiskInput | RiskExplanationCreateOrConnectWithoutRiskInput[]
    createMany?: RiskExplanationCreateManyRiskInputEnvelope
    connect?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
  }

  export type RiskExplanationUpdateManyWithoutRiskNestedInput = {
    create?: XOR<RiskExplanationCreateWithoutRiskInput, RiskExplanationUncheckedCreateWithoutRiskInput> | RiskExplanationCreateWithoutRiskInput[] | RiskExplanationUncheckedCreateWithoutRiskInput[]
    connectOrCreate?: RiskExplanationCreateOrConnectWithoutRiskInput | RiskExplanationCreateOrConnectWithoutRiskInput[]
    upsert?: RiskExplanationUpsertWithWhereUniqueWithoutRiskInput | RiskExplanationUpsertWithWhereUniqueWithoutRiskInput[]
    createMany?: RiskExplanationCreateManyRiskInputEnvelope
    set?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    disconnect?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    delete?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    connect?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    update?: RiskExplanationUpdateWithWhereUniqueWithoutRiskInput | RiskExplanationUpdateWithWhereUniqueWithoutRiskInput[]
    updateMany?: RiskExplanationUpdateManyWithWhereWithoutRiskInput | RiskExplanationUpdateManyWithWhereWithoutRiskInput[]
    deleteMany?: RiskExplanationScalarWhereInput | RiskExplanationScalarWhereInput[]
  }

  export type DealsUpdateOneRequiredWithoutRisksNestedInput = {
    create?: XOR<DealsCreateWithoutRisksInput, DealsUncheckedCreateWithoutRisksInput>
    connectOrCreate?: DealsCreateOrConnectWithoutRisksInput
    upsert?: DealsUpsertWithoutRisksInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutRisksInput, DealsUpdateWithoutRisksInput>, DealsUncheckedUpdateWithoutRisksInput>
  }

  export type RiskExplanationUncheckedUpdateManyWithoutRiskNestedInput = {
    create?: XOR<RiskExplanationCreateWithoutRiskInput, RiskExplanationUncheckedCreateWithoutRiskInput> | RiskExplanationCreateWithoutRiskInput[] | RiskExplanationUncheckedCreateWithoutRiskInput[]
    connectOrCreate?: RiskExplanationCreateOrConnectWithoutRiskInput | RiskExplanationCreateOrConnectWithoutRiskInput[]
    upsert?: RiskExplanationUpsertWithWhereUniqueWithoutRiskInput | RiskExplanationUpsertWithWhereUniqueWithoutRiskInput[]
    createMany?: RiskExplanationCreateManyRiskInputEnvelope
    set?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    disconnect?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    delete?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    connect?: RiskExplanationWhereUniqueInput | RiskExplanationWhereUniqueInput[]
    update?: RiskExplanationUpdateWithWhereUniqueWithoutRiskInput | RiskExplanationUpdateWithWhereUniqueWithoutRiskInput[]
    updateMany?: RiskExplanationUpdateManyWithWhereWithoutRiskInput | RiskExplanationUpdateManyWithWhereWithoutRiskInput[]
    deleteMany?: RiskExplanationScalarWhereInput | RiskExplanationScalarWhereInput[]
  }

  export type TimelineCreateNestedManyWithoutActivity_metricsInput = {
    create?: XOR<TimelineCreateWithoutActivity_metricsInput, TimelineUncheckedCreateWithoutActivity_metricsInput> | TimelineCreateWithoutActivity_metricsInput[] | TimelineUncheckedCreateWithoutActivity_metricsInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutActivity_metricsInput | TimelineCreateOrConnectWithoutActivity_metricsInput[]
    createMany?: TimelineCreateManyActivity_metricsInputEnvelope
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
  }

  export type DealsCreateNestedOneWithoutActivities_metricsInput = {
    create?: XOR<DealsCreateWithoutActivities_metricsInput, DealsUncheckedCreateWithoutActivities_metricsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutActivities_metricsInput
    connect?: DealsWhereUniqueInput
  }

  export type TimelineUncheckedCreateNestedManyWithoutActivity_metricsInput = {
    create?: XOR<TimelineCreateWithoutActivity_metricsInput, TimelineUncheckedCreateWithoutActivity_metricsInput> | TimelineCreateWithoutActivity_metricsInput[] | TimelineUncheckedCreateWithoutActivity_metricsInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutActivity_metricsInput | TimelineCreateOrConnectWithoutActivity_metricsInput[]
    createMany?: TimelineCreateManyActivity_metricsInputEnvelope
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
  }

  export type TimelineUpdateManyWithoutActivity_metricsNestedInput = {
    create?: XOR<TimelineCreateWithoutActivity_metricsInput, TimelineUncheckedCreateWithoutActivity_metricsInput> | TimelineCreateWithoutActivity_metricsInput[] | TimelineUncheckedCreateWithoutActivity_metricsInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutActivity_metricsInput | TimelineCreateOrConnectWithoutActivity_metricsInput[]
    upsert?: TimelineUpsertWithWhereUniqueWithoutActivity_metricsInput | TimelineUpsertWithWhereUniqueWithoutActivity_metricsInput[]
    createMany?: TimelineCreateManyActivity_metricsInputEnvelope
    set?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    disconnect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    delete?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    update?: TimelineUpdateWithWhereUniqueWithoutActivity_metricsInput | TimelineUpdateWithWhereUniqueWithoutActivity_metricsInput[]
    updateMany?: TimelineUpdateManyWithWhereWithoutActivity_metricsInput | TimelineUpdateManyWithWhereWithoutActivity_metricsInput[]
    deleteMany?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
  }

  export type DealsUpdateOneRequiredWithoutActivities_metricsNestedInput = {
    create?: XOR<DealsCreateWithoutActivities_metricsInput, DealsUncheckedCreateWithoutActivities_metricsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutActivities_metricsInput
    upsert?: DealsUpsertWithoutActivities_metricsInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutActivities_metricsInput, DealsUpdateWithoutActivities_metricsInput>, DealsUncheckedUpdateWithoutActivities_metricsInput>
  }

  export type TimelineUncheckedUpdateManyWithoutActivity_metricsNestedInput = {
    create?: XOR<TimelineCreateWithoutActivity_metricsInput, TimelineUncheckedCreateWithoutActivity_metricsInput> | TimelineCreateWithoutActivity_metricsInput[] | TimelineUncheckedCreateWithoutActivity_metricsInput[]
    connectOrCreate?: TimelineCreateOrConnectWithoutActivity_metricsInput | TimelineCreateOrConnectWithoutActivity_metricsInput[]
    upsert?: TimelineUpsertWithWhereUniqueWithoutActivity_metricsInput | TimelineUpsertWithWhereUniqueWithoutActivity_metricsInput[]
    createMany?: TimelineCreateManyActivity_metricsInputEnvelope
    set?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    disconnect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    delete?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    connect?: TimelineWhereUniqueInput | TimelineWhereUniqueInput[]
    update?: TimelineUpdateWithWhereUniqueWithoutActivity_metricsInput | TimelineUpdateWithWhereUniqueWithoutActivity_metricsInput[]
    updateMany?: TimelineUpdateManyWithWhereWithoutActivity_metricsInput | TimelineUpdateManyWithWhereWithoutActivity_metricsInput[]
    deleteMany?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
  }

  export type AiRecommendationCreatenext_stepsInput = {
    set: string[]
  }

  export type DealsCreateNestedOneWithoutAi_recommendationsInput = {
    create?: XOR<DealsCreateWithoutAi_recommendationsInput, DealsUncheckedCreateWithoutAi_recommendationsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutAi_recommendationsInput
    connect?: DealsWhereUniqueInput
  }

  export type AiRecommendationUpdatenext_stepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DealsUpdateOneRequiredWithoutAi_recommendationsNestedInput = {
    create?: XOR<DealsCreateWithoutAi_recommendationsInput, DealsUncheckedCreateWithoutAi_recommendationsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutAi_recommendationsInput
    upsert?: DealsUpsertWithoutAi_recommendationsInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutAi_recommendationsInput, DealsUpdateWithoutAi_recommendationsInput>, DealsUncheckedUpdateWithoutAi_recommendationsInput>
  }

  export type DealsCreateNestedOneWithoutFollow_upsInput = {
    create?: XOR<DealsCreateWithoutFollow_upsInput, DealsUncheckedCreateWithoutFollow_upsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutFollow_upsInput
    connect?: DealsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DealsUpdateOneRequiredWithoutFollow_upsNestedInput = {
    create?: XOR<DealsCreateWithoutFollow_upsInput, DealsUncheckedCreateWithoutFollow_upsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutFollow_upsInput
    upsert?: DealsUpsertWithoutFollow_upsInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutFollow_upsInput, DealsUpdateWithoutFollow_upsInput>, DealsUncheckedUpdateWithoutFollow_upsInput>
  }

  export type TagsCreatetagInput = {
    set: string[]
  }

  export type DealsCreateNestedOneWithoutTagsInput = {
    create?: XOR<DealsCreateWithoutTagsInput, DealsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutTagsInput
    connect?: DealsWhereUniqueInput
  }

  export type TagsUpdatetagInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DealsUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<DealsCreateWithoutTagsInput, DealsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutTagsInput
    upsert?: DealsUpsertWithoutTagsInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutTagsInput, DealsUpdateWithoutTagsInput>, DealsUncheckedUpdateWithoutTagsInput>
  }

  export type DealsCreateNestedOneWithoutConversation_historyInput = {
    create?: XOR<DealsCreateWithoutConversation_historyInput, DealsUncheckedCreateWithoutConversation_historyInput>
    connectOrCreate?: DealsCreateOrConnectWithoutConversation_historyInput
    connect?: DealsWhereUniqueInput
  }

  export type DealsUpdateOneRequiredWithoutConversation_historyNestedInput = {
    create?: XOR<DealsCreateWithoutConversation_historyInput, DealsUncheckedCreateWithoutConversation_historyInput>
    connectOrCreate?: DealsCreateOrConnectWithoutConversation_historyInput
    upsert?: DealsUpsertWithoutConversation_historyInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutConversation_historyInput, DealsUpdateWithoutConversation_historyInput>, DealsUncheckedUpdateWithoutConversation_historyInput>
  }

  export type DealsCreateNestedOneWithoutDeal_insightsInput = {
    create?: XOR<DealsCreateWithoutDeal_insightsInput, DealsUncheckedCreateWithoutDeal_insightsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutDeal_insightsInput
    connect?: DealsWhereUniqueInput
  }

  export type DealsUpdateOneRequiredWithoutDeal_insightsNestedInput = {
    create?: XOR<DealsCreateWithoutDeal_insightsInput, DealsUncheckedCreateWithoutDeal_insightsInput>
    connectOrCreate?: DealsCreateOrConnectWithoutDeal_insightsInput
    upsert?: DealsUpsertWithoutDeal_insightsInput
    connect?: DealsWhereUniqueInput
    update?: XOR<XOR<DealsUpdateToOneWithWhereWithoutDeal_insightsInput, DealsUpdateWithoutDeal_insightsInput>, DealsUncheckedUpdateWithoutDeal_insightsInput>
  }

  export type RisksCreateNestedOneWithoutRisk_explanationInput = {
    create?: XOR<RisksCreateWithoutRisk_explanationInput, RisksUncheckedCreateWithoutRisk_explanationInput>
    connectOrCreate?: RisksCreateOrConnectWithoutRisk_explanationInput
    connect?: RisksWhereUniqueInput
  }

  export type RisksUpdateOneRequiredWithoutRisk_explanationNestedInput = {
    create?: XOR<RisksCreateWithoutRisk_explanationInput, RisksUncheckedCreateWithoutRisk_explanationInput>
    connectOrCreate?: RisksCreateOrConnectWithoutRisk_explanationInput
    upsert?: RisksUpsertWithoutRisk_explanationInput
    connect?: RisksWhereUniqueInput
    update?: XOR<XOR<RisksUpdateToOneWithWhereWithoutRisk_explanationInput, RisksUpdateWithoutRisk_explanationInput>, RisksUncheckedUpdateWithoutRisk_explanationInput>
  }

  export type ParticipantsCreateNestedOneWithoutPersonalityInput = {
    create?: XOR<ParticipantsCreateWithoutPersonalityInput, ParticipantsUncheckedCreateWithoutPersonalityInput>
    connectOrCreate?: ParticipantsCreateOrConnectWithoutPersonalityInput
    connect?: ParticipantsWhereUniqueInput
  }

  export type ParticipantsUpdateOneRequiredWithoutPersonalityNestedInput = {
    create?: XOR<ParticipantsCreateWithoutPersonalityInput, ParticipantsUncheckedCreateWithoutPersonalityInput>
    connectOrCreate?: ParticipantsCreateOrConnectWithoutPersonalityInput
    upsert?: ParticipantsUpsertWithoutPersonalityInput
    connect?: ParticipantsWhereUniqueInput
    update?: XOR<XOR<ParticipantsUpdateToOneWithWhereWithoutPersonalityInput, ParticipantsUpdateWithoutPersonalityInput>, ParticipantsUncheckedUpdateWithoutPersonalityInput>
  }

  export type ActivityMetricsCreateNestedOneWithoutTimelineInput = {
    create?: XOR<ActivityMetricsCreateWithoutTimelineInput, ActivityMetricsUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: ActivityMetricsCreateOrConnectWithoutTimelineInput
    connect?: ActivityMetricsWhereUniqueInput
  }

  export type ActivityMetricsUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<ActivityMetricsCreateWithoutTimelineInput, ActivityMetricsUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: ActivityMetricsCreateOrConnectWithoutTimelineInput
    upsert?: ActivityMetricsUpsertWithoutTimelineInput
    connect?: ActivityMetricsWhereUniqueInput
    update?: XOR<XOR<ActivityMetricsUpdateToOneWithWhereWithoutTimelineInput, ActivityMetricsUpdateWithoutTimelineInput>, ActivityMetricsUncheckedUpdateWithoutTimelineInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ParticipantsCreateWithoutDealInput = {
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
    personality?: PersonalityCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUncheckedCreateWithoutDealInput = {
    id?: number
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
    personality?: PersonalityUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsCreateOrConnectWithoutDealInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutDealInput, ParticipantsUncheckedCreateWithoutDealInput>
  }

  export type ParticipantsCreateManyDealInputEnvelope = {
    data: ParticipantsCreateManyDealInput | ParticipantsCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type RisksCreateWithoutDealInput = {
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
    risk_explanation?: RiskExplanationCreateNestedManyWithoutRiskInput
  }

  export type RisksUncheckedCreateWithoutDealInput = {
    id?: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
    risk_explanation?: RiskExplanationUncheckedCreateNestedManyWithoutRiskInput
  }

  export type RisksCreateOrConnectWithoutDealInput = {
    where: RisksWhereUniqueInput
    create: XOR<RisksCreateWithoutDealInput, RisksUncheckedCreateWithoutDealInput>
  }

  export type RisksCreateManyDealInputEnvelope = {
    data: RisksCreateManyDealInput | RisksCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type ActivityMetricsCreateWithoutDealInput = {
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    timeline?: TimelineCreateNestedManyWithoutActivity_metricsInput
  }

  export type ActivityMetricsUncheckedCreateWithoutDealInput = {
    id?: number
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    timeline?: TimelineUncheckedCreateNestedManyWithoutActivity_metricsInput
  }

  export type ActivityMetricsCreateOrConnectWithoutDealInput = {
    where: ActivityMetricsWhereUniqueInput
    create: XOR<ActivityMetricsCreateWithoutDealInput, ActivityMetricsUncheckedCreateWithoutDealInput>
  }

  export type ActivityMetricsCreateManyDealInputEnvelope = {
    data: ActivityMetricsCreateManyDealInput | ActivityMetricsCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type AiRecommendationCreateWithoutDealInput = {
    next_steps?: AiRecommendationCreatenext_stepsInput | string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiRecommendationUncheckedCreateWithoutDealInput = {
    id?: number
    next_steps?: AiRecommendationCreatenext_stepsInput | string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiRecommendationCreateOrConnectWithoutDealInput = {
    where: AiRecommendationWhereUniqueInput
    create: XOR<AiRecommendationCreateWithoutDealInput, AiRecommendationUncheckedCreateWithoutDealInput>
  }

  export type AiRecommendationCreateManyDealInputEnvelope = {
    data: AiRecommendationCreateManyDealInput | AiRecommendationCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type FollowUpCreateWithoutDealInput = {
    communication_type: string
    contact_address: string
    subject?: string | null
    body?: string | null
    message_id?: string | null
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowUpUncheckedCreateWithoutDealInput = {
    id?: number
    communication_type: string
    contact_address: string
    subject?: string | null
    body?: string | null
    message_id?: string | null
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowUpCreateOrConnectWithoutDealInput = {
    where: FollowUpWhereUniqueInput
    create: XOR<FollowUpCreateWithoutDealInput, FollowUpUncheckedCreateWithoutDealInput>
  }

  export type FollowUpCreateManyDealInputEnvelope = {
    data: FollowUpCreateManyDealInput | FollowUpCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type TagsCreateWithoutDealInput = {
    tag?: TagsCreatetagInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TagsUncheckedCreateWithoutDealInput = {
    id?: number
    tag?: TagsCreatetagInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TagsCreateOrConnectWithoutDealInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutDealInput, TagsUncheckedCreateWithoutDealInput>
  }

  export type TagsCreateManyDealInputEnvelope = {
    data: TagsCreateManyDealInput | TagsCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type ConversationHistoryCreateWithoutDealInput = {
    slack: JsonNullValueInput | InputJsonValue
    email: JsonNullValueInput | InputJsonValue
    deal_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConversationHistoryUncheckedCreateWithoutDealInput = {
    id?: number
    slack: JsonNullValueInput | InputJsonValue
    email: JsonNullValueInput | InputJsonValue
    deal_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConversationHistoryCreateOrConnectWithoutDealInput = {
    where: ConversationHistoryWhereUniqueInput
    create: XOR<ConversationHistoryCreateWithoutDealInput, ConversationHistoryUncheckedCreateWithoutDealInput>
  }

  export type ConversationHistoryCreateManyDealInputEnvelope = {
    data: ConversationHistoryCreateManyDealInput | ConversationHistoryCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type DealInsightsCreateWithoutDealInput = {
    kpi_insights: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DealInsightsUncheckedCreateWithoutDealInput = {
    id?: number
    kpi_insights: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DealInsightsCreateOrConnectWithoutDealInput = {
    where: DealInsightsWhereUniqueInput
    create: XOR<DealInsightsCreateWithoutDealInput, DealInsightsUncheckedCreateWithoutDealInput>
  }

  export type DealInsightsCreateManyDealInputEnvelope = {
    data: DealInsightsCreateManyDealInput | DealInsightsCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantsUpsertWithWhereUniqueWithoutDealInput = {
    where: ParticipantsWhereUniqueInput
    update: XOR<ParticipantsUpdateWithoutDealInput, ParticipantsUncheckedUpdateWithoutDealInput>
    create: XOR<ParticipantsCreateWithoutDealInput, ParticipantsUncheckedCreateWithoutDealInput>
  }

  export type ParticipantsUpdateWithWhereUniqueWithoutDealInput = {
    where: ParticipantsWhereUniqueInput
    data: XOR<ParticipantsUpdateWithoutDealInput, ParticipantsUncheckedUpdateWithoutDealInput>
  }

  export type ParticipantsUpdateManyWithWhereWithoutDealInput = {
    where: ParticipantsScalarWhereInput
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyWithoutDealInput>
  }

  export type ParticipantsScalarWhereInput = {
    AND?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
    OR?: ParticipantsScalarWhereInput[]
    NOT?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
    id?: IntFilter<"Participants"> | number
    deal_id?: IntFilter<"Participants"> | number
    prospect_name?: StringFilter<"Participants"> | string
    email?: StringFilter<"Participants"> | string
    slack_id?: StringFilter<"Participants"> | string
    role?: StringFilter<"Participants"> | string
    sentiment?: StringFilter<"Participants"> | string
    communication_score?: FloatFilter<"Participants"> | number
    created_at?: DateTimeFilter<"Participants"> | Date | string
    updated_at?: DateTimeFilter<"Participants"> | Date | string
  }

  export type RisksUpsertWithWhereUniqueWithoutDealInput = {
    where: RisksWhereUniqueInput
    update: XOR<RisksUpdateWithoutDealInput, RisksUncheckedUpdateWithoutDealInput>
    create: XOR<RisksCreateWithoutDealInput, RisksUncheckedCreateWithoutDealInput>
  }

  export type RisksUpdateWithWhereUniqueWithoutDealInput = {
    where: RisksWhereUniqueInput
    data: XOR<RisksUpdateWithoutDealInput, RisksUncheckedUpdateWithoutDealInput>
  }

  export type RisksUpdateManyWithWhereWithoutDealInput = {
    where: RisksScalarWhereInput
    data: XOR<RisksUpdateManyMutationInput, RisksUncheckedUpdateManyWithoutDealInput>
  }

  export type RisksScalarWhereInput = {
    AND?: RisksScalarWhereInput | RisksScalarWhereInput[]
    OR?: RisksScalarWhereInput[]
    NOT?: RisksScalarWhereInput | RisksScalarWhereInput[]
    id?: IntFilter<"Risks"> | number
    deal_id?: IntFilter<"Risks"> | number
    deal_risk_score?: FloatFilter<"Risks"> | number
    churn_risk_score?: FloatFilter<"Risks"> | number
    timeline_risk_score?: FloatFilter<"Risks"> | number
    budget_risk_score?: FloatFilter<"Risks"> | number
    created_at?: DateTimeFilter<"Risks"> | Date | string
    updated_at?: DateTimeFilter<"Risks"> | Date | string
  }

  export type ActivityMetricsUpsertWithWhereUniqueWithoutDealInput = {
    where: ActivityMetricsWhereUniqueInput
    update: XOR<ActivityMetricsUpdateWithoutDealInput, ActivityMetricsUncheckedUpdateWithoutDealInput>
    create: XOR<ActivityMetricsCreateWithoutDealInput, ActivityMetricsUncheckedCreateWithoutDealInput>
  }

  export type ActivityMetricsUpdateWithWhereUniqueWithoutDealInput = {
    where: ActivityMetricsWhereUniqueInput
    data: XOR<ActivityMetricsUpdateWithoutDealInput, ActivityMetricsUncheckedUpdateWithoutDealInput>
  }

  export type ActivityMetricsUpdateManyWithWhereWithoutDealInput = {
    where: ActivityMetricsScalarWhereInput
    data: XOR<ActivityMetricsUpdateManyMutationInput, ActivityMetricsUncheckedUpdateManyWithoutDealInput>
  }

  export type ActivityMetricsScalarWhereInput = {
    AND?: ActivityMetricsScalarWhereInput | ActivityMetricsScalarWhereInput[]
    OR?: ActivityMetricsScalarWhereInput[]
    NOT?: ActivityMetricsScalarWhereInput | ActivityMetricsScalarWhereInput[]
    id?: IntFilter<"ActivityMetrics"> | number
    deal_id?: IntFilter<"ActivityMetrics"> | number
    message_count?: IntFilter<"ActivityMetrics"> | number
    prospect_response_time?: FloatFilter<"ActivityMetrics"> | number
    engagement_trend?: StringFilter<"ActivityMetrics"> | string
    last_communication_source?: StringFilter<"ActivityMetrics"> | string
    last_communication_summary?: StringFilter<"ActivityMetrics"> | string
    created_at?: DateTimeFilter<"ActivityMetrics"> | Date | string
    updated_at?: DateTimeFilter<"ActivityMetrics"> | Date | string
  }

  export type AiRecommendationUpsertWithWhereUniqueWithoutDealInput = {
    where: AiRecommendationWhereUniqueInput
    update: XOR<AiRecommendationUpdateWithoutDealInput, AiRecommendationUncheckedUpdateWithoutDealInput>
    create: XOR<AiRecommendationCreateWithoutDealInput, AiRecommendationUncheckedCreateWithoutDealInput>
  }

  export type AiRecommendationUpdateWithWhereUniqueWithoutDealInput = {
    where: AiRecommendationWhereUniqueInput
    data: XOR<AiRecommendationUpdateWithoutDealInput, AiRecommendationUncheckedUpdateWithoutDealInput>
  }

  export type AiRecommendationUpdateManyWithWhereWithoutDealInput = {
    where: AiRecommendationScalarWhereInput
    data: XOR<AiRecommendationUpdateManyMutationInput, AiRecommendationUncheckedUpdateManyWithoutDealInput>
  }

  export type AiRecommendationScalarWhereInput = {
    AND?: AiRecommendationScalarWhereInput | AiRecommendationScalarWhereInput[]
    OR?: AiRecommendationScalarWhereInput[]
    NOT?: AiRecommendationScalarWhereInput | AiRecommendationScalarWhereInput[]
    id?: IntFilter<"AiRecommendation"> | number
    deal_id?: IntFilter<"AiRecommendation"> | number
    next_steps?: StringNullableListFilter<"AiRecommendation">
    escalation_triggers?: StringFilter<"AiRecommendation"> | string
    deal_acceleration_tactics?: StringFilter<"AiRecommendation"> | string
    created_at?: DateTimeFilter<"AiRecommendation"> | Date | string
    updated_at?: DateTimeFilter<"AiRecommendation"> | Date | string
  }

  export type FollowUpUpsertWithWhereUniqueWithoutDealInput = {
    where: FollowUpWhereUniqueInput
    update: XOR<FollowUpUpdateWithoutDealInput, FollowUpUncheckedUpdateWithoutDealInput>
    create: XOR<FollowUpCreateWithoutDealInput, FollowUpUncheckedCreateWithoutDealInput>
  }

  export type FollowUpUpdateWithWhereUniqueWithoutDealInput = {
    where: FollowUpWhereUniqueInput
    data: XOR<FollowUpUpdateWithoutDealInput, FollowUpUncheckedUpdateWithoutDealInput>
  }

  export type FollowUpUpdateManyWithWhereWithoutDealInput = {
    where: FollowUpScalarWhereInput
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyWithoutDealInput>
  }

  export type FollowUpScalarWhereInput = {
    AND?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
    OR?: FollowUpScalarWhereInput[]
    NOT?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
    id?: IntFilter<"FollowUp"> | number
    deal_id?: IntFilter<"FollowUp"> | number
    communication_type?: StringFilter<"FollowUp"> | string
    contact_address?: StringFilter<"FollowUp"> | string
    subject?: StringNullableFilter<"FollowUp"> | string | null
    body?: StringNullableFilter<"FollowUp"> | string | null
    message_id?: StringNullableFilter<"FollowUp"> | string | null
    scheduled_at?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    created_at?: DateTimeFilter<"FollowUp"> | Date | string
    updated_at?: DateTimeFilter<"FollowUp"> | Date | string
  }

  export type TagsUpsertWithWhereUniqueWithoutDealInput = {
    where: TagsWhereUniqueInput
    update: XOR<TagsUpdateWithoutDealInput, TagsUncheckedUpdateWithoutDealInput>
    create: XOR<TagsCreateWithoutDealInput, TagsUncheckedCreateWithoutDealInput>
  }

  export type TagsUpdateWithWhereUniqueWithoutDealInput = {
    where: TagsWhereUniqueInput
    data: XOR<TagsUpdateWithoutDealInput, TagsUncheckedUpdateWithoutDealInput>
  }

  export type TagsUpdateManyWithWhereWithoutDealInput = {
    where: TagsScalarWhereInput
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyWithoutDealInput>
  }

  export type TagsScalarWhereInput = {
    AND?: TagsScalarWhereInput | TagsScalarWhereInput[]
    OR?: TagsScalarWhereInput[]
    NOT?: TagsScalarWhereInput | TagsScalarWhereInput[]
    id?: IntFilter<"Tags"> | number
    deal_id?: IntFilter<"Tags"> | number
    tag?: StringNullableListFilter<"Tags">
    created_at?: DateTimeFilter<"Tags"> | Date | string
    updated_at?: DateTimeFilter<"Tags"> | Date | string
  }

  export type ConversationHistoryUpsertWithWhereUniqueWithoutDealInput = {
    where: ConversationHistoryWhereUniqueInput
    update: XOR<ConversationHistoryUpdateWithoutDealInput, ConversationHistoryUncheckedUpdateWithoutDealInput>
    create: XOR<ConversationHistoryCreateWithoutDealInput, ConversationHistoryUncheckedCreateWithoutDealInput>
  }

  export type ConversationHistoryUpdateWithWhereUniqueWithoutDealInput = {
    where: ConversationHistoryWhereUniqueInput
    data: XOR<ConversationHistoryUpdateWithoutDealInput, ConversationHistoryUncheckedUpdateWithoutDealInput>
  }

  export type ConversationHistoryUpdateManyWithWhereWithoutDealInput = {
    where: ConversationHistoryScalarWhereInput
    data: XOR<ConversationHistoryUpdateManyMutationInput, ConversationHistoryUncheckedUpdateManyWithoutDealInput>
  }

  export type ConversationHistoryScalarWhereInput = {
    AND?: ConversationHistoryScalarWhereInput | ConversationHistoryScalarWhereInput[]
    OR?: ConversationHistoryScalarWhereInput[]
    NOT?: ConversationHistoryScalarWhereInput | ConversationHistoryScalarWhereInput[]
    id?: IntFilter<"ConversationHistory"> | number
    deal_id?: IntFilter<"ConversationHistory"> | number
    slack?: JsonFilter<"ConversationHistory">
    email?: JsonFilter<"ConversationHistory">
    deal_summary?: StringFilter<"ConversationHistory"> | string
    created_at?: DateTimeFilter<"ConversationHistory"> | Date | string
    updated_at?: DateTimeFilter<"ConversationHistory"> | Date | string
  }

  export type DealInsightsUpsertWithWhereUniqueWithoutDealInput = {
    where: DealInsightsWhereUniqueInput
    update: XOR<DealInsightsUpdateWithoutDealInput, DealInsightsUncheckedUpdateWithoutDealInput>
    create: XOR<DealInsightsCreateWithoutDealInput, DealInsightsUncheckedCreateWithoutDealInput>
  }

  export type DealInsightsUpdateWithWhereUniqueWithoutDealInput = {
    where: DealInsightsWhereUniqueInput
    data: XOR<DealInsightsUpdateWithoutDealInput, DealInsightsUncheckedUpdateWithoutDealInput>
  }

  export type DealInsightsUpdateManyWithWhereWithoutDealInput = {
    where: DealInsightsScalarWhereInput
    data: XOR<DealInsightsUpdateManyMutationInput, DealInsightsUncheckedUpdateManyWithoutDealInput>
  }

  export type DealInsightsScalarWhereInput = {
    AND?: DealInsightsScalarWhereInput | DealInsightsScalarWhereInput[]
    OR?: DealInsightsScalarWhereInput[]
    NOT?: DealInsightsScalarWhereInput | DealInsightsScalarWhereInput[]
    id?: IntFilter<"DealInsights"> | number
    deal_id?: IntFilter<"DealInsights"> | number
    kpi_insights?: JsonFilter<"DealInsights">
    created_at?: DateTimeFilter<"DealInsights"> | Date | string
    updated_at?: DateTimeFilter<"DealInsights"> | Date | string
  }

  export type DealsCreateWithoutParticipantsInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutParticipantsInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutParticipantsInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutParticipantsInput, DealsUncheckedCreateWithoutParticipantsInput>
  }

  export type PersonalityCreateWithoutParticipantInput = {
    personality_traits: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PersonalityUncheckedCreateWithoutParticipantInput = {
    id?: number
    personality_traits: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PersonalityCreateOrConnectWithoutParticipantInput = {
    where: PersonalityWhereUniqueInput
    create: XOR<PersonalityCreateWithoutParticipantInput, PersonalityUncheckedCreateWithoutParticipantInput>
  }

  export type PersonalityCreateManyParticipantInputEnvelope = {
    data: PersonalityCreateManyParticipantInput | PersonalityCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type DealsUpsertWithoutParticipantsInput = {
    update: XOR<DealsUpdateWithoutParticipantsInput, DealsUncheckedUpdateWithoutParticipantsInput>
    create: XOR<DealsCreateWithoutParticipantsInput, DealsUncheckedCreateWithoutParticipantsInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutParticipantsInput, DealsUncheckedUpdateWithoutParticipantsInput>
  }

  export type DealsUpdateWithoutParticipantsInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type PersonalityUpsertWithWhereUniqueWithoutParticipantInput = {
    where: PersonalityWhereUniqueInput
    update: XOR<PersonalityUpdateWithoutParticipantInput, PersonalityUncheckedUpdateWithoutParticipantInput>
    create: XOR<PersonalityCreateWithoutParticipantInput, PersonalityUncheckedCreateWithoutParticipantInput>
  }

  export type PersonalityUpdateWithWhereUniqueWithoutParticipantInput = {
    where: PersonalityWhereUniqueInput
    data: XOR<PersonalityUpdateWithoutParticipantInput, PersonalityUncheckedUpdateWithoutParticipantInput>
  }

  export type PersonalityUpdateManyWithWhereWithoutParticipantInput = {
    where: PersonalityScalarWhereInput
    data: XOR<PersonalityUpdateManyMutationInput, PersonalityUncheckedUpdateManyWithoutParticipantInput>
  }

  export type PersonalityScalarWhereInput = {
    AND?: PersonalityScalarWhereInput | PersonalityScalarWhereInput[]
    OR?: PersonalityScalarWhereInput[]
    NOT?: PersonalityScalarWhereInput | PersonalityScalarWhereInput[]
    id?: IntFilter<"Personality"> | number
    participant_id?: IntFilter<"Personality"> | number
    personality_traits?: JsonFilter<"Personality">
    created_at?: DateTimeFilter<"Personality"> | Date | string
    updated_at?: DateTimeFilter<"Personality"> | Date | string
  }

  export type RiskExplanationCreateWithoutRiskInput = {
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RiskExplanationUncheckedCreateWithoutRiskInput = {
    id?: number
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RiskExplanationCreateOrConnectWithoutRiskInput = {
    where: RiskExplanationWhereUniqueInput
    create: XOR<RiskExplanationCreateWithoutRiskInput, RiskExplanationUncheckedCreateWithoutRiskInput>
  }

  export type RiskExplanationCreateManyRiskInputEnvelope = {
    data: RiskExplanationCreateManyRiskInput | RiskExplanationCreateManyRiskInput[]
    skipDuplicates?: boolean
  }

  export type DealsCreateWithoutRisksInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutRisksInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutRisksInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutRisksInput, DealsUncheckedCreateWithoutRisksInput>
  }

  export type RiskExplanationUpsertWithWhereUniqueWithoutRiskInput = {
    where: RiskExplanationWhereUniqueInput
    update: XOR<RiskExplanationUpdateWithoutRiskInput, RiskExplanationUncheckedUpdateWithoutRiskInput>
    create: XOR<RiskExplanationCreateWithoutRiskInput, RiskExplanationUncheckedCreateWithoutRiskInput>
  }

  export type RiskExplanationUpdateWithWhereUniqueWithoutRiskInput = {
    where: RiskExplanationWhereUniqueInput
    data: XOR<RiskExplanationUpdateWithoutRiskInput, RiskExplanationUncheckedUpdateWithoutRiskInput>
  }

  export type RiskExplanationUpdateManyWithWhereWithoutRiskInput = {
    where: RiskExplanationScalarWhereInput
    data: XOR<RiskExplanationUpdateManyMutationInput, RiskExplanationUncheckedUpdateManyWithoutRiskInput>
  }

  export type RiskExplanationScalarWhereInput = {
    AND?: RiskExplanationScalarWhereInput | RiskExplanationScalarWhereInput[]
    OR?: RiskExplanationScalarWhereInput[]
    NOT?: RiskExplanationScalarWhereInput | RiskExplanationScalarWhereInput[]
    id?: IntFilter<"RiskExplanation"> | number
    risk_id?: IntFilter<"RiskExplanation"> | number
    budget_risk_explanation?: StringFilter<"RiskExplanation"> | string
    timeline_risk_explanation?: StringFilter<"RiskExplanation"> | string
    churn_risk_explanation?: StringFilter<"RiskExplanation"> | string
    deal_risk_summary?: StringFilter<"RiskExplanation"> | string
    created_at?: DateTimeFilter<"RiskExplanation"> | Date | string
    updated_at?: DateTimeFilter<"RiskExplanation"> | Date | string
  }

  export type DealsUpsertWithoutRisksInput = {
    update: XOR<DealsUpdateWithoutRisksInput, DealsUncheckedUpdateWithoutRisksInput>
    create: XOR<DealsCreateWithoutRisksInput, DealsUncheckedCreateWithoutRisksInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutRisksInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutRisksInput, DealsUncheckedUpdateWithoutRisksInput>
  }

  export type DealsUpdateWithoutRisksInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutRisksInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type TimelineCreateWithoutActivity_metricsInput = {
    event_date: Date | string
    event_type: string
    event_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TimelineUncheckedCreateWithoutActivity_metricsInput = {
    id?: number
    event_date: Date | string
    event_type: string
    event_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TimelineCreateOrConnectWithoutActivity_metricsInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutActivity_metricsInput, TimelineUncheckedCreateWithoutActivity_metricsInput>
  }

  export type TimelineCreateManyActivity_metricsInputEnvelope = {
    data: TimelineCreateManyActivity_metricsInput | TimelineCreateManyActivity_metricsInput[]
    skipDuplicates?: boolean
  }

  export type DealsCreateWithoutActivities_metricsInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutActivities_metricsInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutActivities_metricsInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutActivities_metricsInput, DealsUncheckedCreateWithoutActivities_metricsInput>
  }

  export type TimelineUpsertWithWhereUniqueWithoutActivity_metricsInput = {
    where: TimelineWhereUniqueInput
    update: XOR<TimelineUpdateWithoutActivity_metricsInput, TimelineUncheckedUpdateWithoutActivity_metricsInput>
    create: XOR<TimelineCreateWithoutActivity_metricsInput, TimelineUncheckedCreateWithoutActivity_metricsInput>
  }

  export type TimelineUpdateWithWhereUniqueWithoutActivity_metricsInput = {
    where: TimelineWhereUniqueInput
    data: XOR<TimelineUpdateWithoutActivity_metricsInput, TimelineUncheckedUpdateWithoutActivity_metricsInput>
  }

  export type TimelineUpdateManyWithWhereWithoutActivity_metricsInput = {
    where: TimelineScalarWhereInput
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyWithoutActivity_metricsInput>
  }

  export type TimelineScalarWhereInput = {
    AND?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
    OR?: TimelineScalarWhereInput[]
    NOT?: TimelineScalarWhereInput | TimelineScalarWhereInput[]
    id?: IntFilter<"Timeline"> | number
    activity_metrics_id?: IntFilter<"Timeline"> | number
    event_date?: DateTimeFilter<"Timeline"> | Date | string
    event_type?: StringFilter<"Timeline"> | string
    event_details?: JsonFilter<"Timeline">
    created_at?: DateTimeFilter<"Timeline"> | Date | string
    updated_at?: DateTimeFilter<"Timeline"> | Date | string
  }

  export type DealsUpsertWithoutActivities_metricsInput = {
    update: XOR<DealsUpdateWithoutActivities_metricsInput, DealsUncheckedUpdateWithoutActivities_metricsInput>
    create: XOR<DealsCreateWithoutActivities_metricsInput, DealsUncheckedCreateWithoutActivities_metricsInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutActivities_metricsInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutActivities_metricsInput, DealsUncheckedUpdateWithoutActivities_metricsInput>
  }

  export type DealsUpdateWithoutActivities_metricsInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutActivities_metricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealsCreateWithoutAi_recommendationsInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutAi_recommendationsInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutAi_recommendationsInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutAi_recommendationsInput, DealsUncheckedCreateWithoutAi_recommendationsInput>
  }

  export type DealsUpsertWithoutAi_recommendationsInput = {
    update: XOR<DealsUpdateWithoutAi_recommendationsInput, DealsUncheckedUpdateWithoutAi_recommendationsInput>
    create: XOR<DealsCreateWithoutAi_recommendationsInput, DealsUncheckedCreateWithoutAi_recommendationsInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutAi_recommendationsInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutAi_recommendationsInput, DealsUncheckedUpdateWithoutAi_recommendationsInput>
  }

  export type DealsUpdateWithoutAi_recommendationsInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutAi_recommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealsCreateWithoutFollow_upsInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutFollow_upsInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutFollow_upsInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutFollow_upsInput, DealsUncheckedCreateWithoutFollow_upsInput>
  }

  export type DealsUpsertWithoutFollow_upsInput = {
    update: XOR<DealsUpdateWithoutFollow_upsInput, DealsUncheckedUpdateWithoutFollow_upsInput>
    create: XOR<DealsCreateWithoutFollow_upsInput, DealsUncheckedCreateWithoutFollow_upsInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutFollow_upsInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutFollow_upsInput, DealsUncheckedUpdateWithoutFollow_upsInput>
  }

  export type DealsUpdateWithoutFollow_upsInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutFollow_upsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealsCreateWithoutTagsInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutTagsInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutTagsInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutTagsInput, DealsUncheckedCreateWithoutTagsInput>
  }

  export type DealsUpsertWithoutTagsInput = {
    update: XOR<DealsUpdateWithoutTagsInput, DealsUncheckedUpdateWithoutTagsInput>
    create: XOR<DealsCreateWithoutTagsInput, DealsUncheckedCreateWithoutTagsInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutTagsInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutTagsInput, DealsUncheckedUpdateWithoutTagsInput>
  }

  export type DealsUpdateWithoutTagsInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealsCreateWithoutConversation_historyInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutConversation_historyInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    deal_insights?: DealInsightsUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutConversation_historyInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutConversation_historyInput, DealsUncheckedCreateWithoutConversation_historyInput>
  }

  export type DealsUpsertWithoutConversation_historyInput = {
    update: XOR<DealsUpdateWithoutConversation_historyInput, DealsUncheckedUpdateWithoutConversation_historyInput>
    create: XOR<DealsCreateWithoutConversation_historyInput, DealsUncheckedCreateWithoutConversation_historyInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutConversation_historyInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutConversation_historyInput, DealsUncheckedUpdateWithoutConversation_historyInput>
  }

  export type DealsUpdateWithoutConversation_historyInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutConversation_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    deal_insights?: DealInsightsUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealsCreateWithoutDeal_insightsInput = {
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsCreateNestedManyWithoutDealInput
    risks?: RisksCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpCreateNestedManyWithoutDealInput
    tags?: TagsCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryCreateNestedManyWithoutDealInput
  }

  export type DealsUncheckedCreateWithoutDeal_insightsInput = {
    id?: number
    deal_name: string
    company_name: string
    stage: string
    status: string
    deal_amount: number
    expected_close_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    participants?: ParticipantsUncheckedCreateNestedManyWithoutDealInput
    risks?: RisksUncheckedCreateNestedManyWithoutDealInput
    activities_metrics?: ActivityMetricsUncheckedCreateNestedManyWithoutDealInput
    ai_recommendations?: AiRecommendationUncheckedCreateNestedManyWithoutDealInput
    follow_ups?: FollowUpUncheckedCreateNestedManyWithoutDealInput
    tags?: TagsUncheckedCreateNestedManyWithoutDealInput
    conversation_history?: ConversationHistoryUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealsCreateOrConnectWithoutDeal_insightsInput = {
    where: DealsWhereUniqueInput
    create: XOR<DealsCreateWithoutDeal_insightsInput, DealsUncheckedCreateWithoutDeal_insightsInput>
  }

  export type DealsUpsertWithoutDeal_insightsInput = {
    update: XOR<DealsUpdateWithoutDeal_insightsInput, DealsUncheckedUpdateWithoutDeal_insightsInput>
    create: XOR<DealsCreateWithoutDeal_insightsInput, DealsUncheckedCreateWithoutDeal_insightsInput>
    where?: DealsWhereInput
  }

  export type DealsUpdateToOneWithWhereWithoutDeal_insightsInput = {
    where?: DealsWhereInput
    data: XOR<DealsUpdateWithoutDeal_insightsInput, DealsUncheckedUpdateWithoutDeal_insightsInput>
  }

  export type DealsUpdateWithoutDeal_insightsInput = {
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUpdateManyWithoutDealNestedInput
    risks?: RisksUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUpdateManyWithoutDealNestedInput
    tags?: TagsUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUpdateManyWithoutDealNestedInput
  }

  export type DealsUncheckedUpdateWithoutDeal_insightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_name?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deal_amount?: FloatFieldUpdateOperationsInput | number
    expected_close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantsUncheckedUpdateManyWithoutDealNestedInput
    risks?: RisksUncheckedUpdateManyWithoutDealNestedInput
    activities_metrics?: ActivityMetricsUncheckedUpdateManyWithoutDealNestedInput
    ai_recommendations?: AiRecommendationUncheckedUpdateManyWithoutDealNestedInput
    follow_ups?: FollowUpUncheckedUpdateManyWithoutDealNestedInput
    tags?: TagsUncheckedUpdateManyWithoutDealNestedInput
    conversation_history?: ConversationHistoryUncheckedUpdateManyWithoutDealNestedInput
  }

  export type RisksCreateWithoutRisk_explanationInput = {
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutRisksInput
  }

  export type RisksUncheckedCreateWithoutRisk_explanationInput = {
    id?: number
    deal_id: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RisksCreateOrConnectWithoutRisk_explanationInput = {
    where: RisksWhereUniqueInput
    create: XOR<RisksCreateWithoutRisk_explanationInput, RisksUncheckedCreateWithoutRisk_explanationInput>
  }

  export type RisksUpsertWithoutRisk_explanationInput = {
    update: XOR<RisksUpdateWithoutRisk_explanationInput, RisksUncheckedUpdateWithoutRisk_explanationInput>
    create: XOR<RisksCreateWithoutRisk_explanationInput, RisksUncheckedCreateWithoutRisk_explanationInput>
    where?: RisksWhereInput
  }

  export type RisksUpdateToOneWithWhereWithoutRisk_explanationInput = {
    where?: RisksWhereInput
    data: XOR<RisksUpdateWithoutRisk_explanationInput, RisksUncheckedUpdateWithoutRisk_explanationInput>
  }

  export type RisksUpdateWithoutRisk_explanationInput = {
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutRisksNestedInput
  }

  export type RisksUncheckedUpdateWithoutRisk_explanationInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsCreateWithoutPersonalityInput = {
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantsUncheckedCreateWithoutPersonalityInput = {
    id?: number
    deal_id: number
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParticipantsCreateOrConnectWithoutPersonalityInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutPersonalityInput, ParticipantsUncheckedCreateWithoutPersonalityInput>
  }

  export type ParticipantsUpsertWithoutPersonalityInput = {
    update: XOR<ParticipantsUpdateWithoutPersonalityInput, ParticipantsUncheckedUpdateWithoutPersonalityInput>
    create: XOR<ParticipantsCreateWithoutPersonalityInput, ParticipantsUncheckedCreateWithoutPersonalityInput>
    where?: ParticipantsWhereInput
  }

  export type ParticipantsUpdateToOneWithWhereWithoutPersonalityInput = {
    where?: ParticipantsWhereInput
    data: XOR<ParticipantsUpdateWithoutPersonalityInput, ParticipantsUncheckedUpdateWithoutPersonalityInput>
  }

  export type ParticipantsUpdateWithoutPersonalityInput = {
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutPersonalityInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMetricsCreateWithoutTimelineInput = {
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
    deal: DealsCreateNestedOneWithoutActivities_metricsInput
  }

  export type ActivityMetricsUncheckedCreateWithoutTimelineInput = {
    id?: number
    deal_id: number
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityMetricsCreateOrConnectWithoutTimelineInput = {
    where: ActivityMetricsWhereUniqueInput
    create: XOR<ActivityMetricsCreateWithoutTimelineInput, ActivityMetricsUncheckedCreateWithoutTimelineInput>
  }

  export type ActivityMetricsUpsertWithoutTimelineInput = {
    update: XOR<ActivityMetricsUpdateWithoutTimelineInput, ActivityMetricsUncheckedUpdateWithoutTimelineInput>
    create: XOR<ActivityMetricsCreateWithoutTimelineInput, ActivityMetricsUncheckedCreateWithoutTimelineInput>
    where?: ActivityMetricsWhereInput
  }

  export type ActivityMetricsUpdateToOneWithWhereWithoutTimelineInput = {
    where?: ActivityMetricsWhereInput
    data: XOR<ActivityMetricsUpdateWithoutTimelineInput, ActivityMetricsUncheckedUpdateWithoutTimelineInput>
  }

  export type ActivityMetricsUpdateWithoutTimelineInput = {
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deal?: DealsUpdateOneRequiredWithoutActivities_metricsNestedInput
  }

  export type ActivityMetricsUncheckedUpdateWithoutTimelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_id?: IntFieldUpdateOperationsInput | number
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsCreateManyDealInput = {
    id?: number
    prospect_name: string
    email: string
    slack_id: string
    role: string
    sentiment: string
    communication_score: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RisksCreateManyDealInput = {
    id?: number
    deal_risk_score: number
    churn_risk_score: number
    timeline_risk_score: number
    budget_risk_score: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ActivityMetricsCreateManyDealInput = {
    id?: number
    message_count: number
    prospect_response_time: number
    engagement_trend: string
    last_communication_source: string
    last_communication_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AiRecommendationCreateManyDealInput = {
    id?: number
    next_steps?: AiRecommendationCreatenext_stepsInput | string[]
    escalation_triggers: string
    deal_acceleration_tactics: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowUpCreateManyDealInput = {
    id?: number
    communication_type: string
    contact_address: string
    subject?: string | null
    body?: string | null
    message_id?: string | null
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TagsCreateManyDealInput = {
    id?: number
    tag?: TagsCreatetagInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConversationHistoryCreateManyDealInput = {
    id?: number
    slack: JsonNullValueInput | InputJsonValue
    email: JsonNullValueInput | InputJsonValue
    deal_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DealInsightsCreateManyDealInput = {
    id?: number
    kpi_insights: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParticipantsUpdateWithoutDealInput = {
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    personality?: PersonalityUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    personality?: PersonalityUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    prospect_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    communication_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RisksUpdateWithoutDealInput = {
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risk_explanation?: RiskExplanationUpdateManyWithoutRiskNestedInput
  }

  export type RisksUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    risk_explanation?: RiskExplanationUncheckedUpdateManyWithoutRiskNestedInput
  }

  export type RisksUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    deal_risk_score?: FloatFieldUpdateOperationsInput | number
    churn_risk_score?: FloatFieldUpdateOperationsInput | number
    timeline_risk_score?: FloatFieldUpdateOperationsInput | number
    budget_risk_score?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityMetricsUpdateWithoutDealInput = {
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: TimelineUpdateManyWithoutActivity_metricsNestedInput
  }

  export type ActivityMetricsUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: TimelineUncheckedUpdateManyWithoutActivity_metricsNestedInput
  }

  export type ActivityMetricsUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_count?: IntFieldUpdateOperationsInput | number
    prospect_response_time?: FloatFieldUpdateOperationsInput | number
    engagement_trend?: StringFieldUpdateOperationsInput | string
    last_communication_source?: StringFieldUpdateOperationsInput | string
    last_communication_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRecommendationUpdateWithoutDealInput = {
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRecommendationUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRecommendationUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    next_steps?: AiRecommendationUpdatenext_stepsInput | string[]
    escalation_triggers?: StringFieldUpdateOperationsInput | string
    deal_acceleration_tactics?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUpdateWithoutDealInput = {
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    communication_type?: StringFieldUpdateOperationsInput | string
    contact_address?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUpdateWithoutDealInput = {
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagsUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: TagsUpdatetagInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationHistoryUpdateWithoutDealInput = {
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationHistoryUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationHistoryUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    slack?: JsonNullValueInput | InputJsonValue
    email?: JsonNullValueInput | InputJsonValue
    deal_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealInsightsUpdateWithoutDealInput = {
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealInsightsUncheckedUpdateWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealInsightsUncheckedUpdateManyWithoutDealInput = {
    id?: IntFieldUpdateOperationsInput | number
    kpi_insights?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityCreateManyParticipantInput = {
    id?: number
    personality_traits: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PersonalityUpdateWithoutParticipantInput = {
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityUncheckedUpdateManyWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    personality_traits?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskExplanationCreateManyRiskInput = {
    id?: number
    budget_risk_explanation: string
    timeline_risk_explanation: string
    churn_risk_explanation: string
    deal_risk_summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RiskExplanationUpdateWithoutRiskInput = {
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskExplanationUncheckedUpdateWithoutRiskInput = {
    id?: IntFieldUpdateOperationsInput | number
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskExplanationUncheckedUpdateManyWithoutRiskInput = {
    id?: IntFieldUpdateOperationsInput | number
    budget_risk_explanation?: StringFieldUpdateOperationsInput | string
    timeline_risk_explanation?: StringFieldUpdateOperationsInput | string
    churn_risk_explanation?: StringFieldUpdateOperationsInput | string
    deal_risk_summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineCreateManyActivity_metricsInput = {
    id?: number
    event_date: Date | string
    event_type: string
    event_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TimelineUpdateWithoutActivity_metricsInput = {
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateWithoutActivity_metricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineUncheckedUpdateManyWithoutActivity_metricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: StringFieldUpdateOperationsInput | string
    event_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
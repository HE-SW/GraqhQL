import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type IMutation = {
  __typename?: "Mutation";
  createTodo?: Maybe<ITodo>;
  deleteTodo?: Maybe<ITodo>;
  updateTodo?: Maybe<ITodo>;
};

export type IMutationCreateTodoArgs = {
  title: Scalars["String"]["input"];
};

export type IMutationDeleteTodoArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IMutationUpdateTodoArgs = {
  checked?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type IQuery = {
  __typename?: "Query";
  todo?: Maybe<ITodo>;
  todos?: Maybe<Array<Maybe<ITodo>>>;
};

export type IQueryTodoArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ITodo = {
  __typename?: "Todo";
  checked?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Todo: ResolverTypeWrapper<ITodo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  Todo: ITodo;
};

export type IMutationResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Mutation"] = IResolversParentTypes["Mutation"],
> = {
  createTodo?: Resolver<
    Maybe<IResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    RequireFields<IMutationCreateTodoArgs, "title">
  >;
  deleteTodo?: Resolver<
    Maybe<IResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    Partial<IMutationDeleteTodoArgs>
  >;
  updateTodo?: Resolver<
    Maybe<IResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    Partial<IMutationUpdateTodoArgs>
  >;
};

export type IQueryResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Query"] = IResolversParentTypes["Query"],
> = {
  todo?: Resolver<
    Maybe<IResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    Partial<IQueryTodoArgs>
  >;
  todos?: Resolver<
    Maybe<Array<Maybe<IResolversTypes["Todo"]>>>,
    ParentType,
    ContextType
  >;
};

export type ITodoResolvers<
  ContextType = any,
  ParentType extends
    IResolversParentTypes["Todo"] = IResolversParentTypes["Todo"],
> = {
  checked?: Resolver<
    Maybe<IResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<IResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<Maybe<IResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  Todo?: ITodoResolvers<ContextType>;
};

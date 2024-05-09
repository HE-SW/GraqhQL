import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type IMutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<ITodo>;
  removeTodo?: Maybe<IResult>;
  updateTodo?: Maybe<ITodo>;
};


export type IMutationCreateTodoArgs = {
  checked: Scalars['Boolean']['input'];
  text: Scalars['String']['input'];
};


export type IMutationRemoveTodoArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationUpdateTodoArgs = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type IQuery = {
  __typename?: 'Query';
  allTodos?: Maybe<Array<Maybe<ITodo>>>;
};

export type IResult = {
  __typename?: 'result';
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type ITodo = {
  __typename?: 'todo';
  checked: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  result: ResolverTypeWrapper<IResult>;
  todo: ResolverTypeWrapper<ITodo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  result: IResult;
  todo: ITodo;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createTodo?: Resolver<Maybe<IResolversTypes['todo']>, ParentType, ContextType, RequireFields<IMutationCreateTodoArgs, 'checked' | 'text'>>;
  removeTodo?: Resolver<Maybe<IResolversTypes['result']>, ParentType, ContextType, RequireFields<IMutationRemoveTodoArgs, 'id'>>;
  updateTodo?: Resolver<Maybe<IResolversTypes['todo']>, ParentType, ContextType, RequireFields<IMutationUpdateTodoArgs, 'id'>>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  allTodos?: Resolver<Maybe<Array<Maybe<IResolversTypes['todo']>>>, ParentType, ContextType>;
};

export type IResultResolvers<ContextType = any, ParentType extends IResolversParentTypes['result'] = IResolversParentTypes['result']> = {
  result?: Resolver<Maybe<IResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITodoResolvers<ContextType = any, ParentType extends IResolversParentTypes['todo'] = IResolversParentTypes['todo']> = {
  checked?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  result?: IResultResolvers<ContextType>;
  todo?: ITodoResolvers<ContextType>;
};


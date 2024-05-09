import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  removeTodo?: Maybe<Result>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  checked: Scalars['Boolean']['input'];
  text: Scalars['String']['input'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTodoArgs = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  allTodos?: Maybe<Array<Maybe<Todo>>>;
};

export type Result = {
  __typename?: 'result';
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type Todo = {
  __typename?: 'todo';
  checked: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', allTodos?: Array<{ __typename?: 'todo', text: string, id: string, checked: boolean } | null> | null };

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String']['input'];
  checked: Scalars['Boolean']['input'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'todo', id: string, text: string, checked: boolean } | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  checked?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'todo', id: string, text: string, checked: boolean } | null };

export type RemoveTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveTodoMutation = { __typename?: 'Mutation', removeTodo?: { __typename?: 'result', result?: boolean | null } | null };


export const GetTodosDocument = gql`
    query getTodos {
  allTodos {
    text
    id
    checked
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export function useGetTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosSuspenseQueryHookResult = ReturnType<typeof useGetTodosSuspenseQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const AddTodoDocument = gql`
    mutation addTodo($text: String!, $checked: Boolean!) {
  createTodo(text: $text, checked: $checked) {
    id
    text
    checked
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      text: // value for 'text'
 *      checked: // value for 'checked'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: ID!, $text: String, $checked: Boolean) {
  updateTodo(id: $id, text: $text, checked: $checked) {
    id
    text
    checked
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *      checked: // value for 'checked'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const RemoveTodoDocument = gql`
    mutation removeTodo($id: ID!) {
  removeTodo(id: $id) {
    result
  }
}
    `;
export type RemoveTodoMutationFn = Apollo.MutationFunction<RemoveTodoMutation, RemoveTodoMutationVariables>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTodoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTodoMutation, RemoveTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(RemoveTodoDocument, options);
      }
export type RemoveTodoMutationHookResult = ReturnType<typeof useRemoveTodoMutation>;
export type RemoveTodoMutationResult = Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<RemoveTodoMutation, RemoveTodoMutationVariables>;
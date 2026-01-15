// @ts-nocheck
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
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
  DateTimeISO: { input: any; output: any; }
};

export type Attempt = {
  __typename?: 'Attempt';
  duration: Scalars['Float']['output'];
  finished_at: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  passed: Scalars['Boolean']['output'];
  percentage_success: Scalars['Float']['output'];
  quiz: Quiz;
  score: Scalars['Float']['output'];
  started_at: Scalars['DateTimeISO']['output'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  quizzes: Array<Quiz>;
};

export type Choice = {
  __typename?: 'Choice';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_correct: Scalars['Boolean']['output'];
  question: Question;
};

export type Decade = {
  __typename?: 'Decade';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  quizzes: Array<Quiz>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  pseudo: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttempt: Attempt;
  login: Scalars['String']['output'];
  logout: Scalars['Boolean']['output'];
  signup: User;
};


export type MutationCreateAttemptArgs = {
  duration: Scalars['Float']['input'];
  quizId: Scalars['Float']['input'];
  score: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSignupArgs = {
  data: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  attempt?: Maybe<Attempt>;
  attemptsByQuiz: Array<Attempt>;
  categories: Array<Category>;
  decades: Array<Decade>;
  getPublicQuizzes: Array<Quiz>;
  lastAttemptByQuiz?: Maybe<Attempt>;
  me?: Maybe<User>;
  privateQuizzes: Array<Quiz>;
  quiz?: Maybe<Quiz>;
  quizzes: Array<Quiz>;
  users: Array<User>;
};


export type QueryAttemptArgs = {
  id: Scalars['Float']['input'];
};


export type QueryAttemptsByQuizArgs = {
  quizId: Scalars['Float']['input'];
};


export type QueryLastAttemptByQuizArgs = {
  quizId: Scalars['Float']['input'];
};


export type QueryPrivateQuizzesArgs = {
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  decadeId?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryQuizArgs = {
  id: Scalars['Float']['input'];
};

export type Question = {
  __typename?: 'Question';
  choices: Array<Choice>;
  id: Scalars['Int']['output'];
  quiz: Quiz;
  title: Scalars['String']['output'];
};

export type Quiz = {
  __typename?: 'Quiz';
  age_range: Scalars['String']['output'];
  category: Category;
  created_at: Scalars['DateTimeISO']['output'];
  decade: Decade;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  is_draft: Scalars['Boolean']['output'];
  is_public: Scalars['Boolean']['output'];
  liked_by: Array<User>;
  questions: Array<Question>;
  time_limit: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};

export type Reward = {
  __typename?: 'Reward';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  users: Array<User>;
};

export type SignupInput = {
  age_range: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pseudo: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  age_range: Scalars['String']['output'];
  attempts?: Maybe<Array<Attempt>>;
  avatar: Scalars['String']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_admin: Scalars['Boolean']['output'];
  liked_quizzes: Array<Quiz>;
  pseudo: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  won_rewards?: Maybe<Array<Reward>>;
};

export type CreateAttemptMutationVariables = Exact<{
  quizId: Scalars['Float']['input'];
  score: Scalars['Float']['input'];
  duration: Scalars['Float']['input'];
}>;


export type CreateAttemptMutation = { __typename?: 'Mutation', createAttempt: { __typename?: 'Attempt', id: number, score: number, percentage_success: number, duration: number, passed: boolean, started_at: any, finished_at: any, quiz: { __typename?: 'Quiz', id: number, title: string, image: string } } };

export type LastAttemptByQuizQueryVariables = Exact<{
  quizId: Scalars['Float']['input'];
}>;


export type LastAttemptByQuizQuery = { __typename?: 'Query', lastAttemptByQuiz?: { __typename?: 'Attempt', id: number, score: number, percentage_success: number, duration: number, passed: boolean, started_at: any, finished_at: any, quiz: { __typename?: 'Quiz', id: number, title: string, image: string } } | null };

export type AttemptQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type AttemptQuery = { __typename?: 'Query', attempt?: { __typename?: 'Attempt', id: number, score: number, percentage_success: number, duration: number, passed: boolean, started_at: any, finished_at: any, quiz: { __typename?: 'Quiz', id: number, title: string, image: string } } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type DecadesQueryVariables = Exact<{ [key: string]: never; }>;


export type DecadesQuery = { __typename?: 'Query', decades: Array<{ __typename?: 'Decade', id: number, name: string }> };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, avatar: string, pseudo: string, age_range: string, attempts?: Array<{ __typename?: 'Attempt', id: number }> | null, won_rewards?: Array<{ __typename?: 'Reward', id: number }> | null } | null };

export type QuizPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type QuizPublicQuery = { __typename?: 'Query', getPublicQuizzes: Array<{ __typename?: 'Quiz', id: number, title: string, description: string, image: string, age_range: string, time_limit: number, category: { __typename?: 'Category', id: number, name: string }, decade: { __typename?: 'Decade', id: number, name: string } }> };

export type QuizQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type QuizQuery = { __typename?: 'Query', quiz?: { __typename?: 'Quiz', id: number, title: string, description: string, image: string, questions: Array<{ __typename?: 'Question', id: number, title: string, choices: Array<{ __typename?: 'Choice', id: number, description: string, is_correct: boolean }> }> } | null };

export type PrivateQuizzesQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  decadeId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type PrivateQuizzesQuery = { __typename?: 'Query', privateQuizzes: Array<{ __typename?: 'Quiz', id: number, title: string, description: string, image: string, time_limit: number, category: { __typename?: 'Category', id: number, name: string }, decade: { __typename?: 'Decade', id: number, name: string } }> };

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: number } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, email: string }> };


export const CreateAttemptDocument = gql`
    mutation CreateAttempt($quizId: Float!, $score: Float!, $duration: Float!) {
  createAttempt(quizId: $quizId, score: $score, duration: $duration) {
    id
    score
    percentage_success
    duration
    passed
    started_at
    finished_at
    quiz {
      id
      title
      image
    }
  }
}
    `;
export type CreateAttemptMutationFn = ApolloReactCommon.MutationFunction<CreateAttemptMutation, CreateAttemptMutationVariables>;

/**
 * __useCreateAttemptMutation__
 *
 * To run a mutation, you first call `useCreateAttemptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAttemptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAttemptMutation, { data, loading, error }] = useCreateAttemptMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      score: // value for 'score'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useCreateAttemptMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAttemptMutation, CreateAttemptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAttemptMutation, CreateAttemptMutationVariables>(CreateAttemptDocument, options);
      }
export type CreateAttemptMutationHookResult = ReturnType<typeof useCreateAttemptMutation>;
export type CreateAttemptMutationResult = ApolloReactCommon.MutationResult<CreateAttemptMutation>;
export type CreateAttemptMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAttemptMutation, CreateAttemptMutationVariables>;
export const LastAttemptByQuizDocument = gql`
    query LastAttemptByQuiz($quizId: Float!) {
  lastAttemptByQuiz(quizId: $quizId) {
    id
    score
    percentage_success
    duration
    passed
    started_at
    finished_at
    quiz {
      id
      title
      image
    }
  }
}
    `;

/**
 * __useLastAttemptByQuizQuery__
 *
 * To run a query within a React component, call `useLastAttemptByQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastAttemptByQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastAttemptByQuizQuery({
 *   variables: {
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useLastAttemptByQuizQuery(baseOptions: ApolloReactHooks.QueryHookOptions<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables> & ({ variables: LastAttemptByQuizQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables>(LastAttemptByQuizDocument, options);
      }
export function useLastAttemptByQuizLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables>(LastAttemptByQuizDocument, options);
        }
export function useLastAttemptByQuizSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables>(LastAttemptByQuizDocument, options);
        }
export type LastAttemptByQuizQueryHookResult = ReturnType<typeof useLastAttemptByQuizQuery>;
export type LastAttemptByQuizLazyQueryHookResult = ReturnType<typeof useLastAttemptByQuizLazyQuery>;
export type LastAttemptByQuizSuspenseQueryHookResult = ReturnType<typeof useLastAttemptByQuizSuspenseQuery>;
export type LastAttemptByQuizQueryResult = ApolloReactCommon.QueryResult<LastAttemptByQuizQuery, LastAttemptByQuizQueryVariables>;
export const AttemptDocument = gql`
    query Attempt($id: Float!) {
  attempt(id: $id) {
    id
    score
    percentage_success
    duration
    passed
    started_at
    finished_at
    quiz {
      id
      title
      image
    }
  }
}
    `;

/**
 * __useAttemptQuery__
 *
 * To run a query within a React component, call `useAttemptQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttemptQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAttemptQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAttemptQuery(baseOptions: ApolloReactHooks.QueryHookOptions<AttemptQuery, AttemptQueryVariables> & ({ variables: AttemptQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AttemptQuery, AttemptQueryVariables>(AttemptDocument, options);
      }
export function useAttemptLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AttemptQuery, AttemptQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AttemptQuery, AttemptQueryVariables>(AttemptDocument, options);
        }
export function useAttemptSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<AttemptQuery, AttemptQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<AttemptQuery, AttemptQueryVariables>(AttemptDocument, options);
        }
export type AttemptQueryHookResult = ReturnType<typeof useAttemptQuery>;
export type AttemptLazyQueryHookResult = ReturnType<typeof useAttemptLazyQuery>;
export type AttemptSuspenseQueryHookResult = ReturnType<typeof useAttemptSuspenseQuery>;
export type AttemptQueryResult = ApolloReactCommon.QueryResult<AttemptQuery, AttemptQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const DecadesDocument = gql`
    query Decades {
  decades {
    id
    name
  }
}
    `;

/**
 * __useDecadesQuery__
 *
 * To run a query within a React component, call `useDecadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDecadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDecadesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDecadesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DecadesQuery, DecadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DecadesQuery, DecadesQueryVariables>(DecadesDocument, options);
      }
export function useDecadesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DecadesQuery, DecadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DecadesQuery, DecadesQueryVariables>(DecadesDocument, options);
        }
export function useDecadesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<DecadesQuery, DecadesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<DecadesQuery, DecadesQueryVariables>(DecadesDocument, options);
        }
export type DecadesQueryHookResult = ReturnType<typeof useDecadesQuery>;
export type DecadesLazyQueryHookResult = ReturnType<typeof useDecadesLazyQuery>;
export type DecadesSuspenseQueryHookResult = ReturnType<typeof useDecadesSuspenseQuery>;
export type DecadesQueryResult = ApolloReactCommon.QueryResult<DecadesQuery, DecadesQueryVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const ProfileDocument = gql`
    query Profile {
  me {
    id
    avatar
    pseudo
    age_range
    attempts {
      id
    }
    won_rewards {
      id
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = ApolloReactCommon.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const QuizPublicDocument = gql`
    query QuizPublic {
  getPublicQuizzes {
    id
    title
    description
    image
    age_range
    time_limit
    category {
      id
      name
    }
    decade {
      id
      name
    }
  }
}
    `;

/**
 * __useQuizPublicQuery__
 *
 * To run a query within a React component, call `useQuizPublicQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizPublicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizPublicQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuizPublicQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QuizPublicQuery, QuizPublicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<QuizPublicQuery, QuizPublicQueryVariables>(QuizPublicDocument, options);
      }
export function useQuizPublicLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QuizPublicQuery, QuizPublicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<QuizPublicQuery, QuizPublicQueryVariables>(QuizPublicDocument, options);
        }
export function useQuizPublicSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<QuizPublicQuery, QuizPublicQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<QuizPublicQuery, QuizPublicQueryVariables>(QuizPublicDocument, options);
        }
export type QuizPublicQueryHookResult = ReturnType<typeof useQuizPublicQuery>;
export type QuizPublicLazyQueryHookResult = ReturnType<typeof useQuizPublicLazyQuery>;
export type QuizPublicSuspenseQueryHookResult = ReturnType<typeof useQuizPublicSuspenseQuery>;
export type QuizPublicQueryResult = ApolloReactCommon.QueryResult<QuizPublicQuery, QuizPublicQueryVariables>;
export const QuizDocument = gql`
    query Quiz($id: Float!) {
  quiz(id: $id) {
    id
    title
    description
    image
    questions {
      id
      title
      choices {
        id
        description
        is_correct
      }
    }
  }
}
    `;

/**
 * __useQuizQuery__
 *
 * To run a query within a React component, call `useQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQuizQuery(baseOptions: ApolloReactHooks.QueryHookOptions<QuizQuery, QuizQueryVariables> & ({ variables: QuizQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<QuizQuery, QuizQueryVariables>(QuizDocument, options);
      }
export function useQuizLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QuizQuery, QuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<QuizQuery, QuizQueryVariables>(QuizDocument, options);
        }
export function useQuizSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<QuizQuery, QuizQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<QuizQuery, QuizQueryVariables>(QuizDocument, options);
        }
export type QuizQueryHookResult = ReturnType<typeof useQuizQuery>;
export type QuizLazyQueryHookResult = ReturnType<typeof useQuizLazyQuery>;
export type QuizSuspenseQueryHookResult = ReturnType<typeof useQuizSuspenseQuery>;
export type QuizQueryResult = ApolloReactCommon.QueryResult<QuizQuery, QuizQueryVariables>;
export const PrivateQuizzesDocument = gql`
    query PrivateQuizzes($categoryId: Float, $decadeId: Float) {
  privateQuizzes(categoryId: $categoryId, decadeId: $decadeId) {
    id
    title
    description
    image
    time_limit
    category {
      id
      name
    }
    decade {
      id
      name
    }
  }
}
    `;

/**
 * __usePrivateQuizzesQuery__
 *
 * To run a query within a React component, call `usePrivateQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrivateQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrivateQuizzesQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      decadeId: // value for 'decadeId'
 *   },
 * });
 */
export function usePrivateQuizzesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>(PrivateQuizzesDocument, options);
      }
export function usePrivateQuizzesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>(PrivateQuizzesDocument, options);
        }
export function usePrivateQuizzesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>(PrivateQuizzesDocument, options);
        }
export type PrivateQuizzesQueryHookResult = ReturnType<typeof usePrivateQuizzesQuery>;
export type PrivateQuizzesLazyQueryHookResult = ReturnType<typeof usePrivateQuizzesLazyQuery>;
export type PrivateQuizzesSuspenseQueryHookResult = ReturnType<typeof usePrivateQuizzesSuspenseQuery>;
export type PrivateQuizzesQueryResult = ApolloReactCommon.QueryResult<PrivateQuizzesQuery, PrivateQuizzesQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($data: SignupInput!) {
  signup(data: $data) {
    id
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
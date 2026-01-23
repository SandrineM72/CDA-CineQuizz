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

export type AnswerInput = {
  choiceId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
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

export type AttemptsSuccessRate = {
  __typename?: 'AttemptsSuccessRate';
  failed: Scalars['Int']['output'];
  passed: Scalars['Int']['output'];
  successRate: Scalars['Float']['output'];
  total: Scalars['Int']['output'];
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

export type GlobalStats = {
  __typename?: 'GlobalStats';
  ageDistribution: Array<UserAgeDistribution>;
  attemptsSuccessRate: AttemptsSuccessRate;
  averageScore: Scalars['Float']['output'];
  newUsers: NewUsersStats;
  userGrowth: Array<UserGrowthData>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  pseudo: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttempt: Attempt;
  deleteQuiz: Scalars['String']['output'];
  deleteUser: Scalars['String']['output'];
  login: User;
  logout: Scalars['Boolean']['output'];
  signup: User;
  updateChoice: Scalars['String']['output'];
  updateQuestion: Scalars['String']['output'];
  updateQuiz: Scalars['String']['output'];
};


export type MutationCreateAttemptArgs = {
  answers: Array<AnswerInput>;
  duration: Scalars['Int']['input'];
  quizId: Scalars['Int']['input'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateChoiceArgs = {
  data: UpdateChoiceInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateQuestionArgs = {
  data: UpdateQuestionInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateQuizArgs = {
  data: UpdateQuizInput;
  id: Scalars['Int']['input'];
};

export type NewUsersStats = {
  __typename?: 'NewUsersStats';
  month: Scalars['Int']['output'];
  week: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  allQuizzes: Array<Quiz>;
  attempt?: Maybe<Attempt>;
  attemptsByQuiz: Array<Attempt>;
  categories: Array<Category>;
  decades: Array<Decade>;
  getPublicQuizzes: Array<Quiz>;
  globalStats: GlobalStats;
  lastAttemptByQuiz?: Maybe<Attempt>;
  me?: Maybe<User>;
  nextPublicQuiz?: Maybe<Quiz>;
  nextQuiz?: Maybe<Quiz>;
  privateQuizzes: Array<Quiz>;
  quiz?: Maybe<Quiz>;
  quizzes: Array<Quiz>;
  users: Array<User>;
};


export type QueryAttemptArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAttemptsByQuizArgs = {
  quizId: Scalars['Float']['input'];
};


export type QueryLastAttemptByQuizArgs = {
  quizId: Scalars['Float']['input'];
};


export type QueryNextPublicQuizArgs = {
  currentQuizId: Scalars['Int']['input'];
};


export type QueryNextQuizArgs = {
  currentQuizId: Scalars['Int']['input'];
};


export type QueryPrivateQuizzesArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  decadeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQuizArgs = {
  id: Scalars['Int']['input'];
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
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pseudo: Scalars['String']['input'];
};

export type UpdateChoiceInput = {
  description: Scalars['String']['input'];
  is_correct: Scalars['Boolean']['input'];
};

export type UpdateQuestionInput = {
  title: Scalars['String']['input'];
};

export type UpdateQuizInput = {
  age_range: Scalars['String']['input'];
  category: ObjectId;
  decade: ObjectId;
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  is_draft: Scalars['Boolean']['input'];
  is_public: Scalars['Boolean']['input'];
  time_limit: Scalars['Float']['input'];
  title: Scalars['String']['input'];
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

export type UserAgeDistribution = {
  __typename?: 'UserAgeDistribution';
  age_range: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  formattedLabel: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
};

export type UserGrowthData = {
  __typename?: 'UserGrowthData';
  count: Scalars['Int']['output'];
  period: Scalars['String']['output'];
};

export type AllQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuizzesQuery = { __typename?: 'Query', allQuizzes: Array<{ __typename?: 'Quiz', id: number, title: string, description: string, age_range: string, time_limit: number, is_public: boolean, is_draft: boolean, category: { __typename?: 'Category', id: number, name: string }, decade: { __typename?: 'Decade', id: number, name: string }, liked_by: Array<{ __typename?: 'User', id: number }>, questions: Array<{ __typename?: 'Question', id: number }> }> };

export type AttemptQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AttemptQuery = { __typename?: 'Query', attempt?: { __typename?: 'Attempt', id: number, score: number, percentage_success: number, passed: boolean, duration: number, quiz: { __typename?: 'Quiz', id: number } } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type CreateAttemptMutationVariables = Exact<{
  quizId: Scalars['Int']['input'];
  answers: Array<AnswerInput> | AnswerInput;
  duration: Scalars['Int']['input'];
}>;


export type CreateAttemptMutation = { __typename?: 'Mutation', createAttempt: { __typename?: 'Attempt', id: number } };

export type DecadesQueryVariables = Exact<{ [key: string]: never; }>;


export type DecadesQuery = { __typename?: 'Query', decades: Array<{ __typename?: 'Decade', id: number, name: string }> };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: string };

export type DeleteQuizMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteQuizMutation = { __typename?: 'Mutation', deleteQuiz: string };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: number, pseudo: string, email: string, is_admin: boolean, age_range: string, avatar: string, created_at: any, updated_at: any } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number } | null };

export type NextPublicQuizQueryVariables = Exact<{
  currentQuizId: Scalars['Int']['input'];
}>;


export type NextPublicQuizQuery = { __typename?: 'Query', nextPublicQuiz?: { __typename?: 'Quiz', id: number } | null };

export type NextQuizQueryVariables = Exact<{
  currentQuizId: Scalars['Int']['input'];
}>;


export type NextQuizQuery = { __typename?: 'Query', nextQuiz?: { __typename?: 'Quiz', id: number } | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, avatar: string, pseudo: string, is_admin: boolean, age_range: string, attempts?: Array<{ __typename?: 'Attempt', id: number }> | null, won_rewards?: Array<{ __typename?: 'Reward', id: number }> | null } | null };

export type QuizPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type QuizPublicQuery = { __typename?: 'Query', getPublicQuizzes: Array<{ __typename?: 'Quiz', id: number, title: string, description: string, image: string, age_range: string, time_limit: number, category: { __typename?: 'Category', id: number, name: string }, decade: { __typename?: 'Decade', id: number, name: string } }> };

export type QuizQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type QuizQuery = { __typename?: 'Query', quiz?: { __typename?: 'Quiz', id: number, title: string, description: string, image: string, time_limit: number, is_public: boolean, is_draft: boolean, age_range: string, category: { __typename?: 'Category', id: number, name: string }, decade: { __typename?: 'Decade', id: number, name: string }, questions: Array<{ __typename?: 'Question', id: number, title: string, choices: Array<{ __typename?: 'Choice', id: number, description: string, is_correct: boolean }> }> } | null };

export type PrivateQuizzesQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  decadeId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PrivateQuizzesQuery = { __typename?: 'Query', privateQuizzes: Array<{ __typename?: 'Quiz', id: number, title: string, description: string, image: string, time_limit: number, category: { __typename?: 'Category', id: number, name: string }, decade: { __typename?: 'Decade', id: number, name: string } }> };

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: number } };

export type GlobalStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalStatsQuery = { __typename?: 'Query', globalStats: { __typename?: 'GlobalStats', averageScore: number, newUsers: { __typename?: 'NewUsersStats', week: number, month: number, year: number }, ageDistribution: Array<{ __typename?: 'UserAgeDistribution', age_range: string, count: number, percentage: number, formattedLabel: string }>, userGrowth: Array<{ __typename?: 'UserGrowthData', period: string, count: number }>, attemptsSuccessRate: { __typename?: 'AttemptsSuccessRate', passed: number, failed: number, successRate: number, total: number } } };

export type UpdateChoiceMutationVariables = Exact<{
  updateChoiceId: Scalars['Int']['input'];
  data: UpdateChoiceInput;
}>;


export type UpdateChoiceMutation = { __typename?: 'Mutation', updateChoice: string };

export type UpdateQuestionMutationVariables = Exact<{
  data: UpdateQuestionInput;
  id: Scalars['Int']['input'];
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', updateQuestion: string };

export type UpdateQuizMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateQuizInput;
}>;


export type UpdateQuizMutation = { __typename?: 'Mutation', updateQuiz: string };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, email: string, pseudo: string, age_range: string, avatar: string, is_admin: boolean, created_at: any }> };


export const AllQuizzesDocument = gql`
    query allQuizzes {
  allQuizzes {
    id
    title
    description
    age_range
    time_limit
    is_public
    is_draft
    category {
      id
      name
    }
    decade {
      id
      name
    }
    liked_by {
      id
    }
    questions {
      id
    }
  }
}
    `;

/**
 * __useAllQuizzesQuery__
 *
 * To run a query within a React component, call `useAllQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllQuizzesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllQuizzesQuery, AllQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllQuizzesQuery, AllQuizzesQueryVariables>(AllQuizzesDocument, options);
      }
export function useAllQuizzesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllQuizzesQuery, AllQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllQuizzesQuery, AllQuizzesQueryVariables>(AllQuizzesDocument, options);
        }
export function useAllQuizzesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<AllQuizzesQuery, AllQuizzesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<AllQuizzesQuery, AllQuizzesQueryVariables>(AllQuizzesDocument, options);
        }
export type AllQuizzesQueryHookResult = ReturnType<typeof useAllQuizzesQuery>;
export type AllQuizzesLazyQueryHookResult = ReturnType<typeof useAllQuizzesLazyQuery>;
export type AllQuizzesSuspenseQueryHookResult = ReturnType<typeof useAllQuizzesSuspenseQuery>;
export type AllQuizzesQueryResult = ApolloReactCommon.QueryResult<AllQuizzesQuery, AllQuizzesQueryVariables>;
export const AttemptDocument = gql`
    query Attempt($id: Int!) {
  attempt(id: $id) {
    id
    score
    percentage_success
    passed
    duration
    quiz {
      id
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
export const CreateAttemptDocument = gql`
    mutation CreateAttempt($quizId: Int!, $answers: [AnswerInput!]!, $duration: Int!) {
  createAttempt(quizId: $quizId, answers: $answers, duration: $duration) {
    id
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
 *      answers: // value for 'answers'
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
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Int!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($id: Int!) {
  deleteQuiz(id: $id)
}
    `;
export type DeleteQuizMutationFn = ApolloReactCommon.MutationFunction<DeleteQuizMutation, DeleteQuizMutationVariables>;

/**
 * __useDeleteQuizMutation__
 *
 * To run a mutation, you first call `useDeleteQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizMutation, { data, loading, error }] = useDeleteQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuizMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteQuizMutation, DeleteQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteQuizMutation, DeleteQuizMutationVariables>(DeleteQuizDocument, options);
      }
export type DeleteQuizMutationHookResult = ReturnType<typeof useDeleteQuizMutation>;
export type DeleteQuizMutationResult = ApolloReactCommon.MutationResult<DeleteQuizMutation>;
export type DeleteQuizMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteQuizMutation, DeleteQuizMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    id
    pseudo
    email
    is_admin
    age_range
    avatar
    created_at
    updated_at
  }
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
export const MeDocument = gql`
    query Me {
  me {
    id
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const NextPublicQuizDocument = gql`
    query NextPublicQuiz($currentQuizId: Int!) {
  nextPublicQuiz(currentQuizId: $currentQuizId) {
    id
  }
}
    `;

/**
 * __useNextPublicQuizQuery__
 *
 * To run a query within a React component, call `useNextPublicQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextPublicQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextPublicQuizQuery({
 *   variables: {
 *      currentQuizId: // value for 'currentQuizId'
 *   },
 * });
 */
export function useNextPublicQuizQuery(baseOptions: ApolloReactHooks.QueryHookOptions<NextPublicQuizQuery, NextPublicQuizQueryVariables> & ({ variables: NextPublicQuizQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<NextPublicQuizQuery, NextPublicQuizQueryVariables>(NextPublicQuizDocument, options);
      }
export function useNextPublicQuizLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NextPublicQuizQuery, NextPublicQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<NextPublicQuizQuery, NextPublicQuizQueryVariables>(NextPublicQuizDocument, options);
        }
export function useNextPublicQuizSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<NextPublicQuizQuery, NextPublicQuizQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<NextPublicQuizQuery, NextPublicQuizQueryVariables>(NextPublicQuizDocument, options);
        }
export type NextPublicQuizQueryHookResult = ReturnType<typeof useNextPublicQuizQuery>;
export type NextPublicQuizLazyQueryHookResult = ReturnType<typeof useNextPublicQuizLazyQuery>;
export type NextPublicQuizSuspenseQueryHookResult = ReturnType<typeof useNextPublicQuizSuspenseQuery>;
export type NextPublicQuizQueryResult = ApolloReactCommon.QueryResult<NextPublicQuizQuery, NextPublicQuizQueryVariables>;
export const NextQuizDocument = gql`
    query NextQuiz($currentQuizId: Int!) {
  nextQuiz(currentQuizId: $currentQuizId) {
    id
  }
}
    `;

/**
 * __useNextQuizQuery__
 *
 * To run a query within a React component, call `useNextQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useNextQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextQuizQuery({
 *   variables: {
 *      currentQuizId: // value for 'currentQuizId'
 *   },
 * });
 */
export function useNextQuizQuery(baseOptions: ApolloReactHooks.QueryHookOptions<NextQuizQuery, NextQuizQueryVariables> & ({ variables: NextQuizQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<NextQuizQuery, NextQuizQueryVariables>(NextQuizDocument, options);
      }
export function useNextQuizLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NextQuizQuery, NextQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<NextQuizQuery, NextQuizQueryVariables>(NextQuizDocument, options);
        }
export function useNextQuizSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<NextQuizQuery, NextQuizQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<NextQuizQuery, NextQuizQueryVariables>(NextQuizDocument, options);
        }
export type NextQuizQueryHookResult = ReturnType<typeof useNextQuizQuery>;
export type NextQuizLazyQueryHookResult = ReturnType<typeof useNextQuizLazyQuery>;
export type NextQuizSuspenseQueryHookResult = ReturnType<typeof useNextQuizSuspenseQuery>;
export type NextQuizQueryResult = ApolloReactCommon.QueryResult<NextQuizQuery, NextQuizQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  me {
    id
    avatar
    pseudo
    is_admin
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
    query Quiz($id: Int!) {
  quiz(id: $id) {
    id
    title
    description
    image
    time_limit
    is_public
    is_draft
    age_range
    category {
      id
      name
    }
    decade {
      id
      name
    }
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
    query PrivateQuizzes($categoryId: Int, $decadeId: Int) {
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
export const GlobalStatsDocument = gql`
    query GlobalStats {
  globalStats {
    newUsers {
      week
      month
      year
    }
    ageDistribution {
      age_range
      count
      percentage
      formattedLabel
    }
    userGrowth {
      period
      count
    }
    attemptsSuccessRate {
      passed
      failed
      successRate
      total
    }
    averageScore
  }
}
    `;

/**
 * __useGlobalStatsQuery__
 *
 * To run a query within a React component, call `useGlobalStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GlobalStatsQuery, GlobalStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GlobalStatsQuery, GlobalStatsQueryVariables>(GlobalStatsDocument, options);
      }
export function useGlobalStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GlobalStatsQuery, GlobalStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GlobalStatsQuery, GlobalStatsQueryVariables>(GlobalStatsDocument, options);
        }
export function useGlobalStatsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GlobalStatsQuery, GlobalStatsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GlobalStatsQuery, GlobalStatsQueryVariables>(GlobalStatsDocument, options);
        }
export type GlobalStatsQueryHookResult = ReturnType<typeof useGlobalStatsQuery>;
export type GlobalStatsLazyQueryHookResult = ReturnType<typeof useGlobalStatsLazyQuery>;
export type GlobalStatsSuspenseQueryHookResult = ReturnType<typeof useGlobalStatsSuspenseQuery>;
export type GlobalStatsQueryResult = ApolloReactCommon.QueryResult<GlobalStatsQuery, GlobalStatsQueryVariables>;
export const UpdateChoiceDocument = gql`
    mutation UpdateChoice($updateChoiceId: Int!, $data: UpdateChoiceInput!) {
  updateChoice(id: $updateChoiceId, data: $data)
}
    `;
export type UpdateChoiceMutationFn = ApolloReactCommon.MutationFunction<UpdateChoiceMutation, UpdateChoiceMutationVariables>;

/**
 * __useUpdateChoiceMutation__
 *
 * To run a mutation, you first call `useUpdateChoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChoiceMutation, { data, loading, error }] = useUpdateChoiceMutation({
 *   variables: {
 *      updateChoiceId: // value for 'updateChoiceId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateChoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateChoiceMutation, UpdateChoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateChoiceMutation, UpdateChoiceMutationVariables>(UpdateChoiceDocument, options);
      }
export type UpdateChoiceMutationHookResult = ReturnType<typeof useUpdateChoiceMutation>;
export type UpdateChoiceMutationResult = ApolloReactCommon.MutationResult<UpdateChoiceMutation>;
export type UpdateChoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateChoiceMutation, UpdateChoiceMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($data: UpdateQuestionInput!, $id: Int!) {
  updateQuestion(data: $data, id: $id)
}
    `;
export type UpdateQuestionMutationFn = ApolloReactCommon.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, options);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = ApolloReactCommon.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const UpdateQuizDocument = gql`
    mutation UpdateQuiz($id: Int!, $data: UpdateQuizInput!) {
  updateQuiz(id: $id, data: $data)
}
    `;
export type UpdateQuizMutationFn = ApolloReactCommon.MutationFunction<UpdateQuizMutation, UpdateQuizMutationVariables>;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateQuizMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateQuizMutation, UpdateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(UpdateQuizDocument, options);
      }
export type UpdateQuizMutationHookResult = ReturnType<typeof useUpdateQuizMutation>;
export type UpdateQuizMutationResult = ApolloReactCommon.MutationResult<UpdateQuizMutation>;
export type UpdateQuizMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateQuizMutation, UpdateQuizMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    pseudo
    age_range
    avatar
    is_admin
    created_at
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

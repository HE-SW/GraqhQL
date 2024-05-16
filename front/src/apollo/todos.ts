import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query todos {
        todos {
            title
            id
            checked
        }
    }
`;

export const ADD_TODO = gql`
    mutation createTodo($title: String!  ) {
        createTodo(title: $title) {
            id
            title
            checked
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation updateTodo($id: ID!, $title: String, $checked: Boolean) {
        updateTodo(id: $id, title: $title, checked: $checked) {
            id
            title
            checked
        }
    }
`;

export const REMOVE_TODO = gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
            title
            checked
        }
    }
`;

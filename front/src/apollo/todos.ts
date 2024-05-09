import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query getTodos {
        allTodos {
            text
            id
            checked
        }
    }
`;

export const ADD_TODO = gql`
    mutation addTodo($text: String!, $checked: Boolean!) {
        createTodo(text: $text, checked: $checked) {
            id
            text
            checked
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation updateTodo($id: ID!, $text: String, $checked: Boolean) {
        updateTodo(id: $id, text: $text, checked: $checked) {
            id
            text
            checked
        }
    }
`;

export const REMOVE_TODO = gql`
    mutation removeTodo($id: ID!) {
        removeTodo(id: $id) {
            result
        }
    }
`;

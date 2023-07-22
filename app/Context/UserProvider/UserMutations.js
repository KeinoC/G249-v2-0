import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation createUser($email: String!, $userId: ID!) {
        createUser(email: $email, userId: $userId) {
            userId
            id
            email
        }
    }
`;

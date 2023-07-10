import { useQuery, gql } from "@apollo/client";

export const GET_FULL_USERS_QUERY = gql`
{
    users {
        id
        role
        username
        firstName
        lastName
        email
        phone
        dob
        address
        profileImageUrl
        profileImage
        joinedDate
        events {
            type
            date
            status
            notes
            },
    }
}
`


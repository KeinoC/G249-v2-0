import { useQuery, gql } from "@apollo/client";

export const GET_FULL_EVENTS_QUERY = gql`
{
    events {
    id
    type
    date
    status
    notes
    userId
    }
}
`


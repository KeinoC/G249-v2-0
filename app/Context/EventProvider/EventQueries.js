import { useQuery, gql } from "@apollo/client";

export const GET_FULL_EVENTS_QUERY = gql`
{
    getAllEvents {
    id
    type
    date
    status
    notes
    userId
    }
}
`


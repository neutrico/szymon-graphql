import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Club {
    _id: ID!
    club_id: String!
    club_code: String!
    name: String!
    domestic_competition_id: String!
    total_market_value: String!
    squad_size: String!
    average_age: String!
    foreigners_number: String!
    foreigners_percentage: String!
    national_team_players: String!
    stadium_name: String!
    stadium_seats: String!
    net_transfer_record: String!
    coach_name: String!
    url: String!
  }

  type Player {
    _id: ID!
    player_id: Int
    name: String!
    current_club_id: Int!
    current_club_name: String!
    country_of_citizenship: String!
    country_of_birth: String!
    city_of_birth: String!
    date_of_birth: String!
    position: String!
    sub_position: String!
    foot: String!
    height_in_cm: Int!
    market_value_in_eur: String!
    highest_market_value_in_eur: Int!
    agent_name: String!
    contract_expiration_date: String!
    current_club_domestic_competition_id: String!
    first_name: String!
    last_name: String!
    player_code: String!
    image_url: String!
    last_season: Int!
    url: String!
  }

  type PlayerValuation {
    _id: ID!
    datetime: String!
    dateweek: String!
    player_id: Int
    current_club_id: Int!
    market_value_in_eur: Int!
    player_club_domestic_competition_id: String!
  }

  type Query {
    getClubs: [Club!]!
    getClub(id: ID!): Club!
    getPlayers: [Player!]!
    getPlayer(id: ID!): Player!
    getPlayerValuations: [PlayerValuation!]!
    getPlayerValuation(id: ID!): PlayerValuation!
  }

  type Mutation {
    createPlayer(
      name: String!
      position: String!
      highest_market_value_in_eur: Int!
    ): Player!
  }
`

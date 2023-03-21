import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { PlayerModel } from './models/players';
import { ClubModel } from './models/clubs'
import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql} from 'apollo-server'

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};


main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const PlayerTC = composeWithMongoose(PlayerModel);
const ClubTC = composeWithMongoose(ClubModel);

PlayerTC.addRelation('club', {
  resolver: () => ClubTC.getResolver('findById'),
  prepareArgs: {
    _id: (source) => source.club_id,
  },
  projection: { current_club_id: true },
});

const Query = {
  players: PlayerTC.getResolver('findMany'),
  player: PlayerTC.getResolver('findById'),
  clubs: ClubTC.getResolver('findMany'),
  club: ClubTC.getResolver('findById'),
  playersWithClub: async (_, { clubId }) => {
    const players = await PlayerModel.find({ club_id: clubId });
    const club = await ClubModel.findById(clubId);
    return { club, players };
  },
};

const resolvers = {
  Query: {
    playersWithClub: async (_, { clubId }) => {
      const players = await PlayerModel.find({ club_id: clubId });
      const club = await ClubModel.findById(clubId);
      return { club, players };
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs: [
    PlayerTC.getType().gqType,
    ClubTC.getType().gqType,
    gql`
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

      type Query {
        players: [Player]
        player(_id: String!): Player
        clubs: [Club]
        club(_id: String!): Club
        playersWithClub(clubId: String!): PlayersWithClubResponse
      }

      type PlayersWithClubResponse {
        club: Club
        players: [Player]
      }
    `,
  ],
  resolvers: {
    Query,
  },
});

const server = new ApolloServer({ schema, context: () => ({ ClubModel, PlayerModel }), })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

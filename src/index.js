import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { Player as PlayerModel } from './models/players';
import { PlayerValuation as PlayerValuationModel } from './models/playerValuations';
import { Club as ClubModel } from './models/clubs';
import Clubs from './dataSources/clubs';
import Players from './dataSources/players';
import PlayerValuations from './dataSources/playerValuations';

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  clubs: new Clubs(ClubModel),
  playerValuations: new PlayerValuations(PlayerValuationModel),
  players: new Players(PlayerModel),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

export const resolvers = {
  Query: {
    getClubs: async (_, _args, { dataSources: { clubs } }) => {
      return clubs.getClubs();
    },
    getClub: async (_, { id }, { dataSources: { clubs } }) => {
      return clubs.getClub(id);
    },
    getPlayers: async (_, _args, { dataSources: { players } }) => {
      return players.getPlayers();
    },
    getPlayer: async (_, { id }, { dataSources: { players } }) => {
      return players.getPlayer(id);
    },
    getPlayerValuations: async (_, _args, { dataSources: { playerValuations } }) => {
      return playerValuations.getPlayerValuations();
    },
    getPlayerValuation: async (_, { id }, { dataSources: { playerValuations } }) => {
      return playerValuations.getPlayerValuation(id);
    }
  }
}

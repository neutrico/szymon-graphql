import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class PlayerValuations extends MongoDataSource {
  async getPlayerValuations() {
    return await this.model.find();
  }

  async getPlayerValuation(id) {
    return await this.findOneById(id);
  }
}

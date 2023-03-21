import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Players extends MongoDataSource {
  async getPlayers() {
    return await this.model.find();
  }

  async getPlayer(id) {
    return await this.findOneById(id);
  }

}

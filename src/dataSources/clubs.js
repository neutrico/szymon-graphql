import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Clubs extends MongoDataSource {
  async getClubs() {
    return await this.model.find();
  }

  async getClub(id) {
    return await this.findOneById(id);
  }

}

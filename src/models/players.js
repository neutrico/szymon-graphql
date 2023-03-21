import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  player_id: Number,
  name: String,
  // current_club_id: Number,
  current_club_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
  current_club_name: String,
  country_of_citizenship: String,
  country_of_birth: String,
  city_of_birth: String,
  date_of_birth: String,
  position: String,
  sub_position: String,
  foot: String,
  height_in_cm: Number,
  market_value_in_eur: String,
  highest_market_value_in_eur: Number,
  agent_name: String,
  contract_expiration_date: String,
  current_club_domestic_competition_id: String,
  first_name: String,
  last_name: String,
  player_code: String,
  image_url: String,
  last_season: Number,
  url: String,
});

export const PlayerModel = mongoose.model("Player", PlayerSchema);

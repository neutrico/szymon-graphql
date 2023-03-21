import mongoose from "mongoose";

const PlayerValuationSchema = new mongoose.Schema({
  date: String,
  datetime: String,
  dateweek: String,
  player_id: Number,
  current_club_id: Number,
  market_value_in_eur: Number,
  player_club_domestic_competition_id: String,
})

export const PlayerValuationModel = mongoose.model("PlayerValuation", PlayerValuationSchema);

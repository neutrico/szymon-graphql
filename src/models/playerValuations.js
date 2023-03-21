import mongoose from "mongoose";

export const PlayerValuation = mongoose.model("PlayerValuation", {
  date: String,
  datetime: String,
  dateweek: String,
  player_id: Number,
  current_club_id: Number,
  market_value_in_eur: Number,
  player_club_domestic_competition_id: String,
});

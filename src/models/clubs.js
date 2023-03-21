import mongoose from "mongoose";

const ClubSchema = new mongoose.Schema({
  club_id: String,
  club_code: String,
  name: String,
  domestic_competition_id: String,
  total_market_value: String,
  squad_size: String,
  average_age: String,
  foreigners_number: String,
  foreigners_percentage: String,
  national_team_players: String,
  stadium_name: String,
  stadium_seats: String,
  net_transfer_record: String,
  coach_name: String,
  url: String,
});

export const ClubModel = mongoose.model("Club", ClubSchema);

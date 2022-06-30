import { database } from "../../db";

export default function json(req, res) {
  return res.status(200).json(database.photos);
}

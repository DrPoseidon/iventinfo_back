const ApiError = require("../error/ApiError");
const { Client, Order } = require("../models/models");

const sequelize = require("../db");
const { QueryTypes } = require("sequelize");
class OperatorController {
  async clientadd(req, res) {
    try {
      const { client_email, client_name, client_phone } = req.body;
      const client = await Client.create({
        client_email,
        client_name,
        client_phone,
      });
      res.sendStatus(202);
    } catch (e) {
      console.log(e);
    }
  }

  async orderadd(req, res) {
    try {
      const {
        event_name,
        event_date,
        event_start_time,
        event_end_time,
        event_people_count,
        event_place,
        quest_id,
        client_id,
        tariff_id,
      } = req.body;
      console.log(req.body);

      await sequelize.query(
        "INSERT INTO orders(event_date, event_start_time, event_end_time, event_people_count, event_place, event_status, quest_id, client_id, tariff_id, event_name)" +
          "VALUES ($event_date, $event_start_time, $event_end_time, $event_people_count, $event_place, $event_status, $quest_id, $client_id, $tariff_id, $event_name)",
        {
          type: QueryTypes.INSERT,
          bind: {
            event_date,
            event_start_time,
            event_end_time,
            event_people_count,
            event_place,
            event_status: "ЗАБРОНИРОВАНО",
            quest_id,
            client_id,
            tariff_id,
            event_name,
          },
        }
      );
      res.sendStatus(202);
    } catch (err) {
      console.log(err);
    }
  }

  async calculation(req, res, next) {}
}

module.exports = new OperatorController();

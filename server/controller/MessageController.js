import MessageServices from '../services/MessageServices';

export default class MessageController {
  static async createMessage(req, res) {
    const userId = req.user.id;
    const data = { ...req.body, userId };
    const { status } = data;
    let response;

    if (status === 'sent') {
      response = await MessageController.sendMessage(data);
    } else {
      response = await MessageController.saveAsDraft(data);
    }
    res.status(201).send(response);
  }

  static async saveAsDraft(data) {
    return MessageServices.saveDraft(data);
  }

  static async sendMessage(data) {
    return MessageServices.sendMessage(data);
  }

  static async getRecievedEmails(req, res) {
    const userId = req.user.id;
    const response = await MessageServices.getRecievedEmails(userId);
    res.status(200).send(response);
  }

  static async getSentEmails(req, res) {
    const userId = req.user.id;
    const response = await MessageServices.getSentEmails(userId);
    res.status(200).send(response);
  }

  static async getUnReadEmails(req, res) {
    const userId = req.user.id;
    const response = await MessageServices.getUnReadEmails(userId);
    res.status(200).send(response);
  }

  static async viewAnInboxMessage(req, res) {
    const userId = req.user.id;
    const { id } = req.params;
    const messageId = id;

    const data = { userId, messageId };
    const response = await MessageServices.viewAnInboxMessage(data);
    if (response.status === 200) {
      res.status(200).send(response);
    } else {
      res.status(404).send(response);
    }
  }

  static async deleteAnInboxMessage(req, res) {
    const userId = req.user.id;
    const { id } = req.params;
    const data = { userId, id };

    const response = await MessageServices.deleteAnInboxMessage(data);
    res.status(202).send(response);
  }
}

"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _MessageServices=_interopRequireDefault(require("../services/MessageServices"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}class MessageController{static async createMessage(req,res){const userId=req.user.id;const data={...req.body,userId};const{status}=data;let response;if(status==='sent'){response=await MessageController.sendMessage(data);}else{response=await MessageController.saveAsDraft(data);}res.status(response.status).send(response);}static async resendMessage(req,res){const userId=req.user.id;const{id}=req.params;const messageId=id;const data={...req.body,userId,messageId};const response=await _MessageServices.default.resendMessage(data);res.status(response.status).send(response);}static async saveAsDraft(data){return _MessageServices.default.saveDraft(data);}static async sendMessage(data){return _MessageServices.default.sendMessage(data);}static async getRecievedEmails(req,res){const userId=req.user.id;const response=await _MessageServices.default.getRecievedEmails(userId);res.status(response.status).send(response);}static async getSentEmails(req,res){const userId=req.user.id;const response=await _MessageServices.default.getSentEmails(userId);res.status(response.status).send(response);}static async getDraftEmails(req,res){const userId=req.user.id;const response=await _MessageServices.default.getDraftEmails(userId);res.status(response.status).send(response);}static async getUnReadEmails(req,res){const userId=req.user.id;const response=await _MessageServices.default.getUnReadEmails(userId);res.status(response.status).send(response);}static async viewAnInboxMessage(req,res){const userId=req.user.id;const{id}=req.params;const messageId=id;const data={userId,messageId};const response=await _MessageServices.default.viewAnInboxMessage(data);res.status(response.status).send(response);}static async viewASentMessage(req,res){const userId=req.user.id;const{id}=req.params;const messageId=id;const data={userId,messageId};const response=await _MessageServices.default.viewASentMessage(data);res.status(response.status).send(response);}static async viewADraftMessage(req,res){const userId=req.user.id;const{id}=req.params;const messageId=id;const data={userId,messageId};const response=await _MessageServices.default.viewADraftMessage(data);res.status(response.status).send(response);}static async deleteAnInboxMessage(req,res){const userId=req.user.id;const{id}=req.params;const data={userId,id};const response=await _MessageServices.default.deleteAnInboxMessage(data);res.status(response.status).send(response);}static async deleteASentMessage(req,res){const userId=req.user.id;const{id}=req.params;const data={userId,id};const response=await _MessageServices.default.deleteASentMessage(data);res.status(response.status).send(response);}static async retractMessage(req,res){const userId=req.user.id;const{id}=req.params;const data={userId,id};const response=await _MessageServices.default.retractMessage(data);res.status(response.status).send(response);}static async deleteADraftMessage(req,res){const userId=req.user.id;const{id}=req.params;const data={userId,id};const response=await _MessageServices.default.deleteADraftMessage(data);res.status(response.status).send(response);}}exports.default=MessageController;
import { StatusCodes } from 'http-status-codes';
import { getGeminiMessage } from '~/services/chatServices';

export const init = (req, res, next) => {
    try {
        if (!req.session.conversation) {
            req.session.conversation = [];
        }
        res.status(StatusCodes.OK).json({
            conversation: req.session.conversation,
        });
    } catch (error) {
        next(error)
    }
}

export const getMessage = async (req, res, next) => {
    try {
        const geminiMessage = await getGeminiMessage(req.session.conversation, req.body.message);
        res.status(StatusCodes.OK).json({
            message: geminiMessage, 
            conversation: req.session.conversation,
        });
    } catch (error) {
        next(error)
    }
}

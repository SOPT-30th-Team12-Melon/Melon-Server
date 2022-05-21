import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";

const tempMessage = "temp message"

const getComment = async (req: Request, res: Response) => {
    try {
        const data = {test:"Test"}
        
        res.status(statusCode.CREATED).send(util.success(statusCode.OK, tempMessage, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const createComment = async (req: Request, res: Response) => {
    try {
        const data = {test:"Test"}
        
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, tempMessage, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    getComment,
    createComment,
}
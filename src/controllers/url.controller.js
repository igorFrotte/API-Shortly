import connection from "../db/database.js";
import { nanoid } from "nanoid";
import { urlSchema } from "../schemas/url.schema.js";

const short = async (req, res) => {
    const { url } = req.body;
    const validation = urlSchema.validate(req.body);

    if (validation.error) {
        const errors = validation.error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    const urlTester = new RegExp(
        '^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i'
    );

    if (!urlTester.test(url)) {
        return res.status(422).send('URL inválida!');
    } 

    const userId = res.locals.userId;
    const shortUrl = nanoid();

    try {
        await connection.query(
            'INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3);',
            [url, shortUrl, userId]
        );
        
        return res.status(201).send( {shortUrl} );
    } catch (error) {
        res.status(500).send(error.message);
    } 
};

const f1 = async (req, res) => {

};

const f2 = async (req, res) => {

};

const f3 = async (req, res) => {

};

const f4 = async (req, res) => {

};

const f5 = async (req, res) => {

};

export { short };

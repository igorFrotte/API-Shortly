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

const getShort = async (req, res) => {
    const id = req.params.id;

    try {    
        const url = await connection.query(
            'SELECT id, "shortUrl", url FROM urls WHERE id = $1;',
            [id]
        );

        if (!url.rows[0]) {
           return res.status(404).send(); 
        }

        return res.status(200).send(url.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const redirect = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const url= await connection.query(
            'SELECT id, url, "visitCount" FROM urls WHERE "shortUrl" = $1;',
            [shortUrl]
        );

        if (!url.rows[0]) {
            return res.status(404).send();  
        }

        const upCount = url.rows[0].visitCount + 1;

        await connection.query(
            'UPDATE urls SET "visitCount" = $1 WHERE id = $2;',
            [upCount, url.rows[0].id]
        );

        return res.redirect(url.rows[0].url);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const f3 = async (req, res) => {

};

const f4 = async (req, res) => {

};

const f5 = async (req, res) => {

};

export { short, getShort, redirect };

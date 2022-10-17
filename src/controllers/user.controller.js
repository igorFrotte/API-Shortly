import connection from "../db/database.js";

const listUser = async (req, res) => {
    const { userId, userName } = res.locals;

    try {
        const urls = await connection.query(
            'SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE "userId" = $1;',
            [userId]
        );

        const count = await connection.query(
            'SELECT COUNT("visitCount") as counter from urls WHERE "userId" = $1;',
            [userId]
        );

        const obj = {
            id: userId,
            name: userName,
            visitCount: Number(count.rows[0].counter),
            shortenedUrls: []
        };

        urls.rows.map( e => {
            obj.shortenedUrls.push({
                id: e.id,
                shortUrl: e.shortUrl,
                url: e.url,
                visitCount: e.visitCount,
            });
        });

        return res.status(200).send(obj);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const f5 = async (req, res) => {

};

export { listUser };
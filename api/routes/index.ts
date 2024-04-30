import express, { Express, Request, Response } from 'express';

const routes = (server: Express) => {
    server.route('/').get((req: Request, res: Response) => {
        res.status(200).send({ titulo: 'express' });
    });

    server.use(
        express.json(),
    );
};

export default routes;

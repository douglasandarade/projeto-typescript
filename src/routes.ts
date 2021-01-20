import {Request, Response} from 'express';
import createUser from './services/CreateUser';



export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'douglas@lockey.com.br',
        password: '123456',
        techs: [
            'Node.js',
            {title: 'Javasript', experience: 10}
        ],
    });

    return res.json(user);
}
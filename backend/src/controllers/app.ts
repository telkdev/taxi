import { Request, Response } from 'express';

export class AppController {
  healthCheck(req: Request, res: Response) {
    console.log('helth')
    res.send('hi!');
  }
}
import { Controller, Get, Post, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('history')
export class AppController {
  data: any;
  constructor(private readonly appService: AppService) {
    this.data = [
      {
        time: '2023-4-3 19:02:18 UTC',
        distance: '1000m'
      },
      {
        time: '2023-4-2 19:02:18 UTC',
        distance: '1000m'
      },
      {
        time: '2023-4-1 19:02:18 UTC',
        distance: '1000m'
      },
      {
        time: '2023-3-31 19:02:18 UTC',
        distance: '1000m'
      }
    ]
  }

  @Get()
  getAllHistory() {
    return this.data;
  }

  @Post()
  postNewData(@Req() req: Request, @Res() res: Response) {
    this.data = [{
      time: req.body.time,
      distance: req.body.distance,
    }].concat([...this.data]);

    return res.status(200).send();
  }
}

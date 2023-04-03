import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { CreateHistoryDto } from 'src/dto/history.dto';

@Controller('api/history')
export class HistoryController {
  data: any;
  constructor() {
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
  postNewData(@Body() req: CreateHistoryDto, @Res() res: Response) {
    this.data = [{
      time: req.time,
      distance: req.distance,
    }].concat([...this.data]);

    return res.status(200).send();
  }
}

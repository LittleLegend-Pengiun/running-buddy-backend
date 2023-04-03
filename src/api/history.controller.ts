import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiTags('Running history')
  @ApiResponse({
    status: 200,
    description: "Return all run history"
  })
  getAllHistory() {
    return this.data;
  }

  @Post()
  @ApiTags('Running history')
  @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
  postNewData(@Body() req: CreateHistoryDto, @Res() res: Response) {
    this.data = [{
      time: req.time,
      distance: req.distance,
    }].concat([...this.data]);

    return res.status(200).send();
  }
}

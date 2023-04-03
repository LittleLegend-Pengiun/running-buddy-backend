import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return 'Hello World! Please come to our /api page for more details';
  }
}

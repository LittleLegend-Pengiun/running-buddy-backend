import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryDto {
    @ApiProperty({
        description: "Time complete the run",
        example: "2023-4-3 19:02:18 UTC"
    })
    time: string;

    @ApiProperty({
        description: "The total distance of the run",
        example: "2000m"
    })
    distance: string;
}
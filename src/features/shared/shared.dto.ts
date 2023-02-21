import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ description: 'Error code' })
  code: number;
  @ApiProperty({ description: 'Error message' })
  message: string;
}

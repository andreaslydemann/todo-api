import { ApiProperty } from '@nestjs/swagger';

export class TodoResponse {
  @ApiProperty({ description: 'Name of the account' })
  name: string;
  @ApiProperty({ description: 'ReferenceID for the account (IBAN/VIBAN/BBAN)' })
  referenceId: string;
  @ApiProperty({ description: 'UUID of the account' })
  id: string;
  @ApiProperty({
    description: 'Percentage of total holding, all accounts summarized',
  })
  percentage: number;
  @ApiProperty({
    description: 'Amount of FIAT currently available on the account',
  })
  amount: number;
}

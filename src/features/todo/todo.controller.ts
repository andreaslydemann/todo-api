import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ErrorResponse } from '../shared/shared.dto';
import { TodoResponse } from './todo.dto';

export const todos = [
  {
    amount: 1278.17,
    name: 'Euro',
    id: '876fdb81-4169-47c2-8706-8d1a763f989c',
    percentage: 50,
    referenceId: 'DK329545844556112',
  },
  {
    amount: 10595.95,
    name: 'Danish Krone',
    id: '6fc48749-5c57-4580-8c0a-79152c519ce5',
    percentage: 20,
    referenceId: 'DK329545844556111',
  },
];

@Controller('todos')
@ApiTags('todos')
@ApiBearerAuth()
export class TodoController {
  @Get()
  @ApiOperation({
    summary:
      "Get all todos for current user. Todos returned depends on the current user's access and roles.",
  })
  @ApiOkResponse({
    description: 'List of todos',
    type: [TodoResponse],
  })
  @ApiUnauthorizedResponse({
    description: 'Current user not authorized to fetch todos',
    type: ErrorResponse,
  })
  async getTodos(): Promise<TodoResponse[]> {
    return todos;
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Returns one todo based on an ID',
  })
  @ApiOkResponse({
    description: 'One todo',
    type: TodoResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Current user not authorized to fetch transactions',
    type: ErrorResponse,
  })
  async getTodoById(@Param('id') id: string): Promise<TodoResponse> {
    return todos[0];
  }
}

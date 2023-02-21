import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ErrorResponse } from '../shared/shared.dto';
import { TodoResponse } from './todo.dto';
import { todos } from './todo.mock';

@Controller('todos')
@ApiTags('todos')
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
    description: 'Current user not authorized to fetch todos',
    type: ErrorResponse,
  })
  async getTodoById(@Param('id') id: string): Promise<TodoResponse> {
    return todos.find((todo) => todo.id === id);
  }
}

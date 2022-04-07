import { Controller, Get } from '@nestjs/common'
import { TodoDataAccessService } from './todo-data-access.service'

@Controller('todo')
export class TodoDataAccessController {

  constructor(private todoDataAccessService: TodoDataAccessService) {}

  @Get()
  getTodos() {
    return this.todoDataAccessService.getTodos()
  }
  
}

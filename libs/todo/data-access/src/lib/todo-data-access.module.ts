import { Module } from '@nestjs/common'
import { TodoDataAccessController } from './todo-data-access.controller'
import { TodoDataAccessService } from './todo-data-access.service'

@Module({
  controllers: [TodoDataAccessController],
  providers: [TodoDataAccessService],
  exports: [TodoDataAccessService],
})
export class TodoDataAccessModule {}

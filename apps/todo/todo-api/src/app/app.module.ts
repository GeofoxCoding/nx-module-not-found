import { Module } from '@nestjs/common'
import { TodoDataAccessController, TodoDataAccessModule, TodoDataAccessService } from '@wibas/todo-data-access'


@Module({
  imports: [TodoDataAccessModule],
  controllers: [TodoDataAccessController],
  providers: [TodoDataAccessService],
})
export class AppModule {}

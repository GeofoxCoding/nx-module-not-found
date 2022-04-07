import { Test } from '@nestjs/testing'
import { TodoDataAccessController } from './todo-data-access.controller'
import { TodoDataAccessService } from './todo-data-access.service'

describe('TodoDataAccessController', () => {
  let controller: TodoDataAccessController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TodoDataAccessService],
      controllers: [TodoDataAccessController],
    }).compile()

    controller = module.get(TodoDataAccessController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})

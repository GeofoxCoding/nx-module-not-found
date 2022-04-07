import { Test } from '@nestjs/testing'
import { TodoDataAccessService } from './todo-data-access.service'

describe('TodoDataAccessService', () => {
  let service: TodoDataAccessService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TodoDataAccessService],
    }).compile()

    service = module.get(TodoDataAccessService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})

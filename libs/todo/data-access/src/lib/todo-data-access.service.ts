import { Injectable } from '@nestjs/common'
import { Todo } from './todo'

@Injectable()
export class TodoDataAccessService {

    getTodos(): Todo[] {
        return [
            new Todo(1, "Shop some foods", new Date("2022-05-12")),
            new Todo(2, "Sword training", new Date("2022-05-13T18:30:00"), ["Don't forget the sword"]),
            new Todo(3, "Birthday Peter", new Date("2022-05-15"))
        ];
    }

}

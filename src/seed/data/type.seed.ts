import { v4 as uuid } from 'uuid';
import { Type } from 'src/type/entities/type.entity';

export const TYPE_SEED:Type[] = [
  {
    id:uuid(),
    name:'All',
    createdAt: new Date().getTime(),
  },
  {
    id:uuid(),
    name:'Basic',
    createdAt: new Date().getTime(),
  },
]
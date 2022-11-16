import { v4 as uuid } from 'uuid';
import { Clinic } from "src/clinic/interfaces/clinic.interface";

export const CLINIC_SEED:Clinic[] = [
  {
    id:uuid(),
    name:'UPA',
    address:'Antartida 2230',
    type:'All',
  },
  {
    id:uuid(),
    name:'Hospital',
    address:'Felix Pagola 1530',
    type:'All',
  },
  {
    id:uuid(),
    name:'Covepam',
    address:'Espana 2230',
    type:'Basic',
  },
]
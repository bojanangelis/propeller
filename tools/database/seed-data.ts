import { User } from '../../libs/api/generated/generated-prisma-types/src'

export const USERS_SEED_DATA: User[] = [
  {
    id: 1,
    email: 'test@propeller.com',
    name: 'Administrator Propeller',
    password: '$2b$10$ZMgX99QDfbcPPOFMf4ywpuV9p8NUaZ1A6yaoq.lKecUfpJHNqbMB6'
  }
]

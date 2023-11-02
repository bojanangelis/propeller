import { PrismaClient } from '@prisma/client'
import { seedCategories, seedProducts, seedUsers } from './seed-data'
// import { USERS_SEED_DATA } from './seed-data'
const prisma = new PrismaClient()

async function main() {
  await seedUsers()
  await seedCategories()
  await seedProducts()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

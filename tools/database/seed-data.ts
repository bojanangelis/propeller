import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function seedUsers() {
  // Creating a user
  await prisma.user.create({
    data: {
      email: 'bojanangjeleskine1w1@gmail.com',
      name: 'Bojan Angjeleski',
      password: '$2a$10$7kD2dH/oxhlwUPI7RYjhSOTcavRgEDMs9UYTTT.2Rh6YnISXgVVPu',
      address: '123 Main St',
      role: 'User'
    }
  })

  console.log('User seed completed!')
}

export async function seedProducts() {
  const categories = await prisma.category.findMany()
  const electronicsCategory = categories.find((c) => c.name === 'Electronics')
  const clothingCategory = categories.find((c) => c.name === 'Clothing')

  const products = [
    {
      name: 'Smartphone',
      price: 999,
      discountPrice: 799,
      categoryId: electronicsCategory?.id,
      images: [
        { title: 'Front View', imagePath: 'https://picsum.photos/200/300?random=1' },
        { title: 'Back View', imagePath: 'https://picsum.photos/200/300?random=2' }
      ]
    },
    {
      name: 'Laptop',
      price: 1500,
      discountPrice: 1200,
      categoryId: electronicsCategory?.id,
      images: [
        { title: 'Front View', imagePath: 'https://picsum.photos/200/300?random=1' },
        { title: 'Back View', imagePath: 'https://picsum.photos/200/300?random=2' }
      ]
    },
    {
      name: 'T-shirt',
      price: 20,
      discountPrice: 20,
      categoryId: clothingCategory?.id,
      images: [
        { title: 'Front View', imagePath: 'https://picsum.photos/200/300?random=1' },
        { title: 'Back View', imagePath: 'https://picsum.photos/200/300?random=2' }
      ]
    }
  ]

  for (const productData of products) {
    const product = await prisma.product.create({
      data: {
        name: productData.name,
        price: productData.price,
        discountPrice: productData.discountPrice,
        category: {
          connect: { id: productData.categoryId }
        }
      }
    })

    for (const image of productData.images) {
      await prisma.image.create({
        data: {
          title: image.title,
          img: image.imagePath,
          productId: product.id
        }
      })
    }
  }

  console.log('Product seed completed!')
}

export async function seedCategories() {
  const categories = [
    { name: 'Electronics', description: 'Gadgets and electronic devices' },
    { name: 'Clothing', description: 'Fashion and apparel' },
    { name: 'Books', description: 'All kinds of books' },
    { name: 'Furniture', description: 'Furniture for home and office' }
  ]

  const categoryPromises = categories.map((category) => {
    return prisma.category.create({ data: category })
  })

  await Promise.all(categoryPromises)

  console.log('Category seed completed!')
}

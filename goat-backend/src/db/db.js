import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()

// Singleton pattern to ensure only one PrismaClient instance
let prisma

if (!global.prisma) {
  global.prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    // Add connection pooling configuration
    log: ['query', 'info', 'warn', 'error'],
    // Connection pool settings
    __internal: {
      engine: {
        connectionLimit: 5, // Limit concurrent connections
      },
    },
  })
}

prisma = global.prisma

// Handle connection cleanup on app shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

export default prisma

import { MongoClient } from 'mongodb'

let cashedDB

export async function connectToDatabase() {
  if (cashedDB) {
    return cashedDB
  }

  let client = new MongoClient(process.env.MONGODB_URL)

  await client.connect()

  cashedDB = client.db('blogs')

  return cashedDB
}

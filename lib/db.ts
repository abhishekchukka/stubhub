import { sql } from "@vercel/postgres"
import type { Event, Category } from "@/types/event"

export async function getEvents(category?: string, location?: string) {
  try {
    const result = await sql`
      SELECT * FROM events
      WHERE (${category}::text IS NULL OR category = ${category})
      AND (${location}::text IS NULL OR location = ${location})
    `
    return result.rows as Event[]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch events")
  }
}

export async function getCategories() {
  try {
    const result = await sql`SELECT * FROM categories`
    return result.rows as Category[]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch categories")
  }
}


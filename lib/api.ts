import { sql } from "@vercel/postgres";
import type { Event, Category } from "@/types/event";

export async function getEvents() {
  try {
    const result = await sql<Event[]>`
      SELECT * FROM events
      ORDER BY likes DESC
    `;
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

export async function getCategories() {
  try {
    const result = await sql<Category[]>`
      SELECT * FROM categories
      ORDER BY id ASC
    `;
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

// Function to get a single event
export async function getEventById(id: number) {
  try {
    const result = await sql<Event[]>`
      SELECT * FROM events
      WHERE id = ${id}
    `;
    return result.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    return null;
  }
}

// lib/api.ts
import { sql } from "@vercel/postgres";
import type { Event, Category } from "@/types/event";

// Fetch Events from the Database
export async function getEvents(): Promise<Event[]> {
  try {
    const result = await sql<Event[]>`
      SELECT * FROM events
      ORDER BY likes DESC;
    `;
    return result.rows; // Correctly returns Event[]
  } catch (error) {
    console.error("Database Error while fetching events:", error);
    return []; // Returning an empty array ensures the app continues working
  }
}

// Fetch Categories from the Database
export async function getCategories(): Promise<Category[]> {
  try {
    const result = await sql<Category[]>`
      SELECT * FROM categories
      ORDER BY id ASC;
    `;
    return result.rows; // Correctly returns Category[]
  } catch (error) {
    console.error("Database Error while fetching categories:", error);
    return []; // Returning an empty array ensures the app continues working
  }
}

// Fetch a single event by ID
export async function getEventById(id: number): Promise<Event | null> {
  try {
    const result = await sql<Event[]>`
      SELECT * FROM events
      WHERE id = ${id};
    `;
    return result.rows[0] || null; // Returns the first event or null if not found
  } catch (error) {
    console.error("Database Error while fetching event by ID:", error);
    return null; // Returning null in case of error
  }
}

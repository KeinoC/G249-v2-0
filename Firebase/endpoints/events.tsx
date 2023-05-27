import { db } from "../firebase-config";

interface EventData {
  // Define the structure of the event data
  // Modify the properties according to your specific event data structure
  title: string;
  description: string;
  // ...
}

export const createEvent = async (eventData: EventData): Promise<string> => {
  try {
    const docRef = await db.collection("events").add(eventData);
    console.log("Event created with ID:", docRef.id);

    return docRef.id;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const updateEvent = async (
  eventId: string,
  updatedData: Partial<EventData>
): Promise<void> => {
  try {
    const eventRef = db.collection("events").doc(eventId);
    await eventRef.update(updatedData);
    console.log("Event updated with ID:", eventId);
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

export const getAllEvents = async (): Promise<EventData[]> => {
  try {
    const snapshot = await db.collection("events").get();
    const events: EventData[] = snapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as EventData)
    );
    return events;
  } catch (error) {
    console.error("Error retrieving events:", error);
    throw error;
  }
};

export const getEventById = async (eventId: string): Promise<EventData> => {
  try {
    const eventRef = db.collection("events").doc(eventId);
    const doc = await eventRef.get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() } as EventData;
    } else {
      throw new Error("Event not found");
    }
  } catch (error) {
    console.error("Error retrieving event:", error);
    throw error;
  }
};

export const deleteEvent = async (eventId: string): Promise<void> => {
  try {
    const eventRef = db.collection("events").doc(eventId);
    await eventRef.delete();
    console.log("Event deleted with ID:", eventId);
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};

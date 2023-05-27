import { db } from "../firebase-config";



/// create Event
export const createEvent = async (eventData) => {
  try {
    // Add the event data to the "events" collection in Firestore
    const docRef = await db.collection("events").add(eventData);
    console.log("Event created with ID:", docRef.id);

    return docRef.id; // Return the ID of the created event document
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};


/// update Event
export const updateEvent = async (eventId, updatedData) => {
    try {
      const eventRef = db.collection("events").doc(eventId);
      await eventRef.update(updatedData);
      console.log("Event updated with ID:", eventId);
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  };

/// Get All Events
export const getAllEvents = async () => {
    try {
      const snapshot = await db.collection("events").get();
      const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return events;
    } catch (error) {
      console.error("Error retrieving events:", error);
      throw error;
    }
  };

/// Get Event By ID
export const getEventById = async (eventId) => {
    try {
      const eventRef = db.collection("events").doc(eventId);
      const doc = await eventRef.get();
      if (doc.exists) {
        return { id: doc.id, ...doc.data() };
      } else {
        throw new Error("Event not found");
      }
    } catch (error) {
      console.error("Error retrieving event:", error);
      throw error;
    }
  };


/// Delete
  export const deleteEvent = async (eventId) => {
    try {
      const eventRef = db.collection("events").doc(eventId);
      await eventRef.delete();
      console.log("Event deleted with ID:", eventId);
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
  };


import React from "react";
import ExploreClient from "./ExploreClient";
import { eventService } from "@/services/eventService";

import { Event } from "@/types";

export default async function ExplorePage() {
  let initialEvents: Event[] = [];
  try {
    const response = await eventService.getEvents();
    initialEvents = response.data?.items || [];
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }

  return <ExploreClient initialEvents={initialEvents} />;
}

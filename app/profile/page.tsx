import React from "react";
import ProfileClient from "./ProfileClient";
import { userService } from "@/services/userService";

export default async function ProfilePage() {
  let user = null;
  try {
    const response = await userService.getMe();
    user = response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }

  return <ProfileClient user={user} />;
}

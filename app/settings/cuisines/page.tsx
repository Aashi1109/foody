"use client";

import React, { useState } from "react";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Search,
  Check,
  Utensils,
  Apple,
  Leaf,
  Coffee,
  Soup,
  Pizza,
} from "lucide-react";

const cuisines = [
  {
    id: "street",
    name: "Street Food",
    description: "Food trucks, stalls, quick bites",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Pastries, bread, desserts",
    icon: <Apple className="w-5 h-5" />,
  },
  {
    id: "vegan",
    name: "Vegan",
    description: "Plant-based, cruelty-free",
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    id: "italian",
    name: "Italian",
    description: "Pasta, pizza, Mediterranean",
    icon: <Pizza className="w-5 h-5" />,
  },
  {
    id: "seafood",
    name: "Seafood",
    description: "Fish, shellfish, oceanic",
    icon: <Soup className="w-5 h-5" />,
  },
  {
    id: "coffee",
    name: "Coffee & Tea",
    description: "Cafes, roasteries, beverages",
    icon: <Coffee className="w-5 h-5" />,
  },
];

export default function CuisineInterestsPage() {
  const [selected, setSelected] = useState<string[]>(["street", "bakery"]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Cuisine Interests" backHref="/settings" />

      <div className="flex-1 px-6 py-8 space-y-8 overflow-y-auto hide-scrollbar">
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-medium px-4">
            Select the types of cuisine you&apos;re interested in to get
            personalized event recommendations.
          </p>
        </div>

        <div className="relative">
          <Input
            placeholder="Search cuisines..."
            icon={<Search className="w-5 h-5" />}
            className="h-14 rounded-2xl"
          />
        </div>

        <div className="space-y-3">
          {cuisines.map((cuisine) => {
            const isSelected = selected.includes(cuisine.id);
            return (
              <button
                key={cuisine.id}
                onClick={() => toggle(cuisine.id)}
                className={`w-full flex items-center justify-between p-4 rounded-3xl border transition-all active:scale-[0.98] ${
                  isSelected
                    ? "bg-surface border-primary shadow-lg shadow-primary/5"
                    : "bg-surface border-border hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-primary text-surface"
                        : "bg-muted text-primary"
                    }`}
                  >
                    {cuisine.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-primary">
                      {cuisine.name}
                    </h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                      {cuisine.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-primary border-primary"
                      : "bg-muted border-border"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-surface" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border sticky bottom-0">
        <Button size="xl" className="w-full">
          Save Changes
        </Button>
      </div>
    </main>
  );
}

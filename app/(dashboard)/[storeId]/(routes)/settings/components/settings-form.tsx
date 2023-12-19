"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  initialData;
  return (
    <>
      <div className="flex items-center justify-between ">
        <Heading title="Settings" description="Manage Store Preferences" />
        <Button variant="destructive" size="sm" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

// Start at 2:50:32

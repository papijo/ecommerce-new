"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";

export default function Setup() {
  return (
    <div className="p-4">
      <Modal isOpen onClose={() => {}} title="test" description="test">
        Children
      </Modal>
    </div>
  );
}

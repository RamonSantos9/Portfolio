"use client";
import React from "react";
import { cn } from "@/lib/utils";

const PinContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative group pin z-50 cursor-pointer", containerClassName)}>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={cn("p-4 flex justify-start items-start rounded-2xl shadow-[0px 8px 16px rgba(0,0,0,0.4)] border border-white/[0.1] group-hover:pin:border-white/[0.2] transition duration-700 overflow-hidden", className)}>
          <div className="relative z-50">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { PinContainer };

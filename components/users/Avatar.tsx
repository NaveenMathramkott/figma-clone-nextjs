import React from "react";
import styles from "./avatar.module.css";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function Avatar({
  otherStyles,
  name,
}: {
  otherStyles: string;
  name: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={`${styles.avatar} ${styles.otherStyles} h-9 w-9`}
          data-tooltip={name}
        >
          <Image
            src={`https://liveblocks.io/avatars/avatar-${Math.floor(
              Math.random() * 30
            )}.png`}
            fill
            className={styles.avatar_picture}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="border-none bg-primary-grey-200 px-2.5 py-1.5 text-xs">
        {name}
      </TooltipContent>
    </Tooltip>
  );
}

import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursor from "./cursors/LiveCursor";
import { useCallback } from "react";

const Live = () => {
  const others = useOthers();
  const [myPressence, updateMyPressence] = useMyPresence();
  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPressence({ x: x });
    updateMyPressence({ y: y });
  }, []);
  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPressence({ x: x });
    updateMyPressence({ y: y });
  }, []);
  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    updateMyPressence({ x: null });
    updateMyPressence({ y: null });
    updateMyPressence({ message: null });
  }, []);

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className="h-[100vh] w-full flex justify-center items-center border-4 border-cyan-900"
    >
      <h2 className="text-2xl text-white">Figma clone</h2>
      <LiveCursor others={others} />
    </div>
  );
};

export default Live;

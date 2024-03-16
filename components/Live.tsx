import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursor from "./cursors/LiveCursor";
import { useCallback, useEffect, useState } from "react";
import ChatCursor from "./cursors/ChatCursor";
import { CursorMode } from "@/types/type";

const Live = ({
  canvasRef,
  undo,
  redo,
}: {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  undo: () => void;
  redo: () => void;
}) => {
  const others = useOthers();
  const [myPresence, updateMyPresence] = useMyPresence();
  const [cursorState, setCursorState] = useState({ mode: CursorMode.Hidden });

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "/") {
        setCursorState({
          mode: CursorMode.Chat,
          prevMessage: null,
          message: "",
        });
      } else if (e.key === "Escape") {
        updateMyPresence({ message: "" });
        setCursorState({ mode: CursorMode.Hidden });
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
      }
    };

    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [updateMyPresence]);

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ x: x });
    updateMyPresence({ y: y });
  }, []);
  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ x: x });
    updateMyPresence({ y: y });
  }, []);
  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    setCursorState({ mode: CursorMode.Hidden });
    updateMyPresence({ x: null });
    updateMyPresence({ y: null });
    updateMyPresence({ message: null });
  }, []);

  return (
    <div
      id="canvas"
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className="h-[100vh] w-full flex justify-center items-center relative"
    >
      <canvas ref={canvasRef} />
      {myPresence && (
        <ChatCursor
          cursor={myPresence}
          setCursorState={setCursorState}
          cursorState={cursorState}
          updateMyPresence={updateMyPresence}
        />
      )}

      <LiveCursor others={others} />
    </div>
  );
};

export default Live;

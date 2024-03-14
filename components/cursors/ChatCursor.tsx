import { CursorChatProps, CursorMode } from "@/types/type";

const ChatCursor = ({
  cursor,
  setCursorState,
  cursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        prevMessage: cursorState.message,
        message: "",
      });
    } else if (e.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      prevMessage: null,
      message: e.target.value,
    });
  };

  return (
    <div
      className="absolute left-0 top-0"
      style={{
        transform: `translateY(${cursor.y}px) translateX(${cursor.x}px)`,
      }}
    >
      {cursorState.mode === CursorMode.Chat && cursor.x && (
        <div className="absolute left-2 top-5 bg-cyan-500 px-4 py-2 leading-relaxed text-sm  text-white rounded-[20px]">
          {cursorState.prevMessage && <div>{cursorState.prevMessage}</div>}
          <input
            className="z-10 w-40 border-none	bg-transparent text-white placeholder-blue-300 outline-none"
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={cursorState.prevMessage ? "" : "Type anything…"}
            value={cursorState.message}
            maxLength={50}
          />
        </div>
      )}
    </div>
  );
};

export default ChatCursor;

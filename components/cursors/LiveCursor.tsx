import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";

const LiveCursor = ({ others }: { others: any }) => {
  if (!others[0]?.presence?.x || !others[0]?.presence?.y) return null;

  return (
    <Cursor
      key={others[0]?.connectionId}
      color={COLORS[Number(others[0]?.connectionId) % COLORS.length]}
      x={others[0]?.presence.x}
      y={others[0]?.presence.y}
      message={others[0]?.presence.message}
    />
  );
};

export default LiveCursor;

import { useOthers, useSelf } from "@/liveblocks.config";
import { Avatar } from "./Avatar";
import styles from "./index.module.css";
import { useMemo } from "react";

const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  const memmoizedUsers = useMemo(() => {
    return (
      <div className="flex  justify-center items-center gap-1 py-2">
        <div className="flex pl-3">
          {currentUser && (
            <Avatar name="me" otherStyles="border-[3px] border-primary-green" />
          )}
          {users.slice(0, 2).map(({ connectionId }) => {
            console.log("connection id", connectionId);
            return (
              <Avatar
                key={connectionId}
                name={`random users`}
                otherStyles="-ml-3"
              />
            );
          })}

          {hasMoreUsers && (
            <div className={styles.more}>+{users.length - 2}</div>
          )}
        </div>
      </div>
    );
  }, [users.length]);

  return memmoizedUsers;
};

export default ActiveUsers;

import { ModeToggle } from "./dark-mode";
import { HoverCardDemo } from "./matiqueue";

export const NavigationMenuDemo = () => {
  return (
    <div className="flex items-center py-5 pl-5">
      <div className="ml-3">
        <ModeToggle />
      </div>
      <HoverCardDemo />
    </div>
  );
};

import { clientsList } from "helpers/clientLinks";
import { useStateStore } from "helpers/stores/zustand";
import { ClientsGrid } from "./ClientsGrid";
import { MultiBookmarksCard } from "./MultiBookmarksCard";

export const Main = () => {
  const { selected, showMobile } = useStateStore();

  return (
    <>
      <div className="container mx-auto max-w-prose p-10 prose">
        <ClientsGrid
          gridItems={clientsList.filter(
            (c) =>
              c.type === (showMobile ? "mobile" : "desktop") &&
              selected.includes(c.id)
          )}
        />
      </div>
      <MultiBookmarksCard />
    </>
  );
};

import { createHashRouter } from "react-router";
import { QueuesHome } from "./components/QueuesHome";
import { QueueDetails } from "./components/QueueDetails";

export const router = createHashRouter([
  {
    path: "/",
    Component: QueuesHome,
  },
  {
    path: "/queue/:queueId",
    Component: QueueDetails,
  },
]);

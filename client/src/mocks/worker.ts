import { setupWorker } from "msw";
import { UserHandlers } from "./handlers";

export const worker = setupWorker(...UserHandlers);
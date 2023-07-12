import { setupWorker } from "msw";
import { UserRequestHandlers } from "./handlers";

export const worker = setupWorker(...UserRequestHandlers);
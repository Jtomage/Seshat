import { createContext } from "react";

import type { AFileExplorerSerice } from "../Services";

import { FileExplorerServiceEmpty } from "../Services/FileExplorerServiceEmpty";

export const FileExplorerContext = createContext<AFileExplorerSerice>(
  new FileExplorerServiceEmpty()
);

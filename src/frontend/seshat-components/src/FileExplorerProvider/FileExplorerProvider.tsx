import { type ReactNode } from "react";

import type { AFileExplorerSerice } from "../Services";

import { FileExplorerContext } from "./FileExplorerContext";

export interface FileExplorerProviderProps {
  children: ReactNode;
  fileExplorerService: AFileExplorerSerice;
}

export const FileExplorerProvider = ({
  children,
  fileExplorerService,
}: FileExplorerProviderProps) => {
  return (
    <FileExplorerContext.Provider value={fileExplorerService}>
      {children}
    </FileExplorerContext.Provider>
  );
};

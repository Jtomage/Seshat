import { createContext, type ReactNode } from "react";
import type { AFileExplorerSerice } from "./AFileExplorerService";

export const FileExplorerContext = createContext<AFileExplorerSerice>({
  getDirectories: function (path: string): string[] {
    throw new Error("Function not implemented.");
  },
  getFiles: function (path: string, searchPattern: string): string[] {
    throw new Error("Function not implemented.");
  },
});

interface FileExplorerProviderProps {
  fileExplorerService: AFileExplorerSerice;
  children: ReactNode;
}

export const FileExplorerProvider = ({
  fileExplorerService,
  children,
}: FileExplorerProviderProps) => {
  return (
    <FileExplorerContext.Provider value={fileExplorerService}>
      {children}
    </FileExplorerContext.Provider>
  );
};

import { AFileExplorerService } from "./AFileExplorerService";

// An empty version of AFileExplorerService
export class FileExplorerServiceEmpty extends AFileExplorerService {
  getDirectories(_path: string): string[] {
    throw new Error("Get Directories Not implemented");
  }

  getFiles(_path: string, _searchPattern: string): string[] {
    throw new Error("Get File is not implemented");
  }
}

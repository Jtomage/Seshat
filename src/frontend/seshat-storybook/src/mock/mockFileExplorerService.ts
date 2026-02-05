import { AFileExplorerService } from "@seshat/components";

export class MockFileExplorerService extends AFileExplorerService {
  getDirectories(_path: string): string[] {
    throw new Error("Method not implemented");
  }
  getFiles(_path: string, _searchPattern: string): string[] {
    throw new Error("Method not implemented.");
  }
}

export abstract class AFileExplorerSerice {
  // get the directories
  abstract getDirectories(path: string): string[];

  // get the files
  abstract getFiles(path: string, searchPattern: string): string[];
}

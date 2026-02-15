import { SystemItemTree } from "./SystemItemTree";

describe("SystemItemTree Tests", () => {
  describe("Level 1 Test", () => {
    let rootDir = SystemItemTree.createRoot();

    test("level 1 add children directories", () => {
      rootDir = rootDir.addChildren("/", [
        { isDirectory: true, name: "home" },
        { isDirectory: true, name: "usr" },
      ]);

      expect(rootDir.children?.length).toBe(2);
      expect(rootDir.children?.at(0)?.id).toBe("/home");
      expect(rootDir.children?.at(0)?.label).toBe("home");
      expect(rootDir.children?.at(1)?.id).toBe("/usr");
    });

    test("level 1 add child  directory", () => {
      rootDir = rootDir.addChild("/etc", true);

      expect(rootDir.children?.at(2)?.id).toBe("/etc");
    });

    test("level 1 find", () => {
      expect(rootDir.find("/usr")?.id).toBe("/usr");
      expect(rootDir.find("/home")?.id).toBe("/home");
      expect(rootDir.find("/etc")?.id).toBe("/etc");
    });

    describe("Level 2 Test", () => {
      test("level 2 load", () => {
        rootDir = rootDir.addChildren("/home/", [
          { isDirectory: true, name: "think" },
        ]);
        rootDir = rootDir.addChildren("/usr", [
          { isDirectory: true, name: "candy" },
        ]);
        rootDir = rootDir.addChildren("/etc", [
          { isDirectory: true, name: "magic" },
        ]);
        expect(rootDir.children?.at(0)?.children?.at(0)?.id).toBe(
          "/home/think"
        );
        expect(rootDir.children?.at(1)?.children?.at(0)?.id).toBe("/usr/candy");
        expect(rootDir.children?.at(2)?.children?.at(0)?.id).toBe("/etc/magic");
      });

      test("level 2 find", () => {
        expect(rootDir.find("/home/think")?.id).toBe("/home/think");
        expect(rootDir.find("/usr/candy")?.id).toBe("/usr/candy");
        expect(rootDir.find("/etc/magic")?.id).toBe("/etc/magic");
      });

      test("level 2 remove", () => {
        rootDir = rootDir.removeChildren("/usr", ["candy"]);
        rootDir = rootDir.removeChildren("/etc", ["magic"]);

        expect(rootDir.find("/usr/think")).toBeNull();
        expect(rootDir.find("/usr/candy")).toBeNull();
        expect(rootDir.find("/etc/magic")).toBeNull();
      });

      test("level 2 replace", () => {
        rootDir = rootDir.replaceChildren("/usr", [
          { isDirectory: true, name: "red" },
          { isDirectory: true, name: "black" },
          { isDirectory: true, name: "orange" },
          { isDirectory: true, name: "red" },
        ]);
      });
    }); // level 2 describe

    test("level 1 remove", () => {
      rootDir = rootDir.removeChildren("/", ["home"]);
      rootDir = rootDir.removeChildren("/", ["etc"]);

      expect(rootDir.children?.length).toBe(1);
      expect(rootDir.children?.at(0)?.id).toBe("/usr");
      expect(rootDir.children?.at(0)?.label).toBe("usr");
    });
  });
});

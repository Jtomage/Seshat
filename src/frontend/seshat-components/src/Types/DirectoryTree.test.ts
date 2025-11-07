import { type DirectoryInfo, DirectoryTree } from "./DirectoryTree";

describe("DirectoryTree Tests", () => {
  const level1: DirectoryInfo[] = [
    {
      fullPath: "/home",
      name: "home",
    },
    {
      fullPath: "/usr",
      name: "usr",
    },
    {
      fullPath: "/etc",
      name: "etc",
    },
  ];

  const level2_home: DirectoryInfo[] = [
    {
      fullPath: "/home/App",
      name: "App",
    },
    {
      fullPath: "/home/config",
      name: "config",
    },
  ];

  const level2_usr: DirectoryInfo[] = [
    {
      fullPath: "/usr/usr001",
      name: "usr001",
    },
    {
      fullPath: "/usr/usr002",
      name: "usr002",
    },
  ];

  const level3_home: DirectoryInfo[] = [
    {
      fullPath: "/home/App/bin",
      name: "bin",
    },
  ];

  test("Load Data by level", () => {
    const dirTree = new DirectoryTree();

    for (const d of level1) {
      dirTree.root.addChildValue(d);
    }

    let node = dirTree.root.find(({ value }) => value.name === "home");
    expect(node).not.toBeNull();
    expect(node).not.toBeUndefined();
    for (const d of level2_home) {
      node?.addChildValue(d);
    }

    node = dirTree.root.find(({ value }) => value.name === "usr");
    expect(node).not.toBeNull();
    expect(node).not.toBeUndefined();
    for (const d of level2_usr) {
      node?.addChildValue(d);
    }

    node = dirTree.walk("/home/App");
    expect(node).not.toBeNull();
    expect(node).not.toBeUndefined();
    expect(node?.value.fullPath).toBe("/home/App");

    for (const d of level3_home) {
      node?.addChildValue(d);
    }
  });
});

export const directories = [
  {
    childrenDirectories: [
      {
        files: ["config.json"],
        fullPath: "/home/config",
        name: "config",
      },
      {
        chilrenDirectories: [
          {
            files: ["image1.jpeg"],
            fullPath: "/home/customApp/images",
            name: "images",
          },
        ],
        fullPath: "/home/customApp",
        name: "customApp",
      },
    ],
    files: [
      "file1.txt",
      "contract.pdf",
      "config.json",
      "movie.mp4",
      "testData.doc",
    ],
    fullPath: "/home",
    name: "home",
  },
  {
    childrenDirectories: [
      {
        fullPath: "/usr/bin",
        name: "bin",
      },
    ],
    fullPath: "/usr",
    name: "usr",
  },
];

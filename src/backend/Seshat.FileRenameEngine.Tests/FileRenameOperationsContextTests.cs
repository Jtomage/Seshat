using Seshat.FileRenameEngine.AdvanceOperations;
using Seshat.FileRenameEngine.CaseOperations;
using Seshat.FileRenameEngine.Operations;

namespace Seshat.FileRenameEngine.Tests;

public class FileRenameOperationsContextTests
{
  [Fact]
  public void BasicFileRenameOperationContextTest1()
  {
    // Arrange
    var inputText = "Camera_20250320_1322624.jpg";

    var opsList = new List<IFileRenameOperation>()
    {
      new RemovePhrase() { Phrase = "Camera", WholePhrase = false},
      new InsertPhrase() { Phrase = "Vacation", StartIndex = 0 },
      new ReplacePhrase() { OldPhrase = "20250320", NewPhrase="2025-03-20", WholePhrase = false},
      new RemovePhrase() { Phrase = "1322624", WholePhrase = false},
      new ReplacePhrase() { OldPhrase = "_", NewPhrase = " ", WholePhrase = false, AllMatches = true},
      new RemoveAt() { StartIndex = 19, Count = 1}
    };

    var context = new FileRenameOperationsContext()
    {
      Operations = opsList,
    };

    // Act
    var result = context.Execute(inputText);

    // Assert
    Assert.Equal("Vacation 2025-03-20.jpg", result);
  }

  [Fact]
  public void FileRenameOperationTest()
  {
    // Arrange
    var inputText = "Holiday Party - The Cake DCIM_20251206_132224";

    var opsList = new List<IFileRenameOperation>()
    {
      new RemovePhrase() { Phrase = "DCIM_", WholePhrase = false},
      new RemoveAt() { StartIndex= 13, Count= 2},
      new PascalCase() { StartIndex = 0, Count=11},
      new RemoveAt() { StartIndex = 30},
      new SubstringDateTimeFormat() { StartIndex = 22, OldFormat = "yyyyMMdd", NewFormat="yyyy-MM-dd"},
      new MoveText() { StartIndex= 12, Count=9, NewPosition=23}
    };

    var context = new FileRenameOperationsContext()
    {
      Operations = opsList,
    };

    // Act
    var result = context.Execute(inputText);

    // Assert
    Assert.Equal("HolidayParty 2025-12-06 The Cake", result);
  }
}

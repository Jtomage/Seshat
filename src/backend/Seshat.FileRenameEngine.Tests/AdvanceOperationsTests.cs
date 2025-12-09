using Seshat.FileRenameEngine.AdvanceOperations;

namespace Seshat.FileRenameEngine.Tests;

public class AdvanceOperationsTests
{
  [Fact]
  public void SubstringDateFormatTest()
  {
    // Arrange
    var inputText = "DCIM 03082010 123423";
    var cfs = new SubstringDateTimeFormat()
    {
      StartIndex = 5,
      Count = 8,
      OldFormat = "MMddyyyy",
      NewFormat = "yyyy-MM-dd"
    };

    // Act
    var result = cfs.Execute(inputText);

    // Assert
    Assert.Equal("DCIM 2010-03-08 123423", result);
  }

  [Fact]
  public void SubstringDateTimeFormatTest()
  {
    // Arrange
    var inputText = "DCIM 03082010 123423";
    var cfs = new SubstringDateTimeFormat()
    {
      StartIndex = 5,
      OldFormat = "MMddyyyy HHmmss",
      NewFormat = "yyyy-MM-dd hhmm tt"
    };

    // Act
    var result = cfs.Execute(inputText);

    // Assert
    Assert.Equal("DCIM 2010-03-08 1234 PM", result);
  }

  [Fact]
  public void MoveTextOperationTest()
  {
    // Arrange
    var inputText = "Ready Get Set Go";
    var mt = new MoveText()
    {
      StartIndex = 5,
      Count = 4,
      NewPosition = 9
    };

    // Act
    var result = mt.Execute(inputText);

    // Assert
    Assert.Equal("Ready Set Get Go", result);
  }

  [Fact]
  public void InsertFormattedPhraseTest()
  {
    // Arrange
    var inputText = "Holiday Picture";
    var mt = new InsertFormattedPhrase()
    {
      StartIndex = 7,
      Format = " {0:D2}",
      Values = [9]
    };

    // Act
    var result = mt.Execute(inputText);

    // Assert
    Assert.Equal("Holiday 09 Picture", result);
  }
}

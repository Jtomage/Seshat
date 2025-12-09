using Seshat.FileRenameEngine.CaseOperations;

namespace Seshat.FileRenameEngine.Tests;


public class FileRenameCaseTests
{
  [Fact]
  public void LowerCaseTest()
  {
    // Arrange
    var inputText = "ChanGe ThE cAse";
    var lc = new LowerCase();

    // Act
    var result = lc.Execute(inputText);

    // Appeal
    Assert.Equal("change the case", result);
  }

  [Fact]
  public void LowerCaseSubstringTest()
  {
    // Arrange
    var inputText = "ChanGe ThE cAse";
    var lc = new LowerCase()
    {
      StartIndex = 7,
      Count = 3
    };

    // Act
    var result = lc.Execute(inputText);

    // Appeal
    Assert.Equal("ChanGe the cAse", result);
  }

  [Fact]
  public void UpperCaseTest()
  {
    // Arrange
    var inputText = "ChanGe ThE cAse";
    var uc = new UpperCase();

    // Act
    var result = uc.Execute(inputText);

    // Appeal
    Assert.Equal("CHANGE THE CASE", result);
  }

  [Fact]
  public void UpperCaseSubstringTest()
  {
    // Arrange
    var inputText = "ChanGe ThE cAse";
    var uc = new UpperCase()
    {
      StartIndex = 7,
      Count = 3
    };

    // Act
    var result = uc.Execute(inputText);

    // Appeal
    Assert.Equal("ChanGe THE cAse", result);
  }

  [Fact]
  public void PascalCaseTest()
  {
    // Arrange
    var inputText = "test fILe Name";
    var pc = new PascalCase();

    // Act
    var result = pc.Execute(inputText);

    // Assert
    Assert.Equal("TestFileName", result);
  }

  [Fact]
  public void PascalCaseSubstringTest()
  {
    // Arrange
    var inputText = "test File.name Place";
    var pc = new PascalCase()
    {
      StartIndex = 5,
      Count = 9,
    };

    // Act
    var result = pc.Execute(inputText);

    // Assert
    Assert.Equal("test FileName Place", result);
  }

}

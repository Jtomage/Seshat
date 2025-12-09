namespace Seshat.FileRenameEngine.Tests;

public class FileNameValidationTests
{

  [Fact]
  public void InvalidFileNameCharTest()
  {
    // Arrange
    var input = "Bad<FileName> : Quest?";
    FileNameValidator validator = new FileNameValidator();

    // Act
    var result = validator.Validate(input);

    // Assert
    Assert.False(result.IsValid);
    Assert.True(result.Exceptions.Count == 4);

    var charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[0]);
    Assert.True(charEx.InvalidChar == '<');
    Assert.True(charEx.Index == 3);

    charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[1]);
    Assert.True(charEx.InvalidChar == '>');
    Assert.True(charEx.Index == 12);

    charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[2]);
    Assert.True(charEx.InvalidChar == ':');
    Assert.True(charEx.Index == 14);

    charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[3]);
    Assert.True(charEx.InvalidChar == '?');
    Assert.True(charEx.Index == 21);

  }

  [Fact]
  public void InvalidPathCharsTest()
  {
    // may need to make an exception for \ and / 
    // Arrange
    var input = "/this is &\\Bad Path*/test.jpg";
    var validator = new FileNameValidator();

    // Act
    var result = validator.Validate(input);

    // Arrange
    Assert.False(result.IsValid);
    Assert.True(result.Exceptions.Count == 4);

    var charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[0]);
    Assert.True(charEx.InvalidChar == '/');
    Assert.True(charEx.Index == 0);

    charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[1]);
    Assert.True(charEx.InvalidChar == '\\');
    Assert.True(charEx.Index == 10);

    charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[2]);
    Assert.True(charEx.InvalidChar == '*');
    Assert.True(charEx.Index == 19);

    charEx = Assert.IsType<InvalidFileNameCharException>(result.Exceptions[3]);
    Assert.True(charEx.InvalidChar == '/');
    Assert.True(charEx.Index == 20);
  }


}

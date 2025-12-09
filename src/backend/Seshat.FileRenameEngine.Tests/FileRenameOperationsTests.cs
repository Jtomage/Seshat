using Seshat.FileRenameEngine.Operations;

namespace Seshat.FileRenameEngine.Tests;

public class FileRenameOperationsTests
{

  [Fact]
  public void AppendPhrase()
  {
    // Arrange
    var ap = new AppendPhrase()
    {
      Phrase = "append phrase"
    };
    var inputText = "This is a test";

    // Act
    var result = ap.Execute(inputText);

    // Assert
    Assert.Equal(inputText + ap.Phrase, result);
  }

  [Fact]
  public void InsertPhrase()
  {

    // Arrange
    var ip = new InsertPhrase()
    {
      Phrase = "Inserted ",
      StartIndex = 0
    };

    var inputText = "Test Text";

    // Act
    var result = ip.Execute(inputText);

    // Assert
    Assert.Equal(ip.Phrase + inputText, result);

  }

  [Fact]
  public void RemovePhraseWholePhraseIgnoreCase()
  {
    // Arrange
    var rp = new RemovePhrase()
    {
      Phrase = "Test",
    };
    var inputText = "This is a Test Text Testing";

    // Act
    var result = rp.Execute(inputText);

    // Assert
    Assert.Equal("This is a  Text Testing", result);
    Assert.Equal("This is a Test Text Testing", inputText);
  }

  [Fact]
  public void RemovePhraseSubstringCaseSensitiveAllMatches()
  {
    // Arrange
    var rp = new RemovePhrase()
    {
      Phrase = "Test",
      WholePhrase = false,
      IgnoreCase = true,
      AllMatches = true
    };
    var inputText = "Test this, This is a tEST Text Testing";

    // Act
    var result = rp.Execute(inputText);

    // Assert
    Assert.Equal(" this, This is a  Text ing", result);
    Assert.Equal("Test this, This is a tEST Text Testing", inputText);
  }

  [Fact]
  public void ReplacePhraseWholePhraseIgnoreCase()
  {
    // Arrange
    var rp = new ReplacePhrase()
    {
      OldPhrase = "Test",
      NewPhrase = "Robot"
    };
    var inputText = "This is a Test Text Testing";

    // Act
    var result = rp.Execute(inputText);

    // Assert
    Assert.Equal("This is a Robot Text Testing", result);
    Assert.Equal("This is a Test Text Testing", inputText);
  }

  [Fact]
  public void ReplacePhraseSubstringCaseSensitiveAllMatches()
  {
    // Arrange
    var rp = new ReplacePhrase()
    {
      OldPhrase = "Test",
      NewPhrase = "ROBot",
      WholePhrase = false,
      IgnoreCase = true,
      AllMatches = true
    };
    var inputText = "Test this, This is a tEST Text Testing";

    // Act
    var result = rp.Execute(inputText);

    // Assert
    Assert.Equal("ROBot this, This is a ROBot Text ROBoting", result);
    Assert.Equal("Test this, This is a tEST Text Testing", inputText);
  }

  [Fact]
  public void SubstringStartIndex()
  {
    // Arrange
    var substring = new Substring()
    {
      StartIndex = 5
    };
    var inputText = "Substring This";

    // Act
    var result = substring.Execute(inputText);

    // Assert
    Assert.Equal("ring This", result);
    Assert.Equal("Substring This", inputText);
  }

  [Fact]
  public void SubstringStartEndIndex()
  {
    // Arrange
    var substring = new Substring()
    {
      StartIndex = 3,
      Count = 5
    };
    var inputText = "Substring This";

    // Act
    var result = substring.Execute(inputText);

    // Assert
    Assert.Equal("strin", result);
    Assert.Equal("Substring This", inputText);
  }

  [Fact]
  public void RemoveWhiteSpace()
  {
    // Arrange
    var trim = new TrimAllWhiteSpace();
    var inputText = "  what   The      Hell   ";

    // Act
    var result = trim.Execute(inputText);

    // Assert
    Assert.Equal("what The Hell", result);
  }

  [Fact]
  public void RemoteAt()
  {
    // Arrange
    var inputText = "They";
    var rmAt = new RemoveAt() { StartIndex = 2, Count = 1 };

    // Act
    var result = rmAt.Execute(inputText);

    // Assert
    Assert.Equal("Thy", result);
  }

}
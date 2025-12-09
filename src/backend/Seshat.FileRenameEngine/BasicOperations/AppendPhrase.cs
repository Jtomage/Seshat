namespace Seshat.FileRenameEngine.Operations
{
  public class AppendPhrase : IFileRenameOperation
  {
    public required string Phrase { get; set; }

    public string Execute(string input)
    {
      return input + Phrase;
    }
  }
}

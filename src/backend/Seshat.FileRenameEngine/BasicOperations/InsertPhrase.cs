namespace Seshat.FileRenameEngine.Operations
{
  public class InsertPhrase : IFileRenameOperation
  {
    public required string Phrase { get; set; }

    public required int StartIndex { get; set; }

    public string Execute(string input)
    {
      return input.Insert(StartIndex, Phrase);
    }
  }
}

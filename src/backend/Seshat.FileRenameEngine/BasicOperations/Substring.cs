namespace Seshat.FileRenameEngine.Operations
{
  public class Substring : IFileRenameOperation
  {
    public required int StartIndex { get; set; }

    public int? Count { get; set; }

    public string Execute(string input)
    {
      if (Count == null)
        return input.Substring(StartIndex);
      else
        return input.Substring(StartIndex, Count.Value);
    }
  }
}

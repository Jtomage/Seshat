namespace Seshat.FileRenameEngine.Operations
{
  public class RemoveAt : IFileRenameOperation
  {
    public required int StartIndex { get; set; }

    public int? Count { get; set; }

    public string Execute(string input)
    {
      if (Count.HasValue)
        return input.Remove(StartIndex, Count.Value);
      else
        return input.Remove(StartIndex);
    }
  }
}

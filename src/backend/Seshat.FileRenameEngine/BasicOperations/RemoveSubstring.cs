namespace Seshat.FileRenameEngine.Operations
{
  public class RemoveSubstring : IFileRenameOperation
  {
    public required int StartIndex { get; set; }

    public int? EndIndex { get; set; }

    public string Execute(string input)
    {
      if (EndIndex == null)
        return input.Remove(StartIndex);
      else
        return input.Remove(StartIndex, EndIndex.Value - StartIndex);
    }
  }
}

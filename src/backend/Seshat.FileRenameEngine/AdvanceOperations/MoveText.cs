namespace Seshat.FileRenameEngine.AdvanceOperations
{
  public class MoveText : IFileRenameOperation
  {

    public required int StartIndex { get; set; }

    public int? Count { get; set; }

    public required int NewPosition { get; set; }

    public string Execute(string input)
    {

      // Get substring and remove from input
      string substring;
      if (Count.HasValue)
      {
        substring = input.Substring(StartIndex, Count.Value);
        input = input.Remove(StartIndex, Count.Value);
      }
      else
      {
        substring = input.Substring(StartIndex);
        input = input.Remove(StartIndex);
      }

      // insert substring into new position.
      input = input.Insert(NewPosition, substring);
      return input;
    }
  }
}

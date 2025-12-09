namespace Seshat.FileRenameEngine.AdvanceOperations;

public class SubstringDateTimeFormat : IFileRenameOperation
{
  public required int StartIndex { get; set; }

  public int? Count { get; set; }

  public required string OldFormat { get; set; }

  public required string NewFormat { get; set; }

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

    // convert to DateTime
    var dateVal = DateTime.ParseExact(substring, OldFormat, null);

    return input.Insert(StartIndex, dateVal.ToString(NewFormat));
  }
}

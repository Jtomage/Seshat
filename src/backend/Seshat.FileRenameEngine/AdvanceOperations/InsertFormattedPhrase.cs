namespace Seshat.FileRenameEngine.AdvanceOperations
{
  /// <summary>
  /// Main to insert text
  /// </summary>
  public class InsertFormattedPhrase : IFileRenameOperation
  {
    public required string Format { get; set; }

    public Object?[] Values { get; set; } = [];

    public required int StartIndex { get; set; }


    public string Execute(string input)
    {
      var newStr = string.Format(Format, Values);

      return input.Insert(StartIndex, newStr);
    }
  }
}

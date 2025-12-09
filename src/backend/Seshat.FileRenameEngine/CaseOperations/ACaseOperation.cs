using System.Text;

namespace Seshat.FileRenameEngine.CaseOperations
{
  public abstract class ACaseOperation : IFileRenameOperation
  {

    public int? StartIndex { get; set; }

    public int? Count { get; set; }

    /// <summary>
    /// Replace the NON Letter or digit character with
    /// if null will ignore
    /// </summary>
    public string? Seperator { get; set; }

    /// <summary>
    /// Symbols to ignore when parsing
    /// eg. the.World.War
    /// the . will be ignored if added otherwise it will be 
    /// replaced with seperator value
    /// </summary>
    public string IgnoreSymbols { get; set; } = "";

    public virtual string Execute(string input)
    {
      StringBuilder sb = new StringBuilder();

      bool isNewWord = true;

      // set substring changes, should set to all if null values
      var start = StartIndex.HasValue && StartIndex.Value >= 0 ? StartIndex.Value : 0;
      var end = StartIndex.HasValue && Count.HasValue && Count.Value > 0 ?
        StartIndex.Value + Count : input.Length;

      for (int i = 0; i < input.Length; i++)
      {
        char c = input[i];

        // only make changes to those in substring
        if (start <= i && i < end)
        {
          if (!Char.IsLetterOrDigit(c))
          {
            if (!IgnoreSymbols.Contains(c))
            {
              isNewWord = true;
              sb.Append(Seperator != null ? Seperator : c);
            }
          }
          else
          {
            var temp = ConvertCharacter(c, isNewWord, i);
            sb.Append(temp);
            isNewWord = false;
          }
        }
        else
          sb.Append(c);
      }

      return sb.ToString();
    }

    protected abstract string ConvertCharacter(char c, bool isNewWord, int index);


  }
}

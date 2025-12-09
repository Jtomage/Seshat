namespace Seshat.FileRenameEngine.Operations
{
  public class RemovePhrase : IFileRenameOperation
  {

    public required string Phrase { get; set; }

    /// <summary>
    /// Remove all Matches
    /// or will remove first match
    /// </summary>
    public bool AllMatches { get; set; } = false;

    public bool WholePhrase { get; set; } = true;

    public bool IgnoreCase { get; set; } = false;

    public string Execute(string input)
    {

      int startIndex = -1;

      do
      {

        if (IgnoreCase)
          startIndex = input.IndexOf(Phrase, StringComparison.OrdinalIgnoreCase);
        else
          startIndex = input.IndexOf(Phrase);

        // not found exit
        if (startIndex == -1)
          break;

        // match pharse, non partial / substring
        if (WholePhrase)
        {
          var endChar = CharAt(input, startIndex + Phrase.Length);

          if (endChar != null && endChar != ' ')
            continue;
        }

        // remove phrase
        input = input.Remove(startIndex, Phrase.Length);

      } while (AllMatches == true && !String.IsNullOrEmpty(input));

      return input;
    }

    private char? CharAt(string input, int index)
    {
      try
      {
        return input[index];
      }
      catch (IndexOutOfRangeException)
      {
        return null;
      }
    }
  }
}

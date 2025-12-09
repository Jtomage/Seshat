namespace Seshat.FileRenameEngine.Operations
{
  public class ReplacePhrase : IFileRenameOperation
  {

    public required string OldPhrase { get; set; }

    public required string NewPhrase { get; set; }

    public bool AllMatches { get; set; } = false;

    public bool WholePhrase { get; set; } = true;

    public bool IgnoreCase { get; set; } = false;

    public string Execute(string input)
    {
      int startIndex = -1;

      // custom method as string.Replace replaces all instances
      do
      {
        if (IgnoreCase)
        {
          if (OldPhrase.Equals(NewPhrase, StringComparison.OrdinalIgnoreCase))
            throw new InvalidOperationException("Old Phrase and New Phrase are the same");

          startIndex = input.IndexOf(OldPhrase, StringComparison.OrdinalIgnoreCase);
        }
        else
        {
          if (OldPhrase.Equals(NewPhrase))
            throw new InvalidOperationException("Old Phrase and New Phrase are the same");

          startIndex = input.IndexOf(OldPhrase);
        }

        // not found exit
        if (startIndex == -1)
          break;

        // match pharse, non partial / substring
        if (WholePhrase)
        {
          var endChar = CharAt(input, startIndex + OldPhrase.Length);

          if (endChar != null && endChar != ' ')
            continue;
        }

        // remove phrase
        input = input.Remove(startIndex, OldPhrase.Length);

        // insert phrase
        input = input.Insert(startIndex, NewPhrase);

      } while (AllMatches == true);

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

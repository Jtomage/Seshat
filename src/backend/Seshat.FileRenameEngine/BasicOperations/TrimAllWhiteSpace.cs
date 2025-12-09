using System.Text;

namespace Seshat.FileRenameEngine.Operations
{
  public class TrimAllWhiteSpace : IFileRenameOperation
  {

    public string Execute(string input)
    {
      StringBuilder sb = new StringBuilder();
      char? prevChar = null;

      foreach (char c in input)
      {
        if (c == ' ')
        {
          // skip
          if (prevChar == null || prevChar.Value == ' ')
            continue;
        }

        sb.Append(c);
        prevChar = c;
      }

      // last char check
      if (prevChar == null || prevChar.Value == ' ')
        sb.Remove(sb.Length - 1, 1);

      return sb.ToString();
    }
  }
}

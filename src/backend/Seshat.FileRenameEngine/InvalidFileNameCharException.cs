namespace Seshat.FileRenameEngine;

public class InvalidFileNameCharException : Exception
{
  public char InvalidChar { get; private set; }

  public int Index { get; private set; }

  public InvalidFileNameCharException(char invalidChar, int index)
    : base($"Invalid Character, ${invalidChar} found at {index}")
  {
    InvalidChar = invalidChar;
    Index = index;
  }

}

namespace Seshat.FileRenameEngine.CaseOperations;

public class LowerCase : ACaseOperation
{
  protected override string ConvertCharacter(char c, bool isNewWord, int index)
  {
    return Char.ToLower(c).ToString();
  }
}

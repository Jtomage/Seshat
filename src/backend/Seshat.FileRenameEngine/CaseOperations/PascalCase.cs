namespace Seshat.FileRenameEngine.CaseOperations
{
  public class PascalCase : ACaseOperation
  {

    public PascalCase()
    {
      Seperator = "";
    }

    protected override string ConvertCharacter(char c, bool isNewWord, int index)
    {
      return (isNewWord ? char.ToUpper(c) : char.ToLower(c)).ToString();
    }
  }
}

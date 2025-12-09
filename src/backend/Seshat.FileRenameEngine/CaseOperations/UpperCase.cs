namespace Seshat.FileRenameEngine.CaseOperations
{
  public class UpperCase : ACaseOperation
  {

    protected override string ConvertCharacter(char c, bool isNewWord, int index)
    {
      return Char.ToUpper(c).ToString();
    }
  }
}

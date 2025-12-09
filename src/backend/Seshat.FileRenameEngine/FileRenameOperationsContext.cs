namespace Seshat.FileRenameEngine
{
  public class FileRenameOperationsContext
  {

    public List<IFileRenameOperation> Operations { get; set; } = [];

    public string Execute(string inputFileName)
    {
      var tempStr = inputFileName;

      foreach (var operation in Operations)
      {
        tempStr = operation.Execute(tempStr);
      }

      return tempStr;
    }

  }
}

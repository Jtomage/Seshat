namespace Seshat.FileRenameEngine
{
  public class ValidationResult
  {
    public bool IsValid { get; private set; } = true;

    public List<Exception> Exceptions { get; private set; } = [];

    public void AddException(Exception exception)
    {
      IsValid = false;
      Exceptions.Add(exception);
    }

  }
}

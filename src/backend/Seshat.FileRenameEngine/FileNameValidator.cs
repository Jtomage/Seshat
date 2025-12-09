namespace Seshat.FileRenameEngine;
public class FileNameValidator
{

  public ValidationResult Validate(string fileName)
  {
    var result = new ValidationResult();

    // null empty string check
    if (string.IsNullOrWhiteSpace(fileName))
    {
      result.AddException(new NullReferenceException("FileName is null"));
      return result;
    }

    ValidateFileNameChars(fileName, result);
    ValidatePathChars(fileName, result);

    return result;
  }

  private void ValidateFileNameChars(string fileName, ValidationResult result)
  {
    var invalidChars = Path.GetInvalidFileNameChars();

    // Get All indexes of invalid Characters
    int index = -1;

    do
    {
      index = fileName.IndexOfAny(invalidChars, index + 1);

      if (index != -1)
        result.AddException(new InvalidFileNameCharException(fileName[index], index));


    } while (index > -1);
  }

  private void ValidatePathChars(string path, ValidationResult result)
  {
    var invalidChars = Path.GetInvalidPathChars();

    int index = -1;
    do
    {
      index = path.IndexOfAny(invalidChars, index + 1);

      if (index != -1)
        result.AddException(new InvalidFileNameCharException(path[index], index));


    } while (index > -1);

  }

}
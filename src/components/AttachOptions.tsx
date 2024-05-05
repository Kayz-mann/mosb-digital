import { useFormikContext } from "formik";
import { useCallback, useState } from "react";
import useDrivePicker from "react-google-drive-picker";

const AttachOptions = ({
  attachmentType,
}: {
  attachmentType: "cv" | "letter";
}) => {
  const { setFieldValue } = useFormikContext();
  const [openPicker, authResponse] = useDrivePicker();
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to store the selected file
  const [googleDriveSelected, setGoogleDriveSelected] =
    useState<boolean>(false); // State to track if Google Drive file is selected

  console.log(googleDriveSelected);

  const handleGoogleDriveUpload = () => {
    // openPicker({
    //   clientId: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
    //   developerKey: `key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    //   viewId: "DOCS",
    //   showUploadView: true,
    //   showUploadFolders: true,
    //   supportDrives: true,
    //   multiselect: false, // Allow only one file to be selected
    //   callbackFunction: (data) => {
    //     if (data.action === "cancel") {
    //       console.log("User clicked cancel/close button");
    //     } else if (data.action === "picked") {
    //       const selectedDriveFile = data.docsSelected[0]; // Get the first selected file
    //       setSelectedFile(selectedDriveFile);
    //       setGoogleDriveSelected(true); // Set Google Drive file selected flag
    //       setFieldValue(attachmentType, selectedDriveFile); // Set formik field value
    //     }
    //   },
    // });
  };

  const handleDocumentPicker = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.src = "source";
    fileInput.accept = ".pdf,.doc,.docx,.txt,.rtf";
    fileInput.style.display = "none";
    fileInput.onchange = (event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setSelectedFile(files[0]); // Set the selected file
        setGoogleDriveSelected(false); // Clear Google Drive selected flag
        setFieldValue(attachmentType, files[0]); // Set formik field value
      }
    };
    fileInput.click();
  };

  return (
    <div>
      <div className="flex flex-row gap-4">
        <button
          onClick={handleDocumentPicker}
          className="text-sm text-blue-700 font-bold"
          type="button"
        >
          Attach
        </button>
        <button
          className="text-sm text-blue-700 font-bold"
          type="button"
          onClick={handleGoogleDriveUpload}
        >
          Google Drive
        </button>
      </div>
      {selectedFile && (
        <div>
          {/* Display the name of the selected file */}
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
      <div>
        <p className="text-gray-400 text-xs font-bold">
          (File types: pdf, doc, docx, txt, rtf)
        </p>
      </div>
    </div>
  );
};

export default AttachOptions;

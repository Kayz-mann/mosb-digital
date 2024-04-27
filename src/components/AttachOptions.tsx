import { useFormikContext } from "formik";
import { useCallback } from "react";
import useDrivePicker from "react-google-drive-picker";

const AttachOptions = () => {
  const { setFieldValue } = useFormikContext();
  const [openPicker, authResponse] = useDrivePicker();

  //   const handleDropboxUpload = async () => {
  //     const dropbox = new Dropbox({ accessToken: "YOUR_ACCESS_TOKEN" });
  //     try {
  //       const response = await dropbox.filesListFolder({ path: "" });
  //       console.log(response.result.entries);
  //       // Process the list of files/folders and allow the user to select a file
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const handleGoogleDriveUpload = () => {
    openPicker({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      developerKey: `${process.env.API_KEY}`,
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  const handleManualInput = () => {
    // Implement manual input functionality
  };

  const onSuccess = useCallback((files: any) => {
    // Handle successful file selection
    console.log("Files selected:", files);
  }, []);

  const onCancel = useCallback(() => {
    // Handle cancellation
    console.log("File selection cancelled");
  }, []);

  return (
    <div>
      <button type="button" onClick={handleGoogleDriveUpload}>
        Attach from Google Drive
      </button>
      <button type="button" onClick={handleManualInput}>
        Enter Manually
      </button>
    </div>
  );
};

export default AttachOptions;

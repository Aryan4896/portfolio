function DownloadResumeButton() {
  const handleDownload = () => {
    // Replace 'your_resume.pdf' with the path to your PDF file
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/file/d/1HyXoVm11vpQrNYn-pG9e7Nr8pJrcZcK3/view";
    downloadLink.download = "resume.pdf"; // Set the default filename for the downloaded file
    downloadLink.click();
  };

  return (
    <button
      className="px-6 shadow-black-600 shadow-md py-5 mt-5 bg-gradient-to-t from-green-500 via-green-500 to-green-500 rounded-lg hover:from-green-900 hover:to-black-500"
      onClick={handleDownload}
    >
      Download resume
    </button>
  );
}

export default DownloadResumeButton;

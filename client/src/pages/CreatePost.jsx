import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { useState, useRef, useMemo } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [publishError, setPublishError] = useState(null);
  const [imageFileUrlQuill, setImageFileUrlQuill] = useState(null);
  const quillRef = useRef(null); // For Quill reference
  const navigate = useNavigate();

  // Handle Image Upload for Cloudinary
  const handleUploadImage = async () => {
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    if (!res.ok) {
      setImageUploadError("Image upload failed.");
      return;
    }

    const uploadImageUrl = await res.json();
    setImageFileUrl(uploadImageUrl.url);
    setFormData({ ...formData, image: uploadImageUrl.url });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Post creation failed");
    }
  };

  // Handle Image Insert in Quill Editor
  const handleImageInsert = async () => {
    if (!file) return;
    // Upload the image to Cloudinary
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    if (!res.ok) {
      setImageUploadError("Image upload failed.");
      return;
    }

    const uploadImageUrl = await res.json();
    setImageFileUrlQuill(uploadImageUrl.url);
    console.log("Image URL from Cloudinary:", imageFileUrlQuill);

    // Get the Quill editor instance and current cursor position
    // const quill = quillRef.current.getEditor();
    // const range = quill.getSelection();
    // quill.insert(range.index, "image", imageFileUrlQuill);
    const quill = quillRef.current.getEditor();
    // const range = quill.getSelection();
    quill.insert( "image", imageFileUrlQuill);
  };














  

  // Quill Modules to handle custom image button
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike"],
          ["link", "image"],
          [{ align: [] }],
          [{ color: [] }, { background: [] }],
          ["blockquote", "code-block"],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          ["clean"],
        ],
        handlers: {
          image: handleImageInsert, // Attach custom image handler
        },
      },
    }),
    []
  );

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="tech">Tech</option>
            <option value="history">History</option>
            <option value="motivation">Motivation</option>
          </select>
        </div>

        {/* Image Upload for Post Thumbnail */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>

        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}

        {/* ReactQuill Editor */}
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={formData.content || ""}
          onChange={(value) => setFormData({ ...formData, content: value })}
          modules={modules}
          placeholder="Write something amazing..."
          className="h-72 mb-12"
        />

        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>

        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}

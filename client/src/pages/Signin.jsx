import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signin() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold text-light-text dark:text-dark-text text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-light-primary to-light-link rounded-lg text-white">
              RRR
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is RRR_Blog. You can sign in with your email and password or
            with Google.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Label>Email</Label>
            <TextInput
              id="email"
              type="email"
              placeholder="Your email"
              onChange={handleChange}
            />
            <Label>Password</Label>
            <TextInput
              id="password"
              type="password"
              placeholder="***************"
              onChange={handleChange}
            />
            <Button gradientDuoTone="cyanToBlue" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size="sm"/>
                    <span className="pl-3">Loading...</span>                  
                  </>
                ) :(
                  'Sign In'
                )
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont Have an account?</span>

            <Link to="/sign-up" className="text-sm text-blue-500 ">
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

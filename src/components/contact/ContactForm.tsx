interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const FormField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  required = true,
}: FormFieldProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="font-Instrument text-sm text-gray-300">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full h-12 rounded-md border border-[#505050] bg-transparent px-3 text-sm text-white outline-none transition focus:border-white placeholder:text-gray-600"
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
}

const SelectField = ({
  label,
  name,
  placeholder,
  options,
}: SelectFieldProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="font-Instrument text-sm text-gray-300">
      {label}
    </label>
    <select
      id={name}
      name={name}
      required
      defaultValue=""
      className="w-full h-12 rounded-md border border-[#505050] bg-black px-3 text-sm text-gray-400 outline-none focus:border-white"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="bg-black text-white">
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };



  
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   setLoading(true);

//   const formData = new FormData(e.target);

//   const payload = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     subject: formData.get("subject"),
//     message: formData.get("message"),
//   };

//   try {
//     const response = await fetch(
//       "http://localhost:8000/contact.php",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message);
//     }

//     setStatus(result.message);
//     e.target.reset();

//   } catch (error) {
//     setStatus(error.message || "Something went wrong.");
//   } finally {
//     setLoading(false);
//   }
// };


  return (
    <section className="min-h-screen bg-black px-5 py-16 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-Oswald font-bold tracking-[0.25em]">
            SEND US A MESSAGE
          </p>

          <h2 className="mx-auto max-w-4xl text-2xl font-Oswald font-extrabold uppercase leading-tight sm:text-3xl lg:text-4xl">
            I'll love to hear from you
          </h2>
          <p className="mb-3 text-xs font-Instrument font-bold tracking-[0.25em]">
            Share a little about what you need and my team will direct your
            message appropriately.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Information */}
          <section>
            <h2 className="mb-6 text-sm font-Oswald font-bold uppercase tracking-[0.2em] text-white">
              Send an inquiry
            </h2>

            <div className="grid grid-cols-1 gap-7">
              <FormField label="Full Name" name="fullName" />
              <FormField label="Email Address" name="email" type="email" />
              <SelectField
                label="What is your inquiry about? *"
                name="inquiry"
                placeholder="Select speaking format"
                options={[
                  "Keynote Address",
                  "Panel Discussion",
                  "Fireside Chat",
                  "Workshop",
                  "Virtual Presentation",
                  "Interview",
                ]}
              />
              <FormField label="Phone Number" name="phone" type="tel" />
              <FormField label="Subject" name="organization" />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-gray-300">
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-md border border-[#505050] bg-transparent p-3 text-sm text-white outline-none focus:border-white"
                />
              </div>
            </div>
          </section>

          {/* Confirmation */}
          <div className="flex items-center gap-3 px-2">
            <input
              type="checkbox"
              id="confirmation"
              name="confirmation"
              required
              className="h-4 w-4 cursor-pointer accent-white"
            />

            <label htmlFor="confirmation" className="text-xs text-gray-300">
              I agree that my information may be used to respond to this inquiry
              in accordance with the Privacy Policy.
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-1">
            <button
              type="submit"
              className="w-full max-w-sm rounded-sm bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-gray-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

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

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 text-sm font-Oswald font-bold uppercase tracking-[0.2em] text-white">
    {children}
  </h2>
);

const InviteFormSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <section className="min-h-screen bg-black px-5 py-16 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-Oswald font-bold uppercase tracking-[0.25em]">
            Invite Tunde to Speak
          </p>

          <h1 className="mx-auto max-w-4xl text-2xl font-Oswald font-extrabold uppercase leading-tight sm:text-3xl lg:text-4xl">
            Tell us a little about your event, audience and what you'd like
            Pastor Tunde to contribute
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Information */}
          <section>
            <SectionHeading>Personal Information</SectionHeading>

            <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
              <FormField label="First Name" name="firstName" />
              <FormField label="Last Name" name="lastName" />
              <FormField label="Email Address" name="email" type="email" />
              <FormField label="Phone Number" name="phone" type="tel" />
              <FormField label="Organization" name="organization" />
              <FormField label="Role / Position" name="role" />
            </div>
          </section>

          {/* Event Information */}
          <section>
            <SectionHeading>Event Information</SectionHeading>

            <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
              <FormField label="Event Name" name="eventName" />

              <SelectField
                label="Event Type"
                name="eventType"
                placeholder="Select event type"
                options={[
                  "Conference",
                  "Seminar",
                  "Workshop",
                  "Church Service",
                  "Leadership Summit",
                  "Webinar",
                  "Other",
                ]}
              />

              <FormField label="Event Date" name="eventDate" type="date" />

              <FormField label="Event Time" name="eventTime" type="time" />

              <FormField label="Event Location" name="eventLocation" />

              <SelectField
                label="Expected Audience Size"
                name="audienceSize"
                placeholder="Select size"
                options={[
                  "Below 50",
                  "50 - 100",
                  "100 - 500",
                  "500 - 1,000",
                  "1,000 - 5,000",
                  "Above 5,000",
                ]}
              />
            </div>
          </section>

          {/* Speaking Details */}
          <section>
            <SectionHeading>Speaking Details</SectionHeading>

            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="speakingTopic"
                  className="text-sm text-gray-300"
                >
                  What would you like Pastor Tunde to speak about?
                </label>

                <textarea
                  id="speakingTopic"
                  name="speakingTopic"
                  rows={5}
                  required
                  className="w-full resize-y rounded-md border border-[#505050] bg-transparent p-3 text-sm text-white outline-none focus:border-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
                <SelectField
                  label="Preferred Speaking Format"
                  name="speakingFormat"
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

                <FormField
                  label="Event Website / Social Media"
                  name="eventWebsite"
                  required={false}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="additionalInfo"
                  className="text-sm text-gray-300"
                >
                  Additional Information
                </label>

                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={5}
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
              I confirm that the information provided is accurate.
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-1">
            <button
              type="submit"
              className="w-full max-w-sm rounded-sm bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-gray-200"
            >
              Submit Speaking Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InviteFormSection;

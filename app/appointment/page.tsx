import AppointmentForm from "@/components/shared/AppointmentForm";
import Appointments from "@/components/shared/Appointments";

const Appointment = () => {
  // Appointment logic

  return (
    <section
      className="wrapper appointment-container box-content"
      id="hero"
    >
      <div
        style={{
          backgroundImage:
            "url(https://utfs.io/f/e9343b39-5585-4828-a56e-c5b26f5fbc83-oe69nl.jpg)",
        }}
        className="fixed inset-0 -z-10 min-h-screen bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply"
      />
      <Appointments />
      <AppointmentForm />
    </section>
  );
};

export default Appointment;

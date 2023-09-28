import Layout from "@/components/layout";
import ScheduleDetail from "@/components/layout/scheduleDetails";

const CHURRAS = {
  date: "01/12",
  description: "Niver do Gui",
  totalParticipants: 15,
  totalAmount: 280,
  participants: [
    { name: "Alice", amount: 20, paid: false },
    { name: "Beto", amount: 20, paid: false },
    { name: "Diego B.", amount: 20, paid: false },
    { name: "Diego P.", amount: 10, paid: false },
    { name: "Fernanda", amount: 20, paid: false },
    { name: "Gariel", amount: 20, paid: true },
    { name: "Leonardo", amount: 20, paid: false },
    { name: "Marcus J.", amount: 20, paid: false },
    { name: "Michele", amount: 40, paid: false },
    { name: "Paulo", amount: 10, paid: false },
    { name: "Rafael", amount: 25, paid: false },
    { name: "Ralf", amount: 20, paid: true },
  ],
};

export default function Detail() {
  return (
    <Layout>
      <ScheduleDetail churras={CHURRAS} />
    </Layout>
  );
}

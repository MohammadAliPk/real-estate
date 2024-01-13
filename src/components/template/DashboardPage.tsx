import styles from "@/template/DashboardPage.module.css";

interface DashboardPageProps {
  createdAt: any;
}

function DashboardPage({ createdAt }: DashboardPageProps) {
  const solarDate = new Date(createdAt).toLocaleDateString("fa-IR");
  return (
    <div className={styles.container}>
      <h3>سلام</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{solarDate}</span>
      </div>
    </div>
  );
}

export default DashboardPage;

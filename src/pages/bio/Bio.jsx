import AboutHer from "@/components/biography/aboutHer";
import Pictures from "@/components/biography/pictures";
import MainLayout from "@/layouts/MainLayout";

const Bio = () => {
  return (
    <MainLayout>
      <AboutHer />
      <Pictures />
    </MainLayout>
  );
};

export default Bio;

import { NextPage } from "next/types";
import { ProjectList } from "../../components/ProjectsList";
import { useStore } from "../../lib/store";

const ProjectsPage: NextPage = () => {
  const { projects } = useStore();

  return (
    <div className="bg-[#f5f5f5]">
      <section className="flex justify-center max-w-6xl bg-white rounded-md shadow-md">
        <div className="text-xl font-bold my-8 mx-4">Open Projects</div>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
};

export default ProjectsPage;

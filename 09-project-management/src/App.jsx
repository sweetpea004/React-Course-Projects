import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: Math.random()
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    });
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((proj) => proj.id !== prevState.selectedProject)
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProject)

  let content = <SelectedProject 
    project={selectedProject} 
    tasks={projectState.tasks}
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask}
    onDelete={handleDeleteProject}
  />;

  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;

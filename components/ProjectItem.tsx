import { Project } from "../lib/types";

/**
 * Component properties for a ProjectItem.
 */
interface ProjectItemProps extends Project {}

/**
 * A list item that displays basic project info.
 */
export function ProjectItem({}: ProjectItemProps) {
  return (
    <div className="flex">
      <div className="p-4">{/* Checkbox */}</div>
      <div></div>
    </div>
  );
}
